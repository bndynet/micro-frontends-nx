import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Login Page] Login',
  LoginComplete = '[Login Page] Login Complete',
  LoginSuccess = '[Auth API] Login Success',
  LoginFailure = '[Auth API] Login Failure',
  CheckLogin = '[Auth] Check Login',
  Logout = '[Auth] Confirm Logout',
  LogoutComplete = '[Auth] Logout Complete',
}

export const login = createAction(
  AuthActionTypes.Login,
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  AuthActionTypes.LoginSuccess,
  props<{ username: string }>()
);

export const loginFailure = createAction(
  AuthActionTypes.LoginFailure,
  props<{ error: any}>()
);

export const checkLogin = createAction(
  AuthActionTypes.CheckLogin,
);

export const logout = createAction(AuthActionTypes.Logout);

export const logoutComplete = createAction(AuthActionTypes.LogoutComplete);
