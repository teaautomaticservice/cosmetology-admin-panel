import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import type { Logs } from '@typings/api/logs';
import { useTableLogs } from './services/useTableLogs';

export const TableLogs: React.FC = () => {
  const {
    logsList,
    isLogsListLoading,
    params,
    updatePaginationParams,
  } = useTableLogs();

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