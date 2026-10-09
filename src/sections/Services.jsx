import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Server,
  Database,
  Bot,
  Lock,
  CloudUpload,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Full Stack Development',
    description: 'Modern React.js and Node.js applications with high performance, modular component architectures, and responsive interfaces.',
    icon: Layers,
    color: 'from-blue-500/20 to-purple-500/20',
    tech: ['React.js', 'Next.js', 'Node.js', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Backend Development',
    description: 'Scalable REST and GraphQL APIs designed for low latency, robust error handling, business workflows, and data orchestration.',
    icon: Server,
    color: 'from-purple-500/20 to-pink-500/20',
    tech: ['Express.js', 'GraphQL', 'Apollo Server', 'TypeScript'],
  },
  {
    number: '03',
    title: 'Database Development',
    description: 'PostgreSQL database design and optimization, schema normalization, index strategies, transaction integrity, and Prisma ORM.',
    icon: Database,
    color: 'from-cyan-500/20 to-blue-500/20',
    tech: ['PostgreSQL', 'Prisma ORM', 'SQL Tuning', 'Migrations'],
  },
  {
    number: '04',
    title: 'AI Integration',
    description: 'LLM and RAG-powered applications integrating Gemini, automated question synthesis, context retrieval pipelines, and OCR document processing.',
    icon: Bot,
    color: 'from-fuchsia-500/20 to-purple-500/20',
    tech: ['Gemini LLM', 'RAG Pipelines', 'OCR', 'Vector Context'],
  },
  {
    number: '05',
    title: 'Authentication & Security',
    description: 'JWT and RBAC based secure systems ensuring granular user permissions, protected routes, secure password hashing, and token rotation.',
    icon: Lock,
    color: 'from-emerald-500/20 to-cyan-500/20',
    tech: ['JWT', 'RBAC', 'Access Control', 'Data Encryption'],
  },
  {
    number: '06',
    title: 'Cloud Deployment',
    description: 'AWS-based application deployment utilizing EC2 instances, S3 bucket storage, environment orchestration, and continuous production stability.',
    icon: CloudUpload,
    color: 'from-amber-500/20 to-orange-500/20',
    tech: ['AWS EC2', 'AWS S3', 'Nginx', 'Production CI/CD'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="text-purple-400 font-mono text-xs tracking-[0.3em] uppercase">
              // 06. SERVICES
            </span>
            <div className="h-[1px] w-16 bg-purple-500/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase"
          >
            What I Do & Deliver
          </motion.h2>
          <p className="text-gray-400 max-w-2xl text-base sm:text-lg mt-3">
            End-to-end engineering capabilities tailored for startups, high-growth teams, and scalable enterprise products.
          </p>
        </div>

        {/* Services 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl glass-panel border border-white/10 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Glow backdrop */}
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${item.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:scale-110 group-hover:border-purple-400/40 transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="font-mono text-2xl font-black text-white/20 group-hover:text-purple-400/80 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-gray-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
