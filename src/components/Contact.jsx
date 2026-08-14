import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-dark-900/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan">
            <span>// 06. INITIATE CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Let's Build <span className="accent-gradient-text">Together</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Open for frontend engineering opportunities, UI/UX collaborations, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <motion.div
              whileHover={{ y: -3 }}
              className="glass-card rounded-2xl p-6 border border-white/10 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-dark-950 transition-colors">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Direct Email</span>
                  <a
                    href={`mailto:${resumeData.personal.email}`}
                    className="text-sm sm:text-base font-bold text-white group-hover:text-accent-cyan transition-colors"
                  >
                    {resumeData.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(resumeData.personal.email, 'email')}
                className="p-2.5 rounded-lg bg-dark-800 border border-white/10 text-slate-300 hover:text-white"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={18} className="text-accent-emerald" /> : <Copy size={18} />}
              </button>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -3 }}
              className="glass-card rounded-2xl p-6 border border-white/10 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-accent-emerald group-hover:bg-accent-emerald group-hover:text-dark-950 transition-colors">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Phone / Mobile</span>
                  <a
                    href={`tel:${resumeData.personal.phone}`}
                    className="text-sm sm:text-base font-bold text-white group-hover:text-accent-emerald transition-colors"
                  >
                    +91 {resumeData.personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(resumeData.personal.phone, 'phone')}
                className="p-2.5 rounded-lg bg-dark-800 border border-white/10 text-slate-300 hover:text-white"
                title="Copy Phone"
              >
                {copiedPhone ? <Check size={18} className="text-accent-emerald" /> : <Copy size={18} />}
              </button>
            </motion.div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-amber-400">
                <MapPin size={22} />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block">Location</span>
                <span className="text-sm sm:text-base font-bold text-white">
                  {resumeData.personal.location}
                </span>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Verified Social & Code Profiles
              </span>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={resumeData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-slate-200 hover:text-white hover:border-accent-cyan/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon size={18} className="text-accent-cyan" />
                    <span className="text-xs font-bold">LinkedIn</span>
                  </div>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={resumeData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-slate-200 hover:text-white hover:border-accent-cyan/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon size={18} className="text-white" />
                    <span className="text-xs font-bold">GitHub</span>
                  </div>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Contact Interactive Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-8 border border-white/10 space-y-6 relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare size={20} className="text-accent-cyan" />
                  <span>Send Direct Message</span>
                </h3>
                <span className="text-xs font-mono text-slate-400">Response &lt; 24h</span>
              </div>

              {formSent ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent-emerald/20 border border-accent-emerald/40 flex items-center justify-center text-accent-emerald">
                    <Check size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Transmitted!</h4>
                  <p className="text-sm text-slate-400">
                    Thank you for reaching out, {formData.name || 'Visitor'}. I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">MESSAGE DETAILS</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Balahariharan, I'd like to discuss a frontend project..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-accent-cyan text-dark-950 font-bold text-sm hover:bg-accent-cyan/90 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-accent-cyan/25"
                  >
                    <span>Transmit Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
