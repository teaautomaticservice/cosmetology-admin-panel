import { logsListMethods } from '../apiMethods/logsList';
import { Logs } from '../typings/api/logs';
import { storeFactory } from '../utils/storeFactory';

const {
  useStore: useLogsListStore,
  useCreateEffect: useLogsListCreateEffect,
} = storeFactory<Logs[]>([]);

const {
  useStore: useIsLoadingStore,
} = storeFactory<boolean>(false);

export const useLogsStore = () => {
  const [logsList] = useLogsListStore();

  const [isLogsListLoading, setIsLoading] = useIsLoadingStore();

  const handleResponse = async () => {
    setIsLoading(true);
    const { data } = await logsListMethods.getLogsList();
    setIsLoading(false);
    return data;
  }

  const updateLogsFromApi = useLogsListCreateEffect<void>(handleResponse)

  return {
    logsList,
    updateLogsFromApi,
    isLogsListLoading,
  }
}