import { useEffect } from 'react';
import { usePagination } from '@shared/hooks/usePagination';
import { dateUtils } from '@shared/utils/dateUtils';
import { useLogsStore } from '@stores/logsStore';
import type { Logs } from '@typings/api/logs';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const TableLogs: React.FC = () => {
  const { logsList, updateLogsFromApi, isLogsListLoading } = useLogsStore();
  const { params, updatePaginationParams } = usePagination({
    updater: updateLogsFromApi,
  });

  useEffect(() => {
    updateLogsFromApi();
  }, []);

  const columns: ColumnsType<Logs> = [
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      sortOrder: 'ascend',
      render: (val) => (<span>{dateUtils.formattedDate(val)}</span>)
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
  );
};
