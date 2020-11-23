import React, { FC } from 'react';
import Twemoji from 'components/atoms/Twemoji';
import { GetWordDeck_wordDeck_words_descriptions } from 'types/generated/api';
import PartsOfSpeech from 'components/molecules/PartsOfSpeech';

type Props = {
  descriptions: GetWordDeck_wordDeck_words_descriptions[];
};

const WordCardDescription: FC<Props> = ({ descriptions }) => {
  return (
    <div className="flex flex-col">
      {descriptions.map((description) => (
        <>
          <PartsOfSpeech partsOfSpeech={description.partsOfSpeech} />

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
