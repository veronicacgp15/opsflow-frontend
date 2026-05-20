import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from '@platform/interceptors/auth.interceptor';
import { USERS_PROVIDERS } from '@features/users/users.providers';
import { ACCESS_CONTROL_PROVIDERS } from '@features/access-control/access-control.providers';
import { ORGANIZATIONS_PROVIDERS } from '@features/organizations/organizations.providers';
import { DOCUMENTS_PROVIDERS } from '@features/documents/documents.providers';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor])),
    ...USERS_PROVIDERS,
    ...ACCESS_CONTROL_PROVIDERS,
    ...ORGANIZATIONS_PROVIDERS,
    ...DOCUMENTS_PROVIDERS
  ]
};
