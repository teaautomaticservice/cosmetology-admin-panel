import { useEffect } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import type { Logs } from '../../../../../typings/api/logs';
import { useLogsStore } from '../../../../../stores/logs';

export const TableLogs: React.FC = () => {
  const { logsList, updateLogsFromApi, isLogsListLoading } = useLogsStore();

  const columns: ColumnsType<Logs> = [
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
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

  useEffect(() => {
    updateLogsFromApi();
  }, []);

  return (
    <Table columns={columns} dataSource={logsList} rowKey={'id'} loading={isLogsListLoading} />
  )
}