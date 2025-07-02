
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Ensure initial state is correct on load
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#quem-somos', label: 'Quem Somos' },
    { href: '#linhas-pesquisa', label: 'Linhas de Pesquisa' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#membros', label: 'Membros' },
    { href: '#publicacoes', label: 'Publicações' },
    { href: '#laboratorios', label: 'Laboratórios' },
    { href: '#ferramentas', label: 'Ferramentas' },
    { href: '#contato', label: 'Contato' },
  ];

  // Classes are now more compact for the scrolled state
  const headerTopClasses = 'bg-secondary';
  const headerNavClasses = 'bg-primary';
  const headerTitleClasses = 'text-xl md:text-2xl font-bold text-dark-text';
  const headerSubtitleClasses = 'text-sm text-gray-700 hidden sm:block'; // Hide on extra-small screens

  return (
    <header className={`fixed w-full top-0 z-50 shadow-md transition-transform duration-500 ease-in-out ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className={`${headerTopClasses} text-center p-2`}>
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-x-4">
          <img src="/pictures/logo.jpg" alt="Logo GRIMAF" className="h-16" />
          <div>
            <h1 className={headerTitleClasses}>GRIMAF - Grupo de Pesquisa</h1>
            <p className={headerSubtitleClasses}>Centro de Pesquisa da Universidade Federal da Integração Latino-Americana (UNILA)</p>
          </div>
        </div>
      </div>
      <nav className={headerNavClasses}>
         <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="hidden md:flex justify-center w-full">
              <ul className="flex flex-wrap justify-center items-center list-none py-1">
                {navLinks.map((link) => (
                   <li key={link.href} className="mx-4 my-1">
                    <a href={link.href} className="text-white text-md font-medium hover:opacity-75 transition-opacity">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:hidden flex-1 flex justify-end">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
              </button>
            </div>
         </div>
          {isMenuOpen && (
            <div className={`md:hidden ${headerNavClasses}`}>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                 {navLinks.map(link => (
                  <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 w-full text-center">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
      </nav>
    </header>
  );
};

export default Header;