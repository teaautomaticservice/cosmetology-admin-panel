import { historyMessagesMethods } from "@apiMethods/historyApi";
import type { History } from "@typings/api/historyMessage";
import { storeFactory } from "@utils/storeFactory";

const {
  useStore: useHistoryStore,
  useAsyncMethod: useHistoryCreateEffect,
  setEvent: setNewHistory,
} = storeFactory<History[]>([]);
const { useStore: useIsLoadingStore } = storeFactory<boolean>(false);

export const useHistoryMessagesStore = () => {
  const [historyMessages] = useHistoryStore();
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
