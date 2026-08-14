import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, HeartPulse, GraduationCap, ExternalLink, ArrowRight, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { resumeData } from '../data/resumeData';
import Modal from './Modal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'ultron-ai':
        return Cpu;
      case 'aurexia':
        return HeartPulse;
      case 'skilledin':
        return GraduationCap;
      default:
        return Layers;
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan">
            <span>// 03. FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Projects & <span className="accent-gradient-text">AI Innovations</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Selected software systems and AI models built with modern web technologies and Llama 3.3 / Groq intelligence.
          </p>
        </div>

        {/* Projects Showcase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, idx) => {
            const Icon = getProjectIcon(project.id);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card rounded-2xl border border-white/10 p-7 flex flex-col justify-between group hover:border-accent-cyan/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-3xl group-hover:bg-accent-cyan/15 transition-all pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Top Row: Category Tag & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-dark-800 border border-white/10 text-slate-300 font-mono text-xs font-semibold">
                      {project.category}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-dark-950 transition-all">
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Project Titles */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 size={14} className="text-accent-emerald shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-white/5 text-slate-300 text-[11px] font-mono border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-8 flex items-center justify-between gap-4 border-t border-white/10 mt-6 relative z-10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-xs font-mono text-accent-cyan font-bold hover:underline"
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={14} />
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-dark-800 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono font-semibold">
              {selectedProject.category}
            </div>

            <p className="text-base text-slate-200 leading-relaxed">
              {selectedProject.fullDescription}
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-mono text-slate-300 uppercase tracking-wider">Key Architecture Features</h4>
              <div className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <Sparkles size={16} className="text-accent-cyan" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-mono text-slate-300 uppercase tracking-wider">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-dark-800 border border-white/15 text-xs font-mono text-white">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-end gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-accent-cyan text-dark-950 font-bold text-xs flex items-center gap-2 hover:bg-accent-cyan/90 transition-colors"
              >
                <GithubIcon size={16} />
                <span>Visit Repository</span>
              </a>
            </div>
          </div>
        )}
      </Modal>

    </section>
  );
}
