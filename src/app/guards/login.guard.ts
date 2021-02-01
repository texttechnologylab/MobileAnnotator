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
 * Prüft ob der Anwender angemeldet ist und verweigert ihm in dem Fall den Zugriff auf die Login Ansicht
 */
export class LoginGuard implements CanActivate, CanActivateChild {

  constructor(
    private userservice: UserService,
    private router: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userservice.isLoggedIn) {
      // Benutzer ist eingeloggt -> Verhindere das aufrufen der Login Ansicht
      const redirectUrl = this.userservice.redirectUrlString;
      if (redirectUrl) {
        // Navigiere zur vorher gespeicherten URL
        this.router.navigateByUrl(redirectUrl);
      } else {
        // Navigiere zum Dashboard des Benutzers
        this.router.navigate(['/dashboard']);
      }
      return false;
    }

    return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }
}
