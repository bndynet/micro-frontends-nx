import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { UserInfo } from './types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userInfo?: UserInfo;
  private isLoggedIn = new BehaviorSubject(false);
  private userInfo = new BehaviorSubject<UserInfo | null>(null);
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  public isUserLoggedIn$ = this.isLoggedIn.asObservable();
  public userInfo$ = this.userInfo.asObservable();
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {}

  public login(username: string, password: string): Observable<boolean> {
    if (username && password && username !== '1') {
      this.isLoggedIn.next(true);
      this.storeToken(username);
      this.isAuthenticatedSubject.next(true);
      this._userInfo = { username };
      this.userInfo.next(this._userInfo);
      return of(true);
    }
    return throwError(() => new Error(`Username and password are required.`));
  }

  public logout(): Observable<boolean> {
    this.isLoggedIn.next(false);
    this.userInfo.next(null);
    this.isAuthenticatedSubject.next(false);
    this.clearCache();
    return of(true);
  }

  private storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  private clearCache(): void {
    localStorage.removeItem('token');
  }
}
