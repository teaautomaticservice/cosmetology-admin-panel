import { Users } from '@typings/api/users';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { useTableUsers } from './useTableUsers';

export const TableUsers: React.FC = () => {
  const { isUsersListLoading, params, updatePaginationParams, usersList, } = useTableUsers();

  const columns: ColumnsType<Users> = [
    {
      title: 'ID',
      dataIndex: 'id',
      sortOrder: 'ascend',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Display name',
      dataIndex: 'displayName',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
    {
      title: 'Created at',
      dataIndex: 'createdAt',
    },
    {
      title: 'Updated at',
      dataIndex: 'updatedAt',
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={usersList.data}
      rowKey={'id'}
      loading={isUsersListLoading}
      pagination={{
        total: usersList.count,
        current: Number(params.page) || 1,
        pageSize: Number(params.pageSize) || 10,
        onChange: updatePaginationParams,
        onShowSizeChange: updatePaginationParams,
      }}
    />
  );
};