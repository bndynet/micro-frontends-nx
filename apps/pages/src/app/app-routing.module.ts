import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorComponent, LockedComponent, NotfoundComponent } from '@mfe/ui';
import { createDefaultRoutes } from '@mfe/utils';
import { CrudComponent } from './crud/crud.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './layout/menu.component';
import { NxWelcomeComponent } from './remote-entry/nx-welcome.component';

// const routes = createDefaultRoutes(NxWelcomeComponent);

const routes = createDefaultRoutes(LayoutComponent, MenuComponent, [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'crud',
    component: CrudComponent,
  },
  {
    path: '404',
    component: NotfoundComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'locked',
    component: LockedComponent,
  },
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
