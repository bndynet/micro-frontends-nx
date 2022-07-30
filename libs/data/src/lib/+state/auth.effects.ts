import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from '../auth.service';

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
        const { username, password } = action;
        return this.authService.login(username, password).pipe(
          map(() => {
            return loginSuccess({ username });
          }),
          catchError((err) => of(loginFailure({ error: err })))
        );
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.Logout),
      switchMap(() =>
        this.authService.logout().pipe(map(() => logoutComplete()))
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService
  ) {}
}
