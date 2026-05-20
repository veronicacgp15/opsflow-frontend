import { Provider } from '@angular/core';
import { DocumentHttpRepository } from './infrastructure/http/document-http.repository';
import { DOCUMENT_REPOSITORY } from './infrastructure/tokens';

export const DOCUMENTS_PROVIDERS: Provider[] = [
  { provide: DOCUMENT_REPOSITORY, useExisting: DocumentHttpRepository }
];
