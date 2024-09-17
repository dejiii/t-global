import Image from 'next/image';
import React from 'react';

import I1 from '../../../images/img1.png';
import I2 from '../../../images/img2.png';
import I3 from '../../../images/img3.png';
import I4 from '../../../images/img4.png';

const Logos = () => {
  return (
    <div className="flex flex-row gap-[10px] mr-[75px]">
      <Image src={I1} alt="Company logo" height={46} className="" />
      <Image src={I2} alt="Company logo" height={46} className="" />
      <Image src={I3} alt="Company logo" height={46} className="" />
      <Image src={I4} alt="Company logo" height={46} className="" />
    </div>
  );
};

export default Logos;
