
import React, { useState } from 'react';
import Section from './Section';
import { DownloadIcon, ContactEmailIcon, ContactLinkedInIcon, ContactGithubIcon } from './Icons';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Message from ${name} via Portfolio`;
    const body = `You have a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:ayandaenoughmlimo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Download My Resume</h2>
        <p className="text-slate-600 mt-4 text-lg">
          Want a closer look at my qualifications? Download my resume to see the full details of my experience and skills.
        </p>
        <a
          href="https://capeitinitiative-my.sharepoint.com/:b:/g/personal/kenneth_mlimo_capaciti_org_za/EalJGEzHHuFDrtGumUN_7jIBAYzsRNMaDDMGUit4q6CNng?e=FdhreP"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 mb-16 inline-flex items-center bg-[#192A51] text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-[#2c3e50] transition-all duration-300 shadow-lg shadow-[#192A51]/30"
        >
          <DownloadIcon className="h-6 w-6 mr-2" />
          Download Resume (PDF)
        </a>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Get In Touch</h2>
        <p className="text-slate-600 mt-4 text-lg">
           My inbox is always open. Whether you have a question, a proposal, or just want to connect, feel free to reach out using the form below. I'll get back to you as soon as possible.
        </p>

        <div className="mt-10 text-left max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-[#192A51] focus:border-[#192A51] sm:text-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-[#192A51] focus:border-[#192A51] sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-[#192A51] focus:border-[#192A51] sm:text-sm"
                placeholder="Your message..."
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center bg-[#192A51] text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-[#2c3e50] transition-all duration-300 shadow-lg shadow-[#192A51]/30"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-12">
          <p className="text-slate-600">Or connect with me on:</p>
          <div className="mt-4 flex justify-center space-x-8">
            <a href="mailto:ayandaenoughmlimo@gmail.com" aria-label="Email Enough Mlimo" className="text-slate-600 hover:text-[#192A51] transition-transform duration-300 hover:scale-110">
              <ContactEmailIcon className="w-9 h-9" />
            </a>
            <a href="https://www.linkedin.com/in/enough-mlimo-7b029015b" target="_blank" rel="noopener noreferrer" aria-label="Enough Mlimo on LinkedIn" className="text-slate-600 hover:text-[#192A51] transition-transform duration-300 hover:scale-110">
              <ContactLinkedInIcon className="w-9 h-9" />
            </a>
            <a href="https://github.com/EnoughMlimo" target="_blank" rel="noopener noreferrer" aria-label="Enough Mlimo on GitHub" className="text-slate-600 hover:text-[#192A51] transition-transform duration-300 hover:scale-110">
              <ContactGithubIcon className="w-9 h-9" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
