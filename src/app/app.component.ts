import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'textanno';

  public isToolbarVisible = true;

  constructor(
    private userService: UserService,
  ) { }

  public ngOnInit(): void {
    this.userService.tryLogginWithCookie();
  }
}
