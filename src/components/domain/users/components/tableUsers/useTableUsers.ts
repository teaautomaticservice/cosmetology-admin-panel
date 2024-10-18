import { useEffect } from 'react';
import { useParams } from '@hooks/useParams';
import { useUsersStore } from '@stores/users';
import { PaginationProps } from 'antd';
import { debounce } from 'lodash';

export const useTableUsers = () => {
  const { updateUsersFromApi, usersList, isUsersListLoading } = useUsersStore();
  const { params, setParams } = useParams();

  const debouncedListUpdate = debounce(updateUsersFromApi, 100);

  const updatePaginationParams:
    PaginationProps['onChange'] |
    PaginationProps['onShowSizeChange']
    = (page, pageSize) => {
      setParams({
        page: page.toString(),
        pageSize: pageSize.toString(),
      });
      debouncedListUpdate();
    };

  useEffect(() => {
    updateUsersFromApi()
  }, []);

  return {
    usersList,
    isUsersListLoading,
    params,
    updatePaginationParams,
  };
}