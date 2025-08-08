import React from 'react';

export interface Skill {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
  title: string;
  description: string;
  techDescription: string;
  imageUrl: string;
  liveUrl?: string;
  sourceUrl?: string;
}