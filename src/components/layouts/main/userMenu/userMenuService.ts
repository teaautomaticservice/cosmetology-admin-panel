import { useAppConfigStore } from '@stores/appConfig';

export const useUserMenuService = () => {
  const { appConfigStore, logOut } = useAppConfigStore();

  const { currentUser } = appConfigStore;

  const logOutHandler = async () => {
    await logOut();
  };

  return {
    userDisplayName: currentUser?.displayName,
    logOut: logOutHandler,
  };
}