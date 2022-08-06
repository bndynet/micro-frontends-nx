import { InjectionToken, Provider } from '@angular/core';
import { AuthService as Auth0, User } from '@auth0/auth0-angular';
import { Auth0Service } from './auth0.service';
import { AuthService } from './types';

export const authServiceFactory = () => null;
export const authServiceProvider: Provider = {
  provide: Auth0Service,
  useFactory: authServiceFactory,
  deps: [Auth0],
};

export const AUTH_SERVICE = new InjectionToken<AuthService<User>>(
  'auth_service'
);
