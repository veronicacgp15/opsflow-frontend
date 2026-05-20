/** Entidad de dominio: usuario administrable en OpsFlow. */
export interface User {
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

export interface CreateUserCommand {
  username: string;
  email: string;
  password: string;
  name: string;
  lastname: string;
  roles?: string[];
  organizationId?: number | null;
}

export interface UpdateUserCommand {
  email?: string | null;
  name?: string | null;
  lastname?: string | null;
  organizationId?: number | null;
  /** Quita al usuario de su organizacion (solo ADMIN, PUT /users/{id}). */
  clearOrganization?: boolean;
}

export interface UserProfile {
  id: number;
  username: string;
  name: string;
  lastname: string;
}
