import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observer, Subscription, PartialObserver } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
/**
 * Kopmonente für die Anmeldung des Benutzers
 */
export class LoginComponent implements OnInit, OnDestroy {

  public username = '';
  public password = '';
  public isWaiting = false;

  private subscriptions: Subscription[] = [];

  constructor(
    private userservice: UserService,
    private menuService: MenuService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    const observer: Observer<boolean> = {
      next: () => this.redirect(),
      error: () => { return; },
      complete: () => { },
    };
    this.subscriptions.push(this.userservice.sessionRestore.subscribe(observer));
    this.menuService.showMenubar();
  }

  public ngOnDestroy(): void {
    // Beende die momentanen Subscriptions
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  /**
   * Anmeldung anhand der übergebenen Daten für Name und Passwort
   */
  public login(pwEncoded: boolean, username?: string, password?: string) {
    this.isWaiting = true;

    const observer: PartialObserver<boolean> = {
      next: (isValid) => {
        if (isValid) {
          this.loginSuccess();
        } else {
          this.loginError();
        }
      },
      error: () => this.loginError(),
      complete: () => this.isWaiting = false,
    };
    this.userservice.login(username || this.username, password || this.password, pwEncoded)
      .subscribe(observer);
  }

  /**
   * Anmeldung mit den öffentlichen Demo Account
   */
  public loginAsPublic() {
    this.login(true, 'public', 'ad08d30f519ab825aa2b884625c44377');
  }

  /**
   * Anmeldung war erfolgreich
   */
  private loginSuccess() {
    this.isWaiting = false;
    this.redirect();
  }

  /**
   * Anmeldung ist fehlgeschlagen
   */
  private loginError() {
    this.menuService.showMessage({ level: 'error', text: 'MESSAGES.LOGIN-ERROR' });
    this.isWaiting = false;
  }

  /**
   * Weiterleitung zur Ursprünglich aufgerufenen URL (Defaul: Dashboard)
   */
  private async redirect() {
    const success = await this.router.navigateByUrl(this.userservice.redirectUrlString).catch(() => false);
    if (!success) {
      this.router.navigate(['/dashboard']);
    }
  }
}
