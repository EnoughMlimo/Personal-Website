
import React from 'react';
import { SKILLS } from '../constants';
import { Skill } from '../types';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-16 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm">
               <img 
                src="https://avatars.githubusercontent.com/u/211663168?v=4"
                alt="Enough Mlimo" 
                className="rounded-lg w-full h-full object-cover aspect-[4/5] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
          <div className="text-lg text-slate-600 space-y-4">
              <p>
                  A Business and Data Analyst with a passion for transforming raw data into meaningful insights and AI-powered solutions. With hands-on experience in dashboard creation, process improvement, and custom AI tools, I help organizations make data-driven decisions that solve real business problems.
              </p>
              <p>
                  My work bridges the gap between technical systems and strategic goals—always with a focus on clarity, impact, and user experience.
              </p>
          </div>
        </div>

        <div className="mt-20">
             <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10 text-center">Technical Skills & Competencies</h2>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {SKILLS.map((skill: Skill) => (
                    <div key={skill.name} className="group flex flex-col items-center justify-center p-4 bg-[#eed6d1] border border-[#e4c8c1] rounded-lg text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white hover:border-[#192A51]">
                    <skill.icon />
                    <p className="mt-2 text-md font-semibold text-slate-800">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </Section>
  );
};

export default About;