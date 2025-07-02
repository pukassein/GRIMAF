import React from 'react';
import MolarityCalculator from './MolarityCalculator';
import MolarMassCalculator from './MolarMassCalculator';

const ToolsSection: React.FC = () => {
  return (
    <section id="ferramentas" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Ferramentas Úteis
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
            <MolarityCalculator />
            <MolarMassCalculator />
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
