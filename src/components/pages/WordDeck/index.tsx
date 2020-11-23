import React from 'react';

import WordDeck from 'components/templates/WordDeck';
import { useGetWordDeckQuery } from './useGetWordDeckQuery';
import { useParams } from 'react-router-dom';

const WordDeckPage = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, data } = useGetWordDeckQuery(parseInt(id));
  const wordDeck = data?.wordDeck ?? undefined;

  return <WordDeck loading={loading} wordDeck={wordDeck} />;
};

export default WordDeckPage;
