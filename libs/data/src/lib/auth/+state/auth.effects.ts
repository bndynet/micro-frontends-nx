import { Inject, Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, finalize, map, Observable, of, switchMap } from 'rxjs';
import { AUTH_SERVICE } from '../auth.provider';
import { AuthService, LoginInfo, UserInfo } from '../types';

import {
  AuthActionTypes,
  loginFailure,
  loginSuccess,
  logoutComplete,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.Login),
      switchMap((action: LoginInfo) => {
        return this.authService.login(action).pipe(
          map((user: UserInfo) => {
            return loginSuccess(user);
          }),
          catchError((err) => of(loginFailure({ error: err })))
        );
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.Logout),
      switchMap(() => {
        const logout$ = this.authService.logout();
        if (logout$ instanceof Observable) {
          return logout$.pipe(map(() => logoutComplete()));
        }
        return of(logoutComplete());
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    @Inject(AUTH_SERVICE) private readonly authService: AuthService<any>
  ) {}
}
