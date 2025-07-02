import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="quem-somos" className="bg-about-bg py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Title on Left for lg screens (40%) */}
          <div className="lg:w-2/5 flex justify-center items-center w-full mb-8 lg:mb-0">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold text-primary text-center">
                Quem Somos
            </h2>
          </div>
          
          {/* Text on Right for lg screens (60%) */}
          <div className="lg:w-3/5">
             <p className="text-lg text-dark-text/90 leading-relaxed text-justify">
              O GRIMAF, Grupo Interdisciplinar de Materiais Avançados, é um grupo de pesquisa dedicado ao desenvolvimento e à caracterização de materiais funcionais para aplicações em energia, sensores e meio ambiente. Atuamos de forma interdisciplinar, combinando química de materiais, eletroquímica, e técnicas avançadas de caracterização. Nosso objetivo é gerar conhecimento, formar recursos humanos qualificados e contribuir para soluções sustentáveis com impacto científico e social.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-light-bg to-transparent pointer-events-none"></div>
    </section>
  );
};

export default AboutSection;