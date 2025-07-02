
import React from 'react';
import { RESEARCH_PROJECTS } from '../constants';
import { ResearchProject } from '../types';

const ProjectCard: React.FC<{ project: ResearchProject }> = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-shadow duration-300 hover:shadow-xl">
    <img src={project.imageUrl} alt={project.title} className="w-full h-32 object-cover" />
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-base font-bold text-primary mb-2 flex-grow">{project.title}</h3>
      <p className="text-sm text-dark-text/90 leading-snug">{project.description}</p>
    </div>
  </div>
);

const ProjectsSection: React.FC = () => {
  return (
    <section id="projetos" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Projetos de Pesquisa
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {RESEARCH_PROJECTS.map((project) => (
            <ProjectCard 
                key={project.title} 
                project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;