import Twemoji from 'components/atoms/Twemoji';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { GetWordBooks_wordBooks } from 'types/generated/api';

type Props = {
  wordBooks?: GetWordBooks_wordBooks[];
  loading: boolean;
};

const WordBookList: FC<Props> = ({ wordBooks, loading }) => {
  if (loading) return <div>loading...</div>;

  return (
    <div className="flex flex-col">
      <div className="font-bold text-3xl flex flex-row mb-4">
        <Twemoji emoji="📕" />
        <div className="font-bold ml-2">単語カード一覧</div>
      </div>

      <div className="flex flex-col">
        {wordBooks &&
          wordBooks.map((wordBook) => (
            <Link to={`/books/${wordBook.id}`}>
              <div className="flex flex-col p-4 rounded border-solid  bg-white">
                <div className="text-2xl font-bold">{wordBook.title}</div>
                <div className="text-xl text-gray-600"> {wordBook.summary}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default WordBookList;
