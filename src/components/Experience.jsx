import React from 'react';
import { motion } from 'framer-motion';
import { Users, Cloud, Terminal, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Experience() {
  const getCommunityIcon = (org) => {
    if (org.includes('GDG')) return Users;
    if (org.includes('AWS')) return Cloud;
    return Terminal;
  };

  return (
    <section id="experience" className="py-24 relative z-10 bg-dark-900/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan">
            <span>// 04. COMMUNITIES & ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Organizations & <span className="accent-gradient-text">Activities</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl">
            Active tech club involvement and community leadership at Sri Krishna Arts and Science College.
          </p>
        </div>

        {/* Community Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resumeData.experience.map((exp, idx) => {
            const Icon = getCommunityIcon(exp.organization);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card rounded-2xl p-7 border border-white/10 space-y-6 flex flex-col justify-between group hover:border-accent-cyan/40 transition-all"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-dark-950 transition-colors">
                    <Icon size={24} />
                  </div>

                  <div>
                    <span className="px-2.5 py-1 rounded bg-accent-cyan/10 text-accent-cyan text-[11px] font-mono font-semibold border border-accent-cyan/20">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-accent-cyan transition-colors">
                      {exp.organization}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-1 flex items-center gap-1">
                      <MapPin size={12} /> {exp.institution}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-accent-emerald font-semibold flex items-center gap-1">
                    <CheckCircle2 size={14} /> Active Member
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
