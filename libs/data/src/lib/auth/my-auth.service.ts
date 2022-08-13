import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, throwError } from 'rxjs';
import { AuthConfig, AUTH_CONFIG } from './auth.config';
import { AuthService, LoginInfo, UserInfo } from './types';

@Injectable()
export class MyAuthService extends AuthService<UserInfo> {
  public static override id = 'my.auth';
  public loginPageUrl?: string;
  public user$: BehaviorSubject<UserInfo | null | undefined> =
    new BehaviorSubject<UserInfo | null | undefined>(null);
  public isAuthenticated$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this.user$.pipe(map((u) => !!u));
  public isLoading$: Observable<boolean> = new Subject<boolean>();

  constructor(
    httpClient: HttpClient,
    @Inject(AUTH_CONFIG) authConfig: AuthConfig
  ) {
    super(httpClient, authConfig);
  }

  public getId(): string {
    return MyAuthService.id;
  }

  public isAuthenticated(): Observable<boolean> {
    console.log(this);
    return this.isAuthenticated$;
  }

  public login(info: LoginInfo): Observable<UserInfo | null | undefined> {
    if (info.pageUrl) {
      this.loginPageUrl = info.pageUrl;
    }

    if (info.requestUrl) {
      const request =
        info.requestMethod === 'get'
          ? this.httpClient.get<UserInfo>(info.requestUrl)
          : this.httpClient.post<UserInfo>(info.requestUrl, info.requestBody);

      return request.pipe(
        map((u: UserInfo) => {
          this.user$.next(u);
          this.user$.complete();
          this.isAuthenticated$.next(true);
          return u;
        })
      );
    }
    return throwError(() => new Error('Username is required.'));
  }

  public getUser(): Observable<UserInfo | null | undefined> {
    return this.user$;
  }

  public getAccessToken(): Observable<string | undefined> {
    return this.user$.pipe(map((user) => ''));
  }

  public logout(returnUrl?: string | undefined): void {
    this.user$.next(null);
    this.user$.complete();
    this.isAuthenticated$.next(false);
  }
}
