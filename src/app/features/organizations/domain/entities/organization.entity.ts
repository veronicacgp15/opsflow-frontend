export interface Organization {
  id: number;
  name: string;
  taxId: string;
  address: string;
  email: string;
  phone: string;
  active: boolean;
  planLimit: number;
  createdAt: string | null;
  createdByUserId: number | null;
  createdByName: string | null;
  createdByLastname: string | null;
  createdByFullName?: string | null;
}

export interface OrganizationMine {
  id: number;
  name: string;
  taxId: string;
  address: string;
  email: string;
  phone: string;
  active: boolean;
  planLimit: number;
  createdAt: string | null;
  createdByUserId: number | null;
  createdByName: string | null;
  createdByLastname: string | null;
  createdByFullName?: string | null;
}

export interface OrganizationUpsert {
  name: string;
  taxId: string;
  address: string;
  email: string;
  phone: string;
  active: boolean;
  managerUserId?: number | null;
  planLimit: number;
}

export interface Location {
  id: number;
  name: string;
  address: string | null;
  city: string | null;
  organizationId: number;
}

export interface LocationUpsert {
  name: string;
  address: string | null;
  city: string | null;
  organizationId: number;
}
