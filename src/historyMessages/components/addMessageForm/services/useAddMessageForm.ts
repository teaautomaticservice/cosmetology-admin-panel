import { useEffect } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';

import type { HistoryForm } from "../types";
import { historyMessagesMethods } from "../../../../apiMethods/historyMessages";
import { useHistoryMessagesStore } from "../../../../stores/historyMessages";

export const useAddMessageForm = () => {
  const { updateHistoryMessages, updateHistoryMessagesFromApi } = useHistoryMessagesStore();

  const { handleSubmit, control: formControl } = useForm({
    defaultValues: {
      message: "",
    }
  });
  
  const formSubmitHandler: SubmitHandler<HistoryForm> = async ({message}) => {
    const { data } = await historyMessagesMethods.addHistory(message);
    updateHistoryMessages(data);
  };

  const submitForm = handleSubmit(formSubmitHandler);

  useEffect(() => {
    updateHistoryMessagesFromApi();
  }, [])

  return {
    formControl,
    submitForm,
  }
}