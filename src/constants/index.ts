import { DocumentData } from '@/app/components/types';

export const optionsList = [
  {
    id: 1,
    title: 'Anesthesias department',
  },
  {
    id: 2,
    title: 'Csa',
  },
  {
    id: 3,
    title: 'Facility',
  },
  {
    id: 4,
    title: 'Logistics',
  },
  {
    id: 5,
    title: 'Medical Clinic Velsen',
  },
  {
    id: 6,
    title: 'Medical Specialist department',
  },
  {
    id: 7,
    title: 'Ok assisting protocols',
  },
  {
    id: 8,
    title: 'P&O',
  },
  {
    id: 9,
    title: 'utpatient clinic',
  },
  {
    id: 10,
    title: 'Radiology ',
  },
  {
    id: 11,
    title: 'Recovery department ',
  },
  {
    id: 12,
    title: 'Nursing Department ',
  },
];

export const peopleList = [
  { id: 1, title: 'Jolanda Criens' },
  { id: 2, title: 'John Doe' },
  { id: 3, title: 'Jane Doe' },
];

export const initialDocumentData: DocumentData = {
  department: '',
  subFolder: '',
  documentID: '',
  documentTitle: '',
  classification: '',
  version: '',
  drafter: [{ function: '', colleague: '' }],
  assessor: [{ function: '', colleague: '' }],
  copyItem: '',
  isRule: '',
  isDateAdjusted: '',
  isBrochure: '',
  file: '',
};

export const departmentsList = [
  { id: 1, title: 'Anesthesias department' },
  { id: 2, title: 'Csa' },
  { id: 3, title: 'Facility' },
  { id: 4, title: 'Logistics' },
  { id: 5, title: 'Facility' },
  { id: 6, title: 'Medical Clinic Velsen' },
  { id: 7, title: 'Medical Specialist department' },
  { id: 8, title: 'Ok assisting protocols' },
  { id: 9, title: 'P&O' },
  { id: 10, title: 'Outpatient clinic' },
  { id: 11, title: 'Radiology' },
  { id: 12, title: 'Recovery department' },
  { id: 13, title: 'Nursing Department' },
];

export const subfolderList = [
  { id: 1, title: 'SubFolder 1' },
  { id: 2, title: 'SubFolder 2' },
  { id: 3, title: 'SubFolder 3' },
];

export const classificationsList = [
  { id: 1, title: 'Public' },
  { id: 2, title: 'Internal' },
  { id: 3, title: 'Confidential' },
  { id: 4, title: 'Highly Confidential' },
];
