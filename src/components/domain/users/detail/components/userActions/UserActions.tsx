import { useModalStore } from '@stores/modal';
import { MODALS_TYPE } from '@typings/modals';
import { Button, Modal } from 'antd';

import s from './userActions.module.css';

export const UserActions: React.FC = () => {
  const { close, modalType, open } = useModalStore();

  const isOpen = modalType === MODALS_TYPE.USER_ACTIONS;

  const openApproveResetPassword = () => open(MODALS_TYPE.USER_HARD_RESET_PASSWORD_APPROVE);

  const footer = (
    <div>
      <Button onClick={() => close()}>Close</Button>
    </div>
  )

  return (
    <Modal
      className={s.root}
      title='User action'
      open={isOpen}
      footer={footer}
    >
      <div className={s.container}>
        <Button onClick={openApproveResetPassword}>Reset password</Button>
      </div>
    </Modal>
  );
}