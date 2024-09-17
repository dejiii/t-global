'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import Logo from '@/images/Logo.png';
import PageHeader from '../secondary/PageHeader';
import Card from '../primary/Card';
import Dropdown from '../primary/Dropdown';
import { initialDocumentData, optionsList } from '@/constants';
import Input from '../primary/Input';

const DashboardLayout = () => {
  const [formData, setFormData] = useState(initialDocumentData);

  console.log('Dashboard Layout');

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="bg-white w-[250px] border-r border-gray-300 h-screen px-6">
        <Image
          src={Logo}
          alt="Company logo"
          height={54}
          className="mt-3 mb-16"
        />
        <div className="text-green">
          <p>links</p>
        </div>
      </div>
      <div className="flex-1 bg-offwhite flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="mt-[30px] ml-[50px] mr-[60px]">
            <PageHeader title="New Document" />
            <div className=" rounded-[10px] border-[1px] p-[30px] bg-white">
              <Card className="grid grid-cols-3 gap-[30px] mb-[30px]">
                <div>
                  <label className="text-dark font-medium">
                    Department <span className="text-error">*</span>
                  </label>
                  <Dropdown
                    options={optionsList}
                    placeholder="Select Department"
                    name={'drafter'}
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
                <div>
                  <label className="text-dark font-medium">
                    Sub folder <span className="text-error">*</span>
                  </label>
                  <Dropdown
                    options={optionsList}
                    placeholder="Select Sub folder"
                    name={'drafter'}
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
                    options={optionsList}
                    placeholder="Enter Document Title"
                    name={'drafter'}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
