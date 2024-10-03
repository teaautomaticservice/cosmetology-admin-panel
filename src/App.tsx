import React from "react";
import { withCssVars } from '@ant/cssVars';
import compose from '@utils/compose';

import { withAntTheme } from "./ant/theme";
import { RouterHistory } from './router/RouterHistory';

const withAppData = (Component: React.FC): React.FC => compose(
  withAntTheme,
  withCssVars,
)(Component);

const App: React.FC = () => {
  return (
    <RouterHistory />
  );
}

export default withAppData(App);