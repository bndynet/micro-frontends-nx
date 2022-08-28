import { Component } from '@angular/core';
import { Menu } from '@mfe/ui';

@Component({
  selector: 'app-menu',
  template: `<ui-menu [model]="menus"></ui-menu>`,
})
export class MenuComponent {
  public menus: Menu[];

  constructor() {
    this.menus = [
      {
        label: 'CRUD',
        icon: 'pi pi-fw pi-tag',
        routerLink: ['crud'],
      },
      {
        label: 'Not Found',
        icon: 'pi pi-fw pi-tag',
        routerLink: ['404'],
      },
      {
        label: 'Page Error',
        icon: 'pi pi-fw pi-exclamation-circle',
        routerLink: ['error'],
      },
      {
        label: 'Access Denied',
        icon: 'pi pi-fw pi-unlock',
        routerLink: ['locked'],
      },
    ];
  }
}
