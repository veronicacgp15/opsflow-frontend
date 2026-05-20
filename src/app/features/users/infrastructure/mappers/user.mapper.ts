import {
  CreateUserCommand,
  UpdateUserCommand,
  User,
  UserProfile
} from '../../domain/entities/user.entity';
import {
  CreateUserApiBody,
  UpdateUserApiBody,
  UserApiDto,
  UserProfileApiDto
} from '../http/dtos/user-api.dto';

export function userFromApi(dto: UserApiDto): User {
  return { ...dto };
}

export function userProfileFromApi(dto: UserProfileApiDto): UserProfile {
  return { ...dto };
}

export function createUserToApi(cmd: CreateUserCommand): CreateUserApiBody {
  return { ...cmd };
}

export function updateUserToApi(cmd: UpdateUserCommand): UpdateUserApiBody {
  return { ...cmd };
}
