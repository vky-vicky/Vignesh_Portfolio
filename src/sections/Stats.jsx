import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    num: '03+',
    label: 'YEARS EXPERIENCE',
    sub: 'Full Stack Engineering',
  },
  {
    num: 'FULL',
    label: 'STACK DEVELOPMENT',
    sub: 'Frontend · Backend · Database',
  },
  {
    num: 'REACT',
    label: '+ NODE CORE STACK',
    sub: 'TypeScript & Modern APIs',
  },
  {
    num: '100%',
    label: 'PRODUCTION APPLICATIONS',
    sub: 'Tested, Shipped & Scaled',
  },
];

const Stats = () => {
  return (
    <section className="py-24 relative">
      <div className="section-line" />

      <div className="max-w-5xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-2 border-l border-violet-500/25 pl-6 py-2"
            >
              <span
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none block"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {stat.num}
              </span>
              <p className="font-mono text-xs uppercase tracking-widest text-violet-300 pt-1">
                {stat.label}
              </p>
              <p className="text-xs text-[var(--text-muted)] font-light">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
