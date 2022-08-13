import { InjectionToken } from '@angular/core';

export interface AuthConfig {
  loginPageUrl: string;
  // domain: string;
  // clientId: string;
  // useCookiesForTransactions: boolean;
  // useRefreshTokens: boolean;
  // cacheLocation: string;
}
export const AUTH_CONFIG = new InjectionToken<AuthConfig>('auth.config');
