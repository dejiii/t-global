import React, { useState, ChangeEvent, useCallback } from 'react';
import { DocumentData } from '../types';

type Props = {
  name: string;
  placeholder: string;
  value: string | number;
  setFormData: React.Dispatch<React.SetStateAction<DocumentData>>;
};

// eslint-disable-next-line react/display-name
const Input: React.FC<Props> = React.memo(
  ({ name, placeholder, value, setFormData }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setFormData((prevData) => ({
          ...prevData,
          [name]: newValue,
        }));
      },
      [name, setFormData]
    );

    console.log('input');

    return (
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full mt-[20px] bg-offwhite rounded-[10px] border-[1px] p-[20px] text-syd focus:outline-none ${
          isFocused ? 'border-green' : 'border-ice'
        }`}
      />
    );
  }
);

export default Input;
