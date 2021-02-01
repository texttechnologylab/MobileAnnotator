import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Subject } from 'rxjs';
import { MenuService } from './menu.service';
import { ICas, ITool, IChangeCas, IWSCommunicationObject, ICasView } from './interfaces';

@Injectable({
  providedIn: 'root'
})
/**
 * Service für die Vorverarbeitung der eingehenden WebSocket Daten
 */
export class DataService {

  private sessionSubject = new Subject<boolean>();
  private openCasSubject = new Subject<ICas>();
  private openViewSubject = new Subject<{ casId: string, view: string }>();
  private openToolSubject = new Subject<ITool>();
  private changeCasSubject = new Subject<IChangeCas>();

  constructor(
    private websocketService: WebsocketService,
    private menuService: MenuService,
  ) {
    this.websocketService.connect().subscribe({
      next: (data: IWSCommunicationObject) => this.onMessage(data),
      error: (err: unknown) => this.onError(err),
    });
  }

  /**
   * Subject um auf das Öffnen eines Dokumentes zu hören
   */
  public get casOpened() {
    return this.openCasSubject;
  }

  /**
   * Subject um auf das Öffnen einer View zu hören
   */
  public get viewOpened() {
    return this.openViewSubject;
  }

  /**
   * Subject um auf das Öffnen eines Tools zu hören
   */
  public get toolOpened() {
    return this.openToolSubject;
  }

  /**
   * Subject um auf Änderungen eines Dokumentes zu hören
   */
  public get casChanged() {
    return this.changeCasSubject;
  }

  /**
   * Verarbeite eine eingehende Nachricht und leite sie über das entsprechende Subject weiter
   */
  private onMessage(msg: IWSCommunicationObject) {
    if (msg && msg.cmd) {

      switch (msg.cmd) {
        case 'session':
          this.websocketService.workQueue();
          this.sessionSubject.next(true);
          break;

        case 'open_cas':
          this.openCasSubject.next(msg.data as ICas);
          break;

        case 'change_cas':
          this.changeCasSubject.next(msg.data as IChangeCas);
          break;

        case 'open_view':
          this.openViewSubject.next(msg.data as { casId: string, view: string });
          break;

        case 'open_tool':
          this.openToolSubject.next(msg.data as ITool);
          break;

        case 'msg':
          this.showMessage(msg.data as { text: string });
          break;
      }
    }
  }

  private onError(err: unknown) {
    console.warn('onError', err);
  }

  /**
   * Nachrichten des WebSocket dem Benutzer anzeigen. Muss in Zukunft ggf. noch erweitert werden
   */
  private showMessage(data: { text: string }) {
    switch (data.text) {
      case 'Document has been successfully saved!':
        this.menuService.showMessage({ level: 'success', text: 'MESSAGES.CAS-SAVED' });
    }
  }
}
