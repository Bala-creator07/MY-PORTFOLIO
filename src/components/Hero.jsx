import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Terminal, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippet = `// Balahariharan B — Frontend Core
const Developer = {
  name: "${resumeData.personal.name}",
  role: "${resumeData.personal.role}",
  degree: "${resumeData.personal.degree}",
  location: "${resumeData.personal.location}",
  techStack: ["React", "Tailwind CSS", "JavaScript", "C++", "Java"],
  activeIn: ["GDG", "AWS Community", "Hackers Club"]
};`;

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-accent-emerald/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-accent-cyan/30 text-xs font-mono text-accent-cyan">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
              </span>
              <span>Available for Frontend & UI/UX Roles</span>
            </div>

            {/* Title & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <br />
                <span className="accent-gradient-text">{resumeData.personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 tracking-tight">
                {resumeData.personal.role}
              </p>
            </div>

            {/* Resume-sourced Concise Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed font-normal">
              {resumeData.personal.bio}
            </p>

            {/* Quick Metrics from Resume */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-800 border border-white/10">
                <ShieldCheck size={14} className="text-accent-cyan" />
                <span>Sri Krishna Arts & Science (7.8 CGPA)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-800 border border-white/10">
                <Sparkles size={14} className="text-accent-emerald" />
                <span>Active in GDG, AWS & Hackers Club</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-accent-cyan text-dark-950 font-bold text-sm tracking-wide hover:bg-accent-cyan/90 transition-all shadow-xl hover:shadow-accent-cyan/30 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>View My Work</span>
                <ArrowDown size={16} />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl glass-panel text-white font-semibold text-sm hover:bg-white/10 transition-all border border-white/15 hover:border-white/30 hover:-translate-y-0.5"
              >
                Contact Me
              </a>

              <button
                onClick={handleCopyEmail}
                className="p-3.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:bg-white/10 transition-all border border-white/10 relative group"
                title="Copy Email"
              >
                {copied ? <Check size={18} className="text-accent-emerald" /> : <Copy size={18} />}
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-dark-800 text-[10px] text-slate-200 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {copied ? 'Copied!' : 'Copy Email'}
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Hero Visual: Interactive Code Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <div className="glass-panel rounded-2xl border border-white/15 overflow-hidden shadow-2xl relative group">
              {/* Top Bar */}
              <div className="px-4 py-3 bg-dark-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">developer-profile.js</span>
                </div>

                <div className="px-2.5 py-1 text-[11px] font-mono rounded bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan font-semibold">
                  Profile
                </div>
              </div>

              {/* Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto min-h-[260px] bg-dark-950/80">
                <pre className="text-slate-300">
                  <code>{codeSnippet}</code>
                </pre>
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2.5 bg-dark-900/70 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2 text-accent-emerald">
                  <Terminal size={14} />
                  <span>Frontend Environment Ready</span>
                </div>
                <span>Coimbatore, IN</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
