import { CurrentUserDto, UsersDto, UsersPaginatedDto } from './generated';

export type UserType =  `${CurrentUserDto['type']}`;
export const UserTypeEnum = CurrentUserDto['type'];
export type CurrentUser = CurrentUserDto;

export type Users = UsersDto;
export type UsersList = UsersPaginatedDto;
