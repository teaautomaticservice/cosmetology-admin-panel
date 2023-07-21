import React from "react";
import { ConfigProvider, ThemeConfig, theme } from "antd";

const colors = theme.getDesignToken();

const themeConfig: ThemeConfig = {
  components: {
    Layout: {
      colorBgBody: colors.red1,
      colorBgHeader: colors.red3,
    }
  }
}

export const withAntTheme = (Component: React.FC): React.FC => {
  return (props: any) => {
    return (
      <ConfigProvider theme={themeConfig}>
        <Component {...props} />
      </ConfigProvider>
    );
  };
};
