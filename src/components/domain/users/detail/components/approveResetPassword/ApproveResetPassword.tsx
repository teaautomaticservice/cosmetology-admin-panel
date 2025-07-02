import { useModalStore } from '@stores/modal';
import { MODALS_TYPE } from '@typings/modals';
import { Modal } from 'antd'

import s from './approveResetPassword.module.css';

export const ApproveResetPassword: React.FC = () => {
  const { modalType, open } = useModalStore();

  const isOpen = modalType === MODALS_TYPE.USER_HARD_RESET_PASSWORD_APPROVE;

  const close = () => open(MODALS_TYPE.USER_ACTIONS);

  return (
    <Modal
      className={s.root}
      title='Approve reset password'
      open={isOpen}
      onCancel={close}
      okButtonProps={{
        title: 'Submit',
        // loading: isLoading,
        // disabled: isLoading,
      }}
    >
      <div className={s.container}>Need to approve for hard reset of password</div>
    </Modal>
  )
}