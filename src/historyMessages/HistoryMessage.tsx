import React from "react";
import { Layout } from 'antd';

import { style } from "./style";
import { AddMessageForm } from "./components/addMessageForm/addMessageForm";
import { useHistoryMessage } from "./services/useHistoryMessage"; 

const { Header, Content, Sider } = Layout;

export const HistoryMessage: React.FC = () => {
  const { historyMessages } = useHistoryMessage();

  const listEl = historyMessages.map((val) => (<h3 key={val.id}>{val.message}</h3>));

  return (
    <Layout style={style.layout}>
      <Sider style={style.leftSider}>
        <AddMessageForm />
      </Sider>
      <Layout>
        <Header style={style.header}>
          <h1>Header</h1>
        </Header>
        <Content style={style.content}>
          <h1>Content</h1>
          {listEl}
        </Content>
      </Layout>
    </Layout>
  );
};
