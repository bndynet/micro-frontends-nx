import { HttpClient } from '@angular/common/http';
import { User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { AuthConfig } from './auth.config';

export class UserInfo extends User {}

export interface LoginInfo {
  pageUrl?: string;
  backUrl?: string;
  requestUrl?: string;
  requestBody?: object;
  requestMethod?: 'get' | 'post';
}

export interface IAuthService<TUser> {
  readonly loginPageUrl?: string;
  user$: Observable<TUser | null | undefined>;
  getId(): string;
  isAuthenticated$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  login(info: LoginInfo): Observable<TUser | null | undefined>;
  getUser(): Observable<TUser | null | undefined>;
  getAccessToken(): Observable<string | null | undefined>;
  isAuthenticated(): Observable<boolean>;
  logout(returnUrl?: string): Observable<void> | void;
}

export abstract class AuthService<TUser> implements IAuthService<TUser> {
  static id: string;
  constructor(
    protected httpClient: HttpClient,
    public authConfig: AuthConfig
  ) {}
  abstract getId(): string;
  abstract readonly loginPageUrl?: string;
  abstract user$: Observable<TUser | null | undefined>;
  abstract isAuthenticated$: Observable<boolean>;
  abstract isLoggedIn$: Observable<boolean>;
  abstract isLoading$: Observable<boolean>;
  abstract login(info: LoginInfo): Observable<TUser | null | undefined>;
  abstract getUser(): Observable<TUser | null | undefined>;
  abstract getAccessToken(): Observable<string | null | undefined>;
  abstract isAuthenticated(): Observable<boolean>;
  abstract logout(returnUrl?: string | undefined): void | Observable<void>;
}

export const KEY_BACK_URL = 'backUrl';
