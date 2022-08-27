import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiModule } from '@mfe/ui';
import { AppRoutingModule } from '../app-routing.module';
import { ContentComponent } from '../content/content.component';
import { LayoutModule } from '../layout/layout.module';
import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent, ContentComponent],
  imports: [CommonModule, UiModule, AppRoutingModule, LayoutModule],
  providers: [],
})
export class RemoteEntryModule {}
