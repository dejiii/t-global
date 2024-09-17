import React from 'react';
import Button from '../primary/Button';

const Buttons = () => {
  return (
    <div className="flex flex-row gap-[10px] mr-[75px]">
      <Button title="Melding maken" bgColor={'bg-purple'} />
      <Button title="VIM" />
      <Button title="DataLek" />
    </div>
  );
};

export default Buttons;
