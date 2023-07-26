import { storeFactory } from "../utils/storeFactory";
import { History } from "../typings/api/historyMessage";

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
