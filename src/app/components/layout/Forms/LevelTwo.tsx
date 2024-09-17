import React from 'react';
import Card from '../../primary/Card';
import { AddIcon } from '../../icons';
import { optionsList, peopleList } from '@/constants';
import { DocumentData } from '../../types';
import SelectOption from '../../primary/SelectOption';

type Props = {
  formData: DocumentData;
  setFormData: React.Dispatch<React.SetStateAction<DocumentData>>;
};

const LevelTwo = ({ formData, setFormData }: Props) => {
  const handleAddItem = (fieldType: 'drafter' | 'assessor') => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldType]: [...prevState[fieldType], { function: '', colleague: '' }],
    }));
  };

  const handleRemoveOption = (index: number) => {
    setFormData((prevData: DocumentData) => {
      const updatedArray = prevData.assessor.filter((_, i) => i !== index);
      return { ...prevData, assessor: updatedArray };
    });
  };

  return (
    <div className="grid grid-cols-2 gap-[30px] mb-[30px]">
      <Card>
        <div className="flex gap-[45px] justify-between">
          <span>
            <h3 className="text-mush text-[18px] bold">Drafter</h3>
            <p className="text-syd">
              This is the person who will write the documents
            </p>
          </span>
          <span>
            <button className="flex gap-2 bg-green rounded-[10px] p-[10px] text-white">
              <AddIcon />
              Add
            </button>
          </span>
        </div>
      </Card>
      <Card>
        <div className="flex gap-[45px] justify-between">
          <span>
            <h3 className="text-mush text-[18px] bold">Assessor</h3>
            <p className="text-syd">
              Who should review the documents, fill in the order of precedence.
              The last one is the final judge
            </p>
          </span>
          <span>
            <button
              onClick={() => handleAddItem('assessor')}
              className="flex gap-2 bg-green rounded-[10px] p-[10px] text-white"
            >
              <AddIcon />
              Add
            </button>
          </span>
        </div>
        {formData?.assessor.map((item, index) => (
          <div key={index} className="flex gap-[16px] mt-[40px]">
            <span className="w-6/12 ">
              <label className="text-dark">
                Function <span className="text-error">*</span>
              </label>
              <SelectOption
                options={optionsList}
                placeholder="Select Function"
                name={'assessor'}
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
                name={'assessor'}
                target={'colleague'}
                formData={formData}
                setFormData={setFormData}
              />
            </span>
            {formData && formData?.assessor.length > 1 && (
              <button
                onClick={() => handleRemoveOption(index)}
                className="py-[10px] px-[30px] border-error text-error bg-lightRed border-[1px] rounded-[10px] mt-[40px]"
              >
                -
              </button>
            )}
          </div>
        ))}
      </Card>
    </div>
  );
};

export default LevelTwo;
