import { appConfigMethods } from '@apiMethods/appConfigApi';
import { authorizationMethods } from '@apiMethods/authorizationApi';
import { AppConfig } from '@typings/api/appConfig';
import { LoginFormDto } from '@typings/api/generated';
import { storeFactory } from '@utils/storeFactory';

const {
  useStore,
} = storeFactory<AppConfig>({
  currentUser: null,
});
const { useStore: useIsLoadingStore } = storeFactory<boolean>(false);
const { useStore: useIsAuthLoadingStore } = storeFactory<boolean>(false);

export const useAppConfigStore = () => {
  const [appConfigStore, setAppConfig] = useStore();
  const [isAppConfigLoaded, setIsLoading] = useIsLoadingStore();
  const [isAuthLoading, setIsAuthLoading] = useIsAuthLoadingStore();

  const updateAppConfig = (props: Partial<AppConfig>) => setAppConfig({
    ...appConfigStore,
    ...props,
  });

  const getAppConfigFromApi = async () => {
    try {
      if (isAppConfigLoaded) {
        setIsLoading(false);
      }
      const resp = await appConfigMethods.getConfig();
      updateAppConfig(resp);
      setIsLoading(true);
    } catch {
      // noop
    }
  };

  const logOut = async () => {
    updateAppConfig({ currentUser: null });
    setIsAuthLoading(true);
    try {
      await authorizationMethods.logOut();
    } finally {
      setIsAuthLoading(false);
    }
  };

  const login = async (loginForm: LoginFormDto) => {
    setIsAuthLoading(true);
    try {
      const currentUser = await authorizationMethods.login(loginForm);
      updateAppConfig({ currentUser })
    } finally {
      setIsAuthLoading(false);
    }
  };

  return {
    appConfigStore,
    isAppConfigLoaded,
    isAuthLoading,
    logOut,
    login,
    getAppConfigFromApi,
  }
}