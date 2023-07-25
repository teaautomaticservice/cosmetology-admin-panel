import React from "react";
import { Layout } from 'antd';

import { style } from "./style";
import { AddMessageForm } from "./addMessageForm/addMessageForm";

const { Header, Content, Sider } = Layout;

export const HistoryMessage: React.FC = () => {
  

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
        </Content>
      </Layout>
    </Layout>
  );
};
