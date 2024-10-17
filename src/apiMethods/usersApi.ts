import { UsersService } from '@typings/api/generated'

export const usersApi = {
  getUsersList: async () => {
    await UsersService.usersControllerGetUsers();
  }
}