import { HistoryMessage } from '../../components/historyMessages/HistoryMessage';
import { RouterPage } from '../types';
import { mainPaths } from './paths';

export const mainPage: RouterPage[] = [
  {
    path: mainPaths.main,
    Component: HistoryMessage,
  }
];