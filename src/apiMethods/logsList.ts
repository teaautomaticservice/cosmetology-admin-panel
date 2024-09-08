import { LogsService } from '../typings/api/generated';
import { getSearchParams } from '../utils/getSearchParams';

export const logsListMethods = {
  getLogsList: async () => {
    const { page, pageSize } = getSearchParams<{ page?: string; pageSize?: string; }>();
    const data = await LogsService.logsControllerGetList({
      page,
      pageSize,
    });
    return data;
  }
}