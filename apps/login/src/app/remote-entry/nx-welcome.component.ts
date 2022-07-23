import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@mfe/data';

@Component({
  selector: 'mfe-nx-welcome',
  template: `<div class="form">
      <h1 *ngIf="userInfo$ | async as userInfo; else logIn">
        Hi {{ userInfo.username }}!
        <button (click)="logout()">Log out</button>
      </h1>
    </div>
    <ng-template #logIn>
      <input [(ngModel)]="username" placeholder="User name" />
      <button (click)="login()">Log in</button>
    </ng-template>`,
  styleUrls: ['./nx-welcome.component.scss'],
})
export class NxWelcomeComponent implements OnInit {
  public username: string = '';
  public userInfo$ = this.authService.userInfo$;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {}

  public login(): void {
    this.authService.login(this.username, 'p');
    this.router.navigateByUrl(this.activatedRoute.snapshot.queryParamMap.get('back') || '/');
  }

  public logout(): void {
    this.authService.logout();
  }
}
