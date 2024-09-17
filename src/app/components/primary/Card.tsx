import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`p-[30px] rounded-[10px] bg-white border-[1px] border-grey ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
