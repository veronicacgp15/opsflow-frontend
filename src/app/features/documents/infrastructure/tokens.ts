import { InjectionToken } from '@angular/core';
import { DocumentRepositoryPort } from '../domain/ports/document.repository.port';

export const DOCUMENT_REPOSITORY = new InjectionToken<DocumentRepositoryPort>(
  'DOCUMENT_REPOSITORY'
);
