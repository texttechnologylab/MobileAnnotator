import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import * as md5 from 'ts-md5';
import { WebsocketService } from './websocket.service';
import { Observable, Subject, PartialObserver } from 'rxjs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuService } from './menu.service';
import { IUserData } from './interfaces';

@Injectable({
  providedIn: 'root'
})
/**
 * Service für die Verwaltung von Nutzerdaten
 */
export class UserService {

  private backendUrl = 'https://authority.hucompute.org';
  private userData: IUserData | undefined = undefined;
  private redirectUrl: string | undefined = undefined;
  private readonly sessionCookieName = 'session';

  public sessionRestore = new Subject<boolean>();
  public logoutEvent = new Subject<void>();

  constructor(
    public translate: TranslateService,
    private http: HttpClient,
    private router: Router,
    private menuService: MenuService,
    private websocketService: WebsocketService,
    private cookieService: CookieService,
  ) { }

  /**
   * Sende eine Authentifizierungs Anfrage an das Backend
   */
  public login(username: string, password: string, pwEncoded: boolean = false): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.http.post(this.backendUrl + '/login', undefined, {
        params: {
          username,
          password: pwEncoded ? password : md5.Md5.hashStr(password).toString(),
        },
        responseType: 'json',
      }).subscribe((data: { success: boolean, result: IUserData }) => {
        if (data.success) {
          this.loginSuccess(data.result, false);
        }
        observer.next(data.success);
      },
        (error: unknown) => {
          observer.error(error);
        });
    });
  }

  /**
   * Abmeldung des aktuellen Benutzers
   */
  public logout(): void {
    this.http.post(this.backendUrl + '/logout', undefined, {
      params: {
        session: this.userData.session,
      },
      responseType: 'json',
    });
    this.userData = undefined;
    this.cookieService.delete(this.sessionCookieName);
    this.router.navigate(['/login']);
    this.logoutEvent.next();
  }

  /**
   * Gibt an ob ein Benutzer aktuell angemeldet ist
   */
  public get isLoggedIn(): boolean {
    return this.userData && this.userData.session != null;
  }

  /**
   * Versucht eine Anmeldung über das in den Cookies gespeicherte Session Token
   */
  public tryLogginWithCookie(): void {
    const cookieData = this.cookieService.get(this.sessionCookieName);
    if (cookieData) {
      const loginObserver: PartialObserver<{ success: boolean, result: IUserData }> = {
        next: (data) => {
          if (data.success) {
            this.loginSuccess(data.result, true);
          } else {
            this.cookieService.delete(this.sessionCookieName);
          }
        },
        error: () => this.loginFailed(),
      };
      this.http.get(this.backendUrl + '/checklogin', {
        params: {
          session: cookieData,
        },
        responseType: 'json',
      }).subscribe(loginObserver);
    }
  }

  /**
   * Lädt Informationen über den angegebenen Benutzer
   */
  public getUserInfo(userUrl: string): Observable<{ result: { description: string } }> {
    return this.http.get(userUrl, {
      params: {
        session: this.userData.session,
      },
      responseType: 'json',
    }) as Observable<{ result: { description: string } }>;
  }

  public get user(): IUserData {
    return this.userData;
  }

  public get redirectUrlString(): string {
    const retval = this.redirectUrl;
    this.redirectUrl = undefined;
    return retval || '';
  }

  public set redirectUrlString(value: string) {
    this.redirectUrl = value;
  }

  /**
   * Blende eine Meldung über die fehlgeschlagene Anmeldung ein
   */
  private loginFailed(): void {
    this.menuService.showMessage({ level: 'error', text: 'MESSAGES.SERVER-ERROR' });
  }

  /**
   * Anmeldung war erfolgreich
   */
  private loginSuccess(data: IUserData, restored = false): void {
    this.userData = data;
    this.websocketService.send({ cmd: 'session', data: { session: this.userData.session } });
    this.menuService.showMessage({ level: 'success', text: 'MESSAGES.LOGIN-SUCCESS' });

    if (restored) {
      this.sessionRestore.next(true);
    } else {
      this.cookieService.set(this.sessionCookieName, this.userData.session,null,null,null,true);
    }
  }
}
