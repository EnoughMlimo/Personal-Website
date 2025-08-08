
import React from 'react';
import Section from './Section';

const Hero: React.FC = () => {
  const handleViewWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // The header height is 5rem (80px), we subtract this for the correct offset
      const headerOffset = 80; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="home" className="pt-32 sm:pt-40 pb-16 sm:pb-24 flex items-center min-h-[calc(100vh-5rem)]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Enough Mlimo
              <span className="block mt-2 text-2xl font-semibold text-[#192A51]">Business and Data Analyst</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600">
              I build AI-powered solutions and turn complex data into clear, actionable insights for smarter business decisions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#projects" 
                onClick={handleViewWorkClick}
                className="w-full sm:w-auto inline-block bg-[#192A51] text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-[#2c3e50] transition-all duration-300 shadow-lg shadow-[#192A51]/30"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                onClick={handleViewWorkClick}
                className="w-full sm:w-auto inline-block border-2 border-[#192A51] text-[#192A51] font-bold py-3 px-8 rounded-md text-lg hover:bg-[#192A51] hover:text-white transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <img 
              src="https://cdn.britannica.com/47/246247-050-F1021DE9/AI-text-to-image-photo-robot-with-computer.jpg"
              alt="Enough Mlimo" 
              className="w-64 sm:w-80 rounded-lg object-cover shadow-xl border-4 border-white aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;