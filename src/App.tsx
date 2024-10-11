import React from "react";
import { RouterHistory } from '@router/RouterHistory';
import compose from '@utils/compose';

import { withAppConfig } from './hocs/appConfig';
import { withCssVars } from './hocs/cssVars';
import { withAntTheme } from './hocs/theme';

const withAppData = (Component: React.FC): React.FC => compose(
  withAppConfig,
  withAntTheme,
  withCssVars,
)(Component);

const App: React.FC = () => {
  return (
    <RouterHistory />
  );
}

export default withAppData(App);