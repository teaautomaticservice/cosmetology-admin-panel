import { logsApi } from '@apiMethods/logsApi';
import { storeFactory } from '@shared/utils/storeFactory';
import { Logs } from '@typings/api/logs';

const {
  useStore: useLogsListStore,
  useCreateEffect: useLogsListCreateEffect,
} = storeFactory<{
  data: Logs[],
  count: number,
}>({
  data: [],
  count: 0,
});

const {
  useStore: useIsLoadingStore,
} = storeFactory<boolean>(false);

export const useLogsStore = () => {
  const [logsList] = useLogsListStore();

  const [isLogsListLoading, setIsLoading] = useIsLoadingStore();

  const handleResponse = async () => {
    setIsLoading(true);
    const { data, meta } = await logsApi.getLogsList();
    setIsLoading(false);
    return {
      data,
      count: meta.count,
    };
  }

  const updateLogsFromApi = useLogsListCreateEffect<void>(handleResponse)

  return {
    logsList,
    updateLogsFromApi,
    isLogsListLoading,
  }
}