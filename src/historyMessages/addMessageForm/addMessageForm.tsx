import React from "react";
import { Input, Button, Space } from 'antd';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { style } from "./style";
import { historyMessagesMethods } from "../../apiMethods/historyMessages";

interface HistoryForm {
  message: string;
}

export const AddMessageForm: React.FC = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      message: "",
    }
  });
  
  const formSubmitHandler: SubmitHandler<HistoryForm> = async ({message}) => {
    const data = await historyMessagesMethods.addHistory(message);
    console.log('Submit!', data)
  };

  return (
    <>
      <h3>Add message</h3>
      <form action="" onSubmit={handleSubmit(formSubmitHandler)} >
        <Space direction="vertical">
          <Controller name="message" control={control} render={({ field } ) => <Input {...field }/>}/>
          <Button type="primary" htmlType="submit" style={style.buttonForm}>Отправить запрос</Button>
        </Space>
      </form>
    </>
  );
};
