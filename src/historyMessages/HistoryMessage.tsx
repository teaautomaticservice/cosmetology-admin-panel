import React from "react";
import { Layout, Space } from 'antd';

import { style } from "./style";
import { AddMessageForm } from "./components/addMessageForm/AddMessageForm";
import { TableMessages } from "./components/tableMessages/TableMessages";

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
          <TableMessages />
        </Content>
      </Layout>
    </Layout>
  );
};
