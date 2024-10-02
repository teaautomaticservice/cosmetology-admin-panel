import { historyMessagesMethods } from "@apiMethods/historyApi";
import { storeFactory } from "@shared/utils/storeFactory";
import type { History } from "@typings/api/historyMessage";

const {
  useStore: useHistoryStore,
  useCreateEffect: useHistoryCreateEffect,
} = storeFactory<History[]>([]);
const { useStore: useIsLoadingStore } = storeFactory<boolean>(false);

export const useHistoryMessagesStore = () => {
  const [historyMessages, setNewHistory] = useHistoryStore();

  const [isHistoryLoading, setIsLoading] = useIsLoadingStore();

  const handleResponse = async () => {
    setIsLoading(true);
    const { data } = await historyMessagesMethods.getMessageList();
    setIsLoading(false);
    return data;
  }

  const updateHistoryMessagesFromApi = useHistoryCreateEffect<void>(handleResponse);
  const updateHistoryMessages = (history: History[]) => {
    setIsLoading(true);
    setNewHistory(history);
    setIsLoading(false);
  };

  return {
    historyMessages,
    updateHistoryMessages,
    updateHistoryMessagesFromApi,
    isHistoryLoading,
  };
};
