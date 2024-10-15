import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';

import { useUserMenuService } from './userMenuService';

export const UserMenu: React.FC = () => {
  const { userDisplayName, logOut } = useUserMenuService();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'LogOut',
      onClick: logOut,
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']}>
      <Button>{userDisplayName}</Button>
    </Dropdown>
  );
}