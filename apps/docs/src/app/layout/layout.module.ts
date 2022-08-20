import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { AppLayoutComponent } from '../layout';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { AppSidebarComponent } from './app.sidebar.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppSidebarComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  providers: [],
})
export class LayoutModule {}
