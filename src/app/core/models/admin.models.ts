export interface BackendRole {
  id: number;
  name: string;
}

export interface UserAdminDto {
  id: number;
  username: string;
  email: string;
  name: string;
  lastname: string;
  enabled: boolean;
  organizationId: number | null;
  roles: string[];

  hasActiveSession: boolean;
}

export interface OrganizationMineDto {
  id: number;
  name: string;
  taxId: string;
  address: string;
  email: string;
  phone: string;
  active: boolean;
  planLimit: number;
  createdAt: string | null;
  createdByUserId: number | null;
  createdByName: string | null;
  createdByLastname: string | null;
  createdByFullName?: string | null;
}

export interface SetUserRolesBody {
  roleNames: string[];
}

/**
 * Body para POST /users (admin/manager invita un usuario nuevo).
 *
 * <p>Reglas server-side: si el llamador es MANAGER, los campos {@code roles} y
 * {@code organizationId} se ignoran (se fuerza ROLE_USER y la org del JWT del manager).
 * Si es ADMIN se respetan tal cual.
 */
export interface CreateUserBody {
  username: string;
  email: string;
  password: string;
  name: string;
  lastname: string;
  roles?: string[];
  organizationId?: number | null;
}

/** Body para PUT /users/{id} (admin edita datos basicos). Todos los campos opcionales. */
export interface UpdateUserBody {
  email?: string | null;
  name?: string | null;
  lastname?: string | null;
  organizationId?: number | null;
}

export type PermissionService = 'auth' | 'org' | 'document';

export interface PermissionDto {
  id: number;
  code: string;
  service: PermissionService | string;
  httpMethod: string;
  urlPattern: string;
  description: string;
}

export interface SetRolePermissionsBody {
  permissionIds: number[];
}

// =============================================================================
// Organizations (full CRUD)
// =============================================================================

/**
 * DTO completo devuelto por GET /org y GET /org/{id}.
 *
 * `createdByName` y `createdByLastname` se enriquecen en el backend via Feign al auth-service.
 * Si la llamada Feign falla (auth-service caido / timeout), llegan en `null` y la UI debe
 * hacer fallback al `createdByUserId`.
 */
export interface OrganizationDto {
  id: number;
  name: string;
  taxId: string;
  address: string;
  email: string;
  phone: string;
  active: boolean;
  planLimit: number;
  createdAt: string | null;
  createdByUserId: number | null;
  createdByName: string | null;
  createdByLastname: string | null;
  createdByFullName?: string | null;
}

/** Body para POST /org/create y PUT /org/{id}. */
export interface OrganizationRequest {
  name: string;
  taxId: string;
  address: string;
  email: string;
  phone: string;
  active: boolean;
  managerUserId?: number | null;
  planLimit: number;
}

// =============================================================================
// Locations (sedes) — gestionadas desde la pagina de Organizaciones.
// Endpoints expuestos en /org/locations/* (org_service).
// =============================================================================

export interface LocationDto {
  id: number;
  name: string;
  address: string | null;
  city: string | null;
  organizationId: number;
}


export interface LocationRequest {
  name: string;
  address: string | null;
  city: string | null;
  organizationId: number;
}

// =============================================================================
// Documents
// =============================================================================

export type DocumentStatus = 'ACTIVE' | 'EXPIRING' | 'EXPIRED' | 'ARCHIVED' | string;

export interface DocumentVersionDto {
  id?: number | null;
  versionNumber: number;
  fileUrl: string;
  fileSize: number;
  uploadedByUserId: number;
  createdAt: string | null;
}

export interface DocumentDto {
  id: number;
  name: string;
  documentTypeId: number;
  status: DocumentStatus;
  expirationDate: string | null;
  userId: number;
  organizationId: number | null;
  targetEntityType: string | null;
  targetEntityId: number | null;
  versions: DocumentVersionDto[];
}

export interface DocumentCreatePayload {
  name: string;
  documentTypeId: number;
  expirationDate?: string | null;
  targetEntityType?: string | null;
  targetEntityId?: number | null;
}

export interface DocumentTypeDto {
  id: number;
  name: string;
  description: string | null;
  active?: boolean;
}

export interface DocumentTypeUpsertRequest {
  name: string;
  description?: string | null;
}

/** Body para PATCH /documents/types/{id}/active (solo el flag). */
export interface DocumentTypeActivePatchBody {
  active: boolean;
}
export interface UserProfileDto {
  id: number;
  username: string;
  name: string;
  lastname: string;
}
