import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-page-locked',
  templateUrl: './locked.component.html',
})
export class LockedComponent {
  @Output()
  public backClick = new EventEmitter();

  public back(): void {
    this.backClick.emit();
  }
}
