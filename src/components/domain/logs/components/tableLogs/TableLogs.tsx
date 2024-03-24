import { useEffect } from 'react';
import { PaginationProps, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { debounce } from 'lodash';

import type { Logs } from '../../../../../typings/api/logs';
import { useLogsStore } from '../../../../../stores/logsStore';
import { useParams } from '../../../../../hooks/useParams';

export const TableLogs: React.FC = () => {
  const { logsList, updateLogsFromApi, isLogsListLoading } = useLogsStore();
  const { params, setParams } = useParams();

  const debouncedListUpdate = debounce(updateLogsFromApi, 100);

  const columns: ColumnsType<Logs> = [
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      sortOrder: 'ascend',
    },
    {
      title: 'Key',
      dataIndex: 'key',
    },
    {
      title: 'Level',
      dataIndex: 'level',
    },
    {
      title: 'Authorized User Id',
      dataIndex: 'authorizedUserId',
    },
    {
      title: 'Message',
      dataIndex: 'message',
    },
    {
      title: 'Meta',
      dataIndex: 'meta',
    },
  ];

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

  return (
    <Table
      columns={columns}
      dataSource={logsList.data}
      rowKey={'id'}
      loading={isLogsListLoading}
      pagination={{
        total: logsList.count,
        current: Number(params.page) || 1,
        pageSize: Number(params.pageSize) || 10,
        onChange: updatePaginationParams,
        onShowSizeChange: updatePaginationParams,
      }}
    />
  )
}