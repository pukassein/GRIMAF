
import React from 'react';
import { PUBLICATIONS } from '../constants';
import { Publication, ModalData } from '../types';
import RecentActivitiesCard from './RecentActivitiesCard';

// This icon is used in the modal when a card is clicked.
const DOIIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 13h4v2h-4z"></path>
    <path d="M10.75 8.75c0-.41.34-.75.75-.75h1c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1c-.41 0-.75-.34-.75-.75v-1.5z"></path>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 12.5c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v5zm6 0c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v5z"></path>
  </svg>
);

const cardHeight = 110; // px
const gap = 16; // px, from space-y-4

const PublicationCard: React.FC<{ pub: Publication; onClick: () => void }> = ({ pub, onClick }) => (
  <div 
    className="bg-white p-4 rounded-md shadow-sm border-l-4 border-primary flex flex-col justify-between cursor-pointer transition-shadow duration-300 hover:shadow-lg" 
    style={{ height: `${cardHeight}px` }}
    onClick={onClick}
    >
    <div className="overflow-hidden">
      <h4 className="font-bold text-primary text-md leading-tight line-clamp-2" title={pub.title}>{pub.title}</h4>
      <p className="text-sm text-dark-text/80 mt-1 truncate" title={pub.authors}>{pub.authors}</p>
    </div>
    <div className="flex justify-end items-center text-xs text-gray-500 mt-1">
      <span className="italic text-right">{pub.journal}, {pub.year}</span>
    </div>
  </div>
);

interface PublicationsSectionProps {
  onCardClick: (data: ModalData) => void;
}

const PublicationsSection: React.FC<PublicationsSectionProps> = ({ onCardClick }) => {
  const visibleCount = 3;
  const scrollContainerHeight = (cardHeight * visibleCount) + (gap * (visibleCount - 1));

  if (PUBLICATIONS.length === 0) {
    return null; 
  }
  
  const sortedPublications = [...PUBLICATIONS].sort((a, b) => b.year - a.year);

  return (
    <section id="publicacoes" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Publicações e Atividades
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Publications Card */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                <h3 className="text-xl font-bold text-primary mb-4">Publicações Recentes</h3>
                <div 
                    style={{ height: `${scrollContainerHeight}px` }} 
                    className="overflow-y-auto publication-scrollbar pr-4"
                >
                    <div className="space-y-4">
                        {sortedPublications.map((pub, index) => (
                            <PublicationCard 
                                key={`${pub.doiUrl || index}-${pub.title}`} 
                                pub={pub} 
                                onClick={() => onCardClick({
                                    title: pub.title,
                                    content: (
                                        <>
                                            <p className="mb-2"><strong>Autores:</strong> {pub.authors}</p>
                                            <p className="mb-4"><strong>Revista:</strong> <em>{pub.journal}</em>, {pub.year}</p>
                                            {pub.doiUrl ? (
                                                <a 
                                                    href={pub.doiUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-900 transition-colors"
                                                >
                                                    <DOIIcon className="w-5 h-5" />
                                                    Acessar Publicação (DOI)
                                                </a>
                                            ) : (
                                                <p className="text-sm text-gray-500">Link DOI não disponível.</p>
                                            )}
                                        </>
                                    )
                                })}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Activities Card */}
            <RecentActivitiesCard onCardClick={onCardClick} />
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
