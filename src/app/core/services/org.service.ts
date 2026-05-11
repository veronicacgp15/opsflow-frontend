import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import {
  OrganizationRequest,
  OrganizationResponse,
  LocationRequest,
  LocationResponse,
  MessageResponse
} from '@core/models/org.model';

@Injectable({
  providedIn: 'root'
})
export class OrgService {
  private readonly orgApiUrl = `${environment.apiUrl}/org`;
  private readonly locationsApiUrl = `${environment.apiUrl}/org/locations`;

  constructor(private http: HttpClient) {}

  createOrganization(request: OrganizationRequest): Observable<OrganizationResponse> {
    return this.http.post<OrganizationResponse>(`${this.orgApiUrl}/create`, request);
  }

  getOrganizations(): Observable<OrganizationResponse[]> {
    return this.http.get<OrganizationResponse[]>(this.orgApiUrl);
  }

  getOrganizationById(id: number): Observable<OrganizationResponse> {
    return this.http.get<OrganizationResponse>(`${this.orgApiUrl}/${id}`);
  }

  updateOrganization(id: number, request: OrganizationRequest): Observable<OrganizationResponse> {
    return this.http.put<OrganizationResponse>(`${this.orgApiUrl}/${id}`, request);
  }

  deleteOrganization(id: number): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`${this.orgApiUrl}/${id}`);
  }

  createLocation(request: LocationRequest): Observable<LocationResponse> {
    return this.http.post<LocationResponse>(`${this.locationsApiUrl}/create`, request);
  }

  getLocations(): Observable<LocationResponse[]> {
    return this.http.get<LocationResponse[]>(this.locationsApiUrl);
  }

  getLocationsByOrganization(orgId: number): Observable<LocationResponse[]> {
    return this.http.get<LocationResponse[]>(`${this.locationsApiUrl}/by-org/${orgId}`);
  }

  getLocationById(id: number): Observable<LocationResponse> {
    return this.http.get<LocationResponse>(`${this.locationsApiUrl}/${id}`);
  }

  updateLocation(id: number, request: LocationRequest): Observable<LocationResponse> {
    return this.http.put<LocationResponse>(`${this.locationsApiUrl}/${id}`, request);
  }

  deleteLocation(id: number): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`${this.locationsApiUrl}/${id}`);
  }
}
