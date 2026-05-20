/** Contratos HTTP del users-service (shape del JSON del backend). */
export interface UserApiDto {
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

export interface CreateUserApiBody {
  username: string;
  email: string;
  password: string;
  name: string;
  lastname: string;
  roles?: string[];
  organizationId?: number | null;
}

export interface UpdateUserApiBody {
  email?: string | null;
  name?: string | null;
  lastname?: string | null;
  organizationId?: number | null;
  clearOrganization?: boolean;
}

export interface UserProfileApiDto {
  id: number;
  username: string;
  name: string;
  lastname: string;
}
