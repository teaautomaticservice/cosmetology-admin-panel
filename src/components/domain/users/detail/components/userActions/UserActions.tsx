import { useModalStore } from '@stores/modal';
import { useUserDetailStore } from '@stores/userDetail';
import { UserStatusEnum } from '@typings/api/users';
import { MODALS_TYPE } from '@typings/modals';
import { Button, Modal } from 'antd';

import s from './userActions.module.css';

export const UserActions: React.FC = () => {
  const { close, open } = useModalStore();
  const { userDetail } = useUserDetailStore();

  const openApproveResetPassword = () => open(MODALS_TYPE.USER_HARD_RESET_PASSWORD_APPROVE);
  const openApproveRestartCompleteRegistration = () => open(
    MODALS_TYPE.USER_RESTART_COMPLETE_REGISTRATION_PASSWORD_APPROVE,
  );

  const footer = (
    <div>
      <Button onClick={() => close()}>Close</Button>
    </div>
  );

  return (
    <Modal
      className={s.root}
      title='User action'
      open={true}
      footer={footer}
      onCancel={() => close()}
    >
      <div className={s.container}>
        <Button onClick={openApproveResetPassword}>Reset password</Button>
        {userDetail?.status === UserStatusEnum.PENDING && (
          <Button onClick={openApproveRestartCompleteRegistration}>
            Resend email complete registration
          </Button>
        )}
      </div>
    </Modal>
  );
};
