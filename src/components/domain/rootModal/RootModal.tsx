import { useModalStore } from '@stores/modal';
import { MODALS_TYPE } from '@typings/modals';

import { MessageModal } from '../historyMessages/components/messageModal/MessageModal';
import { AddNewUser } from '../users/components/addNewUser/AddNewUser';

const ModalsMap = {
  [MODALS_TYPE.HISTORY]: MessageModal,
  [MODALS_TYPE.ADD_USER]: AddNewUser,
}

export const RootModal: React.FC = () => {
  const { modalType } = useModalStore();

  if (!modalType) {
    return null;
  }

  const Component = ModalsMap[modalType]

  return (
    <Component />
  );
};