import React, { useState } from 'react';
import { MenuIcon, XIcon } from './Icons';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
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
    }
  };

  const NavLink: React.FC<{ href: string, label: string, onClick?: () => void }> = ({ href, label, onClick }) => (
    <a
      href={href}
      onClick={(e) => {
        handleNavClick(e, href);
        if (onClick) {
          onClick();
        }
      }}
      className="block sm:inline-block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white transition-colors duration-300"
    >
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#192A51] shadow-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold text-white">
            EM
          </a>
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
              <a 
                href="https://capeitinitiative-my.sharepoint.com/:b:/g/personal/kenneth_mlimo_capaciti_org_za/EalJGEzHHuFDrtGumUN_7jIBAYzsRNMaDDMGUit4q6CNng?e=FdhreP" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-slate-200 text-slate-200 font-medium px-4 py-2 rounded-md hover:bg-white hover:text-[#192A51] transition-all duration-300"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-[#192A51]" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} onClick={toggleMenu} />
            ))}
            <a 
              href="https://capeitinitiative-my.sharepoint.com/:b:/g/personal/kenneth_mlimo_capaciti_org_za/EalJGEzHHuFDrtGumUN_7jIBAYzsRNMaDDMGUit4q6CNng?e=FdhreP" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block mt-1 px-3 py-2 rounded-md text-base font-medium border border-slate-200 text-slate-200 hover:bg-white hover:text-[#192A51] transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;