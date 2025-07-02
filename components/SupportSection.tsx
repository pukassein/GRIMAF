
import React from 'react';

const SupportSection: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-4 md:p-6">
          <img 
            src="/pictures/apoio.jpg" 
            alt="Logos de instituições de apoio como UNILA, CNPq, CAPES e Fundação Araucária"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;