import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AUTH_SERVICE } from './auth.provider';
import { AuthService, KEY_BACK_URL } from './types';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.authService.isAuthenticated$.pipe(
      map((authencated: boolean) => {
        if (!authencated) {
          let loginPage = this.authService.authConfig.loginPageUrl || '/login';
          loginPage = loginPage.includes('?')
            ? `${loginPage}&${KEY_BACK_URL}=${state.url}`
            : `${loginPage}?${KEY_BACK_URL}=${state.url}`;
          this.router.navigateByUrl(loginPage);
        }
        return authencated;
      })
    );
  }

  constructor(
    private router: Router,
    @Inject(AUTH_SERVICE) private authService: AuthService<any>
  ) {}
}
