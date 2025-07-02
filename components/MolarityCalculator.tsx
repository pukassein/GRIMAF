import React, { useState } from 'react';

const BeakerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 3h15"></path>
        <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path>
        <path d="M6 14h12"></path>
    </svg>
);

// Moved InputField outside the main component to prevent focus loss on re-render.
const InputField: React.FC<{
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}> = ({ label, value, onChange, placeholder }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type="number"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            min="0"
            step="any"
            // Disable scroll-to-change value behavior by blurring the input on wheel events.
            onWheel={(e) => (e.target as HTMLElement).blur()}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            aria-label={label}
        />
    </div>
);


const MolarityCalculator: React.FC = () => {
  const [molarMass, setMolarMass] = useState('');
  const [volume, setVolume] = useState('');
  const [concentration, setConcentration] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    const mm = parseFloat(molarMass);
    const vol = parseFloat(volume);
    const conc = parseFloat(concentration);

    if (isNaN(mm) || isNaN(vol) || isNaN(conc) || mm <= 0 || vol <= 0 || conc < 0) {
      setError('Por favor, preencha todos os campos com valores numéricos válidos e positivos.');
      setResult(null);
      return;
    }

    setError(null);
    const mass = mm * vol * conc;
    setResult(`Massa necessária: ${mass.toFixed(4)} g`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-md mx-auto w-full">
      <div className="flex items-center gap-4 mb-4">
        <BeakerIcon className="w-8 h-8 text-primary" />
        <h3 className="text-2xl font-bold text-primary">
          Calculadora de Molaridade
        </h3>
      </div>
      
      <div className="space-y-4">
        <InputField 
          label="Massa Molar (g/mol)"
          value={molarMass}
          onChange={(e) => setMolarMass(e.target.value)}
          placeholder="ex: 58.44"
        />
        <InputField 
          label="Volume Desejado (L)"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          placeholder="ex: 0.5"
        />
        <InputField 
          label="Concentração Desejada (mol/L)"
          value={concentration}
          onChange={(e) => setConcentration(e.target.value)}
          placeholder="ex: 0.1"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="mt-6 w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Calcular Massa
      </button>
      
      <div className="mt-6 text-center h-10 flex items-center justify-center" role="status" aria-live="polite">
        {error && (
          <p className="text-red-600 font-medium">{error}</p>
        )}
        {result && (
          <p className="text-xl font-bold text-dark-text">{result}</p>
        )}
      </div>
    </div>
  );
};

export default MolarityCalculator;
