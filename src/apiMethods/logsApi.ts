import { LogsService } from '@typings/api/generated';
import { LogsList } from '@typings/api/logs';
import { getSearchParams } from '@utils/getSearchParams';

export const logsApi = {
  getLogsList: async (): Promise<LogsList> => {
    const { page, pageSize } = getSearchParams<{ page?: string; pageSize?: string; }>();
    const data = await LogsService.logsControllerGetList({
      ...(page && { page: Number(page) }),
      ...(pageSize && { pageSize: Number(pageSize) }),
    });
    return data;
  }
}