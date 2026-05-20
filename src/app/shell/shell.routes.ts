import { Routes } from '@angular/router';
import { USERS_ROUTES } from '@features/users/users.routes';
import { ACCESS_CONTROL_ROUTES } from '@features/access-control/access-control.routes';
import { ORGANIZATIONS_ROUTES } from '@features/organizations/organizations.routes';
import { DOCUMENTS_ROUTES } from '@features/documents/documents.routes';

export const SHELL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/app-shell.component').then(m => m.AppShellComponent),
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      {
        path: 'inicio',
        loadComponent: () =>
          import('./pages/home/home-page.component').then(m => m.HomePageComponent)
      },
      ...USERS_ROUTES,
      ...ACCESS_CONTROL_ROUTES,
      ...ORGANIZATIONS_ROUTES,
      ...DOCUMENTS_ROUTES,
      {
        path: 'mi-organizacion',
        redirectTo: 'organizaciones',
        pathMatch: 'full'
      }
    ]
  }
];
