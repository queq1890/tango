import React from 'react';
import WordCard from 'components/organisms/WordCard';
import Twemoji from 'components/atoms/Twemoji';

const WordDeck = () => {
  return (
    <div className="flex justify-end flex-col p-4 h-full">
      <div className="flex flex-col justify-center h-full w-full">
        <WordCard word="phở" />
      </div>

      <div className="flex mt-4 justify-between">
        <button className="flex justify-center items-center flex-col p-4 rounded-lg relative shadow-sm h-20 bg-red-200 active:bg-blue-700 w-full mr-2 font-semibold text-2xl">
          <Twemoji emoji="🤔" />
        </button>

        <button className="flex justify-center items-center flex-col p-4 rounded-lg relative shadow-sm h-20 bg-blue-200 active:bg-blue-700 w-full ml-2 font-semibold text-2xl">
          <Twemoji emoji="👍"></Twemoji>
        </button>
      </div>
    </div>
  );
};

export default WordDeck;
