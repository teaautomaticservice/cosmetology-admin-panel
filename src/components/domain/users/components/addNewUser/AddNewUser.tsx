import { usersApi } from '@apiMethods/usersApi';
import { useModalStore } from '@stores/modal';
import { UserType, UserTypeEnum } from '@typings/api/users';
import { MODALS_TYPE } from '@typings/modals';
import { Input, Modal } from 'antd';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type FormData = {
  email: string;
  type: UserType;
  displayName?: string;
}

export const AddNewUser: React.FC = () => {
  const { close, modalType } = useModalStore();
  const { handleSubmit, control: formControl } = useForm<FormData>({
    defaultValues: {
      type: UserTypeEnum.OPERATOR,
    }
  })

  const isOpen = modalType === MODALS_TYPE.ADD_USER;

  if (!isOpen) {
    return null;
  }

  const addUser: SubmitHandler<FormData> = async ({
    email,
    displayName
  }) => {
    await usersApi.createUser({
      email,
      type: UserTypeEnum.OPERATOR,
      displayName,
    });
  }

  const submitForm = handleSubmit(addUser);

      
  return (
    <Modal
      title='Add new user'
      open={isOpen}
      onOk={submitForm}
      // confirmLoading={confirmLoading}
      onCancel={() => close()}
    >
      <h4>Add new user</h4>
      <form action="/" onSubmit={submitForm}>
        <Controller
          name="email"
          control={formControl}
          rules={{
            required: true,
          }}
          render={({ field } ) => <Input {...field }/>}
        />
        <Controller name="displayName" control={formControl} render={({ field } ) => <Input {...field }/>}/>
      </form>
    </Modal>
  )
}