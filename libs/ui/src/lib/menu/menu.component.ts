import { Component, Input } from '@angular/core';
import { Menu } from './types';

@Component({
  selector: 'ui-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  @Input()
  public get model(): Menu[] {
    return this.menus;
  }
  public set model(value: Menu[]) {
    if (
      value.filter((item) => item.items && item.items.length > 0).length === 0
    ) {
      this.menus = [
        {
          label: '',
          items: value,
        },
      ];
    } else {
      this.menus = value;
    }
  }

  public menus: Menu[] = [];
}
