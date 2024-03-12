import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routerConfig } from './routerConfig';
import { addLayout } from './hocs/addLayout';

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
