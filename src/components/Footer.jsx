import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#030206] pt-20 pb-14 overflow-hidden">
      {/* ─── FINAL SUBTLE COSMIC SOLAR SYSTEM SCENE ─── */}
      <div className="relative w-full max-w-2xl mx-auto h-40 mb-12 flex items-center justify-center pointer-events-none select-none">
        {/* Soft Ambient Nebula */}
        <div className="absolute w-72 h-32 rounded-full bg-violet-600/[0.08] blur-3xl" />

        {/* Outer Orbit Path */}
        <div
          className="absolute w-80 h-28 sm:w-96 sm:h-32 rounded-full border border-violet-500/15 animate-[spin_55s_linear_infinite]"
          style={{ borderStyle: 'dashed' }}
        >
          <div className="absolute top-0 left-1/3 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
          <div className="absolute bottom-2 right-1/4 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" />
        </div>

        {/* Middle Orbit Path */}
        <div className="absolute w-56 h-20 sm:w-64 sm:h-24 rounded-full border border-purple-400/20 animate-[spin_32s_linear_infinite_reverse]">
          <div className="absolute bottom-0 left-1/4 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_#c084fc]" />
        </div>

        {/* Inner Orbit Path */}
        <div className="absolute w-36 h-14 sm:w-40 sm:h-16 rounded-full border border-white/10 animate-[spin_18s_linear_infinite]">
          <div className="absolute top-0 right-1/3 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
        </div>

        {/* Central Core Star */}
        <div className="relative z-10 w-4 h-4 rounded-full bg-violet-300 shadow-[0_0_20px_#a855f7]" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.04]">
          {/* Logo & title */}
          <div>
            <a
              href="#hero"
              className="font-mono text-base font-semibold text-white tracking-wider hover:text-[var(--accent)] transition-colors inline-block mb-1.5"
            >
              &lt; vignesh.dev /&gt;
            </a>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              Full Stack Developer · Chennai, India · Open for Opportunities
            </p>
          </div>

          {/* Social links + Scroll up */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/vky-vicky"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.02] border border-white/[0.06] text-[var(--text-secondary)] hover:text-white hover:border-white/[0.12] transition-colors"
            >
              <Github size={15} />
            </a>
            <a
              href="https://linkedin.com/in/vigneshfullstackdev"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.02] border border-white/[0.06] text-[var(--text-secondary)] hover:text-white hover:border-white/[0.12] transition-colors"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:vigneshm.dev@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.02] border border-white/[0.06] text-[var(--text-secondary)] hover:text-white hover:border-white/[0.12] transition-colors"
            >
              <Mail size={15} />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/[0.08] text-[var(--accent)] hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer ml-1"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom meta */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--text-muted)]">
          <p>© 2026 Vignesh M. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-emerald-400/80">Available for opportunities.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
