
import { Button } from 'antd';

import { transport } from '../../../utils/transport';

export const Logs: React.FC = () => {
  const test = async () => {
    const { data } = await transport.get('/logs/list');
    console.log(data);
  }

  return (
    <Button type="primary" onClick={test}>Logs</Button>
  )
}