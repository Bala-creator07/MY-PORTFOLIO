import React from 'react';
import { ArrowUp, Terminal, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-accent-cyan">
              <Terminal size={18} />
            </div>
            <div>
              <span className="text-sm font-bold text-white tracking-tight block">
                {resumeData.personal.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono block">
                {resumeData.personal.role}
              </span>
            </div>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-900 border border-white/10 hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-900 border border-white/10 hover:text-white hover:border-white/30 transition-colors"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="p-2 rounded-lg bg-dark-900 border border-white/10 hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright & Back To Top */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span>&copy; {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-dark-800 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-colors"
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
