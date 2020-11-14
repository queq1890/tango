import React, { FC } from 'react';
import Twemoji from 'components/atoms/Twemoji';

type Props = {
  title: string;
  fullSize: boolean;
};

// TODO: word の部分のtransition
// position: absolute でつける

const WordCardTitle: FC<Props> = ({ title, fullSize }) => {
  return (
    <div
      className={`flex items-center 
    ${fullSize ? 'justify-start items-start' : 'justify-center items-center'}
  `}
    >
      <div className="font-bold text-5xl">{title}</div>
      <div className="text-2xl ml-4">
        <Twemoji emoji="🔊" />
      </div>
    </div>
  );
};

export default WordCardTitle;
