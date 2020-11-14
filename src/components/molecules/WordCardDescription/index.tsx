import React, { FC } from 'react';
import { Word } from 'types/models/Word';
import Twemoji from 'components/atoms/Twemoji';

// TODO:
// - i18n

type Props = {
  word: Word;
};

const WordCardDescription: FC<Props> = ({ word }) => {
  return (
    <div className="flex flex-col">
      {word.descriptions.map((description) => (
        <>
          <div className="border border-solid border-gray-500 text-gray-700 rounded w-6 text-center">
            {description.type === 'noun' && '名'}
          </div>
          <ul className="mt-2">
            <li>
              {description.meanings.map((meaning) => (
                <div className="text-xl">{meaning}</div>
              ))}

              <div className="mt-1 ml-2">
                {description.examples.map((example) => (
                  <>
                    <div className="font-bold">
                      {example.vn}
                      <span className="ml-2">
                        <Twemoji emoji="🔊" />
                      </span>
                    </div>
                    <div className="">{example.ja}</div>
                  </>
                ))}
              </div>
            </li>
          </ul>
        </>
      ))}
    </div>
  );
};

export default WordCardDescription;
