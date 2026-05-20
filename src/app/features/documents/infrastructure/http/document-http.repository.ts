import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { MessageResponse } from '@features/auth/domain/models/auth.types';
import {
  Document,
  DocumentCreatePayload,
  DocumentType,
  DocumentTypeUpsert
} from '../../domain/entities/document.entity';
import { DocumentRepositoryPort } from '../../domain/ports/document.repository.port';

@Injectable({ providedIn: 'root' })
export class DocumentHttpRepository implements DocumentRepositoryPort {
  private readonly base = `${environment.apiUrl}/documents`;

  constructor(private readonly http: HttpClient) {}

  list(): Observable<Document[]> {
    return this.http.get<Document[]>(this.base);
  }

  getById(id: number): Observable<Document> {
    return this.http.get<Document>(`${this.base}/${id}`);
  }

  create(payload: DocumentCreatePayload, file: File): Observable<Document> {
    const formData = new FormData();
    formData.append('data', new Blob([JSON.stringify(payload)], { type: 'application/json' }));
    formData.append('file', file);
    return this.http.post<Document>(`${this.base}/create`, formData);
  }

  delete(id: number): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`${this.base}/${id}`);
  }

  forceState(id: number, state: string): Observable<Document> {
    return this.http.patch<Document>(`${this.base}/${id}/force-state`, null, {
      params: { state }
    });
  }

  listDocumentTypes(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${this.base}/type-catalog`);
  }

  listDocumentTypesAdmin(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${this.base}/types`);
  }

  listAllDocumentTypesAdmin(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${this.base}/types/all`);
  }

  createDocumentType(body: DocumentTypeUpsert): Observable<DocumentType> {
    return this.http.post<DocumentType>(`${this.base}/types`, body);
  }

  updateDocumentType(id: number, body: DocumentTypeUpsert): Observable<DocumentType> {
    return this.http.put<DocumentType>(`${this.base}/types/${id}`, body);
  }

  getDocumentTypeById(id: number): Observable<DocumentType> {
    return this.http.get<DocumentType>(`${this.base}/types/${id}`);
  }

  patchDocumentTypeActive(id: number, active: boolean): Observable<DocumentType> {
    return this.http.patch<DocumentType>(`${this.base}/types/${id}/active`, { active });
  }

  activateDocumentType(id: number): Observable<DocumentType> {
    return this.http.patch<DocumentType>(`${this.base}/types/${id}/activate`, {});
  }

  deactivateDocumentType(id: number): Observable<DocumentType> {
    return this.http.patch<DocumentType>(`${this.base}/types/${id}/deactivate`, {});
  }

  deleteDocumentType(id: number): Observable<DocumentType> {
    return this.http.delete<DocumentType>(`${this.base}/types/${id}`);
  }

  downloadLatest(id: number): Observable<HttpResponse<Blob>> {
    return this.http.get(`${this.base}/${id}/download`, {
      observe: 'response',
      responseType: 'blob'
    });
  }

  downloadVersion(docId: number, versionId: number): Observable<HttpResponse<Blob>> {
    return this.http.get(`${this.base}/${docId}/versions/${versionId}/download`, {
      observe: 'response',
      responseType: 'blob'
    });
  }

  uploadNewVersion(docId: number, file: File): Observable<Document> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<Document>(`${this.base}/add-version/${docId}`, formData);
  }

  deleteVersion(docId: number, versionId: number): Observable<Document> {
    return this.http.delete<Document>(`${this.base}/${docId}/versions/${versionId}`);
  }
}
