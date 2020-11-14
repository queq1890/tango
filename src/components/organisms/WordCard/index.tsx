import React, { useState, FC } from 'react';
import Card from 'components/atoms/Card';
import WordCardTitle from 'components/molecules/WordCardTitle';
import WordCardDescription from 'components/molecules/WordCardDescription';

type Props = {
  word: string;
};

const WORD_MOCK = {
  descriptions: [
    {
      type: 'noun' as const,
      meanings: ['フォー(ベトナムの麺)'],
      examples: [
        {
          vn: 'Phở bò và phở gà thì anh thích phở nào hơn?',
          ja: '牛肉入りのフォーと鶏肉入りのフォーとでは、どちらが好きですか？',
        },
      ],
    },
  ],
};

const WordCard: FC<Props> = ({ word }) => {
  const [fullSize, setFullSize] = useState(false);

  const toggle = () => {
    setFullSize((val) => !val);
  };

  return (
    <Card
      height={fullSize ? 'h-full' : 'h-64'}
      className="w-full transition-all duration-500 ease-in-out"
    >
      <div
        className={`transition-all duration-1000 ease-in-out flex flex-col h-full w-full
          ${fullSize ? 'justify-start' : 'justify-center'}
        `}
      >
        <WordCardTitle title={word} fullSize={fullSize} />

        {fullSize && (
          <div className="mt-2">
            <WordCardDescription word={WORD_MOCK} />
          </div>
        )}
      </div>

      <button
        onClick={toggle}
        className="p-2 rounded-lg relative shadow-sm bg-gray-200 active:bg-gray-700 w-32 font-semibold text-lg"
      >
        {fullSize ? '閉じる' : '説明を読む'}
      </button>
    </Card>
  );
};

export default WordCard;
