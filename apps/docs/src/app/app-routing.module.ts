import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AppSidebarComponent } from './layout/app.sidebar.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AppLayoutComponent,
        children: [
          {
            path: '**',
            component: ContentComponent,
          },
        ],
      },
      {
        path: '',
        component: AppSidebarComponent,
        outlet: 'sidebar',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
