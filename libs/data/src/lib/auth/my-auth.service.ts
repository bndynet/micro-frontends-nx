import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, throwError } from 'rxjs';
import { AuthService, LoginInfo } from './types';

export interface User {
  name: string;
  token: string;
}

@Injectable()
export class MyAuthService implements AuthService<User> {
  public static id = 'my.auth';
  public user$: BehaviorSubject<User | null | undefined> = new BehaviorSubject<
    User | null | undefined
  >(null);
  public isAuthenticated$: Observable<boolean> = this.user$.pipe(
    map((u) => !!u)
  );
  public isLoggedIn$: Observable<boolean> = this.user$.pipe(map((u) => !!u));
  public isLoading$: Observable<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient) {}

  getId(): string {
    return MyAuthService.id;
  }

  isAuthenticated(): Observable<boolean> {
    return this.user$.pipe(map((u) => !!u));
  }

  public login(info: LoginInfo): Observable<User | null | undefined> {
    if (info.username && info.password) {
      return this.httpClient
        .get<User>('http://localhost:4200/assets/user.json')
        .pipe(
          map((u) => {
            const user = { ...u, name: info.username || '' };
            this.user$.next(user);
            return user;
          })
        );
    }
    return throwError(() => new Error('Username is required.'));
  }

  public getUser(): Observable<User | null | undefined> {
    return this.user$;
  }

  public getAccessToken(): Observable<string | undefined> {
    return this.user$.pipe(map((user) => user?.token));
  }

  logout(returnUrl?: string | undefined): void {
    this.user$.next(null);
  }
}
