import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="section-line" />

      <div className="max-w-5xl mx-auto px-6 pt-20">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-[0.25em] mb-6 flex items-center gap-2"
        >
          <span>✦</span> About Me
        </motion.p>

        {/* Large editorial statement */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-white mb-12 max-w-4xl"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Full Stack Developer building{' '}
          <span className="text-[var(--accent)]">production-ready applications</span> from frontend to backend.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — Narrative & Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed font-light">
              I’m Vignesh M, a Full Stack Developer with 3+ years of experience building scalable and production-ready web applications.
            </p>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed font-light">
              I work across React.js, Next.js, Node.js, Express.js, TypeScript, GraphQL, PostgreSQL, authentication, cloud deployment and AI-powered systems.
            </p>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed font-light">
              Currently engineering full-stack platforms at ONDru Technologies, shipping robust APIs, high-reliability database models, and high-performance client applications.
            </p>

            {/* Education Highlights */}
            <div className="pt-8 border-t border-white/[0.06] space-y-4">
              <p className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-[0.2em] flex items-center gap-2">
                <span>✦</span> Education Background
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-white/[0.05] bg-white/[0.015]">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">
                      Completed (2024)
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white">Diploma in Computer Engineering</h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 font-light">
                    State Board of Technical Education
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/[0.05] bg-white/[0.015]">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] text-purple-400 bg-purple-400/10 border border-purple-400/20 px-2.5 py-0.5 rounded-full">
                      Pursuing (2027)
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white">B.Sc. Computer Science</h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 font-light">
                    University Degree Program
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Cosmic Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Status */}
            <div className="flex items-center gap-3 p-4 rounded-lg border border-violet-500/20 bg-violet-950/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-sm text-emerald-400/90 font-medium">
                Available for engineering roles
              </span>
            </div>

            {/* Quick facts */}
            <div className="space-y-5">
              {[
                { label: 'Location', value: 'Chennai, India' },
                { label: 'Experience', value: '3+ Years' },
                { label: 'Specialization', value: 'React · Node · TypeScript' },
                { label: 'Architecture', value: 'GraphQL · REST · PostgreSQL' },
                { label: 'Education', value: 'Diploma (Completed) · B.Sc. (Pursuing)' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-baseline justify-between border-b border-white/[0.04] pb-4">
                  <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.15em]">
                    {label}
                  </span>
                  <span className="text-sm text-[var(--text-primary)] font-medium text-right ml-4">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
