import { Injectable } from '@angular/core';
import { AuthService as Auth0, User } from '@auth0/auth0-angular';

import { map, Observable, switchMap, tap, throwError } from 'rxjs';
import { AuthService, LoginInfo } from './types';

@Injectable()
export class Auth0Service implements AuthService<User> {
  public static id = 'auth0';
  public user$: Observable<User | null | undefined> = this.auth0.user$;
  public isAuthenticated$: Observable<boolean> = this.auth0.isAuthenticated$;
  public isLoggedIn$: Observable<boolean> = this.auth0.user$.pipe(
    map((u) => !!u)
  );
  public isLoading$: Observable<boolean> = this.auth0.isLoading$;

  constructor(private auth0: Auth0) {}

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
