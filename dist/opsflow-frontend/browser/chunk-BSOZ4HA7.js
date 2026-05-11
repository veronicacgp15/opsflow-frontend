import {
  HttpClient,
  Injectable,
  Router,
  catchError,
  computed,
  setClassMetadata,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-6KLI64HZ.js";

// src/environments/environment.ts
var environment = {
  production: false,
  // During local development requests go through Angular proxy (/api -> gateway :8080)
  apiUrl: "/api",
  tokenKey: "opsflow_token",
  refreshTokenKey: "opsflow_refresh_token",
  userKey: "opsflow_user",
  permissionsKey: "opsflow_permissions",
  /** Documentacion agregada del API Gateway (ajusta puerto si difiere) */
  gatewayDocsUrl: "http://localhost:8080/swagger-ui.html"
};

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  apiUrl = `${environment.apiUrl}/auth`;
  // Signals for reactive state management
  currentUserSignal = signal(null);
  isAuthenticatedSignal = signal(false);
  isLoadingSignal = signal(false);
  permissionsSignal = signal(/* @__PURE__ */ new Set());
  // Public computed signals
  currentUser = this.currentUserSignal.asReadonly();
  isAuthenticated = this.isAuthenticatedSignal.asReadonly();
  isLoading = this.isLoadingSignal.asReadonly();
  /** Conjunto de permission codes efectivos del usuario logueado. */
  permissions = this.permissionsSignal.asReadonly();
  /** Nombres de rol normalizados (ROLE_*) segun el JWT */
  userRoles = computed(() => {
    const roles = this.currentUserSignal()?.roles ?? [];
    return roles.map((r) => this.normalizeRoleName(r.name));
  });
  /** Rol principal para etiquetas (prioriza ADMIN > MANAGER > USER) */
  userRole = computed(() => {
    const roles = this.userRoles();
    if (roles.includes("ROLE_ADMIN"))
      return "ROLE_ADMIN";
    if (roles.includes("ROLE_MANAGER"))
      return "ROLE_MANAGER";
    if (roles.includes("ROLE_USER"))
      return "ROLE_USER";
    return roles[0] ?? null;
  });
  isAdmin = computed(() => this.hasRole("ROLE_ADMIN"));
  isManager = computed(() => this.hasRole("ROLE_MANAGER"));
  isUser = computed(() => this.hasRole("ROLE_USER"));
  fullName = computed(() => {
    const user = this.currentUserSignal();
    return user ? `${user.name} ${user.lastname}` : "";
  });
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.loadUserFromStorage();
  }
  loadUserFromStorage() {
    const token = this.getToken();
    const userJson = localStorage.getItem(environment.userKey);
    if (token && userJson) {
      try {
        const user = JSON.parse(userJson);
        this.currentUserSignal.set(user);
        this.isAuthenticatedSignal.set(true);
        this.hydratePermissionsFromCache();
        this.fetchPermissions();
      } catch {
        this.clearStorage();
      }
    }
  }
  /**
   * Restaura el set de permisos desde localStorage. Si no hay cache o esta corrupto, deja el
   * signal en su estado inicial (vacio) sin lanzar errores.
   */
  hydratePermissionsFromCache() {
    const cached = localStorage.getItem(environment.permissionsKey);
    if (!cached)
      return;
    try {
      const codes = JSON.parse(cached);
      if (Array.isArray(codes)) {
        this.permissionsSignal.set(new Set(codes));
      }
    } catch {
      localStorage.removeItem(environment.permissionsKey);
    }
  }
  /**
   * Pide al backend la union de los permission codes efectivos del usuario logueado, los
   * almacena en {@link permissions} y los persiste en localStorage para rehidratar al instante
   * en el proximo arranque.
   *
   * Politica ante error: si ya tenemos un set hidratado desde cache lo conservamos (un blip de
   * red no debe vaciar el menu). Solo si nunca tuvimos permisos limpiamos el set.
   */
  fetchPermissions() {
    this.http.get(`${this.apiUrl}/me/permissions`).subscribe({
      next: (codes) => {
        this.permissionsSignal.set(new Set(codes));
        try {
          localStorage.setItem(environment.permissionsKey, JSON.stringify(codes));
        } catch {
        }
      },
      error: () => {
        if (this.permissionsSignal().size === 0) {
          this.permissionsSignal.set(/* @__PURE__ */ new Set());
        }
      }
    });
  }
  login(credentials) {
    this.isLoadingSignal.set(true);
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(tap((response) => {
      this.handleAuthSuccess(response);
    }), catchError((error) => this.handleError(error)), tap(() => this.isLoadingSignal.set(false)));
  }
  register(data) {
    this.isLoadingSignal.set(true);
    return this.http.post(`${this.apiUrl}/signup`, data).pipe(catchError((error) => this.handleError(error)), tap(() => this.isLoadingSignal.set(false)));
  }
  verifyEmail(token) {
    return this.http.get(`${this.apiUrl}/verify`, {
      params: { token }
    }).pipe(catchError((error) => this.handleError(error)));
  }
  /** Renueva access token con el refresh guardado (mismo flujo que el interceptor). */
  refreshAccessToken() {
    return this.refreshToken();
  }
  /** Hash BCrypt (solo administrador; requiere JWT). */
  generatePasswordHash(plainPassword) {
    return this.http.get(`${environment.apiUrl}/users/tools/password-hash`, {
      params: { password: plainPassword },
      responseType: "text"
    }).pipe(catchError((error) => this.handleError(error)));
  }
  refreshToken() {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error("No refresh token available"));
    }
    const request = { refreshToken };
    return this.http.post(`${this.apiUrl}/refresh`, request).pipe(tap((response) => {
      this.setToken(response.accessToken);
      this.setRefreshToken(response.refreshToken);
    }), catchError((error) => {
      this.logout();
      return this.handleError(error);
    }));
  }
  requestPasswordReset(email) {
    const request = { email };
    return this.http.post(`${this.apiUrl}/forgot-password`, request).pipe(catchError((error) => this.handleError(error)));
  }
  resetPassword(token, newPassword) {
    const request = { token, newPassword };
    return this.http.post(`${this.apiUrl}/reset-password`, request).pipe(catchError((error) => this.handleError(error)));
  }
  changePassword(currentPassword, newPassword) {
    const request = { currentPassword, newPassword };
    return this.http.post(`${this.apiUrl}/change-password`, request).pipe(catchError((error) => this.handleError(error)));
  }
  logout() {
    this.http.post(`${this.apiUrl}/logout`, {}).subscribe({
      complete: () => this.performLogout(),
      error: () => this.performLogout()
    });
  }
  performLogout() {
    this.clearStorage();
    this.currentUserSignal.set(null);
    this.isAuthenticatedSignal.set(false);
    this.permissionsSignal.set(/* @__PURE__ */ new Set());
    const path = this.router.url.split("?")[0];
    if (path.includes("/auth/reset-password") || path.includes("/auth/verify")) {
      return;
    }
    this.router.navigate(["/auth/login"]);
  }
  handleAuthSuccess(response) {
    this.setToken(response.token);
    if (response.refreshToken) {
      this.setRefreshToken(response.refreshToken);
    }
    const user = {
      id: response.id,
      username: response.username,
      email: response.email,
      name: response.username,
      lastname: "",
      enabled: true,
      roles: this.mapRoles(response.roles)
    };
    localStorage.setItem(environment.userKey, JSON.stringify(user));
    this.currentUserSignal.set(user);
    this.isAuthenticatedSignal.set(true);
    this.fetchPermissions();
  }
  handleError(error) {
    this.isLoadingSignal.set(false);
    let errorMessage = "Ha ocurrido un error inesperado";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.status === 401) {
      errorMessage = "Credenciales incorrectas";
    } else if (error.status === 403) {
      errorMessage = "No tienes permisos para realizar esta accion";
    } else if (error.status === 404) {
      errorMessage = "Recurso no encontrado";
    } else if (error.status === 500) {
      errorMessage = "Error del servidor";
    }
    return throwError(() => new Error(errorMessage));
  }
  // Token management
  getToken() {
    return localStorage.getItem(environment.tokenKey);
  }
  setToken(token) {
    localStorage.setItem(environment.tokenKey, token);
  }
  getRefreshToken() {
    return localStorage.getItem(environment.refreshTokenKey);
  }
  setRefreshToken(token) {
    localStorage.setItem(environment.refreshTokenKey, token);
  }
  clearStorage() {
    localStorage.removeItem(environment.tokenKey);
    localStorage.removeItem(environment.refreshTokenKey);
    localStorage.removeItem(environment.userKey);
    localStorage.removeItem(environment.permissionsKey);
  }
  // Role checking utilities
  hasRole(role) {
    return this.currentUserSignal()?.roles.some((userRole) => userRole.name === role) ?? false;
  }
  hasAnyRole(roles) {
    const normalizedRequired = roles.map((role) => this.normalizeRoleName(role));
    const userRoles = this.currentUserSignal()?.roles.map((role) => this.normalizeRoleName(role.name)) ?? [];
    return normalizedRequired.some((role) => userRoles.includes(role));
  }
  // Permission checking utilities
  /** True si el usuario logueado tiene el permission code indicado. */
  hasPermission(code) {
    return this.permissionsSignal().has(code);
  }
  /** True si el usuario logueado tiene al menos uno de los permission codes indicados. */
  hasAnyPermission(codes) {
    const set = this.permissionsSignal();
    return codes.some((c) => set.has(c));
  }
  /** True si el usuario logueado tiene todos los permission codes indicados. */
  hasAllPermissions(codes) {
    const set = this.permissionsSignal();
    return codes.every((c) => set.has(c));
  }
  /** Hace una recarga manual del set de permisos (util tras un cambio admin). */
  reloadPermissions() {
    this.fetchPermissions();
  }
  /**
   * Construye la lista {@link Role} para el {@link User} guardado en sesion.
   *
   * <p>El JWT del backend trae como claim {@code roles} TODAS las authorities (rol(es) +
   * permission codes que el {@code JpaUserDetailsService} expandio para que el motor de
   * autorizacion pueda usar {@code hasAuthority('ORG_DEACTIVATE')}). Aqui solo nos interesan
   * los nombres de rol "reales" (los que empiezan por {@code ROLE_}), para no contaminar la
   * tarjeta "Roles asignados" del dashboard ni los chequeos {@link hasRole}.
   */
  mapRoles(roleNames) {
    return roleNames.filter((name) => typeof name === "string" && name.startsWith("ROLE_")).map((roleName, index) => ({
      id: index + 1,
      name: roleName
    }));
  }
  normalizeRoleName(role) {
    return role.startsWith("ROLE_") ? role : `ROLE_${role}`;
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  environment,
  AuthService
};
//# sourceMappingURL=chunk-BSOZ4HA7.js.map
