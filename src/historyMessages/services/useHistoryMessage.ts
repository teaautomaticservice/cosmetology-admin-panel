import { useHistoryMessagesStore } from "../../stores/historyMessages";

export const useHistoryMessage = () => {
  const { historyMessages } = useHistoryMessagesStore();

  return {
    historyMessages,
  }
}