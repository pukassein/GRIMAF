import React, { useState, useEffect } from 'react';

const ScrollDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);

const HeroSection: React.FC = () => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const newOpacity = Math.max(0, 1 - (scrollY / (heroHeight * 0.5)));
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <section 
      id="hero" 
      className="h-screen w-full bg-cover bg-center md:bg-fixed flex items-center justify-center relative bg-hero-mobile md:bg-hero-desktop"
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <h1 className="text-[20vw] sm:text-[18vw] lg:text-[16vw] leading-none font-serif font-bold text-hero-gold drop-shadow-lg z-10">
          GRIMAF
      </h1>

      <a 
        href="#quem-somos"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-300 group z-10"
        style={{ opacity: opacity }}
        aria-label="Role para a próxima seção"
      >
        <span className="text-white text-sm mb-2 group-hover:opacity-75">Role para baixo</span>
        <ScrollDownIcon className="w-8 h-8 text-white animate-bounce-slow" />
      </a>
    </section>
  );
};

export default HeroSection;