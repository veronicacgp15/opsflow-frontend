import {
  environment
} from "./chunk-BSOZ4HA7.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-6KLI64HZ.js";

// src/app/core/services/admin-api.service.ts
var AdminApiService = class _AdminApiService {
  http;
  authBase = `${environment.apiUrl}/auth`;
  usersBase = `${environment.apiUrl}/users`;
  orgBase = `${environment.apiUrl}/org`;
  documentsBase = `${environment.apiUrl}/documents`;
  constructor(http) {
    this.http = http;
  }
  listRoles() {
    return this.http.get(`${this.authBase}/roles`);
  }
  getRoleById(id) {
    return this.http.get(`${this.authBase}/roles/${id}`);
  }
  createRole(name) {
    return this.http.post(`${this.authBase}/roles/create`, { name });
  }
  updateRole(id, name) {
    return this.http.put(`${this.authBase}/roles/${id}`, { name });
  }
  deleteRole(id) {
    return this.http.delete(`${this.authBase}/roles/${id}`);
  }
  listUsers() {
    return this.http.get(this.usersBase);
  }
  getUserById(id) {
    return this.http.get(`${this.usersBase}/${id}`);
  }
  deactivateUser(id) {
    return this.http.patch(`${this.usersBase}/${id}/deactivate`, {});
  }
  activateUser(id) {
    return this.http.patch(`${this.usersBase}/${id}/activate`, {});
  }
  revokeUserSession(id) {
    return this.http.post(`${this.usersBase}/${id}/revoke-session`, {});
  }
  setUserRoles(userId, roleNames) {
    const body = { roleNames };
    return this.http.put(`${this.authBase}/roles/users/${userId}/roles`, body);
  }
  // ---------------------------------------------------------------------------
  // User management endpoints (POST/PUT/PATCH/GET /users/...)
  // ---------------------------------------------------------------------------
  /**
   * Crea/invita un usuario. ADMIN o MANAGER.
   * El backend determina por rol del JWT cómo se aplican {@code roles} y {@code organizationId}.
   */
  createUser(body) {
    return this.http.post(this.usersBase, body);
  }
  /** Actualiza datos basicos de un usuario (ADMIN). Campos no enviados se preservan. */
  updateUser(id, body) {
    return this.http.put(`${this.usersBase}/${id}`, body);
  }
  /** Lista usuarios de la organizacion del JWT (MANAGER o ADMIN). */
  listMyOrganizationUsers() {
    return this.http.get(`${this.usersBase}/my-organization`);
  }
  listUsersByOrganization(orgId) {
    return this.http.get(`${this.usersBase}/by-organization/${orgId}`);
  }
  assignOrganizationManager(orgId, userId) {
    return this.http.put(`${this.usersBase}/organizations/${orgId}/manager/${userId}`, {});
  }
  /**
   * Cambia la contrasena del propio usuario autenticado. Verifica server-side que
   * {@code currentPassword} coincida.
   */
  changeMyPassword(body) {
    return this.http.patch(`${this.usersBase}/change-password`, body);
  }
  myOrganizations() {
    return this.http.get(`${this.orgBase}/mine`);
  }
  // ---------------------------------------------------------------------------
  // Organizations CRUD (gated en backend con @PreAuthorize por permiso)
  // ---------------------------------------------------------------------------
  listAllOrganizations() {
    return this.http.get(this.orgBase);
  }
  getOrganizationById(id) {
    return this.http.get(`${this.orgBase}/${id}`);
  }
  createOrganization(body) {
    return this.http.post(`${this.orgBase}/create`, body);
  }
  updateOrganization(id, body) {
    return this.http.put(`${this.orgBase}/${id}`, body);
  }
  deleteOrganization(id) {
    return this.http.delete(`${this.orgBase}/${id}`);
  }
  /** Marca la organizacion como activa. Idempotente en el backend. */
  activateOrganization(id) {
    return this.http.patch(`${this.orgBase}/${id}/activate`, {});
  }
  /** Marca la organizacion como inactiva. Idempotente en el backend. */
  deactivateOrganization(id) {
    return this.http.patch(`${this.orgBase}/${id}/deactivate`, {});
  }
  // ---------------------------------------------------------------------------
  // Locations / sedes (CRUD asociado a una organizacion)
  // ---------------------------------------------------------------------------
  /** Sedes pertenecientes a una organizacion concreta. */
  listLocationsByOrganization(orgId) {
    return this.http.get(`${this.orgBase}/locations/by-org/${orgId}`);
  }
  createLocation(body) {
    return this.http.post(`${this.orgBase}/locations/create`, body);
  }
  updateLocation(id, body) {
    return this.http.put(`${this.orgBase}/locations/${id}`, body);
  }
  deleteLocation(id) {
    return this.http.delete(`${this.orgBase}/locations/${id}`);
  }
  // ---------------------------------------------------------------------------
  // Documents
  // ---------------------------------------------------------------------------
  listDocuments() {
    return this.http.get(this.documentsBase);
  }
  getDocumentById(id) {
    return this.http.get(`${this.documentsBase}/${id}`);
  }
  /**
   * El backend exige multipart/form-data con dos partes: `data` (JSON) + `file` (binario).
   * Importante: NO setear Content-Type manualmente para que el navegador escriba el boundary.
   */
  createDocument(payload, file) {
    const formData = new FormData();
    formData.append("data", new Blob([JSON.stringify(payload)], { type: "application/json" }));
    formData.append("file", file);
    return this.http.post(`${this.documentsBase}/create`, formData);
  }
  deleteDocument(id) {
    return this.http.delete(`${this.documentsBase}/${id}`);
  }
  forceDocumentState(id, state) {
    return this.http.patch(`${this.documentsBase}/${id}/force-state`, null, { params: { state } });
  }
  /** Catalogo de tipos de documento. La pagina lo usa para mostrar nombre en vez de id. */
  listDocumentTypes() {
    return this.http.get(`${this.documentsBase}/types`);
  }
  /**
   * Descarga la ultima version del documento. Usamos {@code observe: 'response'} para poder
   * leer el header {@code Content-Disposition} y extraer el filename original.
   */
  downloadDocumentLatest(id) {
    return this.http.get(`${this.documentsBase}/${id}/download`, {
      observe: "response",
      responseType: "blob"
    });
  }
  /** Descarga una version especifica del documento. Mismo formato que {@link downloadDocumentLatest}. */
  downloadDocumentVersion(docId, versionId) {
    return this.http.get(`${this.documentsBase}/${docId}/versions/${versionId}/download`, { observe: "response", responseType: "blob" });
  }
  /**
   * Sube una nueva version del documento {@code docId}. El backend admite ADMIN, MANAGER y
   * USER (este ultimo solo si es el dueno del documento), reglas verificadas en el server.
   *
   * Importante: NO seteamos Content-Type para que el navegador escriba el boundary correcto
   * del multipart automaticamente.
   */
  uploadNewDocumentVersion(docId, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.documentsBase}/add-version/${docId}`, formData);
  }
  deleteDocumentVersion(docId, versionId) {
    return this.http.delete(`${this.documentsBase}/${docId}/versions/${versionId}`);
  }
  /**
   * Resuelve nombre+apellido para un conjunto de userIds en una sola llamada (POST batch).
   * Lo usa el listado de documentos para mostrar el nombre del "Subido por" en vez del id.
   */
  getUserProfilesBatch(ids) {
    return this.http.post(`${this.usersBase}/profiles/batch`, ids);
  }
  // ---------------------------------------------------------------------------
  // Permissions (catalog + per-role assignment)
  // ---------------------------------------------------------------------------
  listPermissions() {
    return this.http.get(`${this.authBase}/permissions`);
  }
  getRolePermissions(roleId) {
    return this.http.get(`${this.authBase}/roles/${roleId}/permissions`);
  }
  setRolePermissions(roleId, permissionIds) {
    const body = { permissionIds };
    return this.http.put(`${this.authBase}/roles/${roleId}/permissions`, body);
  }
  static \u0275fac = function AdminApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminApiService, factory: _AdminApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AdminApiService
};
//# sourceMappingURL=chunk-I4FVVWEF.js.map
