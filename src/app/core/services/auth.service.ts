import { Injectable, signal, computed } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
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
  Role
} from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;
  
  // Signals for reactive state management
  private currentUserSignal = signal<User | null>(null);
  private isAuthenticatedSignal = signal<boolean>(false);
  private isLoadingSignal = signal<boolean>(false);
  private permissionsSignal = signal<ReadonlySet<string>>(new Set());

  // Public computed signals
  readonly currentUser = this.currentUserSignal.asReadonly();
  readonly isAuthenticated = this.isAuthenticatedSignal.asReadonly();
  readonly isLoading = this.isLoadingSignal.asReadonly();
  /** Conjunto de permission codes efectivos del usuario logueado. */
  readonly permissions = this.permissionsSignal.asReadonly();
  
  /** Nombres de rol normalizados (ROLE_*) segun el JWT */
  readonly userRoles = computed<string[]>(() => {
    const roles = this.currentUserSignal()?.roles ?? [];
    return roles.map(r => this.normalizeRoleName(r.name));
  });

  /** Rol principal para etiquetas (prioriza ADMIN > MANAGER > USER) */
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
    const token = this.getToken();
    const userJson = localStorage.getItem(environment.userKey);

    if (token && userJson) {
      try {
        const user = JSON.parse(userJson) as User;
        this.currentUserSignal.set(user);
        this.isAuthenticatedSignal.set(true);
        this.hydratePermissionsFromCache();
        this.fetchPermissions();
      } catch {
        this.clearStorage();
      }
    }
  }

 
  private hydratePermissionsFromCache(): void {
    const cached = localStorage.getItem(environment.permissionsKey);
    if (!cached) return;
    try {
      const codes = JSON.parse(cached) as string[];
      if (Array.isArray(codes)) {
        this.permissionsSignal.set(new Set(codes));
      }
    } catch {
      localStorage.removeItem(environment.permissionsKey);
    }
  }

  
  private fetchPermissions(): void {
    this.http.get<string[]>(`${this.apiUrl}/me/permissions`).subscribe({
      next: codes => {
        this.permissionsSignal.set(new Set(codes));
        try {
          localStorage.setItem(environment.permissionsKey, JSON.stringify(codes));
        } catch {
        }
      },
      error: () => {
        if (this.permissionsSignal().size === 0) {
          this.permissionsSignal.set(new Set());
        }
      }
    });
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    this.isLoadingSignal.set(true);
    
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: AuthResponse) => {
        this.handleAuthSuccess(response);
      }),
      catchError(error => this.handleError(error)),
      tap(() => this.isLoadingSignal.set(false))
    );
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

  /** Renueva access token con el refresh guardado (mismo flujo que el interceptor). */
  refreshAccessToken(): Observable<RefreshTokenResponse> {
    return this.refreshToken();
  }

  /** Hash BCrypt (solo administrador; requiere JWT). */
  generatePasswordHash(plainPassword: string): Observable<string> {
    return this.http
      .get(`${environment.apiUrl}/users/tools/password-hash`, {
        params: { password: plainPassword },
        responseType: 'text'
      })
      .pipe(catchError(error => this.handleError(error)));
  }

  refreshToken(): Observable<RefreshTokenResponse> {
    const refreshToken = this.getRefreshToken();
    
    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }

    const request: RefreshTokenRequest = { refreshToken };
    
    return this.http.post<RefreshTokenResponse>(`${this.apiUrl}/refresh`, request).pipe(
      tap((response: RefreshTokenResponse) => {
        this.setToken(response.accessToken);
        this.setRefreshToken(response.refreshToken);
      }),
      catchError(error => {
        this.logout();
        return this.handleError(error);
      })
    );
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

  logout(): void {
    
    this.http.post(`${this.apiUrl}/logout`, {}).subscribe({
      complete: () => this.performLogout(),
      error: () => this.performLogout()
    });
  }

  private performLogout(): void {
    this.clearStorage();
    this.currentUserSignal.set(null);
    this.isAuthenticatedSignal.set(false);
    this.permissionsSignal.set(new Set());
    const path = this.router.url.split('?')[0];
    if (path.includes('/auth/reset-password') || path.includes('/auth/verify')) {
      return;
    }
    this.router.navigate(['/auth/login']);
  }

  private handleAuthSuccess(response: AuthResponse): void {
    this.setToken(response.token);
    if (response.refreshToken) {
      this.setRefreshToken(response.refreshToken);
    }

    const user: User = {
      id: response.id,
      username: response.username,
      email: response.email,
      name: response.username,
      lastname: '',
      enabled: true,
      roles: this.mapRoles(response.roles)
    };

    localStorage.setItem(environment.userKey, JSON.stringify(user));
    this.currentUserSignal.set(user);
    this.isAuthenticatedSignal.set(true);
    this.fetchPermissions();
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.isLoadingSignal.set(false);
    
    let errorMessage = 'Ha ocurrido un error inesperado';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.status === 401) {
      errorMessage = 'Credenciales incorrectas';
    } else if (error.status === 403) {
      errorMessage = 'No tienes permisos para realizar esta accion';
    } else if (error.status === 404) {
      errorMessage = 'Recurso no encontrado';
    } else if (error.status === 500) {
      errorMessage = 'Error del servidor';
    }
    
    return throwError(() => new Error(errorMessage));
  }

  // Token management
  getToken(): string | null {
    return localStorage.getItem(environment.tokenKey);
  }

  private setToken(token: string): void {
    localStorage.setItem(environment.tokenKey, token);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(environment.refreshTokenKey);
  }

  private setRefreshToken(token: string): void {
    localStorage.setItem(environment.refreshTokenKey, token);
  }

  private clearStorage(): void {
    localStorage.removeItem(environment.tokenKey);
    localStorage.removeItem(environment.refreshTokenKey);
    localStorage.removeItem(environment.userKey);
    localStorage.removeItem(environment.permissionsKey);
  }

  // Role checking utilities
  hasRole(role: UserRole): boolean {
    return this.currentUserSignal()?.roles.some(userRole => userRole.name === role) ?? false;
  }

  hasAnyRole(roles: string[]): boolean {
    const normalizedRequired = roles.map(role => this.normalizeRoleName(role));
    const userRoles = this.currentUserSignal()?.roles.map(role => this.normalizeRoleName(role.name)) ?? [];
    return normalizedRequired.some(role => userRoles.includes(role));
  }

  
  hasPermission(code: string): boolean {
    return this.permissionsSignal().has(code);
  }

  /** True si el usuario logueado tiene al menos uno de los permission codes indicados. */
  hasAnyPermission(codes: string[]): boolean {
    const set = this.permissionsSignal();
    return codes.some(c => set.has(c));
  }

  /** True si el usuario logueado tiene todos los permission codes indicados. */
  hasAllPermissions(codes: string[]): boolean {
    const set = this.permissionsSignal();
    return codes.every(c => set.has(c));
  }

  /** Hace una recarga manual del set de permisos (util tras un cambio admin). */
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
