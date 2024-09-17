import React from 'react';
import { ArrowIcon, BellIcon } from '../icons';
import Image from 'next/image';
import Avatar from '../../../images/Avatar.png';

const Preview = () => {
  return (
    <div className="flex gap-[10px] items-center">
      <div className="bg-offwhite h-[48px] w-[48px] rounded-full flex items-center justify-center cursor-pointer">
        <BellIcon />
      </div>
      <div className="flex gap-[8px] pr-[10px] items-center p-[3px] rounded-full bg-offwhite cursor-pointer">
        <Image
          src={Avatar}
          alt="User Avatar"
          height={40}
          width={40}
          className="rounded-full"
        />
        <span>Hi Paul</span>
        <ArrowIcon />
      </div>
    </div>
  );
};

export default Preview;
