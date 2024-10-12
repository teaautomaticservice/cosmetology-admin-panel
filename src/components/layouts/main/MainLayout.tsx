import { MessageModal } from '@components/domain/historyMessages/components/messageModal/MessageModal';
import { paths } from '@router/paths';
import { Layout, Menu, MenuProps, Space, Typography } from 'antd';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import { useLocation, useNavigate } from "react-router-dom";
import { APP_NAME } from 'src/constants/app';

import s from './style.module.css'

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

type MenuItems = Required<MenuProps>['items'];

export const MainLayout: React.FC = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const messageMenu: MenuItems[number] = {
    label: 'Messages',
    type: 'group',
    children: [
      {
        label: 'Messages',
        key: paths.main,
      }
    ]
  };

  const technicalMenu: MenuItems[number] = {
    label: 'Technical',
    type: 'group',
    children: [
      {
        label: 'Logs',
        key: paths.logs,
      }
    ]
  };

  const menuItems: MenuItems = [
    messageMenu,
    technicalMenu,
  ]

  const onClick: MenuClickEventHandler = ({ key }) => {
    if (typeof key === 'string') {
      navigate(key)
    }
  }

  return (
    <Layout className={s.root}>
      <Header className={s.header}>
        <Title className={s.title} level={3}>{APP_NAME}</Title>
      </Header>
      <Layout>
        <Sider className={s.leftSider}>
          <Menu
            mode="inline"
            onClick={onClick}
            defaultSelectedKeys={[pathname]}
            items={menuItems}
          />
        </Sider>

        <Content className={s.content}>
          <Space direction="vertical" className={s.wrapper}>
            {children}
          </Space>
        </Content>
      </Layout>
      <MessageModal />
    </Layout>
  );
}