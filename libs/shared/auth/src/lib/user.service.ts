import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLoggedIn = new BehaviorSubject(false);

  public isUserLoggedIn$ = this.isLoggedIn.asObservable();

  public checkCredentials(username: string, password: string): void {
    if (username && password) {
      this.isLoggedIn.next(true);
    }
  }

  public logout(): void {
    this.isLoggedIn.next(false);
  }
}
