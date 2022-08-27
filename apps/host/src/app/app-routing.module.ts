import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@mfe/data';
import { AppLayoutComponent } from './layout/app.layout.component';
import { NxWelcomeComponent } from './nx-welcome.component';

const mfeRouting = [
  {
    path: 'shop',
    loadChildren: () => import('shop/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'docs',
    loadChildren: () => import('docs/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'about',
    loadChildren: () => import('about/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'login',
    loadChildren: () => import('login/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: AppLayoutComponent,
          children: mfeRouting,
        },
        // ...mfeRouting,
        // { path: 'pages/notfound', component: NotfoundComponent },
        // { path: '**', redirectTo: 'pages/notfound' },
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
        initialNavigation: 'enabledBlocking',
        enableTracing: false,
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
