
import React from 'react';
import { LABS } from '../constants';
import { Lab, ModalData } from '../types';

interface LabsSectionProps {
  onCardClick: (data: ModalData) => void;
}

const LabCard: React.FC<{ lab: Lab; onClick: () => void }> = ({ lab, onClick }) => (
  <div 
    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer flex flex-col"
    onClick={onClick}
    >
    <img src={lab.imageUrl} alt={lab.name} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-primary flex-grow">{lab.name}</h3>
      {lab.schedulingUrl && (
        <a
          href={lab.schedulingUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-4 inline-block text-center bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-900 transition-colors"
        >
          🔗 {lab.schedulingButtonText || 'Agendar'}
        </a>
      )}
    </div>
  </div>
);

const LabsSection: React.FC<LabsSectionProps> = ({ onCardClick }) => {
  return (
    <section id="laboratorios" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Laboratórios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LABS.map((lab) => (
            <LabCard 
                key={lab.name} 
                lab={lab}
                onClick={() => onCardClick({ title: lab.name, content: lab.details })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabsSection;