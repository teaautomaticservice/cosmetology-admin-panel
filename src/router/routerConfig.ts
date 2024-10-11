import { HistoryMessage } from '@components/domain/historyMessages/HistoryMessage';
import { Login } from '@components/domain/login/Login';
import { Logs } from '@components/domain/logs/Logs';
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

const authorization: RouterPage[] = [
  {
    path: paths.login,
    Component: Login,
    Layout: UnauthorizedLayout,
    roles: ['unauthorized'],
  }
]

export const routerConfig: RouterPage[] = [
  ...logs,
  ...main,
  ...authorization,
];