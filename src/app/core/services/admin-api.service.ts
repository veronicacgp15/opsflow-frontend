import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import {
  BackendRole,
  CreateUserBody,
  DocumentCreatePayload,
  DocumentDto,
  DocumentTypeDto,
  LocationDto,
  LocationRequest,
  OrganizationDto,
  OrganizationMineDto,
  OrganizationRequest,
  PermissionDto,
  SetRolePermissionsBody,
  SetUserRolesBody,
  UpdateUserBody,
  UserAdminDto,
  UserProfileDto
} from '../models/admin.models';
import { ChangePasswordRequest, MessageResponse } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AdminApiService {
  private readonly authBase = `${environment.apiUrl}/auth`;
  private readonly usersBase = `${environment.apiUrl}/users`;
  private readonly orgBase = `${environment.apiUrl}/org`;
  private readonly documentsBase = `${environment.apiUrl}/documents`;

  constructor(private http: HttpClient) {}

  listRoles(): Observable<BackendRole[]> {
    return this.http.get<BackendRole[]>(`${this.authBase}/roles`);
  }

  getRoleById(id: number): Observable<BackendRole> {
    return this.http.get<BackendRole>(`${this.authBase}/roles/${id}`);
  }

  createRole(name: string): Observable<BackendRole> {
    return this.http.post<BackendRole>(`${this.authBase}/roles/create`, { name });
  }

  updateRole(id: number, name: string): Observable<BackendRole> {
    return this.http.put<BackendRole>(`${this.authBase}/roles/${id}`, { name });
  }

  deleteRole(id: number): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`${this.authBase}/roles/${id}`);
  }

  listUsers(): Observable<UserAdminDto[]> {
    return this.http.get<UserAdminDto[]>(this.usersBase);
  }

  getUserById(id: number): Observable<UserAdminDto> {
    return this.http.get<UserAdminDto>(`${this.usersBase}/${id}`);
  }

  deactivateUser(id: number): Observable<MessageResponse> {
    return this.http.patch<MessageResponse>(`${this.usersBase}/${id}/deactivate`, {});
  }

  activateUser(id: number): Observable<MessageResponse> {
    return this.http.patch<MessageResponse>(`${this.usersBase}/${id}/activate`, {});
  }

  revokeUserSession(id: number): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(`${this.usersBase}/${id}/revoke-session`, {});
  }

  setUserRoles(userId: number, roleNames: string[]): Observable<MessageResponse> {
    const body: SetUserRolesBody = { roleNames };
    return this.http.put<MessageResponse>(`${this.authBase}/roles/users/${userId}/roles`, body);
  }

  // ---------------------------------------------------------------------------
  // User management endpoints (POST/PUT/PATCH/GET /users/...)
  // ---------------------------------------------------------------------------

  createUser(body: CreateUserBody): Observable<UserAdminDto> {
    return this.http.post<UserAdminDto>(this.usersBase, body);
  }

  /** Actualiza datos basicos de un usuario (ADMIN). Campos no enviados se preservan. */
  updateUser(id: number, body: UpdateUserBody): Observable<UserAdminDto> {
    return this.http.put<UserAdminDto>(`${this.usersBase}/${id}`, body);
  }

  /** Lista usuarios de la organizacion del JWT (MANAGER o ADMIN). */
  listMyOrganizationUsers(): Observable<UserAdminDto[]> {
    return this.http.get<UserAdminDto[]>(`${this.usersBase}/my-organization`);
  }

  listUsersByOrganization(orgId: number): Observable<UserAdminDto[]> {
    return this.http.get<UserAdminDto[]>(`${this.usersBase}/by-organization/${orgId}`);
  }

  assignOrganizationManager(orgId: number, userId: number): Observable<UserAdminDto> {
    return this.http.put<UserAdminDto>(`${this.usersBase}/organizations/${orgId}/manager/${userId}`, {});
  }

  /**
   * Cambia la contrasena del propio usuario autenticado. Verifica server-side que
   * {@code currentPassword} coincida.
   */
  changeMyPassword(body: ChangePasswordRequest): Observable<MessageResponse> {
    return this.http.patch<MessageResponse>(`${this.usersBase}/change-password`, body);
  }

  myOrganizations(): Observable<OrganizationMineDto[]> {
    return this.http.get<OrganizationMineDto[]>(`${this.orgBase}/mine`);
  }

  // ---------------------------------------------------------------------------
  // Organizations CRUD (gated en backend con @PreAuthorize por permiso)
  // ---------------------------------------------------------------------------

  listAllOrganizations(): Observable<OrganizationDto[]> {
    return this.http.get<OrganizationDto[]>(this.orgBase);
  }

  getOrganizationById(id: number): Observable<OrganizationDto> {
    return this.http.get<OrganizationDto>(`${this.orgBase}/${id}`);
  }

  createOrganization(body: OrganizationRequest): Observable<OrganizationDto> {
    return this.http.post<OrganizationDto>(`${this.orgBase}/create`, body);
  }

  updateOrganization(id: number, body: OrganizationRequest): Observable<OrganizationDto> {
    return this.http.put<OrganizationDto>(`${this.orgBase}/${id}`, body);
  }

  deleteOrganization(id: number): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`${this.orgBase}/${id}`);
  }

  /** Marca la organizacion como activa. Idempotente en el backend. */
  activateOrganization(id: number): Observable<OrganizationDto> {
    return this.http.patch<OrganizationDto>(`${this.orgBase}/${id}/activate`, {});
  }

  /** Marca la organizacion como inactiva. Idempotente en el backend. */
  deactivateOrganization(id: number): Observable<OrganizationDto> {
    return this.http.patch<OrganizationDto>(`${this.orgBase}/${id}/deactivate`, {});
  }

  // ---------------------------------------------------------------------------
  // Locations / sedes (CRUD asociado a una organizacion)
  // ---------------------------------------------------------------------------

  /** Sedes pertenecientes a una organizacion concreta. */
  listLocationsByOrganization(orgId: number): Observable<LocationDto[]> {
    return this.http.get<LocationDto[]>(`${this.orgBase}/locations/by-org/${orgId}`);
  }

  createLocation(body: LocationRequest): Observable<LocationDto> {
    return this.http.post<LocationDto>(`${this.orgBase}/locations/create`, body);
  }

  updateLocation(id: number, body: LocationRequest): Observable<LocationDto> {
    return this.http.put<LocationDto>(`${this.orgBase}/locations/${id}`, body);
  }

  deleteLocation(id: number): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`${this.orgBase}/locations/${id}`);
  }

  // ---------------------------------------------------------------------------
  // Documents
  // ---------------------------------------------------------------------------

  listDocuments(): Observable<DocumentDto[]> {
    return this.http.get<DocumentDto[]>(this.documentsBase);
  }

  getDocumentById(id: number): Observable<DocumentDto> {
    return this.http.get<DocumentDto>(`${this.documentsBase}/${id}`);
  }

  /**
   * El backend exige multipart/form-data con dos partes: `data` (JSON) + `file` (binario).
   * Importante: NO setear Content-Type manualmente para que el navegador escriba el boundary.
   */
  createDocument(payload: DocumentCreatePayload, file: File): Observable<DocumentDto> {
    const formData = new FormData();
    formData.append(
      'data',
      new Blob([JSON.stringify(payload)], { type: 'application/json' })
    );
    formData.append('file', file);
    return this.http.post<DocumentDto>(`${this.documentsBase}/create`, formData);
  }

  deleteDocument(id: number): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`${this.documentsBase}/${id}`);
  }

  forceDocumentState(id: number, state: string): Observable<DocumentDto> {
    return this.http.patch<DocumentDto>(
      `${this.documentsBase}/${id}/force-state`,
      null,
      { params: { state } }
    );
  }

  /** Catalogo de tipos de documento. La pagina lo usa para mostrar nombre en vez de id. */
  listDocumentTypes(): Observable<DocumentTypeDto[]> {
    return this.http.get<DocumentTypeDto[]>(`${this.documentsBase}/types`);
  }

  /**
   * Descarga la ultima version del documento. Usamos {@code observe: 'response'} para poder
   * leer el header {@code Content-Disposition} y extraer el filename original.
   */
  downloadDocumentLatest(id: number): Observable<HttpResponse<Blob>> {
    return this.http.get(`${this.documentsBase}/${id}/download`, {
      observe: 'response',
      responseType: 'blob'
    });
  }

  /** Descarga una version especifica del documento. Mismo formato que {@link downloadDocumentLatest}. */
  downloadDocumentVersion(docId: number, versionId: number): Observable<HttpResponse<Blob>> {
    return this.http.get(
      `${this.documentsBase}/${docId}/versions/${versionId}/download`,
      { observe: 'response', responseType: 'blob' }
    );
  }

  /**
   * Sube una nueva version del documento {@code docId}. El backend admite ADMIN, MANAGER y
   * USER (este ultimo solo si es el dueno del documento), reglas verificadas en el server.
   *
   * Importante: NO seteamos Content-Type para que el navegador escriba el boundary correcto
   * del multipart automaticamente.
   */
  uploadNewDocumentVersion(docId: number, file: File): Observable<DocumentDto> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<DocumentDto>(
      `${this.documentsBase}/add-version/${docId}`,
      formData
    );
  }

  deleteDocumentVersion(docId: number, versionId: number): Observable<DocumentDto> {
    return this.http.delete<DocumentDto>(
      `${this.documentsBase}/${docId}/versions/${versionId}`
    );
  }

  getUserProfilesBatch(ids: number[]): Observable<UserProfileDto[]> {
    return this.http.post<UserProfileDto[]>(`${this.usersBase}/profiles/batch`, ids);
  }

  // ---------------------------------------------------------------------------
  // Permissions (catalog + per-role assignment)
  // ---------------------------------------------------------------------------

  listPermissions(): Observable<PermissionDto[]> {
    return this.http.get<PermissionDto[]>(`${this.authBase}/permissions`);
  }

  getRolePermissions(roleId: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.authBase}/roles/${roleId}/permissions`);
  }

  setRolePermissions(roleId: number, permissionIds: number[]): Observable<MessageResponse> {
    const body: SetRolePermissionsBody = { permissionIds };
    return this.http.put<MessageResponse>(
      `${this.authBase}/roles/${roleId}/permissions`,
      body
    );
  }
}
