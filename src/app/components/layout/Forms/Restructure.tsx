import React from 'react';
import { DocumentData } from '../../types';
import Card from '../../primary/Card';
import { AddIcon } from '../../icons';
import SelectOption from '../../primary/SelectOption';
import { optionsList, peopleList } from '@/constants';

type Props = {
  formData: DocumentData;
  setFormData: React.Dispatch<React.SetStateAction<DocumentData>>;
};

const Restructure = ({ formData, setFormData }: Props) => {
  const handleAddFields = (fieldType: 'drafter' | 'assessor') => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldType]: [...prevState[fieldType], { function: '', colleague: '' }],
    }));
  };

  const handleRemoveFields = (
    index: number,
    fieldType: 'drafter' | 'assessor'
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldType]: prevState[fieldType].filter((_, i) => i !== index),
    }));
  };

  const handleChange = (
    index: number,
    field: keyof DocumentData['drafter'][number],
    value: string,
    fieldType: 'drafter' | 'assessor'
  ) => {
    const updatedDetails = [...formData[fieldType]];
    updatedDetails[index][field] = value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldType]: updatedDetails,
    }));
  };

  return (
    <div>
      <div className="flex gap-[20px]">
        <Card className="w-6/12">
          <div className="flex gap-[45px] justify-between">
            <span>
              <h3 className="text-mush text-[18px] bold">Drafter</h3>
              <p className="text-syd">
                This is the person who will write the documents
              </p>
            </span>
            <span>
              <button
                onClick={() => handleAddFields('drafter')}
                className="flex gap-2 bg-green rounded-[10px] p-[10px] text-white"
              >
                <AddIcon />
                Add
              </button>
            </span>
          </div>
          {formData &&
            formData.drafter.map((data, index) => (
              <div key={index} className="flex gap-[16px] mt-[40px]">
                <span className="w-6/12">
                  <label className="text-dark">
                    Function <span className="text-error">*</span>
                  </label>
                  <SelectOption
                    options={optionsList}
                    placeholder="Select Function"
                    name={'drafter'}
                    target={'function'}
                    formData={formData}
                    setFormData={setFormData}
                  />
                </span>

                <span className="w-6/12">
                  <label className="text-dark">
                    Colleague <span className="text-error">*</span>
                  </label>
                  <SelectOption
                    options={peopleList}
                    placeholder="Select Colleague"
                    name={'drafter'}
                    target={'colleague'}
                    formData={formData}
                    setFormData={setFormData}
                  />
                </span>

                {formData.drafter.length > 1 && (
                  <button
                    onClick={() => handleRemoveFields(index, 'drafter')}
                    className="ml-2"
                  >
                    -
                  </button>
                )}
              </div>
            ))}
        </Card>
        <Card className="w-6/12">
          <div className="flex gap-[45px] justify-between">
            <span>
              <h3 className="text-mush text-[18px] bold">Assessor</h3>
              <p className="text-syd">
                Who should review the documents, fill in the order of
                precedence. The last one is the final judge
              </p>
            </span>
            <span>
              <button
                onClick={() => handleAddFields('assessor')}
                className="flex gap-2 bg-green rounded-[10px] p-[10px] text-white"
              >
                <AddIcon />
                Add
              </button>
            </span>
          </div>

          {formData &&
            formData.assessor.map((data, index) => (
              <div key={index} className="flex gap-[16px] mt-[40px]">
                <span className="w-6/12">
                  <label className="text-dark">
                    Function <span className="text-error">*</span>
                  </label>
                  <select
                    value={data.function[index]}
                    onChange={(e) =>
                      handleChange(
                        index,
                        'colleague',
                        e.target.value,
                        'assessor'
                      )
                    }
                    className="block w-full mt-[20px] bg-offwhite rounded-[10px] border-[1px] p-[20px] cursor-pointer"
                  >
                    <option value="" disabled>
                      Select Assessor
                    </option>
                    {optionsList.map((option) => (
                      <option key={option?.id} value={option?.id}>
                        {option?.title}
                      </option>
                    ))}
                  </select>
                </span>

                <span className="w-6/12">
                  <label className="text-dark">
                    Colleague <span className="text-error">*</span>
                  </label>
                  <select
                    value={data.function}
                    onChange={(e) =>
                      handleChange(
                        index,
                        'colleague',
                        e.target.value,
                        'assessor'
                      )
                    }
                    className="block w-full mt-[20px] bg-offwhite rounded-[10px] border-[1px] p-[20px] cursor-pointer"
                  >
                    <option value="" disabled>
                      Select Colleague
                    </option>
                    <option value="ass1">Ass 1</option>
                    <option value="ass2">Ass 2</option>
                  </select>
                </span>

                {formData.assessor.length > 1 && (
                  <button
                    onClick={() => handleRemoveFields(index, 'assessor')}
                    className="ml-2"
                  >
                    -
                  </button>
                )}
              </div>
            ))}
        </Card>
      </div>
      {JSON.stringify(formData)}
    </div>
  );
};

export default Restructure;
