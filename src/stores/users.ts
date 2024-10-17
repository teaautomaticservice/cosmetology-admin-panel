import { usersApi } from '@apiMethods/usersApi';
import { storeFactory } from '@utils/storeFactory';

const {
  useStore: useUsersListStore,
  useAsyncMethod: useUsersListAsyncMethod,
} = storeFactory<{
  data: [],
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
    const resp = usersApi.getUsersList();
    console.log(resp);
    return { data: [], count: 0 };
  })

  return {
    usersList,
    updateUsersFromApi,
    isUsersListLoading,
  }
}