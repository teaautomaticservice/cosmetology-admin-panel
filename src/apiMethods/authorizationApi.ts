import { AuthorizationService, LoginFormDto } from '@typings/api/generated'
import { type CurrentUser } from '@typings/api/users'

export const authorizationMethods = {
  login: (loginForm: LoginFormDto): Promise<CurrentUser> =>
    AuthorizationService.authorizationControllerLogin({ requestBody: loginForm }),
  logOut: () => AuthorizationService.authorizationControllerLogOut(),
};