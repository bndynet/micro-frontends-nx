import { Observable } from 'rxjs';

export interface UserInfo {
  name?: string;
}

export interface LoginInfo {
  username?: string;
  password?: string;
  backUrl?: string;
}

export interface IAuthService<TUser> {
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
  abstract getId(): string;
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