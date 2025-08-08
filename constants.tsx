

import React from 'react';
import { Project, Skill } from './types';
import { PowerBIIcon, ExcelIcon, BusinessAnalysisIcon, SQLIcon, CPlusPlusIcon, DocumentationIcon, GenerativeAIIcon } from './components/Icons';

export const PROJECTS: Project[] = [
  {
    title: 'AI Concept Chatbot',
    description: 'Built an interactive AI chatbot that helps users learn the fundamentals of artificial intelligence.',
    techDescription: 'For this AI chatbot, I used Landbot as the core platform to build an interactive, no-code conversational interface. Landbot provides a user-friendly drag-and-drop builder to design chatbot flows and manage user input dynamically.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfGw5l9sHxO8v2X5pHpqY6M3dtJfbcnMjQQ&s',
    liveUrl: 'https://landbot.online/v3/H-2938620-22HMKMT4CPH71QZT/index.html',
    sourceUrl: 'https://github.com/EnoughMlimo/Edu-AI'
  },
  {
    title: 'Custom Content Generator',
    description: 'Developed a content generation tool tailored to produce high-quality outputs for a specific use case.',
    techDescription: 'Built a content generator using Google AI Studio and Gemini models to create educational content with custom AI prompts.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYT6IAusfHJELFcpRCKyfqP73JUGL_NXqFLQ&s',
    liveUrl: 'https://education-content-generator.vercel.app/',
    sourceUrl: 'https://github.com/EnoughMlimo/Education-Content-Generator'
  },
  {
    title: 'AI Resume Builder',
    description: 'Built an intelligent system that generates personalized, ATS-friendly resumes from user inputs.',
    techDescription: 'Built an AI Resume Builder with HTML, CSS, JS, and Gemini 2.0 Flash API using VS Code for resume content generation.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSku6JmsLLtLTBrr3-cRZDGfErA_Xo2ts4Dfw&s',
    liveUrl: 'https://ai-resume-builder-theta-ten.vercel.app/',
    sourceUrl: 'https://github.com/EnoughMlimo/AI-Resume-Builder'
  },
  {
    title: 'Sentiment Analysis',
    description: 'Created an interactive dashboard that analyzes text sentiment to reveal emotional tone in customer reviews.',
    techDescription: 'Performed sentiment analysis using Python in PyCharm, leveraging Hugging Face Transformers for NLP model integration.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSuf68UbnI0UlCfh_PTFFct0b58qa2tzQzQ&s',
    liveUrl: 'https://sentiment-analysis-techshield.streamlit.app/',
    sourceUrl: 'https://github.com/EnoughMlimo/Sentiment-Analysis'
  },
  {
    title: 'Bias Audit Report',
    description: 'Analyzed bias in a machine learning dataset and proposed mitigation strategies.',
    techDescription: 'Conducted a bias audit using Python in Jupyter Notebook, with the IBM AI Fairness 360 toolkit for fairness evaluation and metrics.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSNsJzDoLSwLKPkhLVuw1o6LygkZA4hCl0Xw&s',
    liveUrl: 'https://github.com/EnoughMlimo/Bias-Audit-Report/blob/main/bias.ipynb',
    sourceUrl: 'https://github.com/EnoughMlimo/Bias-Audit-Report'
  },
  {
    title: 'End-to-End AI Solution',
    description: 'Built a full-scale AI application that solves a real-world problem by integrating multiple AI technologies.',
    techDescription: 'Built an end-to-end AI solution using Google AI Studio with Gemini models for AI capabilities, and React for the user interface.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSriOwykwebpnDqHVJfgbIYbyvvj6qQ-JIH-w&s',
    liveUrl: 'https://safe-space-ai.vercel.app/',
    sourceUrl: 'https://github.com/EnoughMlimo/-End-to-End-AI-Solution'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Power BI', icon: PowerBIIcon },
  { name: 'Excel', icon: ExcelIcon },
  { name: 'Business Analysis', icon: BusinessAnalysisIcon },
  { name: 'SQL', icon: SQLIcon },
  { name: 'C++', icon: CPlusPlusIcon },
  { name: 'Documentation', icon: DocumentationIcon },
  { name: 'Generative AI', icon: GenerativeAIIcon },
];