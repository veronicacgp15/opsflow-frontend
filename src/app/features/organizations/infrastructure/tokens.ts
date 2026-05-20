import { InjectionToken } from '@angular/core';
import { OrganizationRepositoryPort } from '../domain/ports/organization.repository.port';

export const ORGANIZATION_REPOSITORY = new InjectionToken<OrganizationRepositoryPort>(
  'ORGANIZATION_REPOSITORY'
);
