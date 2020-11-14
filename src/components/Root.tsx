import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const WordSet = lazy(() => import('./pages/WordSet'));
const NotFound = lazy(() => import('./pages/NotFound'));

// TODO: suspense fallback component

const Root = () => {
  return (
    <div className="h-screen bg-gray-200">
      <Suspense fallback={null}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WordSet} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default Root;
