import React from 'react';
import Dropdown from '../../primary/Dropdown';
import {
  classificationsList,
  departmentsList,
  subfolderList,
} from '@/constants';
import Input from '../../primary/Input';
import Card from '../../primary/Card';
import { DocumentData } from '../../types';

type Props = {
  formData: DocumentData;
  setFormData: React.Dispatch<React.SetStateAction<DocumentData>>;
};

const LevelOne = ({ formData, setFormData }: Props) => {
  return (
    <Card className="grid grid-cols-3 gap-[30px] mb-[30px]">
      <div>
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
      <div>
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
      <div>
        <label className="text-dark font-medium">
          Document ID <span className="text-error">*</span>
        </label>
        <Input
          placeholder="Enter Document ID"
          setFormData={setFormData}
          name={'documentID'}
          value={formData?.documentID}
        />
      </div>
      <div>
        <label className="text-dark font-medium">
          Document Title <span className="text-error">*</span>
        </label>
        <Input
          placeholder="Enter Document Title"
          setFormData={setFormData}
          name={'documentTitle'}
          value={formData?.documentTitle}
        />
      </div>
      <div>
        <label className="text-dark font-medium">
          Classification <span className="text-error">*</span>
        </label>
        <Dropdown
          options={classificationsList}
          placeholder="Select Classification"
          name="classification"
          formData={formData}
          setFormData={setFormData}
        />
      </div>
      <div>
        <label className="text-dark font-medium">
          Version <span className="text-error">*</span>
        </label>
        <Input
          placeholder="Enter Version"
          setFormData={setFormData}
          name={'version'}
          value={formData?.version}
        />
      </div>
    </Card>
  );
};

export default LevelOne;
