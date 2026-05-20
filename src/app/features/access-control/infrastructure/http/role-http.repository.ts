import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { MessageResponse } from '@features/auth/domain/models/auth.types';
import { Permission, Role } from '../../domain/entities/role.entity';
import { RoleRepositoryPort } from '../../domain/ports/role.repository.port';

@Injectable({ providedIn: 'root' })
export class RoleHttpRepository implements RoleRepositoryPort {
  private readonly base = `${environment.apiUrl}/auth`;

  constructor(private readonly http: HttpClient) {}

  list(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.base}/roles`);
  }

  getById(id: number): Observable<Role> {
    return this.http.get<Role>(`${this.base}/roles/${id}`);
  }

  create(name: string): Observable<Role> {
    return this.http.post<Role>(`${this.base}/roles/create`, { name });
  }

  update(id: number, name: string): Observable<Role> {
    return this.http.put<Role>(`${this.base}/roles/${id}`, { name });
  }

  delete(id: number): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`${this.base}/roles/${id}`);
  }

  setUserRoles(userId: number, roleNames: string[]): Observable<MessageResponse> {
    return this.http.put<MessageResponse>(`${this.base}/roles/users/${userId}/roles`, {
      roleNames
    });
  }

  listPermissions(): Observable<Permission[]> {
    return this.http.get<Permission[]>(`${this.base}/permissions`);
  }

  getRolePermissions(roleId: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.base}/roles/${roleId}/permissions`);
  }

  setRolePermissions(roleId: number, permissionIds: number[]): Observable<MessageResponse> {
    return this.http.put<MessageResponse>(`${this.base}/roles/${roleId}/permissions`, {
      permissionIds
    });
  }
}
