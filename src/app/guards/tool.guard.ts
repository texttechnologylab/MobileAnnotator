import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadProgressComponent } from '../components/menu/load-progress/load-progress.component';
import { ToolService } from '../services/tool.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Prüft ob ein Anwender angemeldet ist und stellt sicher, dass die für das Werkzeug nötigen Daten geladen wurden
 */
export class ToolGuard implements CanActivate {

  private loadProgress: MatDialogRef<LoadProgressComponent, boolean>;

  constructor(
    private toolservice: ToolService,
    private userservice: UserService,
    private router: Router,
    public dialog: MatDialog,
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Prüfe ob der Benutzer eingeloggt ist und leite notfalls zur Login Ansicht weiter
    if (!this.userservice.isLoggedIn) {
      this.userservice.redirectUrlString = state.url;
      this.router.navigate(['/login']);
      return false;
    }

    // Prüfe ob für den angegebenen URL ein gültiges Werkzeug existiert
    const [entry] = this.toolservice.toolSelection.filter(({ url }) => url[0] === '/' + next.routeConfig.path);
    if (!entry || !entry.id) {
      return false;
    }
    if (this.loadProgress) {
      this.loadProgress.close();
    }

    // Starte das LoadProgress Popup um die für das Werkzeug nötigen Daten zu laden
    this.loadProgress = this.dialog.open(LoadProgressComponent, {
      data: {
        casId: next.queryParamMap.get('cas'),
        view: next.queryParamMap.get('view'),
        toolId: entry.id,
      }
    });

    return this.loadProgress.afterClosed();
  }

}
