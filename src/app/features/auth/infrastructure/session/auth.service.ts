import { Injectable, signal, computed, inject, Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, finalize, shareReplay } from 'rxjs/operators';
import { SESSION_EXPIRED_MESSAGE } from '@platform/http/api-error.util';
import { environment } from '@env/environment';
import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  User,
  UserRole,
  RefreshTokenRequest,
  RefreshTokenResponse,
  PasswordResetRequest,
  PasswordResetConfirm,
  ChangePasswordRequest,
  ApiResponse,
  MessageResponse,
  Role,
  UsernameAvailabilityResponse
} from '@features/auth/domain/models/auth.types';
import { isJwtExpired, looksLikeJwt } from './jwt.util';
import { SessionActivityService } from './session-activity.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;
  private readonly injector = inject(Injector);
  /** Almacen activo de la sesion actual (sessionStorage o localStorage). */
  private activeStorage: Storage | null = null;
  /** Evita multiples llamadas simultaneas a /auth/refresh. */
  private refreshInFlight$: Observable<RefreshTokenResponse> | null = null;

  private currentUserSignal = signal<User | null>(null);
  private isAuthenticatedSignal = signal<boolean>(false);
  private isLoadingSignal = signal<boolean>(false);
  private permissionsSignal = signal<ReadonlySet<string>>(new Set());

  readonly currentUser = this.currentUserSignal.asReadonly();
  readonly isAuthenticated = this.isAuthenticatedSignal.asReadonly();
  readonly isLoading = this.isLoadingSignal.asReadonly();
  readonly permissions = this.permissionsSignal.asReadonly();

  readonly userRoles = computed<string[]>(() => {
    const roles = this.currentUserSignal()?.roles ?? [];
    return roles.map(r => this.normalizeRoleName(r.name));
  });

  readonly userRole = computed<UserRole | null>(() => {
    const roles = this.userRoles();
    if (roles.includes('ROLE_ADMIN')) return 'ROLE_ADMIN';
    if (roles.includes('ROLE_MANAGER')) return 'ROLE_MANAGER';
    if (roles.includes('ROLE_USER')) return 'ROLE_USER';
    return roles[0] ?? null;
  });
  readonly isAdmin = computed(() => this.hasRole('ROLE_ADMIN'));
  readonly isManager = computed(() => this.hasRole('ROLE_MANAGER'));
  readonly isUser = computed(() => this.hasRole('ROLE_USER'));
  readonly fullName = computed(() => {
    const user = this.currentUserSignal();
    return user ? `${user.name} ${user.lastname}` : '';
  });

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    this.purgeLegacyLocalStorageSession();

    const persisted = this.readPersistedAuth();
    if (!persisted) {
      return;
    }

    const { storage, token, userJson } = persisted;
    this.activeStorage = storage;

    if (isJwtExpired(token)) {
      const refresh = storage.getItem(environment.refreshTokenKey);
      if (!refresh) {
        this.resetSessionState();
        return;
      }
      queueMicrotask(() => this.tryRestoreSessionViaRefresh());
      return;
    }

    try {
      const user = JSON.parse(userJson) as User;
      this.currentUserSignal.set(user);
      this.isAuthenticatedSignal.set(true);
      this.hydratePermissionsFromCache(storage);
      this.fetchPermissions();
      this.startSessionWatch();
    } catch {
      this.resetSessionState();
    }
  }

  private purgeLegacyLocalStorageSession(): void {
    const remembered = localStorage.getItem(environment.rememberSessionKey) === 'true';
    if (!remembered && localStorage.getItem(environment.tokenKey)) {
      this.clearStorageIn(localStorage);
    }
  }

  private readPersistedAuth(): { storage: Storage; token: string; userJson: string } | null {
    const sessionToken = sessionStorage.getItem(environment.tokenKey);
    const sessionUser = sessionStorage.getItem(environment.userKey);
    if (sessionToken && sessionUser) {
      return { storage: sessionStorage, token: sessionToken, userJson: sessionUser };
    }

    const remembered = localStorage.getItem(environment.rememberSessionKey) === 'true';
    if (!remembered) {
      return null;
    }

    const token = localStorage.getItem(environment.tokenKey);
    const userJson = localStorage.getItem(environment.userKey);
    if (token && userJson) {
      return { storage: localStorage, token, userJson };
    }
    return null;
  }

  private tryRestoreSessionViaRefresh(): void {
    this.refreshToken().subscribe({
      next: () => {
        const userJson = this.activeStorage?.getItem(environment.userKey);
        if (!userJson) {
          this.resetSessionState();
          return;
        }
        try {
          const user = JSON.parse(userJson) as User;
          this.currentUserSignal.set(user);
          this.isAuthenticatedSignal.set(true);
          this.hydratePermissionsFromCache(this.activeStorage!);
          this.fetchPermissions();
          this.startSessionWatch();
        } catch {
          this.resetSessionState();
        }
      },
      error: () => this.resetSessionState()
    });
  }

  private hydratePermissionsFromCache(storage: Storage): void {
    const cached = storage.getItem(environment.permissionsKey);
    if (!cached) return;
    try {
      const codes = JSON.parse(cached) as string[];
      if (Array.isArray(codes)) {
        this.permissionsSignal.set(new Set(codes));
      }
    } catch {
      storage.removeItem(environment.permissionsKey);
    }
  }

  private fetchPermissions(): void {
    if (!this.getToken()) {
      return;
    }
    this.http.get<string[]>(`${this.apiUrl}/me/permissions`).subscribe({
      next: codes => {
        this.permissionsSignal.set(new Set(codes));
        try {
          this.activeStorage?.setItem(environment.permissionsKey, JSON.stringify(codes));
        } catch {
          /* quota */
        }
      },
      error: () => {
        if (this.permissionsSignal().size === 0) {
          this.permissionsSignal.set(new Set());
        }
      }
    });
  }

  login(credentials: LoginRequest, rememberMe = false): Observable<AuthResponse> {
    this.isLoadingSignal.set(true);

    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: AuthResponse) => {
        this.handleAuthSuccess(response, rememberMe);
      }),
      catchError(error => this.handleError(error, 'login')),
      tap(() => this.isLoadingSignal.set(false))
    );
  }

  /** Comprueba si el username esta libre (min. 3 caracteres en el cliente). */
  checkUsernameAvailable(username: string): Observable<boolean> {
    const value = username.trim();
    return this.http
      .get<UsernameAvailabilityResponse>(`${this.apiUrl}/check-username`, {
        params: { username: value }
      })
      .pipe(map(res => res.available));
  }

  register(data: RegisterRequest): Observable<MessageResponse> {
    this.isLoadingSignal.set(true);

    return this.http.post<MessageResponse>(`${this.apiUrl}/signup`, data).pipe(
      catchError(error => this.handleError(error)),
      tap(() => this.isLoadingSignal.set(false))
    );
  }

  verifyEmail(token: string): Observable<MessageResponse> {
    return this.http.get<MessageResponse>(`${this.apiUrl}/verify`, {
      params: { token }
    }).pipe(
      catchError(error => this.handleError(error))
    );
  }

  refreshAccessToken(): Observable<RefreshTokenResponse> {
    return this.refreshToken();
  }

  /** Renovacion en segundo plano (no cierra sesion si falla). */
  refreshTokenSilently(): void {
    if (!this.getRefreshToken()) {
      return;
    }
    this.refreshToken().subscribe({ error: () => undefined });
  }

  generatePasswordHash(plainPassword: string): Observable<string> {
    return this.http
      .get(`${environment.apiUrl}/users/tools/password-hash`, {
        params: { password: plainPassword },
        responseType: 'text'
      })
      .pipe(catchError(error => this.handleError(error)));
  }

  refreshToken(): Observable<RefreshTokenResponse> {
    if (this.refreshInFlight$) {
      return this.refreshInFlight$;
    }

    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error(SESSION_EXPIRED_MESSAGE));
    }

    const request: RefreshTokenRequest = {
      refreshToken,
      accessToken: this.getToken() ?? undefined
    };

    this.refreshInFlight$ = this.http
      .post<RefreshTokenResponse>(`${this.apiUrl}/refresh`, request)
      .pipe(
        tap((response: RefreshTokenResponse) => {
          const access = this.resolveAccessToken(response);
          this.writeTokens(access, response.refreshToken || refreshToken);
        }),
        shareReplay(1),
        finalize(() => {
          this.refreshInFlight$ = null;
        }),
        catchError(error => this.handleError(error))
      );

    return this.refreshInFlight$;
  }

  private resolveAccessToken(
    response: RefreshTokenResponse & { token?: string }
  ): string {
    const access = response.accessToken ?? response.token;
    if (!access || !looksLikeJwt(access)) {
      throw new Error('Respuesta de renovacion de token invalida.');
    }
    return access;
  }

  private resolveLoginAccessToken(response: AuthResponse & { accessToken?: string }): string {
    const access = response.token ?? response.accessToken;
    if (!access || !looksLikeJwt(access)) {
      throw new Error('Respuesta de login sin token de acceso valido.');
    }
    return access;
  }

  requestPasswordReset(email: string): Observable<MessageResponse> {
    const request: PasswordResetRequest = { email };
    return this.http.post<MessageResponse>(`${this.apiUrl}/forgot-password`, request).pipe(
      catchError(error => this.handleError(error))
    );
  }

  resetPassword(token: string, newPassword: string): Observable<MessageResponse> {
    const request: PasswordResetConfirm = { token, newPassword };
    return this.http.post<MessageResponse>(`${this.apiUrl}/reset-password`, request).pipe(
      catchError(error => this.handleError(error))
    );
  }

  changePassword(currentPassword: string, newPassword: string): Observable<ApiResponse<void>> {
    const request: ChangePasswordRequest = { currentPassword, newPassword };
    return this.http.post<ApiResponse<void>>(`${this.apiUrl}/change-password`, request).pipe(
      catchError(error => this.handleError(error))
    );
  }

  /** Cierre por inactividad (sin llamar al API de logout). */
  logoutDueToInactivity(): void {
    this.stopSessionWatch();
    this.resetSessionState();
    void this.router.navigate(['/auth/login'], {
      queryParams: { reason: 'inactivity' }
    });
  }

  logout(): void {
    this.stopSessionWatch();
    const token = this.getToken();
    if (!token) {
      this.resetSessionState();
      this.navigateAfterLogout();
      return;
    }

    this.http.post(`${this.apiUrl}/logout`, {}).subscribe({
      complete: () => {
        this.resetSessionState();
        this.navigateAfterLogout();
      },
      error: () => {
        this.resetSessionState();
        this.navigateAfterLogout();
      }
    });
  }

  private navigateAfterLogout(): void {
    const path = this.router.url.split('?')[0];
    if (path.includes('/auth/reset-password') || path.includes('/auth/verify')) {
      return;
    }
    void this.router.navigate(['/auth/login']);
  }

  private handleAuthSuccess(response: AuthResponse, rememberMe: boolean): void {
    const storage = rememberMe ? localStorage : sessionStorage;
    const other = rememberMe ? sessionStorage : localStorage;
    this.activeStorage = storage;
    this.clearStorageIn(other);

    if (rememberMe) {
      localStorage.setItem(environment.rememberSessionKey, 'true');
    } else {
      localStorage.removeItem(environment.rememberSessionKey);
    }

    const access = this.resolveLoginAccessToken(response);
    this.writeTokens(access, response.refreshToken);

    const user: User = {
      id: response.id,
      username: response.username,
      email: response.email,
      name: response.username,
      lastname: '',
      enabled: true,
      roles: this.mapRoles(response.roles)
    };

    storage.setItem(environment.userKey, JSON.stringify(user));
    this.currentUserSignal.set(user);
    this.isAuthenticatedSignal.set(true);
    this.fetchPermissions();
    this.startSessionWatch();
  }

  private writeTokens(access: string, refresh?: string): void {
    if (!this.activeStorage) {
      const remembered = localStorage.getItem(environment.rememberSessionKey) === 'true';
      this.activeStorage = remembered ? localStorage : sessionStorage;
    }
    this.activeStorage.setItem(environment.tokenKey, access);
    if (refresh) {
      this.activeStorage.setItem(environment.refreshTokenKey, refresh);
    }
  }

  private handleError(
    error: HttpErrorResponse,
    context: 'login' | 'session' = 'session'
  ): Observable<never> {
    this.isLoadingSignal.set(false);

    let errorMessage = 'Ha ocurrido un error inesperado';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.status === 401) {
      errorMessage =
        context === 'login' ? 'Credenciales incorrectas' : SESSION_EXPIRED_MESSAGE;
    } else if (error.status === 403) {
      errorMessage = 'No tienes permisos para realizar esta accion';
    } else if (error.status === 404) {
      errorMessage = 'Recurso no encontrado';
    } else if (error.status === 500) {
      errorMessage = 'Error del servidor';
    }

    return throwError(() => new Error(errorMessage));
  }

  getToken(): string | null {
    const raw =
      this.activeStorage?.getItem(environment.tokenKey) ??
      sessionStorage.getItem(environment.tokenKey) ??
      (localStorage.getItem(environment.rememberSessionKey) === 'true'
        ? localStorage.getItem(environment.tokenKey)
        : null);

    if (!raw || !looksLikeJwt(raw)) {
      return null;
    }
    return raw;
  }

  getRefreshToken(): string | null {
    return (
      this.activeStorage?.getItem(environment.refreshTokenKey) ??
      sessionStorage.getItem(environment.refreshTokenKey) ??
      (localStorage.getItem(environment.rememberSessionKey) === 'true'
        ? localStorage.getItem(environment.refreshTokenKey)
        : null)
    );
  }

  private clearStorageIn(storage: Storage): void {
    storage.removeItem(environment.tokenKey);
    storage.removeItem(environment.refreshTokenKey);
    storage.removeItem(environment.userKey);
    storage.removeItem(environment.permissionsKey);
  }

  private resetSessionState(): void {
    this.stopSessionWatch();
    this.clearAllStorages();
    this.currentUserSignal.set(null);
    this.isAuthenticatedSignal.set(false);
    this.permissionsSignal.set(new Set());
  }

  private clearAllStorages(): void {
    this.clearStorageIn(localStorage);
    this.clearStorageIn(sessionStorage);
    localStorage.removeItem(environment.rememberSessionKey);
    this.activeStorage = null;
  }

  private startSessionWatch(): void {
    try {
      this.injector.get(SessionActivityService).start();
    } catch {
      /* SSR o arranque temprano */
    }
  }

  private stopSessionWatch(): void {
    try {
      this.injector.get(SessionActivityService).stop();
    } catch {
      /* noop */
    }
  }

  hasRole(role: UserRole): boolean {
    return this.currentUserSignal()?.roles.some(userRole => userRole.name === role) ?? false;
  }

  hasAnyRole(roles: string[]): boolean {
    const normalizedRequired = roles.map(role => this.normalizeRoleName(role));
    const userRoles =
      this.currentUserSignal()?.roles.map(role => this.normalizeRoleName(role.name)) ?? [];
    return normalizedRequired.some(role => userRoles.includes(role));
  }

  hasPermission(code: string): boolean {
    return this.permissionsSignal().has(code);
  }

  hasAnyPermission(codes: string[]): boolean {
    const set = this.permissionsSignal();
    return codes.some(c => set.has(c));
  }

  hasAllPermissions(codes: string[]): boolean {
    const set = this.permissionsSignal();
    return codes.every(c => set.has(c));
  }

  reloadPermissions(): void {
    this.fetchPermissions();
  }

  private mapRoles(roleNames: string[]): Role[] {
    return roleNames
      .filter(name => typeof name === 'string' && name.startsWith('ROLE_'))
      .map((roleName, index) => ({
        id: index + 1,
        name: roleName as UserRole
      }));
  }

  private normalizeRoleName(role: string): string {
    return role.startsWith('ROLE_') ? role : `ROLE_${role}`;
  }
}
