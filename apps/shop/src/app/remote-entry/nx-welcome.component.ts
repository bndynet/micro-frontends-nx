import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState, getAuthState, logout } from '@mfe/data';
import { Store } from '@ngrx/store';

@Component({
  selector: 'mfe-nx-welcome',
  template: `<div *ngIf="userInfo">
    <mfe-welcome [title]="'Hi ' + userInfo.username" bg="#086978" [showLogoutButton]="true" (logoutHandler)="logout()"></mfe-welcome>
  </div>`,
})
export class NxWelcomeComponent implements OnInit {
  public userInfo?: AuthState;

  constructor(
    private router: Router, private store: Store<AuthState>) {}

  ngOnInit(): void {
    this.store.select(getAuthState).subscribe((authState: AuthState) => {
      if (!authState.isAuthenticated) {
        this.userInfo = undefined;
        this.router.navigateByUrl('/');
        return;
      }
      this.userInfo = authState;
    });
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
