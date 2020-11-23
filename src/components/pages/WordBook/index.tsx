import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetWordBookQuery } from './useGetWordBookQuery';
import WordBook from 'components/templates/WordBook';

const WordBookPage = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, data } = useGetWordBookQuery(parseInt(id));

  const wordBook = data?.wordBook ?? undefined;

  return <WordBook loading={loading} wordBook={wordBook} />;
};

export default WordBookPage;
