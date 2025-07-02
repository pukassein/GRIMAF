import React from 'react';
import { RESEARCH_AREAS } from '../constants';

const ResearchAreasSection: React.FC = () => {

  const categories = {
    core: {
      title: 'Áreas Principais',
      areas: RESEARCH_AREAS.filter(a => a.category === 'core'),
      tagStyle: 'bg-primary/90 text-white',
    },
    application: {
      title: 'Aplicações e Dispositivos',
      areas: RESEARCH_AREAS.filter(a => a.category === 'application'),
      tagStyle: 'bg-accent text-primary font-semibold',
    },
    methodology: {
      title: 'Metodologias e Caracterização',
      areas: RESEARCH_AREAS.filter(a => a.category === 'methodology'),
      tagStyle: 'bg-secondary text-dark-text border border-gray-200',
    }
  };

  return (
    <section id="linhas-pesquisa" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-3">
          Linhas de Pesquisa
        </h2>
        <p className="text-center text-lg text-dark-text/80 mb-10">
          O GRIMAF atua nas seguintes linhas de pesquisa:
        </p>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2 items-stretch">
          {Object.values(categories).map(category => (
            <div key={category.title} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center pt-2 flex-grow content-start">
                {category.areas.map((area) => (
                  <div 
                    key={area.name} 
                    className={`py-1 px-3 text-xs sm:py-2 sm:px-4 sm:text-sm rounded-full font-medium text-center ${category.tagStyle}`}
                  >
                    {area.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreasSection;