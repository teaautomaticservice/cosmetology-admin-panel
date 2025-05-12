import { paths } from '@router/paths';
import { User } from '@typings/api/users';
import { Button, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { useTableUsers } from './useTableUsers';

export const TableUsers: React.FC = () => {
  const { isUsersListLoading, params, updatePaginationParams, usersList, } = useTableUsers();

  const columns: ColumnsType<User> = [
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
    {
      title: 'Action',
      key: 'action',
      width: '200px',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" size="small" href={paths.userDetail(record.id.toString())}>
            Detail
          </Button>
        </Space>
      ),
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