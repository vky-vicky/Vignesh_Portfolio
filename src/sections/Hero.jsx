import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ArrowDownToLine } from 'lucide-react';
import HeroCosmicIdentity from '../components/HeroCosmicIdentity';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Small Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/25 bg-violet-950/20 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="font-mono text-[11px] text-emerald-400/90 uppercase tracking-[0.2em]">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main Headline */}
        <div className="mb-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h1
              className="text-[clamp(2.75rem,8vw,7.5rem)] font-black leading-[0.9] tracking-tighter text-white uppercase"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              &lt; VIGNESH /&gt;
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <h1
              className="text-[clamp(2.75rem,8vw,7.5rem)] font-black leading-[0.9] tracking-tighter uppercase text-stroke mt-1"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              FULL STACK
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <h1
              className="text-[clamp(1.75rem,5vw,4.5rem)] font-light leading-[1.1] tracking-[0.2em] text-[var(--text-secondary)] uppercase mt-2"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              DEVELOPER
            </h1>
          </motion.div>
        </div>

        {/* 3D Cosmic Visual Composition (Solar Core with orbital planetary nodes) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <HeroCosmicIdentity />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-6 font-light"
        >
          Building scalable web applications, robust backend systems, and thoughtful digital experiences.
        </motion.p>

        {/* Technology line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-mono text-xs sm:text-sm text-violet-300/80 tracking-wider mb-10"
        >
          React.js · Node.js · TypeScript · PostgreSQL · GraphQL
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary inline-flex items-center gap-2 group">
            <span>View My Work</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="btn-outline inline-flex items-center gap-2 group">
            <span>Let's Talk</span>
            <Mail size={14} className="text-[var(--accent)] opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <span>Download Resume</span>
            <ArrowDownToLine size={14} className="text-[var(--text-muted)]" />
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--text-muted)]">Orbit Down</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-violet-500/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
