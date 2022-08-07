import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Auth0Service,
  AuthActionTypes,
  AuthService,
  AUTH_SERVICE,
  getAuthState,
  KEY_BACK_URL,
  login,
  LoginInfo,
  logout,
  UserInfo,
} from '@mfe/data';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { first, map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mfe-nx-welcome',
  template: `<div class="form">
      <ng-container *ngIf="user$ | async as user; else logIn">
        <h1>
          Hi {{ user.name }}!
          <button (click)="logout()">Log out</button>
        </h1>
        <pre>{{ user | json }}</pre>
      </ng-container>
    </div>
    <ng-template #logIn>
      <input
        [(ngModel)]="username"
        placeholder="User name"
        *ngIf="!enableOAuth"
      />
      <input [(ngModel)]="password" type="password" *ngIf="!enableOAuth" />
      <button (click)="login()">
        {{ enableOAuth ? 'Log in with Auth0' : 'Log in' }}
      </button>
    </ng-template>`,
  styleUrls: ['./nx-welcome.component.scss'],
})
export class NxWelcomeComponent implements OnInit, OnDestroy {
  public username: string = '';
  public password: string = '';
  public enableOAuth = true;

  public user$ = this.store
    .select(getAuthState)
    .pipe(map((state) => state.user));
  public isAuthenticated$ = this.auth.isAuthenticated$;

  private destroyed$ = new Subject<boolean>();
  private backUrl?: string | null;

  constructor(
    private store: Store,
    private router: Router,
    private actions$: Actions,
    private activatedRoute: ActivatedRoute,
    @Inject(AUTH_SERVICE) private auth: AuthService<UserInfo>,
  ) {
    this.enableOAuth = this.auth.getId() === Auth0Service.id; //  instanceof Auth0Service does not work here.
  }

  ngOnInit(): void {
    this.backUrl = this.activatedRoute.snapshot.queryParamMap.get(KEY_BACK_URL);

    this.actions$
      .pipe(ofType(AuthActionTypes.LoginSuccess), takeUntil(this.destroyed$))
      .subscribe(() => {
        if (this.backUrl) {
          this.router.navigate([this.backUrl]);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public login(): void {
    const loginInfo: LoginInfo = {
      backUrl: this.backUrl
        ? `/login?${KEY_BACK_URL}=${this.backUrl}`
        : '/login',
      requestUrl: 'http://localhost:4200/assets/user.json',
      requestMethod: 'get',
      requestBody: {
        name: this.username,
        password: this.password,
      },
    };
    this.username = '';
    this.password = '';
    this.store.dispatch(login(loginInfo));
  }

  public logout(): void {
    this.store.dispatch(logout());
  }
}
