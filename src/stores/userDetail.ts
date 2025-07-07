import { usersApi } from '@apiMethods/usersApi';
import { User } from '@typings/api/users';
import { storeFactory } from '@utils/storeFactory';

const {
  useStore,
} = storeFactory<{
  user: User | null,
  isLoading: boolean;
}>({
  user: null,
  isLoading: false,
});

export const useUserDetailStore = () => {
  const [userDetailState, setUserDetailState] = useStore();

  const updateUserDetailFromApi = async (id: number) => {
    setUserDetailState({
      isLoading: true,
    });
    try {
      const userDetail = await usersApi.getUserDetail(id);
      setUserDetailState({ user: userDetail });
    } finally {
      setUserDetailState({
        isLoading: false,
      });
    }
  };

  return {
    userDetail: userDetailState.user,
    isUserDetailLoading: userDetailState.isLoading,
    updateUserDetailFromApi,
  };
};