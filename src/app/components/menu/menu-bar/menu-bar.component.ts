import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';
import { PartialObserver, Subscription } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
/**
 * Komponente für die Menüleiste der Anwendung
 */
export class MenuBarComponent implements OnInit, OnDestroy {

  public languages: Array<{ label: string, value: string, icon: string, short: string }> = [
    { label: 'English', value: 'en', icon: 'en32square.png', short: 'EN' },
    { label: 'Deutsch', value: 'de', icon: 'de32square.png', short: 'DE' },
  ];
  public selectedValue: { value: string, short: string };
  public isVisible = true;

  private subscriptions: Subscription[] = [];

  constructor(
    public translate: TranslateService,
    public router: Router,
    private cookieService: CookieService,
    private userService: UserService,
    private menuService: MenuService,
  ) { }

  public ngOnInit(): void {
    // Übernimm die zuletzt gewählte Sprache aus den Cookies
    const useLang = this.cookieService.get('language') || 'en';
    [this.selectedValue] = this.languages.filter(({ value }) => value === useLang);
    this.translate.use(useLang);

    const observer: PartialObserver<boolean> = {
      next: (isVisible) => this.isVisible = isVisible,
    };
    this.subscriptions.push(this.menuService.menubarVisibilitySubject.subscribe(observer));
  }

  public ngOnDestroy(): void {
    // Beende die momentanen Subscriptions
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  /**
   * Ändere die aktuell gewählte Sprache
   */
  public changeLanguage(lan: string): void {
    if (this.translate.currentLang !== lan) {
      this.translate.use(lan);
      this.cookieService.set('language', lan);
    }
  }

  // Navigiere zur "Home" Ansicht
  public navigateDefault(): void {
    this.router.navigate(['']);
  }

  // Navigiere zur Dokumenten Ansicht
  public navigateDocument(): void {
    this.router.navigate(['document']);
  }

  // Abmeldung des Benutzeres
  public logout(): void {
    this.userService.logout();
  }

  // Ob der Benutzer über eine gültige Anmeldung verfügt
  public get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }
}
