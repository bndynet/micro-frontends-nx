import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@mfe/data';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'mfe-nx-welcome',
  template: `<div *ngIf="userInfo$ | async as userInfo">
    <mfe-welcome [title]="'Hi ' + userInfo.username" bg="#086978"></mfe-welcome>
  </div>`,
})
export class NxWelcomeComponent implements OnInit {
  public isLoggedIn$ = this.authService.isUserLoggedIn$;
  public userInfo$ = this.authService.userInfo$;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe((loggedIn: boolean) => {
        // Queue the navigation after initialNavigation blocking is completed
        setTimeout(() => {
          if (!loggedIn) {
            this.router.navigate(['login'], {
              queryParams: { back: this.router.url },
            });
          }
        });
      });
  }
}
