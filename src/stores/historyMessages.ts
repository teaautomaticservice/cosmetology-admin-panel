import type { History } from "../typings/api/historyMessage";
import { storeFactory } from "../utils/storeFactory";

import { historyMessagesMethods } from "../apiMethods/historyMessages";

const { useStore, useChangeEvent, useCreateStoreEffect, } = storeFactory<History[]>([]);

export const useHistoryMessagesStore = () => {
  const state = useStore();
  const change = useChangeEvent();

  const handleResponse = async () => {
    const { data } = await historyMessagesMethods.getMessageList();
    return data;
  }

  const updateHistoryMessagesFromApi = useCreateStoreEffect<void>(handleResponse);

  return {
    historyMessages: state,
    updateHistoryMessages: change,
    updateHistoryMessagesFromApi,
  };
};
