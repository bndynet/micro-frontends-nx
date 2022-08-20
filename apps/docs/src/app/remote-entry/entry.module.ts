import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteEntryComponent } from './entry.component';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ContentComponent } from '../content/content.component';
import { UiModule } from '@mfe/ui';

@NgModule({
  declarations: [RemoteEntryComponent, ContentComponent],
  imports: [CommonModule, UiModule, AppRoutingModule, LayoutModule],
  providers: [],
})
export class RemoteEntryModule {}
