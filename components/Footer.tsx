
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-light-text/80 mt-12">
      <div className="container mx-auto px-6 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} GRIMAF &bull; UNILA. Todos os Direitos Reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
