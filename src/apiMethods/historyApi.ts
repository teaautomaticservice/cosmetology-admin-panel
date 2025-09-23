import { HistoryService } from '@typings/api/generated';
import type { History,HistoryPaginated } from "@typings/api/historyMessage";
import type { ID } from "@typings/common";

export const historyMessagesMethods = {
  getMessageList: async (): Promise<HistoryPaginated> => {
    return HistoryService.historyControllerGetList({});
  },
  getHistoryById: async (id: ID): Promise<History> => {
    return HistoryService.historyControllerGetItem({ id });
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
