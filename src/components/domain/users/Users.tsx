import { HeadingContainer } from '@components/ui/headingContainer/HeadingContainer';
import { useModalStore } from '@stores/modal';
import { MODALS_TYPE } from '@typings/modals';
import { Button } from 'antd';

import { TableUsers } from './components/tableUsers/TableUsers';

export const Users: React.FC = () => {
  const { open } = useModalStore();

  const openUserModal = () => {
    open(MODALS_TYPE.ADD_USER);
  };

  return (
    <div>
      <HeadingContainer>
        <Button type="primary" onClick={openUserModal}>Create user</Button>
      </HeadingContainer>
      <TableUsers />
    </div>
  );
};
