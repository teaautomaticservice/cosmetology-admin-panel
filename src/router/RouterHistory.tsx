import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { addLayout } from './hocs/addLayout';
import { routerConfig } from './routerConfig';

export const RouterHistory: React.FC = () => {
  const routesEls = routerConfig.map(({ path, Component, Layout }) => (
    <Route key={path} path={path} Component={addLayout(Component, Layout)} />
  ));

  return (
    <BrowserRouter>
      <Routes>
        {routesEls}
      </Routes>
    </BrowserRouter>
  );
};
