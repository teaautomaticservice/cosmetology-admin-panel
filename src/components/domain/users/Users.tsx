import { usersApi } from '@apiMethods/usersApi';
import { UserTypeEnum } from '@typings/api/users';
import { Button } from 'antd';

import { TableUsers } from './components/tableUsers/TableUsers'

export const Users: React.FC = () => {
  const createUser = async () => {
    const resp = await usersApi.createUser({
      email: 'test4@test.com',
      type: UserTypeEnum.OPERATOR,
      displayName: 'newCoolUser',
    });
    console.log(resp);
  }

  return (
    <div>
      <Button type="primary" onClick={createUser}>Create user</Button>
      <TableUsers />
    </div>
  );
};
