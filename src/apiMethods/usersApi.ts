import { UsersService } from '@typings/api/generated'
import { CreateUser, UsersList } from '@typings/api/users';
import { getSearchParams } from '@utils/getSearchParams';

export const usersApi = {
  getUsersList: async (): Promise<UsersList> => {
    const { page, pageSize } = getSearchParams<{ page?: string; pageSize?: string; }>();
    const response = await UsersService.usersControllerGetUsers({
      ...(page && { page: Number(page) }),
      ...(pageSize && { pageSize: Number(pageSize) }),
    });
    return response;
  },
  createUser: async (data: CreateUser) => {
    return UsersService.usersControllerCreateUser({ requestBody: data });
  },
  getUserDetail: async (id: number) => {
    return UsersService.usersControllerGetUserById({ id })
  },
}