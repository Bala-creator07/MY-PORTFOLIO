import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import Modal from './Modal';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Google', 'IIT Bombay', 'NPTEL & Others'];

  const filteredCerts = resumeData.certifications.filter(cert => {
    if (filterCategory === 'All') return true;
    if (filterCategory === 'Google') return cert.title.includes('Google');
    if (filterCategory === 'IIT Bombay') return cert.title.includes('IIT Bombay');
    if (filterCategory === 'NPTEL & Others') return !cert.title.includes('Google') && !cert.title.includes('IIT Bombay');
    return true;
  });

  return (
    <section id="certifications" className="py-24 relative z-10 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan">
              <span>// 05. CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Certifications & <span className="accent-gradient-text">Badges</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl">
              Professional credentials from Google, NPTEL, IIT Bombay, and MongoDB.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 glass-panel p-1.5 rounded-xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  filterCategory === cat
                    ? 'bg-accent-cyan text-dark-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-accent-cyan/50 cursor-pointer transition-all space-y-4 group"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-dark-950 transition-colors">
                  <Award size={20} />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-white/5 text-[11px] font-mono text-slate-300 border border-white/10">
                  {cert.badge}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-bold text-white group-hover:text-accent-cyan transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono border-t border-white/5">
                <span className="flex items-center gap-1 text-accent-emerald">
                  <ShieldCheck size={14} /> Verified Certificate
                </span>
                <span className="text-accent-cyan group-hover:translate-x-1 transition-transform">
                  Preview &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certification Detail Modal */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || ''}
      >
        {selectedCert && (
          <div className="space-y-6 text-center py-4">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-dark-800 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan shadow-xl shadow-accent-cyan/10">
              <Award size={40} />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-mono border border-accent-cyan/30">
                {selectedCert.badge}
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
              <p className="text-slate-400 text-sm font-mono">{selectedCert.issuer} — {selectedCert.category}</p>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-white/10 text-xs text-slate-300 space-y-2 text-left">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Recipient:</span>
                <span className="font-bold text-white">{resumeData.personal.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="text-accent-emerald font-semibold flex items-center gap-1">
                  <ShieldCheck size={14} /> Verified Credential
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Institution:</span>
                <span className="text-slate-200">{resumeData.education[0].institution}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2 rounded-xl bg-accent-cyan text-dark-950 font-bold text-xs"
              >
                Close Preview
              </button>
            </div>
          </div>
        )}
      </Modal>

    </section>
  );
}
