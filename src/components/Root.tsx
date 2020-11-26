import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const WordBookList = lazy(() => import('./pages/WordBookList'));
const WordBook = lazy(() => import('./pages/WordBook'));
const WordDeck = lazy(() => import('./pages/WordDeck'));
const NotFound = lazy(() => import('./pages/NotFound'));

// TODO: suspense fallback component

const Root = () => {
  return (
    <div className="h-screen bg-gray-200 flex items-center justify-center">
      <div className="h-full p-4 max-w-sm w-full">
        <Suspense fallback={null}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={WordBookList} />
              <Route exact path="/books/:id" component={WordBook} />
              <Route exact path="/decks/:id" component={WordDeck} />
              <Route path="*" component={NotFound} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </div>
    </div>
  );
};

export default Root;
