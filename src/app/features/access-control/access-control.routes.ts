import { Routes } from '@angular/router';
import { adminGuard } from '@platform/guards/auth.guard';

export const ACCESS_CONTROL_ROUTES: Routes = [
  {
    path: 'roles',
    loadComponent: () =>
      import('./presentation/pages/roles-admin/roles-admin-page.component').then(
        m => m.RolesAdminPageComponent
      ),
    canActivate: [adminGuard]
  }
];
