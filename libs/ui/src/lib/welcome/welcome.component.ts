import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
