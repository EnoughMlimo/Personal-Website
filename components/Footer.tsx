import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/50">
      <div className="container mx-auto px-4 md:px-8 py-6 text-center text-slate-600">
        <p>&copy; {new Date().getFullYear()} Enough Mlimo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;