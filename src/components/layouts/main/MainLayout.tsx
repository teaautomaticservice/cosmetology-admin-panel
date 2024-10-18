import { useEffect, useState } from 'react';
import { MessageModal } from '@components/domain/historyMessages/components/messageModal/MessageModal';
import { paths } from '@router/paths';
import { Layout, Menu, Space, Typography } from 'antd';
import { MenuItemGroupType, MenuItemType } from 'antd/es/menu/interface';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import { useLocation, useNavigate } from "react-router-dom";
import { APP_NAME } from 'src/constants/app';

import { UserMenu } from './userMenu/userMenu';

import s from './style.module.css'

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const messageMenu: MenuItemGroupType<MenuItemType> = {
  label: 'Messages',
  type: 'group',
  children: [
    {
      label: 'Messages',
      key: paths.main,
    }
  ]
};

const usersMenu: MenuItemGroupType<MenuItemType> = {
  label: 'Users',
  type: 'group',
  children: [
    {
      label: 'Users',
      key: paths.users,
    }
  ]
}

const technicalMenu: MenuItemGroupType<MenuItemType> = {
  label: 'Technical',
  type: 'group',
  children: [
    {
      label: 'Logs',
      key: paths.logs,
    },
  ]
};

const menuItems: (MenuItemType | MenuItemGroupType<MenuItemType>)[] = [
  messageMenu,
  usersMenu,
  technicalMenu,
];

const findCurrentMenuItems = (key: string): MenuItemType | null => {
  const selectedItem = menuItems
    .flatMap((item) => 'children' in item ? item.children : item)
    .find(child => child && child.key === key);

  return selectedItem as MenuItemType | null;
};

export const MainLayout: React.FC = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [title, setTitle] = useState('')

  const onClick: MenuClickEventHandler = ({ key }) => {
    if (typeof key === 'string') {
      navigate(key)
    }
  }

  useEffect(() => {
    const selectedItem = findCurrentMenuItems(pathname);

    if (selectedItem?.label) {
      setTitle(selectedItem.label.toString());
    }
  }, [pathname])

  return (
    <Layout className={s.root}>
      <Header className={s.header}>
        <Title className={s.title} level={3}>{APP_NAME}</Title>
        <UserMenu />
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
          <Title level={2}>{title}</Title>
          <Space direction="vertical" className={s.wrapper}>
            {children}
          </Space>
        </Content>
      </Layout>
      <MessageModal />
    </Layout>
  );
}