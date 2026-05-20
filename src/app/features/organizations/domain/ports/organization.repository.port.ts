import { Observable } from 'rxjs';
import { MessageResponse } from '@features/auth/domain/models/auth.types';
import {
  Location,
  LocationUpsert,
  Organization,
  OrganizationMine,
  OrganizationUpsert
} from '../entities/organization.entity';

export interface OrganizationRepositoryPort {
  listMine(): Observable<OrganizationMine[]>;
  listAll(): Observable<Organization[]>;
  getById(id: number): Observable<Organization>;
  create(body: OrganizationUpsert): Observable<Organization>;
  update(id: number, body: OrganizationUpsert): Observable<Organization>;
  delete(id: number): Observable<MessageResponse>;
  activate(id: number): Observable<Organization>;
  deactivate(id: number): Observable<Organization>;
  listLocationsByOrganization(orgId: number): Observable<Location[]>;
  createLocation(body: LocationUpsert): Observable<Location>;
  updateLocation(id: number, body: LocationUpsert): Observable<Location>;
  deleteLocation(id: number): Observable<MessageResponse>;
}
