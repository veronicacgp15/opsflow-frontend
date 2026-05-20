import { Observable } from 'rxjs';
import {
  CreateUserCommand,
  UpdateUserCommand,
  User,
  UserProfile
} from '../entities/user.entity';
import { MessageResponse } from '@features/auth/domain/models/auth.types';

/** Puerto de salida: persistencia y consulta de usuarios. */
export interface UserRepositoryPort {
  list(): Observable<User[]>;
  getById(id: number): Observable<User>;
  create(body: CreateUserCommand): Observable<User>;
  update(id: number, body: UpdateUserCommand): Observable<User>;
  detachFromOrganization(id: number): Observable<User>;
  deactivate(id: number): Observable<MessageResponse>;
  activate(id: number): Observable<MessageResponse>;
  revokeSession(id: number): Observable<MessageResponse>;
  listMyOrganization(): Observable<User[]>;
  listByOrganization(orgId: number): Observable<User[]>;
  assignOrganizationManager(orgId: number, userId: number): Observable<User>;
  changeMyPassword(currentPassword: string, newPassword: string): Observable<MessageResponse>;
  getProfilesBatch(ids: number[]): Observable<UserProfile[]>;
}
