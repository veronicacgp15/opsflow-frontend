import { Routes } from '@angular/router';
import { adminGuard } from '@core/guards/auth.guard';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard-layout.component').then(m => m.DashboardLayoutComponent),
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      {
        path: 'inicio',
        loadComponent: () =>
          import('./pages/dashboard-home.component').then(m => m.DashboardHomeComponent)
      },
      {
        path: 'roles',
        loadComponent: () =>
          import('./pages/roles-admin-page/roles-admin-page.component').then(
            m => m.RolesAdminPageComponent
          ),
        canActivate: [adminGuard]
      },
      {
        path: 'usuarios',
        loadComponent: () =>
          import('./pages/users-admin-page/users-admin-page.component').then(
            m => m.UsersAdminPageComponent
          ),
        canActivate: [adminGuard]
      },
      {
        path: 'mi-organizacion',
        redirectTo: 'organizaciones',
        pathMatch: 'full'
      },
      {
        // Cualquier autenticado puede cambiar su propia contrasena. La proteccion de auth la
        // pone el guard padre del dashboard.
        path: 'mi-perfil/cambiar-password',
        loadComponent: () =>
          import('./pages/change-password-page/change-password-page.component').then(
            m => m.ChangePasswordPageComponent
          )
      },
      {
        path: 'organizaciones',
        loadComponent: () =>
          import('./pages/organizations-page/organizations-page.component').then(
            m => m.OrganizationsPageComponent
          )
      },
      {
        path: 'documentos',
        loadComponent: () =>
          import('./pages/documents-page/documents-page.component').then(
            m => m.DocumentsPageComponent
          )
      }
    ]
  }
];
