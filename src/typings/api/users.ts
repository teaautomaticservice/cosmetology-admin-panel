import {
  CreateUserDto,
  CurrentUserDto,
  InitiateHardResetPasswordDto,
  UsersDto,
  UsersPaginatedDto,
} from './generated';

export type UserType =  `${CurrentUserDto['type']}`;
export const UserTypeEnum = CurrentUserDto['type'];
export type UserStatus =  `${CurrentUserDto['status']}`;
export const UserStatusEnum = CurrentUserDto['status'];
export type CurrentUser = CurrentUserDto;

export type User = UsersDto;
export type UsersList = UsersPaginatedDto;
export type CreateUser = CreateUserDto;
export type UserHardResetPassword = InitiateHardResetPasswordDto;