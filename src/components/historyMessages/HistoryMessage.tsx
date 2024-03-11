import React from "react";
import { Layout, Button, Space } from 'antd';

import { style } from "./style";
import { AddMessageForm } from "./components/addMessageForm/AddMessageForm";
import { TableMessages } from "./components/tableMessages/TableMessages";
import { MessageModal } from "./components/messageModal/MessageModal";
import { useHistoryMessage } from "./services/useHistoryMessage";
import { transport } from '../../utils/transport';

const { Header, Content, Sider } = Layout;

export const HistoryMessage: React.FC = () => {
  const { updateHistories, isHistoryLoading } = useHistoryMessage();

  const test = async () => {
    const { data } = await transport.get('/logs/list');
    console.log(data);
  }

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
          <Space direction="vertical" style={style.tableWrap}>
            <Button type="primary" loading={isHistoryLoading} onClick={updateHistories}>Refresh data</Button>
            <Button type="primary" onClick={test}>Logs</Button>
            <TableMessages />
          </Space>
        </Content>
      </Layout>
      <MessageModal />
    </Layout>
  );
};
