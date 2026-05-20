import { Routes } from '@angular/router';
import { adminGuard } from '@platform/guards/auth.guard';

export const DOCUMENTS_ROUTES: Routes = [
  {
    path: 'documentos',
    loadComponent: () =>
      import('./presentation/pages/documents-list/documents-page.component').then(
        m => m.DocumentsPageComponent
      )
  },
  {
    path: 'tipos-documento',
    loadComponent: () =>
      import('./presentation/pages/document-types-admin/document-types-admin-page.component').then(
        m => m.DocumentTypesAdminPageComponent
      ),
    canActivate: [adminGuard]
  }
];
