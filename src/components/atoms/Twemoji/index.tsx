import React, { memo, FC } from 'react';
import twemoji from 'twemoji';
import './style.css';

type Props = {
  emoji: string;
};

const Twemoji: FC<Props> = ({ emoji }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: twemoji.parse(emoji, {
          folder: 'svg',
          ext: '.svg',
        }),
      }}
    />
  );
};

export default memo(Twemoji);
