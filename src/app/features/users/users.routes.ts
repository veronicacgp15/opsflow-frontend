import { Routes } from '@angular/router';
import { adminGuard } from '@platform/guards/auth.guard';

export const USERS_ROUTES: Routes = [
  {
    path: 'usuarios',
    loadComponent: () =>
      import('./presentation/pages/users-admin/users-admin-page.component').then(
        m => m.UsersAdminPageComponent
      ),
    canActivate: [adminGuard]
  },
  {
    path: 'mi-organizacion/usuarios',
    loadComponent: () =>
      import('./presentation/pages/my-organization-users/my-org-users-page.component').then(
        m => m.MyOrgUsersPageComponent
      )
  },
  {
    path: 'mi-perfil/cambiar-password',
    loadComponent: () =>
      import('./presentation/pages/change-password/change-password-page.component').then(
        m => m.ChangePasswordPageComponent
      )
  }
];
