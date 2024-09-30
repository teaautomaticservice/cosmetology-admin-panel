import { Logs } from '@components/domain/logs/Logs';
import { MainLayout } from '@components/layouts/main/MainLayout';
import { paths } from '@router/paths';
import { RouterPage } from '@router/types';

export const logsPage: RouterPage[] = [
  {
    path: paths.logs,
    Component: Logs,
    Layout: MainLayout,
  }
]