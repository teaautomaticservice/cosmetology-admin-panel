import React from 'react';
import { Button } from 'antd';

import { AddMessageForm } from './components/addMessageForm/AddMessageForm';
import { TableMessages } from './components/tableMessages/TableMessages';
// import { MessageModal } from "./components/messageModal/MessageModal";
import { useHistoryMessage } from './services/useHistoryMessage';

export const HistoryMessage: React.FC = () => {
  const { updateHistories, isHistoryLoading } = useHistoryMessage();

  return (
    <div>
      <AddMessageForm />
      <Button type="primary" loading={isHistoryLoading} onClick={updateHistories}>Refresh data</Button>
      <TableMessages />
    </div>
  );
};
