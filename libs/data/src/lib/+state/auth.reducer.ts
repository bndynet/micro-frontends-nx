import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { UserInfo } from '../types';
import { login, loginFailure, loginSuccess, logoutComplete } from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState extends UserInfo {
  error?: string | null; // last known error (if any)
  loaded?: boolean;
  isAuthenticated?: boolean;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
};

const reducer = createReducer(
  initialAuthState,
  on(login, (state) => ({
    ...state,
    loaded: false,
  })),
  on(loginSuccess, (state, { username }) => ({
    ...state,
    ...{ username, isAuthenticated: true },
  })),
  on(loginFailure, (state, { error }) => ({ ...state, error, isAuthenticated: false })),
  on(logoutComplete, (state) => initialAuthState)
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
