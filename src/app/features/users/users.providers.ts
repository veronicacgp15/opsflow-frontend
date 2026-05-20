import { Provider } from '@angular/core';
import { UserHttpRepository } from './infrastructure/http/user-http.repository';
import { USER_REPOSITORY } from './infrastructure/tokens';

export const USERS_PROVIDERS: Provider[] = [
  { provide: USER_REPOSITORY, useExisting: UserHttpRepository }
];
