
import type { ID } from '../../../../typings/common';
import { useHistoryMessagesStore } from '../../../../stores/historyMessages';
import { historyMessagesMethods } from '../../../../apiMethods/historyMessages';

export const useTableMessages = () => {
  const { historyMessages, updateHistoryMessages } = useHistoryMessagesStore();

  const deleteMessage = async (id: ID) => {
    console.log("deleteMessage");
    const { data } = await historyMessagesMethods.removeHistory(id);
    updateHistoryMessages(data);
  }

  return {
    data: historyMessages,
    deleteMessage
  }
};
