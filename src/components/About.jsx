import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan">
            <span>// 01. EDITORIAL BRIEF</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            About & <span className="accent-gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Passionate about modern web interfaces, human-centric UX design, and practical AI implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Editorial Biography Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                <BookOpen size={24} className="text-accent-cyan" />
                <span>Professional Summary</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-normal">
                {resumeData.personal.bio}
              </p>

              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent-cyan" />
                  <span>{resumeData.personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-accent-emerald" />
                  <span>{resumeData.personal.degree}</span>
                </div>
              </div>
            </div>

            {/* Core Values / Focus Pill Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-panel p-4 rounded-xl text-center space-y-1 border border-white/10">
                <div className="text-xl font-bold text-accent-cyan">Frontend</div>
                <div className="text-xs text-slate-400 font-mono">React & Tailwind</div>
              </div>
              <div className="glass-panel p-4 rounded-xl text-center space-y-1 border border-white/10">
                <div className="text-xl font-bold text-accent-emerald">UX Design</div>
                <div className="text-xs text-slate-400 font-mono">Google Certified</div>
              </div>
              <div className="glass-panel p-4 rounded-xl text-center space-y-1 border border-white/10">
                <div className="text-xl font-bold text-white">AI Tools</div>
                <div className="text-xs text-slate-400 font-mono">Llama & Groq</div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white tracking-tight mb-8 flex items-center gap-3">
                <GraduationCap size={26} className="text-accent-emerald" />
                <span>Academic Record</span>
              </h3>

              <div className="relative border-l-2 border-white/10 pl-6 space-y-8 ml-2">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle Node */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-dark-950 border-2 border-accent-cyan group-hover:bg-accent-cyan transition-colors" />

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-accent-cyan/10 text-accent-cyan font-mono text-xs font-semibold border border-accent-cyan/30">
                          {edu.score}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar size={12} />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-white group-hover:text-accent-cyan transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-slate-300">{edu.institution}</p>
                      <p className="text-xs text-slate-400 font-mono flex items-center gap-1">
                        <MapPin size={12} /> {edu.location}
                      </p>
                      {edu.details && (
                        <p className="text-xs text-slate-400 pt-1 leading-relaxed">{edu.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
