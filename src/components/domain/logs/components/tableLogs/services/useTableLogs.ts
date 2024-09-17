import { useEffect } from 'react';
import { PaginationProps } from 'antd';
import { debounce } from 'lodash';

import { useParams } from '@hooks/useParams';
import { useLogsStore } from '@stores/logsStore';

export const useTableLogs = () => {
  const { logsList, updateLogsFromApi, isLogsListLoading } = useLogsStore();
  const { params, setParams } = useParams();

  const debouncedListUpdate = debounce(updateLogsFromApi, 100);

  const updatePaginationParams: PaginationProps['onChange'] | PaginationProps['onShowSizeChange'] = (page, pageSize) => {
    setParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
    });
    debouncedListUpdate();
  };

  useEffect(() => {
    updateLogsFromApi();
  }, []);

  return {
    logsList,
    params,
    isLogsListLoading,
    updatePaginationParams
  };
};