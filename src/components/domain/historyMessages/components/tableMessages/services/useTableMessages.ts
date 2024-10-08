
import { historyMessagesMethods } from '@apiMethods/historyApi';
import { useHistoryMessagesStore } from '@stores/historyMessages';
import { useModalStore } from '@stores/modal';
import { History } from '@typings/api/historyMessage';
import type { ID } from '@typings/common';

export const useTableMessages = () => {
  const { historyMessages, updateHistoryMessages, isHistoryLoading } = useHistoryMessagesStore();
  const { open } = useModalStore();

  const deleteMessage = async (id: ID) => {
    const { data } = await historyMessagesMethods.removeHistory(id);
    updateHistoryMessages(data);
  }

  const editMessage = (history: History) => {
    open(history);
  }

  return {
    data: historyMessages,
    deleteMessage,
    editMessage,
    isHistoryLoading,
  }
};
