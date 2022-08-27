import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mfe-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  @Input()
  public title = '';
  @Input()
  public bg = '#143157';
  @Input()
  public showLogoutButton = false;
  @Input()
  public hideContent = false;
  @Output()
  public logoutHandler = new EventEmitter();

  logout(): void {
    this.logoutHandler.emit();
  }
}
