import { MessageModal } from '@components/domain/historyMessages/components/messageModal/MessageModal';
import { AddNewUser } from '@components/domain/users/components/addNewUser/AddNewUser';
import { MODALS_TYPE } from '@typings/modals';

export const ModalsMap = {
  [MODALS_TYPE.HISTORY]: MessageModal,
  [MODALS_TYPE.ADD_USER]: AddNewUser,
};
