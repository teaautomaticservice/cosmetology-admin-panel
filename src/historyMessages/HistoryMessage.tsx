import React from "react";
import { Layout, Input, Button, Space } from 'antd';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { style } from "./style";

const { Header, Content, Sider } = Layout;

interface HistoryForm {
  message: string;
}

export const HistoryMessage: React.FC = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      message: "",
    }
  });
  
  const formSubmitHandler: SubmitHandler<HistoryForm> = (data) => {
    // TODO: Mock handler
    console.log('Submit!', data)
  };

  return (
    <Layout style={style.layout}>
      <Sider style={style.leftSider}>
          <h1>Sider</h1>
          <form action="" onSubmit={handleSubmit(formSubmitHandler)} >
            <Space direction="vertical">
              <Controller name="message" control={control} render={({ field } ) => <Input {...field }/>}/>
              <Button type="primary" htmlType="submit" style={style.buttonForm}>Отправить запрос</Button>
            </Space>
          </form>
      </Sider>
      <Layout>
        <Header style={style.header}>
          <h1>Header</h1>
        </Header>
        <Content style={style.content}>
          <h1>Content</h1>
        </Content>
      </Layout>
    </Layout>
  );
};
