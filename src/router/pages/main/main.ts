import { HistoryMessage } from '../../../components/domain/historyMessages/HistoryMessage';
import { MainLayout } from '../../../components/layouts/main/MainLayout';
import { RouterPage } from '../../types';
import { mainPaths } from './paths';

export const mainPage: RouterPage[] = [
  {
    path: mainPaths.main,
    Component: HistoryMessage,
    Layout: MainLayout,
  }
];