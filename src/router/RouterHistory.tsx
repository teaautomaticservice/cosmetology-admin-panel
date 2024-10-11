import React from 'react';
import compose from '@utils/compose';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { withLayout } from './hocs/withLayout';
import { withRoutes } from './hocs/withRoles';
import { routerConfig } from './routerConfig';

export const RouterHistory: React.FC = () => {
  const composedComponent = compose(
    withRoutes,
    withLayout,
  );

  const routesEls = routerConfig.map(({ path, Component, Layout }) => (
    <Route key={path} path={path} Component={composedComponent(Component, Layout)} />
  ));

  return (
    <BrowserRouter>
      <Routes>
        {routesEls}
      </Routes>
    </BrowserRouter>
  );
};
