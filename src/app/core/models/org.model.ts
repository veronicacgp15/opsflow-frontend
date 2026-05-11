export interface OrganizationRequest {
  name: string;
  nit: string;
  address: string;
  phone: string;
  email: string;
  planLimit: number;
}

export interface OrganizationResponse {
  id: number;
  name: string;
  nit: string;
  address: string;
  phone: string;
  email: string;
  planLimit: number;
}

export interface LocationRequest {
  name: string;
  address: string;
  city: string;
  organizationId: number;
}

export interface LocationResponse {
  id: number;
  name: string;
  address: string;
  city: string;
  organizationId: number;
}

export interface MessageResponse {
  message: string;
}
