import { usersApi } from '@apiMethods/usersApi';
import { User } from '@typings/api/users';
import { storeFactory } from '@utils/storeFactory';

const {
  useStore,
} = storeFactory<{
  user: User | null,
}>({
  user: null,
});

const {
  useStore: useIsLoadingStore,
} = storeFactory<boolean>(false);

export const useUserDetailStore = () => {
  const [userDetailState, setUserDetailState] = useStore();
  const [isUserDetailLoading, setIsLoading] = useIsLoadingStore();

  const updateUserDetailFromApi = async (id: number) => {
    setIsLoading(true);
    try {
      const userDetail = await usersApi.getUserDetail(id);
      setUserDetailState({ user: userDetail });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    userDetail: userDetailState.user,
    isUserDetailLoading,
    updateUserDetailFromApi,
  };
};