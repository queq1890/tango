import { gql, useQuery } from '@apollo/client';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GetWordBooks_wordBooks } from 'types/generated/api';

const WordSet = lazy(() => import('./pages/WordSet'));
const NotFound = lazy(() => import('./pages/NotFound'));

// TODO: suspense fallback component

const GET_WORD_BOOKS = gql`
  query GetWordBooks {
    wordBooks {
      id
      title
      summary
      wordDecks {
        id
        title
        summary
      }
    }
  }
`;

const Root = () => {
  const { data } = useQuery<GetWordBooks_wordBooks>(GET_WORD_BOOKS);

  console.log(data);

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
