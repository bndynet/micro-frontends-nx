import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiModule } from '@mfe/ui';
import { AppRoutingModule } from '../app-routing.module';
import { CrudModule } from '../crud/crud.module';
import { LayoutComponent } from '../layout/layout.component';
import { MenuComponent } from '../layout/menu.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [NxWelcomeComponent, LayoutComponent, MenuComponent],
  imports: [CommonModule, UiModule, AppRoutingModule, CrudModule],
  providers: [],
})
export class RemoteEntryModule {}
