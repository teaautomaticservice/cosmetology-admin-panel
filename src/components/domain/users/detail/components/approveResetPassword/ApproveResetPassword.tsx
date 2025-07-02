import { usersApi } from '@apiMethods/usersApi';
import { useModalStore } from '@stores/modal';
import { useUserDetailStore } from '@stores/userDetail';
import { MODALS_TYPE } from '@typings/modals';
import { Modal } from 'antd'

import s from './approveResetPassword.module.css';

export const ApproveResetPassword: React.FC = () => {
  const { modalType, open, close } = useModalStore();
  const { userDetail } = useUserDetailStore();

  const isOpen = modalType === MODALS_TYPE.USER_HARD_RESET_PASSWORD_APPROVE;

  const hardResetPassword = () => {
    if (userDetail) {
      usersApi.userHardResetPassword(userDetail.id);
      close();
    }
  }
  const returnBack = () => open(MODALS_TYPE.USER_ACTIONS);

  return (
    <Modal
      className={s.root}
      title='Approve reset password'
      open={isOpen}
      onOk={hardResetPassword}
      onCancel={returnBack}
      okButtonProps={{
        title: 'Submit',
        // loading: isLoading,
        // disabled: isLoading,
      }}
    >
      <div className={s.container}>
        Need to approve for hard reset of password for user {userDetail?.displayName}
      </div>
    </Modal>
  )
}