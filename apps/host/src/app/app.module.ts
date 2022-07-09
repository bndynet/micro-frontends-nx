import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
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
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
