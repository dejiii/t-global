type Checker = {
  function: string;
  colleague: string;
};

export type DocumentData = {
  department: string;
  subFolder: string;
  documentID: string;
  documentTitle: string;
  classification: string;
  version: string;
  drafter: Checker[];
  assessor: Checker[];
  copyItem: 'Yes' | 'No' | '';
  isRule: 'Yes' | 'No' | '';
  isDateAdjusted: 'Yes' | 'No' | '';
  isBrochure: 'Yes' | 'No' | '';
  file: string;
};
