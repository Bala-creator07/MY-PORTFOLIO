import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Wrench, Languages, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Sparkles },
    { id: 'frontend', label: 'Frontend Stack', icon: Layout },
    { id: 'languages', label: 'Programming Languages', icon: Code },
    { id: 'tools', label: 'Tools & Software', icon: Wrench },
    { id: 'spoken', label: 'Spoken Languages', icon: Languages },
  ];

  return (
    <section id="skills" className="py-24 relative z-10 bg-dark-900/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan">
              <span>// 02. TECHNICAL MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Skills & <span className="accent-gradient-text">Competencies</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl">
              Extracted directly from resume credentials across frontend engineering, programming, tools, and languages.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 glass-panel p-1.5 rounded-xl border border-white/10">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'bg-accent-cyan text-dark-950 font-bold shadow-md shadow-accent-cyan/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <Icon size={14} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Display Grids */}
        <div className="space-y-12">
          
          {/* Frontend Category */}
          {(activeCategory === 'all' || activeCategory === 'frontend') && (
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-accent-cyan tracking-wider uppercase flex items-center gap-2">
                <Layout size={16} /> Frontend Web Architecture
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {resumeData.skills.frontend.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-card p-5 rounded-xl border border-white/10 text-center space-y-2 group"
                  >
                    <div className="w-10 h-10 mx-auto rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:border-accent-cyan/50 group-hover:bg-accent-cyan/10 transition-colors">
                      <Layout size={20} />
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-accent-cyan transition-colors">
                      {skill.name}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      Frontend
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Programming Languages Category */}
          {(activeCategory === 'all' || activeCategory === 'languages') && (
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-accent-emerald tracking-wider uppercase flex items-center gap-2">
                <Code size={16} /> Programming Languages
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {resumeData.skills.languages.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-card p-5 rounded-xl border border-white/10 text-center space-y-2 group"
                  >
                    <div className="w-10 h-10 mx-auto rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-accent-emerald group-hover:border-accent-emerald/50 group-hover:bg-accent-emerald/10 transition-colors">
                      <Code size={20} />
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-accent-emerald transition-colors">
                      {skill.name}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      Core Language
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Environments */}
          {(activeCategory === 'all' || activeCategory === 'tools') && (
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-purple-400 tracking-wider uppercase flex items-center gap-2">
                <Wrench size={16} /> Dev Tools & Software
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {resumeData.skills.tools.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-card p-4 rounded-xl border border-white/10 text-center space-y-2 group"
                  >
                    <div className="w-9 h-9 mx-auto rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-purple-400 group-hover:border-purple-400/50 group-hover:bg-purple-400/10 transition-colors">
                      <Wrench size={18} />
                    </div>
                    <div className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </div>
                    <div className="text-[9px] font-mono text-slate-400 truncate">
                      {skill.category}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Spoken Languages */}
          {(activeCategory === 'all' || activeCategory === 'spoken') && (
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-amber-400 tracking-wider uppercase flex items-center gap-2">
                <Languages size={16} /> Spoken Languages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {resumeData.skills.spokenLanguages.map((lang, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2 }}
                    className="glass-card p-5 rounded-xl border border-white/10 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-amber-400">
                        <Languages size={20} />
                      </div>
                      <div>
                        <div className="text-base font-bold text-white">{lang.name}</div>
                        <div className="text-xs text-slate-400 font-mono">{lang.level}</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-amber-400/10 text-amber-400 text-xs font-mono font-semibold border border-amber-400/20">
                      Verified
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
