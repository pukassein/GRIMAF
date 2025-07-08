import React, { useState, useEffect, useRef } from 'react';

const LightbulbIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 017.072 0l-.548.547A3.375 3.375 0 0112 18.25a3.375 3.375 0 01-2.712-1.202l-.548-.547zM12 3a5 5 0 015 5c0 1.95-1.008 3.687-2.5 4.5v2.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-2.5c-1.492-.813-2.5-2.55-2.5-4.5a5 5 0 015-5z" />
    </svg>
);


const FeedbackButton: React.FC = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsPopoverOpen(false);
            }
        };

        if (isPopoverOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPopoverOpen]);

    const googleSheetLink = "https://docs.google.com/spreadsheets/d/1e-9RDw_Tt_X9GhcuqJvxQjKX2tWxVeUQZsd7A58Ev4c/edit?usp=sharing";

    return (
        <>
            {isPopoverOpen && (
                <div
                    ref={popoverRef}
                    className="fixed bottom-20 right-4 sm:right-6 w-64 bg-white rounded-lg shadow-2xl p-4 z-[60] animate-fade-in-up"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="feedback-title"
                >
                    <h3 id="feedback-title" className="text-sm font-semibold text-dark-text mb-2">
                        Sugestões e Problemas
                    </h3>
                    <p className="text-xs text-dark-text/90 mb-4">
                        Quer sugerir algo ou reportar um problema? Clique no botão abaixo para abrir o formulário.
                    </p>
                    <a
                        href={googleSheetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center inline-block bg-primary text-white font-bold py-2 px-3 rounded-md text-sm hover:bg-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Abrir Formulário
                    </a>
                </div>
            )}
            <button
                ref={buttonRef}
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                className="fixed bottom-4 right-4 sm:right-6 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-xl hover:bg-blue-900 transition-all duration-300 transform hover:scale-110 z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                aria-label="Sugerir melhoria ou reportar problema"
                aria-haspopup="dialog"
                aria-expanded={isPopoverOpen}
            >
                <LightbulbIcon className="w-7 h-7" />
            </button>
        </>
    );
};

export default FeedbackButton;
