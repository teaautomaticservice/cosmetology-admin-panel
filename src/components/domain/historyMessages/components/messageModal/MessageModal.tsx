import React from "react";
import { historyMessagesMethods } from '@apiMethods/historyApi';
import { useHistoryMessagesStore } from '@stores/historyMessages';
import { useModalStore } from '@stores/modal';
import { History } from '@typings/api/historyMessage';
import { MODALS_TYPE } from '@typings/modals';
import { dateUtils } from "@utils/dateUtils";
import { Input,Modal } from 'antd';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { UpdateMessageForm } from './types';

type Props = {
  history?: History;
}

export const MessageModal: React.FC<Props> = ({ history }) => {
  const { close, modalType } = useModalStore();
  const { updateHistoryMessages } = useHistoryMessagesStore();
  const { handleSubmit, control: formControl, reset, getValues } = useForm({
    defaultValues: {
      message: "",
    }
  });
  const isOpen = modalType === MODALS_TYPE.HISTORY;

  if (!isOpen || !history) {
    return null;
  }

  const updateMessage: SubmitHandler<UpdateMessageForm> = async ({ message }) => {
    const { data } = await historyMessagesMethods.updateHistory(history.id, message);

    updateHistoryMessages(data);
    close();
    reset();
  };

  const okClick = () => updateMessage(getValues());
  const submitForm = handleSubmit(updateMessage);
  const date = dateUtils.formattedDateWithTime(new Date(history.date));
  const title = `Message from '${history.owner}' Date: ${date}`;

  return (
    <Modal
      title={title}
      open={isOpen}
      onOk={okClick}
      // confirmLoading={confirmLoading}
      onCancel={() => close()}
    >
      <h4>Old message:</h4>
      <p>{history.message}</p>
      <h3>Enter new message</h3>
      <form action="/" onSubmit={submitForm}>
        <Controller name="message" control={formControl} render={({ field } ) => <Input {...field }/>}/>
      </form>
    </Modal>
  );
} 
