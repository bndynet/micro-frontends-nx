import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mfe-nx-welcome',
  template: `<mfe-welcome title="Shop" bg="#086978"></mfe-welcome>`,
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
