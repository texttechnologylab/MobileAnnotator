import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Prüft ob der Anwender eingeloggt ist und verweigert ggf. Zugriff auf Ansichten der Anwendung
 */
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private userservice: UserService,
    private router: Router,
  ) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userservice.isLoggedIn) {
      // Benutzer ist bereits eingeloggt
      return true;
    }
    // Benutzer ist nicht eingelogt

    // Speichern des eigentlich aufgerufenen URL für spätere Weiterleitung nach erfolgreichem Login
    this.userservice.redirectUrlString = state.url;
    // Navigiere zur Login Ansicht
    this.router.navigate(['/login']);
    return false;
  }

  public canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }

}
