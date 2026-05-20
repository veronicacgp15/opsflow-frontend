import { Observable } from 'rxjs';
import { MessageResponse } from '@features/auth/domain/models/auth.types';
import { Permission, Role } from '../entities/role.entity';

export interface RoleRepositoryPort {
  list(): Observable<Role[]>;
  getById(id: number): Observable<Role>;
  create(name: string): Observable<Role>;
  update(id: number, name: string): Observable<Role>;
  delete(id: number): Observable<MessageResponse>;
  setUserRoles(userId: number, roleNames: string[]): Observable<MessageResponse>;
  listPermissions(): Observable<Permission[]>;
  getRolePermissions(roleId: number): Observable<number[]>;
  setRolePermissions(roleId: number, permissionIds: number[]): Observable<MessageResponse>;
}
