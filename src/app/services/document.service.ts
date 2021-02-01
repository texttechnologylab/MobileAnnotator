import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Observer, Observable, PartialObserver, Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { DataService } from './data.service';
import { ITool, ICasView, ICas, IChangeCas, ICasViewExtended, IDocument } from './interfaces';

@Injectable({
  providedIn: 'root'
})
/**
 * Service für die Verwaltung von Dokumenten spezifischen Daten
 */
export class DocumentService {

  private readonly backendUrl = 'https://resources.hucompute.org';
  private documentCache = new Map<string, IDocument[]>();
  private loadedCAS: ICas;
  private loadedView: { casId: string, view: string };
  private loadedTool: ITool;
  private expectedCAS: string;
  private expectedView: string;
  private expectedTool: string;
  private casViews: ICasViewExtended[];

  public casOpened = new Subject<ICas>();
  public viewsLoaded = new Subject<{ casId: string, views: ICasViewExtended[] }>();
  public viewOpened = new Subject<{ casId: string, view: string }>();
  public toolOpened = new Subject<ITool>();
  public casChanged = new Subject<void>();

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private websocketService: WebsocketService,
    private dataService: DataService,
  ) {
    // Reset im Falle eines Logout
    const logoutObserver: PartialObserver<void> = {
      next: () => {
        this.loadedCAS = undefined;
        this.loadedView = undefined;
        this.casViews = [];
        this.loadedTool = undefined;
        this.documentCache = new Map<string, IDocument[]>();
        this.expectedCAS = undefined;
        this.expectedView = undefined;
        this.expectedTool = undefined;
      },
    };
    this.userService.logoutEvent.subscribe(logoutObserver);

    // Teilreset, wenn ein neues Dokument geöffnet wurde
    const casObserver: PartialObserver<ICas> = {
      next: (data) => {
        if (this.expectedCAS === data.casId) {
          this.loadedCAS = data;
          this.loadedView = undefined;
          this.loadedTool = undefined;
          this.expectedCAS = undefined;
          this.expectedView = undefined;
          this.expectedTool = undefined;
          this.loadViews(data.casId, data.views || []);
          this.casOpened.next(data);
        }
      },
    };
    this.dataService.casOpened.subscribe(casObserver);

    // Update des geladenen Dokumentes bei Änderungen
    const updateObserver: PartialObserver<IChangeCas> = {
      next: (data) => {
        if (this.loadedTool && this.loadedTool.casId === data.casId) {
          for (const [type, elements] of Object.entries(data.updates)) {
            if (!this.loadedTool.toolElements[type]) {
              this.loadedTool.toolElements[type] = {};
            }
            for (const [addr, element] of Object.entries(elements)) {
              this.loadedTool.toolElements[type][addr] = element;
            }
          }
          this.casChanged.next();
        }
      }
    };
    this.dataService.casChanged.subscribe(updateObserver);

    // Reagiere auf Änderungen der geladenen View
    const viewObserver: PartialObserver<{ casId: string, view: string }> = {
      next: (res) => {
        if (this.loadedCAS && res.casId === this.loadedCAS.casId && res.view === this.expectedView) {
          this.loadedView = res;
          this.expectedView = undefined;
          this.viewOpened.next(res);
        }
      }
    };
    this.dataService.viewOpened.subscribe(viewObserver);

    // Reagiere auf Änderungen des geladenen Tools
    const toolObserver: PartialObserver<ITool> = {
      next: (res) => {
        if (this.loadedCAS && res.casId === this.loadedCAS.casId && this.loadedView
          && res.currentView === this.loadedView.view && res.toolName === this.expectedTool) {
          this.loadedTool = res;
          this.expectedTool = undefined;
          this.toolOpened.next(res);
        }
      }
    };
    this.dataService.toolOpened.subscribe(toolObserver);
  }

  /**
   * Lädt die Dokumente und Ordner im Repository des Anwenders, welche unter dem angegebenen root liegen
   */
  public getDocuments(root: string, force: boolean = false): Observable<IDocument[]> {
    return new Observable<IDocument[]>((observer) => {
      const observ: Observer<{ success: boolean, data: IDocument[] }> = {
        next: (result) => {
          if (result.success) {
            this.documentCache.set(root, result.data);
            observer.next(result.data);
          } else {
            observer.next([]);
          }
        },
        error: (err) => observer.error(err),
        complete: () => observer.complete(),
      };

      if (!force && this.documentCache.has(root)) {
        observer.next(this.documentCache.get(root));
        return;
      }

      this.http.get(this.backendUrl + '/repositories', {
        params: {
          documents: 'true',
          recursive: 'false',
          node: root,
          session: this.userService.user.session,
        },
        responseType: 'json'
      }).subscribe(observ);
    });
  }

  /**
   * Öffnet das Dokument mit der übergebenen ID
   */
  public openCAS(id: string | number): void {
    console.log('start openCAS');
    const casId = `${id}`;
    if (this.loadedCAS != null && this.loadedCAS.casId === casId) {
      this.casOpened.next(this.loadedCAS);
      return;
    }
    this.expectedCAS = casId;
    this.websocketService.send({ cmd: 'open_cas', data: { casId } });
    console.log('end openCAS');
  }

  /**
   * Öffnet die View, welche per Dokumenten ID und View ID angegeben wurde
   */
  public openView(casId: string, view: string) {
    if (!this.loadedCAS || this.loadedCAS.casId !== casId) {
      return;
    }
    this.expectedView = view;
    this.websocketService.send({
      cmd: 'open_view',
      data: {
        casId,
        view,
      }
    });
  }

  /**
   * Öffnet Tool mit der übergebenen ID für die angegebene Dokumenten und View ID
   */
  public openTool(casId: string, viewId: string, toolId: string) {
    if (!this.loadedCAS || this.loadedCAS.casId !== casId || !this.loadedView || this.loadedView.view !== viewId) {
      return;
    }
    this.expectedTool = toolId;
    this.websocketService.send({
      cmd: 'open_tool',
      data: {
        casId,
        toolName: toolId,
        view: viewId,
      }
    });
  }

  /**
   * Sendet eine Speicheranfrage an das Backend
   */
  public saveCas(casId: string): void {
    this.websocketService.send({
      cmd: 'save_cas',
      data: {
        casId,
      }
    });
  }

  /**
   * Das aktuell geladene Dokument
   */
  public get currentCAS() {
    return this.loadedCAS;
  }

  /**
   * Die aktuell zur Verfügung stehenden Views
   */
  public get loadedViews() {
    return this.casViews;
  }

  /**
   * Der aktuell gewählte View
   */
  public get currentView() {
    return this.loadedView;
  }

  /**
   * Die aktuell geladenen Werkzeugdaten
   */
  public get currentTool() {
    return this.loadedTool;
  }

  /**
   * Lade für das per ID angegebene Dokument alle Views, welche dem Anwender zur Verfügung stehen
   */
  private loadViews(casId: string, views: ICasView[]) {
    const loadedViews: ICasViewExtended[] = [];

    for (const view of views) {
      if (!view.view) {
        continue;
      }
      let label = view.view;

      if (view.view.startsWith('http')) {
        label = 'CONTENT-DOCUMENT.VIEW-LOADING';
        const observer: PartialObserver<{ success: boolean, result: { description: string } }> = {
          next: (data) => {
            if (data.success) {
              loadedViews.push(Object.assign(view, { id: loadedViews.length, label: data.result.description }));
            }
          }
        };
        this.http.get(view.view, {
          params: {
            session: this.userService.user.session,
          },
          responseType: 'json'
        }).subscribe(observer);
      } else {
        loadedViews.push(Object.assign(view, { id: loadedViews.length, label }));
      }
    }
    this.casViews = loadedViews;
    this.viewsLoaded.next({ casId, views: loadedViews });
  }
}
