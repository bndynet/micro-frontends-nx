import { Component, HostBinding } from '@angular/core';
import { LayoutService } from '@mfe/data';

@Component({
  selector: 'app-logo',
  template: ` <img
    src="https://static.bndy.net/images/{{
      layoutService.config.colorScheme === 'light' ? 'logo' : 'logo_white'
    }}.png"
    alt="logo"
  />`,
  styles: [
    `
      :host {
        display: inline-flex;
      }

      img {
        scale: 1.25;
      }
    `,
  ],
})
export class LogoComponent {
  constructor(public layoutService: LayoutService) {}
}
