import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Auth0Service,
  AuthActionTypes,
  AuthService,
  AUTH_SERVICE,
  KEY_BACK_URL,
  login,
  loginSuccess,
  logout,
} from '@mfe/data';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { User } from '@auth0/auth0-angular';

@Component({
  selector: 'mfe-nx-welcome',
  template: `<div class="form">
      <h1 *ngIf="user$ | async as user; else logIn">
        Hi {{ user.name }}!
        <button (click)="logout()">Log out</button>
      </h1>
    </div>
    <ng-template #logIn>
      <input
        [(ngModel)]="username"
        placeholder="User name"
        *ngIf="!enableOAuth"
      />
      <button (click)="login()">
        {{ enableOAuth ? 'Log in with Auth0' : 'Log in' }}
      </button>
    </ng-template>`,
  styleUrls: ['./nx-welcome.component.scss'],
})
export class NxWelcomeComponent implements OnInit, OnDestroy {
  public username: string = '';
  public enableOAuth = true;

  public user$ = this.auth.user$;
  public isAuthenticated$ = this.auth.isAuthenticated$;

  private destroyed$ = new Subject<boolean>();
  private backUrl?: string | null;

  constructor(
    private store: Store,
    private router: Router,
    private actions$: Actions,
    private activatedRoute: ActivatedRoute,
    @Inject(AUTH_SERVICE) private auth: AuthService<User>
  ) {
    this.enableOAuth = this.auth.getId() === Auth0Service.id; //  instanceof Auth0Service does not work here.
  }

  ngOnInit(): void {
    this.backUrl = this.activatedRoute.snapshot.queryParamMap.get(KEY_BACK_URL);
    this.auth.user$.pipe(takeUntil(this.destroyed$)).subscribe((user: any) => {
      if (user) {
        this.store.dispatch(loginSuccess(user));
      }
    })
    this.actions$
      .pipe(ofType(AuthActionTypes.LoginSuccess), takeUntil(this.destroyed$))
      .subscribe(() => {
        if (this.backUrl) {
          this.router.navigateByUrl(this.backUrl);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public login(): void {
    this.store.dispatch(
      login({
        name: this.username,
        password: 'aaaa',
        backUrl: this.backUrl
          ? `/login?${KEY_BACK_URL}=${this.backUrl}`
          : '/login',
      })
    );
  }

  public logout(): void {
    this.store.dispatch(logout());
  }
}
