import React, { useState, useEffect } from 'react';
import { PeriodicElement } from '../types';

const MoleculeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"></path>
        <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"></path>
        <path d="M12 2v2"></path><path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path><path d="M20 12h2"></path>
        <path d="m4.93 19.07 1.41-1.41"></path><path d="m17.66 6.34 1.41-1.41"></path>
    </svg>
);

// Maps standardized chemical formulas (using Hill system) to their common names.
const chemicalNames: { [key: string]: string } = {
  "H2O": "Água",
  "CO2": "Dióxido de carbono",
  "O2": "Oxigênio molecular",
  "N2": "Nitrogênio molecular",
  "H2": "Hidrogênio molecular",
  "O3": "Ozônio",
  "H3N": "Amônia", // from NH3
  "CH4": "Metano",
  "C2H6": "Etano",
  "C3H8": "Propano",
  "C4H10": "Butano",
  "C2H6O": "Etanol", // from C2H5OH
  "CH4O": "Metanol", // from CH3OH
  "C2H4O2": "Ácido acético", // from CH3COOH
  "H2O4S": "Ácido sulfúrico", // from H2SO4
  "HNO3": "Ácido nítrico",
  "ClH": "Ácido clorídrico", // from HCl
  "BrH": "Ácido bromídrico", // from HBr
  "HI": "Ácido iodídrico",
  "FH": "Ácido fluorídrico", // from HF
  "HNaO": "Hidróxido de sódio (soda cáustica)", // from NaOH
  "HKO": "Hidróxido de potássio", // from KOH
  "CaH2O2": "Hidróxido de cálcio (cal hidratada)", // from Ca(OH)2
  "H2MgO2": "Hidróxido de magnésio", // from Mg(OH)2
  "ClNa": "Cloreto de sódio", // from NaCl
  "ClK": "Cloreto de potássio", // from KCl
  "Na2O4S": "Sulfato de sódio", // from Na2SO4
  "K2O4S": "Sulfato de potássio", // from K2SO4
  "CCaO3": "Carbonato de cálcio", // from CaCO3
  "CNa2O3": "Carbonato de sódio", // from Na2CO3
  "CHNaO3": "Bicarbonato de sódio", // from NaHCO3
  "H2O2": "Peróxido de hidrogênio (água oxigenada)",
  "Fe2O3": "Óxido de ferro (III)",
  "FeO": "Óxido de ferro (II)",
  "CuO4S": "Sulfato de cobre (II)", // from CuSO4
  "Cl2Cu": "Cloreto de cobre (II)", // from CuCl2
  "AgNO3": "Nitrato de prata",
  "N2O6Pb": "Nitrato de chumbo (II)", // from Pb(NO3)2
  "O4SZn": "Sulfato de zinco", // from ZnSO4
  "Al2O3": "Óxido de alumínio",
  "O2Si": "Dióxido de silício", // from SiO2
  "H3O4P": "Ácido fosfórico", // from H3PO4
  "Na3O4P": "Fosfato de sódio", // from Na3PO4
  "KNO3": "Nitrato de potássio",
  "CaCl2": "Cloreto de cálcio",
  "Cl2Mg": "Cloreto de magnésio", // from MgCl2
  "BaCl2": "Cloreto de bário",
  "ClH4N": "Cloreto de amônio", // from NH4Cl
  "C6H12O6": "Glicose",
  "C12H22O11": "Sacarose",
  "Na2S": "Sulfeto de sódio",
  "NNaO3": "Nitrato de sódio" // from NaNO3
};

/**
 * Standardizes a formula's element map into a string based on the Hill system.
 * (C first, then H, then all other elements alphabetically).
 * @param counts A map of element symbols to their counts.
 * @returns A standardized chemical formula string.
 */
const standardizeToHill = (counts: Map<string, number>): string => {
    const symbols = Array.from(counts.keys());
    const hasC = symbols.includes('C');
    
    symbols.sort((a, b) => {
        // If Carbon is in the formula, it comes first.
        if (hasC) {
            if (a === 'C') return -1;
            if (b === 'C') return 1;
            // If Hydrogen is also in the formula, it comes second.
            if (a === 'H') return -1;
            if (b === 'H') return 1;
        }
        // Otherwise, or for the remaining elements, sort alphabetically.
        return a.localeCompare(b);
    });
    
    return symbols.map(symbol => {
        const count = counts.get(symbol)!;
        return count > 1 ? `${symbol}${count}` : symbol;
    }).join('');
};

interface CalculationResult {
    total: number;
    breakdown: string;
}

