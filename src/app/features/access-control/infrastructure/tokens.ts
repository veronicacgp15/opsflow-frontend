import { InjectionToken } from '@angular/core';
import { RoleRepositoryPort } from '../domain/ports/role.repository.port';

export const ROLE_REPOSITORY = new InjectionToken<RoleRepositoryPort>('ROLE_REPOSITORY');
