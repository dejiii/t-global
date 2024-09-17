import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon } from '../icons';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex justify-center bg-black bg-opacity-50 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white h-[300px] top-[196px] rounded-lg shadow-lg max-w-lg md:w-full w-[90%] no-scrollbar"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-water mb-[10px] p-8 rounded-t-lg flex justify-between items-center">
              <h2 className="text-txl heading font-bold">{title}</h2>
              <button onClick={onClose}>
                <CloseIcon />
              </button>
            </div>

            <div className="max-h-[400px] overflow-y-scroll px-8 pb-6">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
