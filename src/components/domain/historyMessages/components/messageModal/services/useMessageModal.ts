import { historyMessagesMethods } from "@apiMethods/historyApi";
import { useHistoryMessagesStore } from '@stores/historyMessages';
import { useModalStore } from "@stores/modal";
import { History } from '@typings/api/historyMessage';
import { MODALS_TYPE } from '@typings/modals';
import { SubmitHandler,useForm } from 'react-hook-form';

import type { UpdateMessageForm } from "../types";

export const useMessageModal = () => {
  const { close, modalType, modalProps } = useModalStore();
  const { updateHistoryMessages } = useHistoryMessagesStore();
  const { handleSubmit, control: formControl, reset, getValues } = useForm({
    defaultValues: {
      message: "",
    }
  });

  const isOpen = modalType === MODALS_TYPE.HISTORY;

  const updateMessage: SubmitHandler<UpdateMessageForm> = async ({ message }) => {
    if (!isOpen || !modalProps) {
      return null;
    }
    const history = modalProps as History;
    const { data } = await historyMessagesMethods.updateHistory(history.id, message);

    updateHistoryMessages(data);
    close();
    reset();
  };

  const okClick = () => updateMessage(getValues());
  const submitForm = handleSubmit(updateMessage);

  return {
    modalProps,
    isOpen,
    close: () => close(),
    submitForm,
    formControl,
    okClick,
  }
}