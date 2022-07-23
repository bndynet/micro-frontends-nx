import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserInfo } from './types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userInfo?: UserInfo;
  private isLoggedIn = new BehaviorSubject(false);
  private userInfo = new BehaviorSubject<UserInfo | null>(null);

  public isUserLoggedIn$ = this.isLoggedIn.asObservable();
  public userInfo$ = this.userInfo.asObservable();

  constructor() {
    console.count('AuthService');
  }

  public login(username: string, password: string): void {
    if (username && password) {
      this.isLoggedIn.next(true);
      this._userInfo = { username };
      this.userInfo.next(this._userInfo);
    }
  }

  public logout(): void {
    this.isLoggedIn.next(false);
    this.userInfo.next(null);
  }
}
