import { Typography } from 'antd';

import s from './style.module.css';

const { Title, Text } = Typography;

export const UnauthorizedLayout: React.FC = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={s.root}>
      <div>
        <Title className={s.title}>TAS: Cosmetology. Admin panel</Title>
        <Text className={s.titleDescription}>Tea Automatic Service</Text>
      </div>

      <div className={s.wrapper}>{children}</div>
    </div>
  )
}