import { Component, ElementRef } from '@angular/core';
import { LayoutService } from '@mfe/data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app.sidebar.component.html',
  styleUrls: ['./app.sidebar.component.scss'],
})
export class AppSidebarComponent {
  constructor(public layoutService: LayoutService, public el: ElementRef) {}
}
