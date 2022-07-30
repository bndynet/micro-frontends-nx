import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

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
      tap((authencated: boolean) => {
        if (!authencated) {
          console.log(`🚀 ~ file: auth.guard.ts ~ line 27 ~ AuthGuard ~ tap ~ authencated`, authencated)
          this.router.navigate(['login'], { queryParams: {returnUrl: state.url }});
        }
      })
    );
  }

  constructor(private router: Router, private authService: AuthService) {}
}
