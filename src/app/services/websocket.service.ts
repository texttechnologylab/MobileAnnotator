import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { MenuService } from './menu.service';
import { IWSCommunicationObject } from './interfaces';
import {uima_url} from '../../url.config'

enum eWSState {
  open,
  pending,
  closed,
}

@Injectable({
  providedIn: 'root'
})
/**
 * Service für die grundlegende Kommunikation über Websocket
 */
export class WebsocketService {
  // wss://m6ytspuafdw.hopto.org/uima/
  // is an nginx proxy which parses everything through to ws://textannotator.texttechnologylab.org/uima
  // this is neccesary because if the url is secure (https://) we can't use ws://
  private url = location.protocol === "https:" ? uima_url : 'ws://textannotator.texttechnologylab.org/uima';
  private websocket: WebSocketSubject<IWSCommunicationObject>;
  private subject = new Subject<IWSCommunicationObject>();

  private queue: IWSCommunicationObject[] = [];
  private queueWorking = false;
  private currentState: eWSState = eWSState.closed;

  constructor(
    public menuService: MenuService,
  ) {
    this.connect();
  }

  /**
   * Stelle eine Verbindung über Websocket her
   */
  public connect(): Subject<IWSCommunicationObject> {
    if (this.websocket == null) {
      this.connectToWebsocket();
    }

    return this.subject;
  }

  /**
   * Schicke Daten zum Backend
   */
  public send(data: IWSCommunicationObject): void {
    if (this.currentState !== eWSState.open) {
      this.queue.push(data);
      this.connectToWebsocket();
      return;
    }
    if (this.websocket) {
      this.websocket.next(data);
    }
  }

  /**
   * Arbeite die aufgestauten Nachrichten ab und sende diese zum Backend
   */
  public workQueue() {
    this.queueWorking = true;

    while (this.queue.length) {
      const data = this.queue.shift();
      this.send(data);
    }
    this.queueWorking = false;
  }

  private connectToWebsocket() {
    if (this.currentState !== eWSState.closed) {
      return;
    }
    this.currentState = eWSState.pending;
    this.menuService.showMessage({ level: 'info', text: 'MESSAGES.WEBSOCKET-PENDING' });
    this.websocket = webSocket({
      url: this.url,
      openObserver: {
        next: () => {
          this.websocketOpened();
        }
      },
      closeObserver: {
        next: () => {
          this.menuService.showMessage({ level: 'error', text: 'MESSAGES.WEBSOCKET-CLOSED' });
          this.currentState = eWSState.closed;
        }
      }
    });
    this.websocket.subscribe((data) => this.subject.next(data));
  }

  private websocketOpened() {
    this.menuService.showMessage({ text: 'MESSAGES.WEBSOCKET-OPEN', level: 'info' });
    const [session] = this.queue.filter(({ cmd }) => cmd === 'session');
    this.currentState = eWSState.open;
    if (session) {
      this.send(session);
      this.queue = this.queue.filter(({ cmd }) => cmd !== 'session');
    }
  }
}
