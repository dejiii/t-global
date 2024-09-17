import React, { memo, MouseEventHandler } from 'react';

type ButtonProps = {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  bgColor?: string;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  bgColor = 'bg-green',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${bgColor} ${className} px-4 py-2 rounded-[10px] text-white`}
    >
      {title}
    </button>
  );
};

export default memo(Button);
