import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthState, getAuthState, logout, UserInfo } from '@mfe/data';
import { Store } from '@ngrx/store';
import { map, Subject } from 'rxjs';

@Component({
  selector: 'mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public user$ = this.store
    .select(getAuthState)
    .pipe(map((state) => state.user));

  private destoryed$ = new Subject<boolean>();

  constructor(private store: Store<AuthState>) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destoryed$.next(true);
    this.destoryed$.complete();
  }

  public logout(): void {
    this.store.dispatch(logout());
  }
}
