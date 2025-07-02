import React from 'react';

// Icon to visually represent a person/contact.
const PersonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
);


const ContactSection: React.FC = () => {
  const professorContacts = [
    { name: 'Prof. Dr. Márcio de Sousa Góes', email: 'marcio.goes@unila.edu.br' },
    { name: 'Prof. Dr. Johan Suárez', email: 'johan.suarez@unila.edu.br' },
    { name: 'Prof.ª Dr.ª Janine Padilha', email: 'janine.padilha@unila.edu.br' },
  ];

  return (
    <section id="contato" className="py-12">
      <div className="container mx-auto px-6">
        {/* Card-like container to make the section stand out */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">
            Contato
          </h2>
          <p className="text-lg text-dark-text/90 mb-8 text-justify leading-relaxed">
            Para mais informações sobre nossas pesquisas, propostas de colaboração ou para tirar dúvidas, entre em contato conosco através dos e-mails abaixo:
          </p>
          <div className="space-y-5">
            {professorContacts.map((contact) => (
              <div key={contact.email} className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-primary/10 p-2 rounded-full">
                    <PersonIcon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-x-2">
                  <p className="font-bold text-primary">{contact.name}:</p>
                  <p className="text-dark-text/90 text-md sm:text-lg">{contact.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;