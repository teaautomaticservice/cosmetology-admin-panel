import { HistoryMessage } from '@components/domain/historyMessages/HistoryMessage';
import { Login } from '@components/domain/login/Login';
import { Logs } from '@components/domain/logs/Logs';
import { UserDetail } from '@components/domain/users/detail/UserDetail';
import { Users } from '@components/domain/users/Users';
import { MainLayout } from '@components/layouts/main/MainLayout';
import { UnauthorizedLayout } from '@components/layouts/unauthorized/UnauthorizedLayout';
import { paths } from '@router/paths';

import { RouterPage } from './types';

const logs: RouterPage[] = [
  {
    path: paths.logs,
    Component: Logs,
    Layout: MainLayout,
    roles: ['superAdministrator'],
  }
];

const main: RouterPage[] = [
  {
    path: paths.main,
    Component: HistoryMessage,
    Layout: MainLayout,
    roles: ['administrator'],
  }
];

const users: RouterPage[] = [
  {
    path: paths.users,
    Component: Users,
    Layout: MainLayout,
    roles: ['administrator'], 
  },
  {
    path: paths.userDetail(),
    Component: UserDetail,
    Layout: MainLayout,
    roles: ['administrator'],
  },
];

const authorization: RouterPage[] = [
  {
    path: paths.login,
    Component: Login,
    Layout: UnauthorizedLayout,
    roles: ['unauthorized'],
  }
];

export const routerConfig: RouterPage[] = [
  ...main,
  ...users,
  ...logs,
  ...authorization,
];
