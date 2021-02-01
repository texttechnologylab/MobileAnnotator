import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../components/menu/snack-bar/snack-bar.component';
import { Subject } from 'rxjs';
import { IMessage } from './interfaces';

@Injectable({
  providedIn: 'root'
})
/**
 * Service für allgemeine Funktionen des Menüs
 */
export class MenuService {

  private menubarVisibilityChange = new Subject<boolean>();

  constructor(
    private snackbar: MatSnackBar,
  ) { }

  /**
   * Blende die allgemeine Menüleiste ein
   */
  public showMenubar(): void {
    this.menubarVisibilityChange.next(true);
  }

  /**
   * Blende die allgemeine Menüleiste aus
   */
  public hideMenubar() {
    this.menubarVisibilityChange.next(false);
  }

  public get menubarVisibilitySubject() {
    return this.menubarVisibilityChange;
  }

  /**
   * Zeige dem Anwender die übergebene Nachricht an
   */
  public showMessage(message: IMessage) {
    this.snackbar.openFromComponent(SnackBarComponent, {
      duration: 3000,
      data: message
    });
  }
}
