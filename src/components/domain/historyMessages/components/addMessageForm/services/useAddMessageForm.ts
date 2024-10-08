import { useEffect } from "react";
import { historyMessagesMethods } from "@apiMethods/historyApi";
import { useHistoryMessagesStore } from "@stores/historyMessages";
import { SubmitHandler,useForm } from 'react-hook-form';

import type { HistoryForm } from "../types";

export const useAddMessageForm = () => {
  const { updateHistoryMessages, updateHistoryMessagesFromApi } = useHistoryMessagesStore();

  const { handleSubmit, control: formControl, reset } = useForm({
    defaultValues: {
      message: "",
    }
  });
  
  const formSubmitHandler: SubmitHandler<HistoryForm> = async ({ message }) => {
    const { data } = await historyMessagesMethods.addHistory(message);
    updateHistoryMessages(data);
    reset();
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