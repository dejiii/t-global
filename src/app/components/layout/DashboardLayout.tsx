'use client';
import Image from 'next/image';
import React, { memo, useState } from 'react';

import Logo from '@/images/Logo.png';
import PageHeader from '../secondary/PageHeader';
import { initialDocumentData } from '@/constants';
import LevelThree from './Forms/LevelThree';
import {
  AddIcon,
  DocumentIcon,
  FileUploadIcon,
  HomeIcon,
  SearchIcon,
  TaskIcon,
} from '../icons';
import LevelOne from './Forms/LevelOne';
import LevelTwo from './Forms/LevelTwo';
import Modal from '../primary/Modal';
import Logos from '../primary/Logos';
import Buttons from '../secondary/Buttons';
import Preview from '../secondary/Preview';
import Sidebar from '../secondary/Sidebar';
import Restructure from './Forms/Restructure';

// eslint-disable-next-line react/display-name
const DashboardLayout = memo(() => {
  console.log('dashboard layout');

  const [formData, setFormData] = useState(initialDocumentData);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="bg-white w-[250px] border-r border-gray-300 h-screen px-[15px]">
        <Image
          src={Logo}
          alt="Company logo"
          height={54}
          className="mt-3 mb-16"
        />
        <Sidebar />
      </div>
      <div className="flex-1 bg-offwhite flex flex-col mb-[20px]">
        <div className="border-b border-gray-300 px-12 py-6 bg-white">
          <div className="flex justify-between items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="search anything here"
                className="text-ash pl-10 py-3 bg-[#f7f7f7] text-sm rounded-lg"
              />
              <SearchIcon />
            </div>
            <div className="flex flex-row">
              <Logos />
              <Buttons />
              <Preview />
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="mt-[30px] ml-[50px] mr-[60px]">
            <div className="flex justify-between items-center p-[4px]">
              <div className="bg-white p-[4px] rounded-[10px] border-[1px] border-grey">
                <div className="flex gap-[40px] items-center">
                  <span className="bg-purple px-[16px] py-[8px] rounded-[8px] text-white flex items-center gap-[12px]">
                    <HomeIcon />
                    <span>Dashboard</span>
                  </span>
                  <span className="cursor-pointer px-[16px] py-[8px] rounded-[8px] text-mush flex items-center gap-[12px]">
                    <TaskIcon />
                    <span>Task</span>
                  </span>
                  <span className="cursor-pointer px-[16px] py-[8px] rounded-[8px] text-mush flex items-center gap-[12px]">
                    <DocumentIcon />
                    <span>Documents</span>
                  </span>
                </div>
              </div>
              <span className="flex gap-2">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2 bg-lightGreen rounded-[10px] p-[10px] text-green border-green border-[1px]"
                >
                  <FileUploadIcon />
                  <span>Instant Upload</span>
                </button>
                <button className="flex gap-2 bg-green rounded-[10px] p-[10px] text-white">
                  <AddIcon />
                  New
                </button>
              </span>
            </div>
            <PageHeader title="New Document" />
            <div className=" rounded-[10px] border-[1px] p-[30px] bg-white">
              <LevelOne formData={formData} setFormData={setFormData} />
              <LevelTwo formData={formData} setFormData={setFormData} />
              <LevelThree formData={formData} setFormData={setFormData} />
            </div>
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(!isOpen)}
              title={'Instant Upload'}
            >
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                ipsum suscipit sunt, id, quasi culpa, iusto in error assumenda
                veniam dolore modi quas laborum? Velit voluptatum sapiente
                ratione! Temporibus, velit!
              </div>
            </Modal>
            <Restructure formData={formData} setFormData={setFormData} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default DashboardLayout;
