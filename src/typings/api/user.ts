import { CurrentUserDto } from './generated';

export type UserType =  `${CurrentUserDto['type']}`;
export const UserTypeEnum = CurrentUserDto['type'];
