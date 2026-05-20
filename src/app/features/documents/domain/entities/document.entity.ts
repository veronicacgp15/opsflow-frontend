export type DocumentStatus = 'ACTIVE' | 'EXPIRING' | 'EXPIRED' | 'ARCHIVED' | string;

export interface DocumentVersion {
  id?: number | null;
  versionNumber: number;
  fileUrl: string;
  fileSize: number;
  uploadedByUserId: number;
  createdAt: string | null;
}

export interface Document {
  id: number;
  name: string;
  documentTypeId: number;
  status: DocumentStatus;
  expirationDate: string | null;
  userId: number;
  organizationId: number | null;
  targetEntityType: string | null;
  targetEntityId: number | null;
  versions: DocumentVersion[];
}

export interface DocumentCreatePayload {
  name: string;
  documentTypeId: number;
  expirationDate?: string | null;
  targetEntityType?: string | null;
  targetEntityId?: number | null;
}

export interface DocumentType {
  id: number;
  name: string;
  description: string | null;
  active?: boolean;
}

export interface DocumentTypeUpsert {
  name: string;
  description?: string | null;
}
