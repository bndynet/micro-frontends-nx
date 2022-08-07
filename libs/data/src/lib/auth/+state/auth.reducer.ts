import { createReducer, on, Action } from '@ngrx/store';
import { UserInfo } from '../types';
import {
  login,
  loginFailure,
  loginSuccess,
  logoutComplete,
} from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  error?: string | null; // last known error (if any)
  loaded?: boolean;
  isAuthenticated?: boolean;
  user?: UserInfo;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: undefined,
};

const reducer = createReducer(
  initialAuthState,
  on(login, (state) => ({
    ...state,
    loaded: false,
  })),
  on(loginSuccess, (state, user) => ({
    ...state,
    ...{ isAuthenticated: true, user },
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    error,
    isAuthenticated: false,
  })),
  on(logoutComplete, (state) => initialAuthState)
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
