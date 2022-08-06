import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState, getAuthState, logout, logoutComplete } from '@mfe/data';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mfe-nx-welcome',
  template: `<div *ngIf="userInfo">
    <mfe-welcome
      [title]="'Hi ' + userInfo.name"
      bg="#086978"
      [showLogoutButton]="true"
      (logoutHandler)="logout()"
    ></mfe-welcome>
  </div>`,
})
export class NxWelcomeComponent implements OnInit, OnDestroy {
  public userInfo?: AuthState;

  private destroyed$ = new Subject<boolean>();

  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store<AuthState>
  ) {}

  ngOnInit(): void {
    this.store.select(getAuthState).subscribe((authState: AuthState) => {
      this.userInfo = authState.isAuthenticated ? authState : undefined;
    });

    this.actions$.pipe(ofType(logoutComplete), takeUntil(this.destroyed$)).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
