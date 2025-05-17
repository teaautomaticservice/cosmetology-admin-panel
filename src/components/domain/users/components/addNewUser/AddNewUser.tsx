import { useState } from 'react';
import { usersApi } from '@apiMethods/usersApi';
import { useModalStore } from '@stores/modal';
import { useUsersStore } from '@stores/users';
import { CurrentUser, UserType, UserTypeEnum } from '@typings/api/users';
import { MODALS_TYPE } from '@typings/modals';
import {
  Input,
  Modal,
  Radio,
  Tooltip,
  Typography
} from 'antd';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { INCORRECT_EMAIL, maxLength, REQUIRED } from 'src/constants/formErrors';
import { EMAIL_REGEXP, MAX_LENGTH } from 'src/constants/formRules';

import s from './addNewUser.module.css';

const { Text } = Typography;

type FormData = {
  email: string;
  type: Extract<UserType, 'client' | 'operator'>;
  displayName?: string;
}

export const AddNewUser: React.FC = () => {
  const { close, modalType } = useModalStore();
  const {
    handleSubmit,
    control: formControl,
    formState,
    
  } = useForm<FormData>({
    defaultValues: {
      type: UserTypeEnum.OPERATOR,
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const { updateUsersFromApi } = useUsersStore();

  const { errors: formErrors } = formState

  const isOpen = modalType === MODALS_TYPE.ADD_USER;

  if (!isOpen) {
    return null;
  };

  const addUser: SubmitHandler<FormData> = async ({
    email,
    displayName,
    type
  }) => {
    setIsLoading(true);
    try {
      await usersApi.createUser({
        email,
        type: type as CurrentUser['type'],
        displayName,
      });
      await updateUsersFromApi();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const submitForm = handleSubmit(addUser);

  return (
    <Modal
      className={s.root}
      title='Add new user'
      open={isOpen}
      onOk={submitForm}

      okButtonProps={{
        title: 'Submit',
        loading: isLoading,
        disabled: isLoading,
      }}
      onCancel={() => close()}
    >
      <form action="/" onSubmit={submitForm}>
        <div className={s.formItem}>
          <Text>Email*:</Text>
          <Controller
            name="email"
            control={formControl}
            rules={{
              required: {
                value: true,
                message: REQUIRED
              },
              maxLength: {
                value: MAX_LENGTH,
                message: maxLength(MAX_LENGTH)
              },
              pattern: {
                value: EMAIL_REGEXP,
                message: INCORRECT_EMAIL,
              },
            }}
            render={({ field }) => (
              <Tooltip placement="right" title={formErrors.email?.message} open={Boolean(formErrors.email)}>
                <Input {...field} placeholder='Email' aria-errormessage='Test' />
              </Tooltip>
            )}
          />
        </div>
        <div className={s.formItem}>
          <Text>Display name:</Text>
          <Controller
            name="displayName"
            control={formControl}
            rules={{
              maxLength: {
                value: MAX_LENGTH,
                message: maxLength(MAX_LENGTH)
              },
            }}
            render={({ field }) => (
              <Tooltip placement="right" title={formErrors.displayName?.message} open={Boolean(formErrors.displayName)}>
                <Input {...field} placeholder='Display name' />
              </Tooltip>
            )}
          />
        </div>
        <div className={s.formItem}>
          <Text>User type*:</Text>
          <Controller
            name="type"
            control={formControl}
            rules={{
              required: {
                value: true,
                message: REQUIRED
              },
            }}
            render={({ field }) => (
              <Tooltip placement="right" title={formErrors.displayName?.message} open={Boolean(formErrors.displayName)}>
                <Radio.Group
                  {...field}
                  options={[
                    { value: UserTypeEnum.OPERATOR, label: 'Operator' },
                    { value: UserTypeEnum.CLIENT, label: 'Client' },
                  ]}
                />
              </Tooltip>
            )}
          />

        </div>


      </form>
    </Modal>
  )
}