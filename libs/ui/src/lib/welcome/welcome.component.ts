import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mfe-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @Input()
  public title = '';
  @Input()
  public bg = '#143157';
  @Input()
  public showLogoutButton = false;
  @Output()
  public logoutHandler = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  logout(): void {
    this.logoutHandler.emit();
  }
}
