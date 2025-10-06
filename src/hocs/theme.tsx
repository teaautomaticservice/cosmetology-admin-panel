import React from 'react';
import { colors } from '@ant/colors';
import { Toasts } from '@components/ui/toasts/Toasts';
import { ConfigProvider, ThemeConfig, } from 'antd';

const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: colors.red7,
  },
  components: {
    Layout: {
      bodyBg: colors.red1,
      headerBg: colors.red3,
    },
  },
};

export const withAntTheme = (Component: React.FC): React.FC => {
  return (props: any) => {
    return (
      <ConfigProvider theme={themeConfig}>
        <Component {...props} />
        <Toasts />
      </ConfigProvider>
    );
  };
};
