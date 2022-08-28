import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-page-notfound',
  templateUrl: './notfound.component.html',
})
export class NotfoundComponent {
  @Output()
  public backClick = new EventEmitter();

  public back(): void {
    this.backClick.emit();
  }
}
