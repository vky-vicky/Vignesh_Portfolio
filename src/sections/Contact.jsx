import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Globe, Send, Check, Copy, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    label: 'Phone',
    value: '+91-6383527500',
    href: 'tel:+916383527500',
    icon: Phone,
  },
  {
    label: 'Email',
    value: 'vigneshm.dev@gmail.com',
    href: 'mailto:vigneshm.dev@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/vky-vicky',
    href: 'https://github.com/vky-vicky',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vigneshfullstackdev',
    href: 'https://linkedin.com/in/vigneshfullstackdev',
    icon: Linkedin,
  },
  {
    label: 'Portfolio',
    value: 'vigneshportfolio-zeta.vercel.app',
    href: 'https://vigneshportfolio-zeta.vercel.app/',
    icon: Globe,
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vigneshm.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="section-line" />

      <div className="max-w-5xl mx-auto px-6 pt-20">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.25em] mb-6"
        >
          Contact
        </motion.p>

        {/* Large editorial title */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-white uppercase max-w-3xl"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            LET'S BUILD
            <br />
            <span className="text-stroke">SOMETHING</span> GREAT.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[var(--text-secondary)] text-base sm:text-lg font-light mt-6 max-w-xl"
          >
            Open to Full Stack, React.js, Node.js and Backend engineering opportunities. Let's discuss how I can contribute to your team.
          </motion.p>
        </div>

        {/* Quick action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <a
            href="mailto:vigneshm.dev@gmail.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail size={16} />
            EMAIL ME
          </a>
          <a
            href="https://linkedin.com/in/vigneshfullstackdev"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Linkedin size={15} />
            LINKEDIN
            <ArrowUpRight size={13} className="text-[var(--text-muted)]" />
          </a>
          <a
            href="https://github.com/vky-vicky"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={15} />
            GITHUB
            <ArrowUpRight size={13} className="text-[var(--text-muted)]" />
          </a>
          <button
            onClick={handleCopyEmail}
            className="px-4 py-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-xs font-mono text-[var(--text-muted)] hover:text-white hover:border-white/[0.12] transition-colors inline-flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400" />
                <span className="text-emerald-400">COPIED EMAIL</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>COPY EMAIL</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Two-column layout: Direct Details & Quick Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 border-t border-white/[0.06]">
          {/* Left: Contact Directory */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
              Direct Channels
            </h3>
            <div className="space-y-4">
              {contactLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-white/[0.04] bg-white/[0.015] hover:border-white/[0.1] hover:bg-white/[0.03] transition-all group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-white transition-colors">
                        <Icon size={15} />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-white group-hover:text-[var(--accent)] transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-white/20 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.015]">
              <h3 className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-[0.2em] mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Dispatched</h4>
                  <p className="text-sm text-[var(--text-secondary)] font-light">
                    Thank you! I will review your note and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/[0.08] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/[0.08] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Vignesh, let's connect regarding a Full Stack Developer role..."
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/[0.08] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full inline-flex items-center justify-center gap-2 mt-2"
                  >
                    <Send size={14} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
