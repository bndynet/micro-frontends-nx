import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthActionTypes, AuthService, login, logout } from '@mfe/data';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mfe-nx-welcome',
  template: `<div class="form">
      <h1 *ngIf="userInfo$ | async as userInfo; else logIn">
        Hi {{ userInfo.username }}!
        <button (click)="logout()">Log out</button>
      </h1>
    </div>
    <ng-template #logIn>
      <input [(ngModel)]="username" placeholder="User name" />
      <button (click)="login()">Log in</button>
    </ng-template>`,
  styleUrls: ['./nx-welcome.component.scss'],
})
export class NxWelcomeComponent implements OnInit, OnDestroy {
  public username: string = '';
  public userInfo$ = this.authService.userInfo$;

  private destoyed$ = new Subject<boolean>();

  constructor(
    private store: Store,
    private router: Router,
    private actions: Actions,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const returnUrl =
      this.activatedRoute.snapshot.queryParamMap.get('returnUrl') || '/';

    this.actions
      .pipe(ofType(AuthActionTypes.LoginSuccess), takeUntil(this.destoyed$))
      .subscribe(() => {
        this.router.navigateByUrl(returnUrl);
      });
    
    this.actions
      .pipe(ofType(AuthActionTypes.Logout), takeUntil(this.destoyed$))
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }

  ngOnDestroy(): void {
    this.destoyed$.next(true);
    this.destoyed$.complete();
  }

  public login(): void {
    this.store.dispatch(login({ username: this.username, password: 'aaaa' }));
  }

  public logout(): void {
    this.store.dispatch(logout());
  }
}
