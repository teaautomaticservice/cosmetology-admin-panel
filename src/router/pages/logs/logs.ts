import { paths } from '../../paths';
import { RouterPage } from '../../types';
import { Logs } from '../../../components/domain/logs/Logs';
import { MainLayout } from '../../../components/layouts/main/MainLayout';

export const logsPage: RouterPage[] = [
  {
    path: paths.logs,
    Component: Logs,
    Layout: MainLayout,
  }
]