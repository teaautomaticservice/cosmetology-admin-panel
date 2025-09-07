import { useState } from 'react';
import { usersApi } from '@apiMethods/usersApi';
import { useModalStore } from '@stores/modal';
import { useUserDetailStore } from '@stores/userDetail';
import { MODALS_TYPE } from '@typings/modals';
import { toastEventBus } from '@utils/domain/toastEventBus';
import { Modal } from 'antd'

import s from './approveRestartCompleteRegistration.module.css';

export const ApproveRestartCompleteRegistration : React.FC = () => {
  const { open } = useModalStore();
  const { userDetail } = useUserDetailStore();
  const [isLoading, setIsLoading] = useState(false);

  const returnBack = () => open(MODALS_TYPE.USER_ACTIONS);

  const onOk = async () => {
    if (userDetail) {
      try {
        setIsLoading(true);
        await usersApi.userRestartCompleteRegistration(userDetail.id);
        toastEventBus.emit('addToast', {
          description: `For user ${userDetail.displayName} send mail to restart complete registration`,
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
      title='Approve restart complete registration'
      open={true}
      onOk={onOk}
      onCancel={returnBack}
      okButtonProps={{
        title: 'Submit',
        loading: isLoading,
        disabled: isLoading,
      }}
    >
      <div className={s.container}>
        Need to approve for restart complete registration for {userDetail?.displayName}
      </div>
    </Modal>
  )
}