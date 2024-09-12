import type { ID } from "../typings/common";
import type { HistoryPaginated, History } from "../typings/api/historyMessage";

import { HistoryService } from '../typings/api/generated';

export const historyMessagesMethods = {
  getMessageList: async (): Promise<HistoryPaginated> => {
    return HistoryService.historyControllerGetList();
  },
  getHistoryById: async (id: ID): Promise<History> => {
    return HistoryService.historyControllerGetItem({ id: id.toString() });
  },
  addHistory: async (message: string): Promise<HistoryPaginated> => {
    return HistoryService.historyControllerAddItem({ requestBody: { message } });
  },
  updateHistory: async (id: ID, message: string): Promise<HistoryPaginated> => {
    return HistoryService.historyControllerUpdateItem({
      id: id.toString(),
      requestBody: { message },
    });
  },
  removeHistory: async (id: ID): Promise<HistoryPaginated> => {
    return HistoryService.historyControllerRemoveItem({ id: id.toString() });
  },
};
