import React, { FC } from 'react';

type Props = {
  height: string;
  bg?: string;
  className?: string;
};

const Card: FC<Props> = ({ height, bg = 'bg-white', className, children }) => {
  return (
    <div
      className={`flex justify-center items-center flex-col p-4 rounded-lg relative shadow-sm ${bg} ${height} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
