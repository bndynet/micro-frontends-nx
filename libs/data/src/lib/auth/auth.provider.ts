import { HttpClient } from '@angular/common/http';
import { InjectionToken, Provider } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';
import { AUTH_CONFIG } from './auth.config';
import { MyAuthService } from './my-auth.service';
import { AuthService, UserInfo } from './types';

export const AUTH_SERVICE = new InjectionToken<AuthService<UserInfo>>(
  'auth.service'
);

export const authProvider: Provider = {
  provide: AUTH_SERVICE,
  useClass: MyAuthService, // TODO: here you can define the auth service, for exmaple: MyAuthService is used for API auth,
  deps: [HttpClient, AUTH_CONFIG, Auth0Service],
};
