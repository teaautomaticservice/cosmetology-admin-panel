import { useEffect } from 'react';
import { usePagination } from '@shared/hooks/usePagination';
import { paths } from '@router/paths';
import { useUsersStore } from '@stores/users';
import { User } from '@typings/api/users';
import { Button, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const TableUsers: React.FC = () => {
  const { updateUsersFromApi, usersList, isUsersListLoading } = useUsersStore();
  const { params, updatePaginationParams } = usePagination({
    updater: updateUsersFromApi,
  })

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

  useEffect(() => {
    updateUsersFromApi();
  }, []);

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