'use client';
import React, { useState, useCallback } from 'react';
import { DownChevron, UpChevron } from '../icons';
import { DocumentData } from '../types';

interface DropdownProps {
  name: 'drafter' | 'assessor';
  target: 'function' | 'colleague';
  options: { id: number; title: string }[];
  placeholder: string;
  formData: DocumentData;
  setFormData: React.Dispatch<React.SetStateAction<DocumentData>>;
}

// eslint-disable-next-line react/display-name
const SelectOption: React.FC<DropdownProps> = React.memo(
  ({ name, target, options, placeholder, formData, setFormData }) => {
    const [active, setActive] = useState(false);

    const selectedOption = formData[name]?.[0]?.[target] || placeholder;

    const toggleDropdown = useCallback(() => {
      setActive((prevActive) => !prevActive);
    }, []);

    const handleSelect = useCallback(
      (optionTitle: string) => {
        setFormData((prevData) => {
          const updatedArray = prevData[name].map((item) => ({
            ...item,
            [target]: optionTitle,
          }));

          return {
            ...prevData,
            [name]: updatedArray,
          };
        });
        setActive(false);
      },
      [name, target, setFormData]
    );

    return (
      <div className="relative mt-[20px]">
        <div
          className={`bg-offwhite rounded-[10px] border-[1px] p-[20px] cursor-pointer ${
            active ? 'border-green' : 'border-ice'
          }`}
          onClick={toggleDropdown}
        >
          <span className="flex justify-between">
            <span className="text-syd truncate">
              {selectedOption === '' ? placeholder : selectedOption}
            </span>
            {active ? <DownChevron /> : <UpChevron />}
          </span>
        </div>

        {active && (
          <div className="z-10 absolute top-[70px] border-[1px] border-green bg-white rounded-[10px] px-[30px] pt-[30px]">
            {options.map(({ id, title }) => (
              <span
                key={id}
                className="block mb-[30px] cursor-pointer"
                onClick={() => handleSelect(title)}
              >
                {title}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default SelectOption;
