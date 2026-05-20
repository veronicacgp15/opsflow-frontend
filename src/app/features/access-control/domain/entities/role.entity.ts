export interface Role {
  id: number;
  name: string;
}

export type PermissionService = 'auth' | 'org' | 'document';

export interface Permission {
  id: number;
  code: string;
  service: PermissionService | string;
  httpMethod: string;
  urlPattern: string;
  description: string;
}
