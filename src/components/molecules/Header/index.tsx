import React, { FC } from 'react';
import BackIcon from 'components/atoms/BackIcon';

type Props = {
  title?: string;
  goBack?: () => void;
};

const Header: FC<Props> = ({ title, goBack }) => {
  return (
    <div className="h-12 mb-4 text-gray-600 flex items-center">
      {goBack && <BackIcon onClick={goBack} />}
      <div className="text-2xl w-full ml-4 font-bold text-black">{title}</div>
    </div>
  );
};

export default Header;
