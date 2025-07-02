import React, { useState } from 'react';
import { MEMBERS, STUDENTS } from '../constants';
import { Member, ModalData, Student } from '../types';

interface MembersSectionProps {
    onCardClick: (data: ModalData) => void;
}

const ProfessorCard: React.FC<{ member: Member; onClick: () => void }> = ({ member, onClick }) => (
  <div 
    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer flex flex-col"
    onClick={onClick}
    >
    <img
      src={member.imageUrl}
      alt={member.name}
      className="w-full h-64 object-cover"
    />
    <div className="p-4 flex-grow">
        <h3 className="text-lg font-bold text-primary flex items-baseline">
            <span>{member.name}</span>
             {member.lattesUrl && (
                <a 
                    href={member.lattesUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e) => e.stopPropagation()} 
                    title="Ver currículo Lattes"
                    className="text-sm font-medium text-blue-600 hover:underline ml-2"
                >
                    (Lattes)
                </a>
            )}
        </h3>
    </div>
  </div>
);

const PlaceholderUserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
);

const StudentCard: React.FC<{ student: Student }> = ({ student }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-accent flex items-center justify-between h-full transition-shadow duration-300 hover:shadow-md space-x-4">
    <div className="flex-grow">
      <h4 className="text-md font-bold text-primary">{student.name} {student.isPostdoc && <span className="text-sm font-medium text-accent">(Pós-Doutorado)</span>}</h4>
      {student.project ? (
        <p className="text-sm text-dark-text/90 italic mt-1">"{student.project}"</p>
      ) : (
        <p className="text-sm text-dark-text/90 mt-1">Pesquisa de Pós-Doutorado.</p>
      )}
      <div className="text-xs text-gray-600 mt-3 pt-2 border-t border-gray-100">
        <p>Início: {student.startYear}</p>
        <p className="mt-1">
          <span className="font-semibold">{student.isPostdoc ? 'Supervisor(a):' : 'Orientador(a):'}</span> {student.advisor}
          {student.coAdvisor && <span className="font-semibold">, Coorientador(a):</span>} {student.coAdvisor}
        </p>
      </div>
    </div>
    <div className="flex-shrink-0">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
        {/* Futuramente, esta pode ser uma tag <img /> */}
        <PlaceholderUserIcon className="w-16 h-16 text-gray-400" />
      </div>
    </div>
  </div>
);

const ArrowIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={`w-6 h-6 transition-transform duration-300 text-primary ${isOpen ? 'rotate-180' : ''}`} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
);

const CollapsibleStudentSection: React.FC<{ title: string; students: Student[]; icon: React.ReactNode }> = ({ title, students, icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (students.length === 0) {
        return null;
    }

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200/80">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left p-5 hover:bg-accent/30 transition-colors duration-200 rounded-t-xl"
                aria-expanded={isOpen}
                aria-controls={`student-section-${title.replace(/\s+/g, '-')}`}
            >
                <div className="flex items-center gap-4">
                    <span className="text-3xl" aria-hidden="true">{icon}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-primary">
                        {title}
                    </h3>
                </div>
                <ArrowIcon isOpen={isOpen} />
            </button>
            <div
                id={`student-section-${title.replace(/\s+/g, '-')}`}
                className={`transition-all duration-700 ease-in-out overflow-hidden grid ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="min-h-0">
                    <div className="px-5 pb-5 border-t border-gray-200/60">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
                            {students.map(student => (
                                <StudentCard key={student.name} student={student} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MembersSection: React.FC<MembersSectionProps> = ({ onCardClick }) => {
    const professors = MEMBERS.filter(m => m.isProfessor);
    const phdStudents = STUDENTS.filter(s => s.level === 'phd-postdoc');
    const masterStudents = STUDENTS.filter(s => s.level === 'masters');
    const undergradStudents = STUDENTS.filter(s => s.level === 'undergraduate');

  return (
    <section id="membros" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Corpo Docente
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professors.map((member) => (
            <ProfessorCard 
                key={member.name} 
                member={member} 
                onClick={() => onCardClick({ title: member.name, content: member.details || '', image: member.imageUrl })}
            />
          ))}
        </div>

        <div className="mt-20 pt-10 border-t-2 border-gray-200">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Corpo Discente
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-6">
            <CollapsibleStudentSection 
                title="Doutorado e Pós-Doutorado" 
                students={phdStudents} 
                icon="🎓"
            />
            <CollapsibleStudentSection 
                title="Mestrado" 
                students={masterStudents} 
                icon="🧪"
            />
            <CollapsibleStudentSection 
                title="Graduação (Iniciação Científica)" 
                students={undergradStudents} 
                icon="🔬"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
