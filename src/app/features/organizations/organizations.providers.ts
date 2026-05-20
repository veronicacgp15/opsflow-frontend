import { Provider } from '@angular/core';
import { OrganizationHttpRepository } from './infrastructure/http/organization-http.repository';
import { ORGANIZATION_REPOSITORY } from './infrastructure/tokens';

export const ORGANIZATIONS_PROVIDERS: Provider[] = [
  { provide: ORGANIZATION_REPOSITORY, useExisting: OrganizationHttpRepository }
];
