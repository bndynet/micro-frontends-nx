import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { loginSuccess } from './+state';
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
          const qp: { [key: string]: string } = {};
          qp[KEY_BACK_URL] = state.url;
          this.router.navigate(['login'], {
            queryParams: qp,
          });
        }
        return authencated;
      })
    );
  }

  constructor(
    private store: Store,
    private router: Router,
    @Inject(AUTH_SERVICE) private authService: AuthService<any>
  ) {}
}
