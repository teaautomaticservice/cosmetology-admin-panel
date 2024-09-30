import { MessageModal } from '@components/domain/historyMessages/components/messageModal/MessageModal';
import { paths } from '@router/paths';
import { Layout, Menu, MenuProps, Space, Typography } from 'antd';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import { useLocation, useNavigate } from "react-router-dom";

import { style } from "./style";

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
    <Layout style={style.layout}>
      <Sider style={style.leftSider}>
        <Menu
          mode="inline"
          onClick={onClick}
          defaultSelectedKeys={[pathname]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={style.header}>
          <Title level={3}>Header</Title>
        </Header>
        <Content style={style.content}>
          <Space direction="vertical" style={style.tableWrap}>
            {children}
          </Space>
        </Content>
      </Layout>
      <MessageModal />
    </Layout>
  );
}