const MolarMassCalculator: React.FC = () => {
    const [formula, setFormula] = useState('');
    const [elements, setElements] = useState<Map<string, PeriodicElement> | null>(null);
    const [result, setResult] = useState<CalculationResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [commonName, setCommonName] = useState<string | null>(null);

    useEffect(() => {
        fetch('/data/elements.json')
            .then(res => res.json())
            .then((data: PeriodicElement[]) => {
                const elementsMap = new Map<string, PeriodicElement>();
                data.forEach(el => elementsMap.set(el.symbol, el));
                setElements(elementsMap);
            })
            .catch(() => setError("Não foi possível carregar os dados dos elementos."));
    }, []);

    const normalizeFormula = (input: string): string => {
        const subscriptMap: { [key: string]: string } = {
          '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
          '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'
        };
        return input.split('').map(char => subscriptMap[char] || char).join('');
    };

    const parseFormula = (f: string): Map<string, number> => {
        if (!elements) throw new Error("Dados dos elementos não carregados.");
        const normalized = normalizeFormula(f);
        const regex = /([A-Z][a-z]?)(\d*)|(\()|(\))(\d*)/g;
        let match;
        const stack: { map: Map<string, number> }[] = [{ map: new Map() }];

        while ((match = regex.exec(normalized)) !== null) {
            const [, element, countStr, openParen, closeParen, groupCountStr] = match;

            if (element) {
                if (!elements.has(element)) {
                    throw new Error(`Elemento desconhecido: ${element}`);
                }
                const count = countStr ? parseInt(countStr, 10) : 1;
                const currentMap = stack[stack.length - 1].map;
                currentMap.set(element, (currentMap.get(element) || 0) + count);
            } else if (openParen) {
                stack.push({ map: new Map() });
            } else if (closeParen) {
                if (stack.length < 2) throw new Error("Parênteses desbalanceados.");
                const groupCount = groupCountStr ? parseInt(groupCountStr, 10) : 1;
                const finishedGroup = stack.pop()!;
                const parentMap = stack[stack.length - 1].map;
                for (const [el, count] of finishedGroup.map.entries()) {
                    parentMap.set(el, (parentMap.get(el) || 0) + count * groupCount);
                }
            }
        }

        if (stack.length !== 1) throw new Error("Parênteses desbalanceados.");
        if (stack[0].map.size === 0) throw new Error("Fórmula inválida ou vazia.");
        return stack[0].map;
    };

    const handleCalculate = () => {
        // Reset states for each new calculation
        setResult(null);
        setError(null);
        setCommonName(null);

        if (!formula.trim() || !elements) {
            setError("Por favor, insira uma fórmula química.");
            return;
        }

        try {
            const elementCounts = parseFormula(formula);
            let totalMass = 0;
            const breakdownParts: string[] = [];

            const sortedElements = Array.from(elementCounts.keys()).sort();

            for (const symbol of sortedElements) {
                const count = elementCounts.get(symbol)!;
                const elementData = elements.get(symbol)!;
                totalMass += count * elementData.atomicMass;
                breakdownParts.push(`${count}×${symbol} (${elementData.atomicMass.toFixed(3)})`);
            }
            
            setResult({
                total: totalMass,
                breakdown: breakdownParts.join(' + ')
            });

            // Standardize formula and look up the common name
            const standardizedFormula = standardizeToHill(elementCounts);
            setCommonName(chemicalNames[standardizedFormula] || null);

        } catch (e: unknown) {
            setError(e instanceof Error ? e.message : "Ocorreu um erro desconhecido.");
            setResult(null);
            setCommonName(null);
        }
    };
    
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 w-full h-full flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <MoleculeIcon className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-primary">
              Conversor de Massa Molar
            </h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="formula-input" className="block text-sm font-medium text-gray-700">Fórmula Química</label>
              <input
                id="formula-input"
                type="text"
                value={formula}
                onChange={(e) => setFormula(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                placeholder="ex: H₂O, H2SO4, Mg(OH)2"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
          </div>
    
          <button
            onClick={handleCalculate}
            disabled={!elements}
            className="mt-6 w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400"
          >
            {elements ? "Calcular Massa Molar" : "Carregando..."}
          </button>
          
          <div className="mt-6 text-center flex-grow flex items-center justify-center min-h-[8rem] bg-gray-50 rounded-lg p-4" role="status" aria-live="polite">
            {error && (
              <p className="text-red-600 font-medium">{error}</p>
            )}
            {result && !error &&(
              <div className="text-left text-dark-text w-full break-words">
                  <div className="space-y-3">
                    {commonName && (
                        <div className="text-center">
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Nome Comum</p>
                            <p className="text-xl font-bold text-primary">
                                {commonName}
                            </p>
                        </div>
                    )}
                     <div className="text-center">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Cálculo Detalhado</p>
                        <p className="font-semibold text-sm break-all">{result.breakdown}</p>
                     </div>
                  </div>

                  <p className="text-2xl font-bold text-dark-text text-center border-t-2 border-primary/20 pt-3 mt-3">
                    Massa Molar = {result.total.toFixed(4)} g/mol
                  </p>
              </div>
            )}
             {!result && !error && (
                 <p className="text-gray-500">O resultado aparecerá aqui.</p>
            )}
          </div>
        </div>
      );
};

export default MolarMassCalculator;