import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';
import { PartialObserver, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MenuService } from 'src/app/services/menu.service';
import { ToolService } from 'src/app/services/tool.service';
import { IImplementedTool, ICas, ICasViewExtended } from 'src/app/services/interfaces';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
/**
 * Komponente für die "Dokumenten Ansicht"
 */
export class DocumentComponent implements OnInit, OnDestroy {

  public isWaiting = false;
  public currentView: ICasViewExtended;

  private loadedViews: Array<ICasViewExtended> = [];
  private subscriptions: Subscription[] = [];
  private document: ICas | undefined;
  private viewSubscription: Subscription;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private documentService: DocumentService,
    private menuService: MenuService,
    public toolService: ToolService,
  ) { }

  public ngOnInit(): void {
    this.updateData(this.documentService.currentCAS);
    this.loadedViews = this.documentService.loadedViews;
    [this.currentView] = this.documentService.currentView && this.loadedViews ?
      this.loadedViews.filter(({ view }) => view === this.documentService.currentView.view) : [undefined];
    const viewsObserver: PartialObserver<{ casId: string, views: ICasViewExtended[] }> = {
      next: (data) => {
        if (data && this.document && data.casId === this.document.casId) {
          this.loadedViews = data.views;
        }
      },
    };
    this.subscriptions.push(this.documentService.viewsLoaded.subscribe(viewsObserver));

    this.subscribeView();
    let viewId: string;

    // Auf Änderungen bezüglich des geladenen Cas reagieren
    const casObserver: PartialObserver<ICas> = {
      next: (data) => {
        if (this.document == null || this.document.casId !== data.casId) {
          this.updateData(data);
          this.loadedViews = this.documentService.loadedViews;
        }

        // this.route.queryParamMap.subscribe((params) => {
        //   const view = params.get('view');
        if (viewId) {
          this.documentService.openView(data.casId, viewId);
        }
        // });
      },
    };
    this.subscriptions.push(this.documentService.casOpened.subscribe(casObserver));

    this.route.queryParamMap.subscribe((params) => {
      const id = params.get('cas');
      viewId = params.get('view');
      if (id && (!this.documentService.currentCAS || id !== this.documentService.currentCAS.casId)) {
        this.isWaiting = true;
        this.documentService.openCAS(id);
      }
    });
    this.menuService.showMenubar();
  }

  public ngOnDestroy(): void {
    // Beende die momentanen Subscriptions
    this.viewSubscription = undefined;
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  /**
   * Navigiere zur Dokumenten Selektions Ansicht
   */
  public selectDocument(): void {
    this.router.navigate(['/selectdocument']);
  }

  public get cas(): ICas {
    return this.document;
  }

  public get views(): ICasViewExtended[] {
    return this.loadedViews;
  }

  /**
   * Navigiert zur Ansicht des ausgewählten Werkzeuges
   */
  public async openTool(entry: IImplementedTool): Promise<void> {
    if (!this.document || !this.currentView) {
      return;
    }

    // Workaround gegen unerwünschte Nebenwirkungen beim laden der Werkzeug Daten
    this.unsubscribeView();
    const success = await this.router.navigate(entry.url, { queryParams: { cas: this.document.casId, view: this.currentView.view } });
    if (!success) {
      this.subscribeView();
    }
  }

  /**
   * Setzt eine neue ausgewählte View
   */
  public viewSelected(event: { value: ICasViewExtended }): void {
    const currView = this.documentService.currentView;
    if (!currView || currView.view !== event.value.view) {
      this.isWaiting = true;
      this.documentService.openView(this.cas.casId, event.value.view);
    }
  }

  private subscribeView(): void {
    if (this.viewSubscription) {
      return;
    }

    // oberserver um auf Änderungen der geladenen View zu reagieren
    const observer: PartialObserver<{ casId: string, view: string }> = {
      next: (data) => {
        this.isWaiting = false;
        [this.currentView] = this.loadedViews.filter(({ view }) => view === data.view);
        // View als Query Parameter mit in den URL der aktuellen Ansicht
        this.router.navigate(['/document'], { queryParams: { cas: this.document.casId, view: data.view } });
      },
    };
    this.viewSubscription = this.documentService.viewOpened.subscribe(observer);
    this.subscriptions.push(this.viewSubscription);
  }

  private unsubscribeView(): void {
    if (this.viewSubscription) {
      this.viewSubscription.unsubscribe();
    }
  }

  private updateData(data: ICas | undefined) {
    this.document = data;
    this.isWaiting = false;
  }
}
