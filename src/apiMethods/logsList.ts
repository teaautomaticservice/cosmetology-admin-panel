import { LogsList } from '../typings/api/logs'
import { transport } from '../utils/transport'

const baseUrl = (path = '') => `/logs${path}`;

const urls = {
  logsList: baseUrl('/list'),
}

export const logsListMethods = {
  getLogsList: async () => {
    const { data } = await transport.get<LogsList>(urls.logsList);
    return data;
  }
}