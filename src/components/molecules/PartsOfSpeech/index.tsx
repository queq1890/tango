import React, { FC } from 'react';
import { PartsOfSpeech as PartsOfSpeechType } from 'types/generated/api';

import { getPartsOfSpeech } from 'utils/getPartsOfSpeech';

type Props = {
  partsOfSpeech: PartsOfSpeechType;
};

const PartsOfSpeech: FC<Props> = ({ partsOfSpeech }) => {
  return (
    <div className="border border-solid border-gray-500 text-gray-700 rounded w-6 text-center">
      {getPartsOfSpeech(partsOfSpeech)}
    </div>
  );
};

export default PartsOfSpeech;
