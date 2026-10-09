import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    period: 'September 2023 – Present',
    role: 'FULL STACK DEVELOPER',
    company: 'ONDru Technologies',
    location: 'Chennai, India',
    status: 'Active Milestone',
    description:
      'Leading end-to-end full-stack feature engineering, database architecture, and cloud deployment pipelines across fintech and AI production applications.',
    highlights: [
      'Engineered scalable microservices and APIs with Node.js, Express.js, GraphQL, and TypeScript.',
      'Constructed normalized PostgreSQL databases and complex Prisma ORM schemas with query optimization.',
      'Implemented enterprise-grade JWT authentication and Role-Based Access Control (RBAC).',
      'Integrated LLM features and Retrieval-Augmented Generation (RAG) pipelines for automated intelligence.',
      'Deployed production services across AWS EC2, S3, and modern cloud deployment architectures.',
      'Delivered reusable, responsive React.js and Next.js component ecosystems with sub-second page performance.',
    ],
    tech: [
      'React.js',
      'Node.js',
      'TypeScript',
      'GraphQL',
      'PostgreSQL',
      'REST APIs',
      'JWT',
      'RBAC',
      'AWS',
      'LLM',
      'RAG',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="section-line" />

      <div className="max-w-5xl mx-auto px-6 pt-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-[0.25em] mb-4 flex items-center gap-2"
            >
              <span>✦</span> Trajectory & Experience
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              EXPERIENCE
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-[var(--text-muted)] max-w-xs"
          >
            // Orbital milestones in production development
          </motion.p>
        </div>

        {/* Timeline with Orbital Graphics */}
        <div className="relative">
          {/* Large Orbital Curve SVG Background */}
          <div className="absolute top-0 bottom-0 -left-[50px] sm:-left-[150px] w-[200px] sm:w-[400px] pointer-events-none z-0 overflow-hidden">
            <svg 
              viewBox="0 0 100 1000" 
              preserveAspectRatio="none" 
              className="w-full h-[150%] -translate-y-[10%] stroke-white/[0.05]" 
              fill="none" 
              strokeDasharray="4 8"
            >
              <path d="M 0,0 Q 100,500 0,1000" strokeWidth="1.5" />
              <path d="M -20,0 Q 130,500 -20,1000" strokeWidth="0.5" strokeDasharray="1 15" />
            </svg>
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-12 sm:pl-24 mb-16 z-10"
            >
              {/* Planetary Orbital Node on Timeline */}
              <div className="absolute left-1 sm:left-4 top-1.5 -translate-x-1/2 flex items-center justify-center">
                <div className="absolute w-12 h-12 rounded-full border border-violet-500/10 animate-[spin_10s_linear_infinite]" borderStyle="dashed" />
                <div className="w-5 h-5 rounded-full border border-violet-400/40 bg-[#08070d] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_12px_#a855f7]" />
                </div>
              </div>

              {/* Orbital Ring Graphics in Background of Card */}
              <div className="p-8 sm:p-12 rounded-3xl border border-white/[0.05] bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden group hover:border-violet-500/30 transition-all duration-500 backdrop-blur-sm">
                
                {/* Subtle orbital dashed curve inside card */}
                <div
                  className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-violet-500/10 pointer-events-none transition-transform duration-1000 group-hover:scale-110"
                  style={{ borderStyle: 'dashed' }}
                />

                {/* Top Role & Company Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.05] mb-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3
                        className="text-2xl sm:text-4xl font-black text-white tracking-tight"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {exp.role}
                      </h3>
                      <span className="font-mono text-[10px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full uppercase tracking-widest">
                        {exp.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm sm:text-base text-[var(--text-secondary)]">
                      <span className="text-[var(--accent)] font-semibold">{exp.company}</span>
                      <span className="opacity-50">·</span>
                      <span className="font-light">{exp.location}</span>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider border border-white/10 px-4 py-2 rounded-full">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed font-light mb-8 max-w-3xl">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-4 mb-10 max-w-3xl">
                  {exp.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 group/item">
                      <span className="font-mono text-xs text-violet-500/50 mt-1 select-none group-hover/item:text-[var(--accent)] transition-colors">✦</span>
                      <span className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-light group-hover/item:text-white/90 transition-colors">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Orbiting Tech Stack Badges */}
                <div className="pt-8 border-t border-white/[0.05]">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-4">
                    Orbital Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] text-[var(--text-secondary)] bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/40 hover:text-[var(--accent)] hover:bg-violet-500/10 px-4 py-1.5 rounded transition-all cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
