import Twemoji from 'components/atoms/Twemoji';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { GetWordBook_wordBook } from 'types/generated/api';

type Props = {
  loading: boolean;
  wordBook?: GetWordBook_wordBook;
};

const WordBook: FC<Props> = ({ loading, wordBook }) => {
  if (loading) return <div>loading...</div>;

  return (
    <div className="flex flex-col">
      <div className="font-bold text-3xl flex flex-row mb-4">
        <Twemoji emoji="📒" />
        <div className="font-bold ml-2">単語カード</div>
      </div>

      <div className="flex flex-col">
        {wordBook &&
          wordBook.wordDecks.map((wordDeck) => (
            <Link to={`/decks/${wordDeck.id}`}>
              <div className="flex flex-col p-4 rounded border-solid  bg-white">
                <div className="text-2xl font-bold">{wordDeck.title}</div>
                <div className="text-xl text-gray-600"> {wordDeck.summary}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default WordBook;
