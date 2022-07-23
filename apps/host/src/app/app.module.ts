import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@mfe/ui';
import { DataModule } from '@mfe/data';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    UiModule,
    DataModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'shop',
          loadChildren: () =>
            import('shop/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'cart',
          loadChildren: () =>
            import('cart/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'about',
          loadChildren: () =>
            import('about/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: '',
          component: NxWelcomeComponent,
        },
        {
          path: 'login',
          loadChildren: () =>
            import('login/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
