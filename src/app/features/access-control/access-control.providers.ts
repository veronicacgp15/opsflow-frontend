import { Provider } from '@angular/core';
import { RoleHttpRepository } from './infrastructure/http/role-http.repository';
import { ROLE_REPOSITORY } from './infrastructure/tokens';

export const ACCESS_CONTROL_PROVIDERS: Provider[] = [
  { provide: ROLE_REPOSITORY, useExisting: RoleHttpRepository }
];
