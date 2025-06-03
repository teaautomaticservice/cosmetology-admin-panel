import { usersApi } from '@apiMethods/usersApi';
import { User } from '@typings/api/users';
import { storeFactory } from '@utils/storeFactory';

const {
  useStore: useUsersListStore,
  useAsyncMethod: useUsersListAsyncMethod,
} = storeFactory<{
  data: User[],
  count: number,
}>({
  data: [],
  count: 0,
});

const {
  useStore: useIsLoadingStore,
} = storeFactory<boolean>(false);

export const useUsersStore = () => {
  const [usersList] = useUsersListStore();
  
  const [isUsersListLoading, setIsLoading] = useIsLoadingStore();
  
  const updateUsersFromApi = useUsersListAsyncMethod<void>(async () => {
    setIsLoading(true);
    try {
      const { data, meta } = await usersApi.getUsersList();
      return { data, count: meta.count };
    } finally {
      setIsLoading(false);
    }
  });

  return {
    usersList,
    updateUsersFromApi,
    isUsersListLoading,
  }
}