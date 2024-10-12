import { authorizationMethods } from '@apiMethods/authorizationApi';
import { useAppConfigStore } from '@stores/appConfig';

export const useUserMenuService = () => {
  const { appConfigStore } = useAppConfigStore();

  const { currentUser } = appConfigStore;

  const logOut = async () => {
    await authorizationMethods.logOut();
    window.location.reload();
  };

  return {
    userDisplayName: currentUser?.displayName,
    logOut,
  };
}