import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mfe-nx-welcome',
  template: `<mfe-welcome title="Docs" bg="#21247c"></mfe-welcome>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
