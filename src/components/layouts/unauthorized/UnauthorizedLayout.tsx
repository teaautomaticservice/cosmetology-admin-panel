import { Typography } from 'antd';
import { APP_NAME, NAME_DESCRIPTION } from 'src/constants/app';

import s from './style.module.css';

const { Title, Text } = Typography;

export const UnauthorizedLayout: React.FC = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={s.root}>
      <div>
        <Title className={s.title}>{APP_NAME}</Title>
        <Text className={s.titleDescription}>{NAME_DESCRIPTION}</Text>
      </div>

      <div className={s.wrapper}>{children}</div>
    </div>
  );
};
