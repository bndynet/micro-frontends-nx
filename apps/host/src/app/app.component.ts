import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthState, getAuthState, logout } from '@mfe/data';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

@Component({
  selector: 'mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public user?: AuthState;

  private destoryed$ = new Subject<boolean>();

  constructor(private store: Store<AuthState>) {}

  ngOnInit(): void {
    this.store.select(getAuthState).subscribe((authState: AuthState) => {
      if (authState.isAuthenticated) {
        this.user = authState;
      } else {
        this.user = undefined;
      }
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
