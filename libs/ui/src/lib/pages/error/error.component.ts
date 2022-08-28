import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-page-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  @Output()
  public backClick = new EventEmitter();

  public back(): void {
    this.backClick.emit();
  }
}
