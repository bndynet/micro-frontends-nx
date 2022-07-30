import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthActionTypes, AuthState, getAuthState, logout } from '@mfe/data';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public userInfo?: AuthState;

  private destoryed$ = new Subject<boolean>();

  constructor(private store: Store<AuthState>, private actions$: Actions) {}

  ngOnInit(): void {
    this.store.select(getAuthState).subscribe((authState: AuthState) => {
      if (authState.isAuthenticated) {
        this.userInfo = authState;
      }
      this.userInfo = undefined;
    });
  }

  ngOnDestroy(): void {
    this.destoryed$.next(true);
    this.destoryed$.complete();
  }

  public logout(): void {
    this.store.dispatch(logout());
  }
}
