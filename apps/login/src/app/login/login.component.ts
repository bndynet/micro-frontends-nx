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
  loginSuccess,
  logout,
  UserInfo,
} from '@mfe/data';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 100%;
        padding: 1rem;
      }

      :host ::ng-deep .pi-eye {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }

      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
  ],
})
export class LoginComponent implements OnInit, OnDestroy {
  public valCheck: string[] = ['remember'];
  public username: string = '';
  public password: string = '';
  public enableOAuth = true;
  public themeInDark = false;

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
    @Inject(AUTH_SERVICE) private auth: AuthService<UserInfo>
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

    this.auth.user$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((user?: UserInfo | null) => {
        if (user) {
          this.store.dispatch(loginSuccess(user));
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
