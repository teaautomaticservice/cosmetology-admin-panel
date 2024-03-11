import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routerConfig } from './routerConfig';

export const RouterHistory: React.FC = () => {
  const routesEls = routerConfig.map(({ path, Component }) => (
    <Route key={path} path={path} Component={Component} />
  ));

  return (
    <BrowserRouter>
      <Routes>
        {routesEls}
      </Routes>
    </BrowserRouter>
  );
};
