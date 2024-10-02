import React from "react";
import compose from '@shared/utils/compose';

import { withAntTheme } from "./ant/theme";
import { RouterHistory } from './router/RouterHistory';

const withAppData = (Component: React.FC): React.FC => compose(
  withAntTheme,
)(Component);

const App: React.FC = () => {
  return (
    <RouterHistory />
  );
}

export default withAppData(App);