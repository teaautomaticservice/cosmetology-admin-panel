import { PaginationProps } from 'antd';
import { debounce } from 'lodash';

import { useParams } from './useParams';

export const usePagination = ({
  updater
}: {
  updater: (...args: any[]) => any;
}) => {
  const { params, setParams } = useParams();

  const debouncedListUpdate = debounce(updater, 100);

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

  return {
    params,
    updatePaginationParams,
  }
}