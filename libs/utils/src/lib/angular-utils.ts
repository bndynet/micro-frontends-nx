import { Type } from '@angular/core';
import { Route } from '@angular/router';

export function createDefaultRoutes(
  mainComponent: Type<any>,
  sidebarComponent?: Type<any>,
  childRoutes?: Route[]
): Route[] {
  const routes: Route[] = [
    {
      path: '',
      component: mainComponent,
    },
  ];

  if (sidebarComponent) {
    routes.push({
      path: '',
      component: sidebarComponent,
      outlet: 'sidebar',
    });
  }

  if (childRoutes) {
    routes[0].children = childRoutes;
  }

  return routes;
}
