import type { ID } from "../typings/common";
import type { HistoryPaginated, History } from "../typings/api/historyMessage";

import { transport } from "../utils/transport";

const baseUrl = (path = "") => `/history${path}`;

const urls = {
  messageList: baseUrl("/list"),
  messageById: (id: ID) => baseUrl(`/${id}`),
};

export const historyMessagesMethods = {
  getMessageList: async () => {
    const { data } = await transport.get<HistoryPaginated>(urls.messageList);
    return data;
  },
  getHistoryById: async (id: ID) => {
    const { data } = await transport.get<History>(urls.messageById(id));
    return data;
  },
  addHistory: async (message: string) => {
    const { data } = await transport.post<HistoryPaginated>(baseUrl(), { message });
    return data;
  },
  updateHistory: async (id: ID, message: string) => {
    const { data } = await transport.patch<HistoryPaginated>(urls.messageById(id), { message });
    return data;
  },
  removeHistory: async (id: ID) => {
    const { data } = await transport.delete<HistoryPaginated>(urls.messageById(id));
    return data;
  },
};
