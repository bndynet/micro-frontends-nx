import { Component, OnInit } from '@angular/core';
import { AuthService } from '@mfe/data';

@Component({
  selector: 'mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'host';
  public userInfo$ = this.authService.userInfo$;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userInfo$.subscribe((u) => {
      if (u) {
        this.title = u?.username;
      }
    });
  }

  public logout(): void {
    this.authService.logout();
  }
}
