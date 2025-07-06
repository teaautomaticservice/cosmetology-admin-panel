import { useState } from 'react';
import { usersApi } from '@apiMethods/usersApi';
import { useModalStore } from '@stores/modal';
import { useUserDetailStore } from '@stores/userDetail';
import { MODALS_TYPE } from '@typings/modals';
import { toastEventBus } from '@utils/domain/toastEventBus';
import { Modal } from 'antd'

import s from './approveResetPassword.module.css';

export const ApproveResetPassword: React.FC = () => {
  const { modalType, open } = useModalStore();
  const { userDetail } = useUserDetailStore();
  const [isLoading, setIsLoading] = useState(false);

  const isOpen = modalType === MODALS_TYPE.USER_HARD_RESET_PASSWORD_APPROVE;

  const returnBack = () => open(MODALS_TYPE.USER_ACTIONS);

  const hardResetPassword = async () => {
    if (userDetail) {
      try {
        setIsLoading(true);
        await usersApi.userHardResetPassword(userDetail.id);
        toastEventBus.emit('addToast', {
          description: `For user ${userDetail.displayName} password have been reset`,
        });
        returnBack();
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <Modal
      className={s.root}
      title='Approve reset password'
      open={isOpen}
      onOk={hardResetPassword}
      onCancel={returnBack}
      okButtonProps={{
        title: 'Submit',
        loading: isLoading,
        disabled: isLoading,
      }}
    >
      <div className={s.container}>
        Need to approve for hard reset of password for user {userDetail?.displayName}
      </div>
    </Modal>
  )
}