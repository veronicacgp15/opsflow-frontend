// Auth Request/Response Models based on Java User Entity

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  organizationId?: number;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  roles: string[];
  type: string;
}

export interface Role {
  id: number;
  name: UserRole;
  description?: string;
}

export interface User {
  id: number;
  name: string;
  lastname: string;
  username: string;
  email: string;
  enabled: boolean;
  organizationId?: number;
  roles: Role[];
}

export type UserRole = string;

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordResetConfirm {
  token: string;
  newPassword: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

export interface MessageResponse {
  message: string;
}

export interface ValidationError {
  field: string;
  message: string;
}
