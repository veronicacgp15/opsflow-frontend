import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '@env/environment';
import { MessageResponse } from '@features/auth/domain/models/auth.types';
import {
  CreateUserCommand,
  UpdateUserCommand,
  User,
  UserProfile
} from '../../domain/entities/user.entity';
import { UserRepositoryPort } from '../../domain/ports/user.repository.port';
import {
  createUserToApi,
  updateUserToApi,
  userFromApi,
  userProfileFromApi
} from '../mappers/user.mapper';
import { UserApiDto, UserProfileApiDto } from './dtos/user-api.dto';

@Injectable({ providedIn: 'root' })
export class UserHttpRepository implements UserRepositoryPort {
  private readonly base = `${environment.apiUrl}/users`;

  constructor(private readonly http: HttpClient) {}

  list(): Observable<User[]> {
    return this.http
      .get<UserApiDto[]>(this.base)
      .pipe(map(rows => rows.map(userFromApi)));
  }

  getById(id: number): Observable<User> {
    return this.http.get<UserApiDto>(`${this.base}/${id}`).pipe(map(userFromApi));
  }

  create(body: CreateUserCommand): Observable<User> {
    return this.http
      .post<UserApiDto>(this.base, createUserToApi(body))
      .pipe(map(userFromApi));
  }

  update(id: number, body: UpdateUserCommand): Observable<User> {
    return this.http
      .put<UserApiDto>(`${this.base}/${id}`, updateUserToApi(body))
      .pipe(map(userFromApi));
  }

  detachFromOrganization(id: number): Observable<User> {
    return this.http
      .put<UserApiDto>(`${this.base}/${id}`, { clearOrganization: true })
      .pipe(map(userFromApi));
  }

  deactivate(id: number): Observable<MessageResponse> {
    return this.http.patch<MessageResponse>(`${this.base}/${id}/deactivate`, {});
  }

  activate(id: number): Observable<MessageResponse> {
    return this.http.patch<MessageResponse>(`${this.base}/${id}/activate`, {});
  }

  revokeSession(id: number): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(`${this.base}/${id}/revoke-session`, {});
  }

  listMyOrganization(): Observable<User[]> {
    return this.http
      .get<UserApiDto[]>(`${this.base}/my-organization`)
      .pipe(map(rows => rows.map(userFromApi)));
  }

  listByOrganization(orgId: number): Observable<User[]> {
    return this.http
      .get<UserApiDto[]>(`${this.base}/by-organization/${orgId}`)
      .pipe(map(rows => rows.map(userFromApi)));
  }

  assignOrganizationManager(orgId: number, userId: number): Observable<User> {
    return this.http
      .put<UserApiDto>(`${this.base}/organizations/${orgId}/manager/${userId}`, {})
      .pipe(map(userFromApi));
  }

  changeMyPassword(currentPassword: string, newPassword: string): Observable<MessageResponse> {
    return this.http.patch<MessageResponse>(`${this.base}/change-password`, {
      currentPassword,
      newPassword
    });
  }

  getProfilesBatch(ids: number[]): Observable<UserProfile[]> {
    return this.http
      .post<UserProfileApiDto[]>(`${this.base}/profiles/batch`, ids)
      .pipe(map(rows => rows.map(userProfileFromApi)));
  }
}
