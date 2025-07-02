
import React from 'react';
import { ModalData } from '../types';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ModalData;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div
        className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4 z-[200] animate-fade-in"
        onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col relative"
      >
        <button
            onClick={onClose}
            className="absolute top-2 right-2 text-primary hover:text-red-500 text-3xl font-bold z-20"
            aria-label="Fechar modal"
        >
            &times;
        </button>

        {/* Image is removed from being absolutely positioned relative to the modal card */}

        <div className="flex-1 min-h-0 p-8 pt-12 overflow-y-auto">
            {/* The image and title are now inside the scrollable container, allowing them to scroll with the content. */}
            {/* A flex layout is used for responsive positioning. */}
            <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start gap-6 mb-6">
              <div className="flex-1 text-center sm:text-left">
                {/* The right padding on the title is no longer needed. */}
                <h3 className="text-2xl font-bold text-primary mb-4">{data.title}</h3>
              </div>
              {data.image && (
                <div className="flex-shrink-0">
                  <img src={data.image} alt={data.title} className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md" />
                </div>
              )}
            </div>

            <div className="space-y-4 text-dark-text/90 leading-relaxed">
                {data.content}
            </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
