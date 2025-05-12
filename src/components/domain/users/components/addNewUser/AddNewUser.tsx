import { usersApi } from '@apiMethods/usersApi';
import { useModalStore } from '@stores/modal';
import { UserTypeEnum } from '@typings/api/users';
import { MODALS_TYPE } from '@typings/modals';
import { Modal } from 'antd';

export const AddNewUser: React.FC = () => {
  const { close, modalType } = useModalStore();

  const isOpen = modalType === MODALS_TYPE.ADD_USER;

  if (!isOpen) {
    return null;
  }

  const addUser = async () => {
    await usersApi.createUser({
      email: 'test4@test.com',
      type: UserTypeEnum.OPERATOR,
      displayName: 'newCoolUser',
    });
  }
      
  return (
    <Modal
      title='Add new user'
      open={isOpen}
      onOk={addUser}
      // confirmLoading={confirmLoading}
      onCancel={() => close()}
    >
      <h4>Add new user</h4>
      {/* <form action="/" onSubmit={addUser}>
        <Controller name="message" control={formControl} render={({ field } ) => <Input {...field }/>}/>
      </form> */}
    </Modal>
  )
}