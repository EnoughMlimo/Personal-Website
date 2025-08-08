

import React from 'react';
import { Project } from '../types';
import { ExternalLinkIcon, GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, techDescription, liveUrl, sourceUrl, imageUrl } = project;

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full">
      <div className="w-full aspect-video bg-slate-100 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-base text-slate-600 mb-4">{description}</p>
        <p className="text-sm text-slate-500 italic mb-4">{techDescription}</p>
        <div className="mt-auto flex items-center space-x-4 pt-4 border-t border-slate-200">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-slate-700 font-medium hover:text-[#192A51] transition-colors"
            >
              Live Demo <ExternalLinkIcon />
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-slate-700 font-medium hover:text-[#192A51] transition-colors"
            >
              GitHub <GithubIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;