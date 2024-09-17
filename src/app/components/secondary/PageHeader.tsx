import React from 'react';

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-row gap-[30px] py-[40px] items-center">
      <button className="flex gap-2 border-[1px] border-grey p-[10px] text-[16px] bg-white rounded-[25px]">
        <BackIcon />
        <span className="font-medium text-dark">Ga terug</span>
      </button>
      <p className="text-black text-[30px] medium">{title}</p>
    </div>
  );
};

export default PageHeader;

const BackIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 text-dark"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};
