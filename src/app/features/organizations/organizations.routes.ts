import { Routes } from '@angular/router';

export const ORGANIZATIONS_ROUTES: Routes = [
  {
    path: 'organizaciones',
    loadComponent: () =>
      import('./presentation/pages/organizations-list/organizations-page.component').then(
        m => m.OrganizationsPageComponent
      )
  }
];
