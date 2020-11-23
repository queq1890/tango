import React from 'react';
import { useGetWordBooksQuery } from './useWordBooks';
import WordBookList from 'components/templates/WordBookList';

const WordBookListPage = () => {
  const { loading, data } = useGetWordBooksQuery();

  return <WordBookList wordBooks={data?.wordBooks} loading={loading} />;
};

export default WordBookListPage;
