import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { createDefaultRoutes } from 'libs/utils/src';
import { ContentComponent } from './content/content.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AppSidebarComponent } from './layout/app.sidebar.component';

// const routes = [
//   {
//     path: '',
//     component: AppLayoutComponent,
//     children: [
//       {
//         path: '**',
//         component: ContentComponent,
//       },
//     ],
//   },
//   {
//     path: '',
//     component: AppSidebarComponent,
//     outlet: 'sidebar',
//   },
// ];

const routes = createDefaultRoutes(AppLayoutComponent, AppSidebarComponent, [
  {
    path: '**',
    component: ContentComponent,
  },
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
