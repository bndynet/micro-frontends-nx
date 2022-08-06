import { Inject, Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, combineLatest, map, Observable, of, switchMap } from 'rxjs';
import { AUTH_SERVICE } from '../auth.provider';
import { AuthService } from '../types';

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
      switchMap((action: any) => {
        const { name, password, backUrl } = action;
        return this.authService.login({
          username: name,
          password,
          backUrl,
        }).pipe(
          map(() => {
            console.log('eeee');
            debugger;
            return loginSuccess({ name });
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
