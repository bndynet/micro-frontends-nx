import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import {
  AuthClientConfig,
  AuthService as Auth0,
  User,
} from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';

import { map, Observable, switchMap, throwError } from 'rxjs';
import { loginSuccess } from './+state';
import { AuthConfig, AUTH_CONFIG } from './auth.config';
import { AuthService, LoginInfo } from './types';

@Injectable()
export class Auth0Service extends AuthService<User> {
  public static override id = 'auth0';
  public loginPageUrl?: string;
  public user$: Observable<User | null | undefined> = this.auth0.user$;
  public isAuthenticated$: Observable<boolean> = this.auth0.isAuthenticated$;
  public isLoggedIn$: Observable<boolean> = this.auth0.user$.pipe(
    map((u) => !!u)
  );
  public isLoading$: Observable<boolean> = this.auth0.isLoading$;

  constructor(
    httpClient: HttpClient,
    @Inject(AUTH_CONFIG) authConfig: AuthConfig,
    private auth0: Auth0,
    private store: Store
  ) {
    super(httpClient, authConfig);
    this.auth0.user$.subscribe((user?: User | null) => {
      if (user) {
        this.store.dispatch(loginSuccess(user));
      }
    });
  }

  public getId(): string {
    return Auth0Service.id;
  }

  public isAuthenticated(): Observable<boolean> {
    return this.auth0.isAuthenticated$;
  }

  public login(info: LoginInfo): Observable<null | User | undefined> {
    return this.auth0
      .loginWithRedirect({
        redirect_uri: location.href,
        appState: {
          target: info.backUrl || '/',
        },
      })
      .pipe(
        switchMap(() => throwError(() => new Error('Redirection to server...')))
      );
  }

  public getAccessToken(): Observable<string | null | undefined> {
    return this.auth0.getAccessTokenSilently();
  }

  public logout(returnUrl?: string): void {
    this.auth0.logout({
      returnTo: returnUrl,
    });
  }

  public getUser(): Observable<User | null | undefined> {
    return this.auth0.user$;
  }
}
