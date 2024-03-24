import { logsPage } from './pages/logs/logs';
import { mainPage } from './pages/main/main';
import { RouterPage } from './types';

export const routerConfig: RouterPage[] = [
  ...mainPage,
  ...logsPage,
];