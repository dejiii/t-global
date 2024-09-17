import React, { useState } from 'react';
import Card from '../../primary/Card';
import { AddIcon, UploadIcon } from '../../icons';
import Dropdown from '../../primary/Dropdown';
import { departmentsList, subfolderList } from '@/constants';
import { DocumentData } from '../../types';

type Props = {
  formData: DocumentData;
  setFormData: React.Dispatch<React.SetStateAction<DocumentData>>;
};

const LevelThree = ({ formData, setFormData }: Props) => {
  const [copiedItem, setCopiedItem] = useState(formData?.copyItem || '');
  const [ruleOfLife, setRuleOfLife] = useState(formData?.isRule || '');
  const [dateAdjusted, setDateAdjusted] = useState(
    formData?.isDateAdjusted || ''
  );
  const [brochure, setBrochure] = useState(formData?.isBrochure || '');

  const handleOptionChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file: JSON.stringify(file) });
    }
  };

  return (
    <Card className="">
      <div className="flex gap-[30px] mb-[40px]">
        <span className="w-6/12">
          <div className="flex flex-col mb-[40px]">
            <label className="text-dark font-medium">
              Do you want to copy this item to the new group?
              <span className="text-error">*</span>
            </label>
            <div className="flex gap-[20px] mt-[20px]">
              <label
                className={`flex items-center space-x-2 bg-offwhite rounded-[10px] pl-[20px] py-[17px] pr-[84px] cursor-pointer border-[1px] ${
                  copiedItem === 'Yes'
                    ? 'border-[1px] border-green'
                    : 'border-offwhite'
                }`}
              >
                <input
                  type="radio"
                  value="Yes"
                  checked={copiedItem === 'Yes'}
                  onChange={() => {
                    setCopiedItem('Yes');
                    handleOptionChange('copyItem', 'Yes');
                  }}
                  className="form-radio text-blue-500"
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label
                className={`flex items-center space-x-2 bg-offwhite rounded-[10px] pl-[20px] py-[17px] pr-[84px] cursor-pointer border-[1px] ${
                  copiedItem === 'No' ? ' border-green' : 'border-offwhite'
                }`}
              >
                <input
                  type="radio"
                  value="No"
                  checked={copiedItem === 'No'}
                  onChange={() => {
                    setCopiedItem('No');
                    handleOptionChange('copyItem', 'No');
                  }}
                  className="form-radio text-blue-500"
                />
                <span className="text-gray-700">No</span>
              </label>
              {formData?.copyItem === 'Yes' && (
                <button>
                  <span className="flex gap-2 bg-green rounded-[10px] p-[10px] text-white">
                    <AddIcon />
                    Add
                  </span>
                </button>
              )}
            </div>
            {formData?.copyItem === 'Yes' && (
              <div className="flex flex-row gap-[20px] mt-[20px] max-w-[430px]">
                <div className="w-6/12">
                  <label className="text-dark font-medium">
                    Department <span className="text-error">*</span>
                  </label>
                  <Dropdown
                    options={departmentsList}
                    placeholder="Select Department"
                    name="department"
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
                <div className="w-6/12">
                  <label className="text-dark font-medium">
                    Sub folder <span className="text-error">*</span>
                  </label>
                  <Dropdown
                    options={subfolderList}
                    placeholder="Select Sub folder"
                    name="subFolder"
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
              </div>
            )}
          </div>
          <label className="text-dark font-medium">
            Adjusted revision date? (Standard 3 years)
            <span className="text-error">*</span>
          </label>
          <div className="flex gap-[20px] mt-[20px]">
            <label
              className={`flex items-center space-x-2 bg-offwhite rounded-[10px] pl-[20px] py-[17px] pr-[84px] cursor-pointer border-[1px] ${
                dateAdjusted === 'Yes' ? ' border-green' : 'border-offwhite'
              }`}
            >
              <input
                type="radio"
                name="isDateAdjusted"
                value="Yes"
                checked={dateAdjusted === 'Yes'}
                onChange={() => {
                  setDateAdjusted('Yes');
                  handleOptionChange('isDateAdjusted', 'Yes');
                }}
                className="form-radio text-blue-500"
              />
              <span className="text-gray-700">Yes</span>
            </label>
            <label
              className={`flex items-center space-x-2 bg-offwhite rounded-[10px] pl-[20px] py-[17px] pr-[84px] cursor-pointer border-[1px] ${
                dateAdjusted === 'No' ? ' border-green' : 'border-offwhite'
              }`}
            >
              <input
                type="radio"
                name="isDateAdjusted"
                value="No"
                checked={dateAdjusted === 'No'}
                onChange={() => {
                  setDateAdjusted('No');
                  handleOptionChange('isDateAdjusted', 'No');
                }}
                className="form-radio text-blue-500"
              />
              <span className="text-gray-700">No</span>
            </label>
          </div>
        </span>
        <span className="w-6/12">
          <div className="flex flex-col items-start">
            <label className="text-dark font-medium">
              Should this become a rule of life?
              <span className="text-error">*</span>
            </label>
            <div className="flex gap-[20px] mt-[20px]">
              <label
                className={`flex items-center space-x-2 bg-offwhite rounded-[10px] pl-[20px] py-[17px] pr-[84px] cursor-pointer border-[1px] ${
                  ruleOfLife === 'Yes' ? ' border-green' : 'border-offwhite'
                }`}
              >
                <input
                  type="radio"
                  value="Yes"
                  checked={ruleOfLife === 'Yes'}
                  onChange={() => {
                    setRuleOfLife('Yes');
                    handleOptionChange('isRule', 'Yes');
                  }}
                  className="form-radio text-blue-500"
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label
                className={`flex items-center space-x-2 bg-offwhite rounded-[10px] pl-[20px] py-[17px] pr-[84px] cursor-pointer border-[1px] ${
                  ruleOfLife === 'No' ? ' border-green' : 'border-offwhite'
                }`}
              >
                <input
                  type="radio"
                  value="No"
                  checked={ruleOfLife === 'No'}
                  onChange={() => {
                    setRuleOfLife('No');
                    handleOptionChange('isRule', 'No');
                  }}
                  className="form-radio text-blue-500"
                />
                <span className="text-gray-700">No</span>
              </label>
            </div>
            {ruleOfLife === 'Yes' && (
              <div className="mt-[40px]">
                <label>Enter Date</label>
                <input
                  type="date"
                  className="bg-offwhite block mt-[20px] rounded-[10px] pl-[20px] py-[17px] pr-[84px] cursor-pointer border-[1px]"
                />
              </div>
            )}
            <label className="text-dark font-medium mt-[40px]">
              Should this item become a brochure?
              <span className="text-error">*</span>
            </label>
            <div className="flex gap-[20px] mt-[20px]">
              <label
                className={`flex items-center space-x-2 bg-offwhite rounded-[10px] pl-[20px] py-[17px] pr-[84px] cursor-pointer border-[1px] ${
                  brochure === 'Yes' ? ' border-green' : 'border-offwhite'
                }`}
              >
                <input
                  type="radio"
                  value="Yes"
                  name="isBrochure"
                  checked={brochure === 'Yes'}
                  onChange={() => {
                    setBrochure('Yes');
                    handleOptionChange('isBrochure', 'Yes');
                  }}
                  className="form-radio text-blue-500"
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label
                className={`flex items-center space-x-2 bg-offwhite rounded-[10px] pl-[20px] py-[17px] pr-[84px] cursor-pointer border-[1px] ${
                  brochure === 'No' ? ' border-green' : 'border-offwhite'
                }`}
              >
                <input
                  type="radio"
                  value="No"
                  name="isBrochure"
                  checked={brochure === 'No'}
                  onChange={() => {
                    setBrochure('No');
                    handleOptionChange('isBrochure', 'No');
                  }}
                  className="form-radio text-blue-500"
                />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </div>
        </span>
      </div>
      <div>
        <label className="text-dark font-medium">
          Upload Document <span className="text-error">*</span>
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            multiple={false}
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="bg-offwhite mt-[20px] py-[20px] flex justify-center">
            <div className="flex flex-col gap-[14px] items-center">
              <UploadIcon />
              <span>
                Drag & Drop your file or{' '}
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer font-bold text-darkBlue"
                >
                  Browse
                </label>
              </span>
            </div>
          </div>
        </label>
      </div>
    </Card>
  );
};

export default LevelThree;
