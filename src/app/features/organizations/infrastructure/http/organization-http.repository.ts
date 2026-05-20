import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { MessageResponse } from '@features/auth/domain/models/auth.types';
import {
  Location,
  LocationUpsert,
  Organization,
  OrganizationMine,
  OrganizationUpsert
} from '../../domain/entities/organization.entity';
import { OrganizationRepositoryPort } from '../../domain/ports/organization.repository.port';

@Injectable({ providedIn: 'root' })
export class OrganizationHttpRepository implements OrganizationRepositoryPort {
  private readonly base = `${environment.apiUrl}/org`;

  constructor(private readonly http: HttpClient) {}

  listMine(): Observable<OrganizationMine[]> {
    return this.http.get<OrganizationMine[]>(`${this.base}/mine`);
  }

  listAll(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.base);
  }

  getById(id: number): Observable<Organization> {
    return this.http.get<Organization>(`${this.base}/${id}`);
  }

  create(body: OrganizationUpsert): Observable<Organization> {
    return this.http.post<Organization>(`${this.base}/create`, body);
  }

  update(id: number, body: OrganizationUpsert): Observable<Organization> {
    return this.http.put<Organization>(`${this.base}/${id}`, body);
  }

  delete(id: number): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`${this.base}/${id}`);
  }

  activate(id: number): Observable<Organization> {
    return this.http.patch<Organization>(`${this.base}/${id}/activate`, {});
  }

  deactivate(id: number): Observable<Organization> {
    return this.http.patch<Organization>(`${this.base}/${id}/deactivate`, {});
  }

  listLocationsByOrganization(orgId: number): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.base}/locations/by-org/${orgId}`);
  }

  createLocation(body: LocationUpsert): Observable<Location> {
    return this.http.post<Location>(`${this.base}/locations/create`, body);
  }

  updateLocation(id: number, body: LocationUpsert): Observable<Location> {
    return this.http.put<Location>(`${this.base}/locations/${id}`, body);
  }

  deleteLocation(id: number): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`${this.base}/locations/${id}`);
  }
}
