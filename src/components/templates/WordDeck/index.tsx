import React, { useState, FC } from 'react';
import WordCard from 'components/organisms/WordCard';
import Twemoji from 'components/atoms/Twemoji';
import { GetWordDeck_wordDeck } from 'types/generated/api';

type Props = {
  loading: boolean;
  wordDeck?: GetWordDeck_wordDeck;
};

const WordDeck: FC<Props> = ({ loading, wordDeck }) => {
  const [index, setIndex] = useState(0);
  const [fullSize, setFullSize] = useState(false);
  const words = wordDeck?.words ?? [];
  const total = words.length;
  const currentWord = words[index];

  const toggleCard = () => {
    setFullSize((val) => !val);
  };

  const handleButtonClick = () => {
    if (index + 1 >= total) return;
    setIndex(index + 1);
    setFullSize(false);
  };

  if (loading) return <div>loading...</div>;

  return (
    <div className="flex justify-end flex-col h-full">
      <div className="flex flex-col justify-center h-full w-full">
        <WordCard
          word={currentWord}
          fullSize={fullSize}
          toggleCard={toggleCard}
        />
      </div>

      <div className="flex mt-4 justify-between">
        <button
          onClick={handleButtonClick}
          className="flex justify-center items-center flex-col p-4 rounded-lg relative shadow-sm h-20 bg-red-200 active:bg-blue-700 w-full mr-2 font-semibold text-2xl"
        >
          <Twemoji emoji="🤔" />
        </button>

        <button
          onClick={handleButtonClick}
          className="flex justify-center items-center flex-col p-4 rounded-lg relative shadow-sm h-20 bg-blue-200 active:bg-blue-700 w-full ml-2 font-semibold text-2xl"
        >
          <Twemoji emoji="👍"></Twemoji>
        </button>
      </div>
    </div>
  );
};

export default WordDeck;
