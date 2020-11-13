import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const NotFound = lazy(() => import('./pages/NotFound'));

// TODO: suspense fallback component

const Root = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Root;
