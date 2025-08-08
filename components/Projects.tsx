import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import Section from './Section';

const Projects: React.FC = () => {
  return (
    <Section id="projects" className="bg-[#192A51]">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </Section>
  );
};

export default Projects;