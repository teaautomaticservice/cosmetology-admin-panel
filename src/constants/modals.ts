import { MessageModal } from '@components/domain/historyMessages/components/messageModal/MessageModal';
import { AddNewUser } from '@components/domain/users/components/addNewUser/AddNewUser';
import {
  ApproveResetPassword
} from '@components/domain/users/detail/components/approveResetPassword/ApproveResetPassword';
import { UserActions } from '@components/domain/users/detail/components/userActions/UserActions';
import { MODALS_TYPE } from '@typings/modals';

export const ModalsMap = {
  [MODALS_TYPE.HISTORY]: MessageModal,
  [MODALS_TYPE.ADD_USER]: AddNewUser,
  [MODALS_TYPE.USER_ACTIONS]: UserActions,
  [MODALS_TYPE.USER_HARD_RESET_PASSWORD_APPROVE]: ApproveResetPassword,
};
