import { appConfigMethods } from '@apiMethods/appConfigApi';
import { AppConfig } from '@typings/api/appConfig';
import { storeFactory } from '@utils/storeFactory';

const {
  useStore,
  useCreateEffect,
} = storeFactory<AppConfig>({
  currentUser: null,
});
const { useStore: useIsLoadingStore } = storeFactory<boolean>(true);

export const useAppConfigStore = () => {
  const [appConfig] = useStore();

  const [isLoading, setIsLoading] = useIsLoadingStore();

  const handleResponse = async () => {
    setIsLoading(true);
    try {
      return appConfigMethods.getConfig();
    } finally {
      setIsLoading(false);
    }
  }

  const getAppConfigFromApi = useCreateEffect<void>(handleResponse);

  return {
    appConfigStore: appConfig,
    isAppConfigLoading: isLoading,
    getAppConfigFromApi,
  }
}