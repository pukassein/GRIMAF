import React from 'react';
import { RESEARCH_AREAS } from '../constants';

// --- SVG Icon Components ---

const BeakerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.623 15.623a2.25 2.25 0 01-1.246-2.012V6.375a2.25 2.25 0 012.25-2.25h4.75a2.25 2.25 0 012.25 2.25v7.236a2.25 2.25 0 01-1.246 2.012l-2.375 1.188a2.25 2.25 0 01-2.25 0l-2.375-1.188zM12 21v-5.625" />
    </svg>
);

const AtomIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 3v18m-7.071-7.071L19.071 5.93m-14.142 0L19.071 19.07" />
    </svg>
);

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);

const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-1.062.137-2.052.56-2.924 1.196-1.58 1.11-2.616 2.87-2.616 4.814v.172c0 2.44 1.69 4.549 4.024 4.968l.942.188c.846.168 1.674.524 2.368 1.05l.39.282c.57.412 1.255.71 1.99 0 .736-.71.936-1.77.524-2.668l-.39-.88c-.698-1.583-.936-3.32-.632-5.006a7.711 7.711 0 00-2.924-5.058C9.793 4.046 8.944 3.8 8 3.75c-.944-.05-1.872.134-2.718.524" />
    </svg>
);

const SensorIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.136 12.006a8.25 8.25 0 0113.728 0M2.013 8.948a11.25 11.25 0 0119.974 0" />
    </svg>
);

const BatteryIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h13.5a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 8.25v7.5A2.25 2.25 0 003.75 18z" />
    </svg>
);

const ChartIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
);

const XRayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0-6.75H9.75m2.25 0H14.25m-2.25 6.75H9.75M12 16.5h2.25m-7.5-3.75h7.5M12 21a9 9 0 110-18 9 9 0 010 18z" />
    </svg>
);

const CogIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5M12 4.5v.01M12 19.5v.01" />
    </svg>
);

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  'Eletroquímica': BeakerIcon,
  'Química de Materiais': AtomIcon,
  'Síntese e Caracterização de Materiais Funcionais': SearchIcon,
  'Bioeletroquímica': LeafIcon,
  'Sensores': SensorIcon,
  'Supercapacitores': BatteryIcon,
  'Espectroscopia de Impedância': ChartIcon,
  'Difração de Raios X (DRX)': XRayIcon,
  'Rietveld': ChartIcon,
  'Automação e Instrumentação Científica': CogIcon,
};

const ResearchAreasSection: React.FC = () => {

  const categories = {
    core: {
      title: 'Áreas Principais',
      areas: RESEARCH_AREAS.filter(a => a.category === 'core'),
    },
    application: {
      title: 'Aplicações e Dispositivos',
      areas: RESEARCH_AREAS.filter(a => a.category === 'application'),
    },
    methodology: {
      title: 'Metodologias e Caracterização',
      areas: RESEARCH_AREAS.filter(a => a.category === 'methodology'),
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {Object.values(categories).map(category => (
            <div key={category.title} className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold text-primary mb-5 text-center">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.areas.map((area) => {
                  const Icon = iconMap[area.name] || BeakerIcon;
                  return (
                    <li key={area.name} className="flex items-center gap-2">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary/80 flex-shrink-0" />
                      <span className="text-[0.95rem] md:text-base text-dark-text/90">
                        {area.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreasSection;
