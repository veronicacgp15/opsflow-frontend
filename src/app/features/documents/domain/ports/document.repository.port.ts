import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageResponse } from '@features/auth/domain/models/auth.types';
import {
  Document,
  DocumentCreatePayload,
  DocumentType,
  DocumentTypeUpsert
} from '../entities/document.entity';

export interface DocumentRepositoryPort {
  list(): Observable<Document[]>;
  getById(id: number): Observable<Document>;
  create(payload: DocumentCreatePayload, file: File): Observable<Document>;
  delete(id: number): Observable<MessageResponse>;
  forceState(id: number, state: string): Observable<Document>;
  listDocumentTypes(): Observable<DocumentType[]>;
  listDocumentTypesAdmin(): Observable<DocumentType[]>;
  listAllDocumentTypesAdmin(): Observable<DocumentType[]>;
  createDocumentType(body: DocumentTypeUpsert): Observable<DocumentType>;
  updateDocumentType(id: number, body: DocumentTypeUpsert): Observable<DocumentType>;
  getDocumentTypeById(id: number): Observable<DocumentType>;
  patchDocumentTypeActive(id: number, active: boolean): Observable<DocumentType>;
  activateDocumentType(id: number): Observable<DocumentType>;
  deactivateDocumentType(id: number): Observable<DocumentType>;
  deleteDocumentType(id: number): Observable<DocumentType>;
  downloadLatest(id: number): Observable<HttpResponse<Blob>>;
  downloadVersion(docId: number, versionId: number): Observable<HttpResponse<Blob>>;
  uploadNewVersion(docId: number, file: File): Observable<Document>;
  deleteVersion(docId: number, versionId: number): Observable<Document>;
}
