import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Calendar, CheckCircle, Code, BookOpen } from 'lucide-react';

const timelineData = [
  {
    type: 'experience',
    title: 'Full Stack Developer',
    institution: 'Ondru Technologies',
    period: '2023 – Present',
    status: 'Active',
    statusColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    icon: Briefcase,
    description:
      'Architecting and deploying full-stack web applications using React.js, Node.js, GraphQL, PostgreSQL, and AWS. Engineering AI features with LLMs & RAG pipelines.',
    side: 'left',
  },
  {
    type: 'career',
    title: 'Started Professional Career',
    institution: 'Ondru Technologies',
    period: 'September 2023',
    status: 'Milestone',
    statusColor: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    icon: Code,
    description:
      'Embarked on professional full-stack development, delivering robust backend APIs, relational database integrations, and responsive client architectures.',
    side: 'right',
  },
  {
    type: 'education',
    title: 'Diploma in Computer Engineering',
    institution: 'State Board of Technical Education',
    period: 'Graduated: 2024',
    status: 'Completed',
    statusColor: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    icon: Award,
    description:
      'Completed comprehensive technical education in computer engineering, operating systems, networking protocols, database fundamentals, and software programming.',
    side: 'left',
  },
  {
    type: 'education',
    title: 'B.Sc. Computer Science',
    institution: 'University Degree Program',
    period: 'Expected Graduation: 2027',
    status: 'In Progress',
    statusColor: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30',
    icon: GraduationCap,
    description:
      'Pursuing advanced computational theory, modern data structures, algorithms, distributed systems architecture, and software development methodologies.',
    side: 'right',
  },
];

const Journey = () => {
  return (
    <section id="journey" className="py-28 relative overflow-hidden bg-[#050508]">
      {/* Background dot grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs uppercase tracking-widest mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Education & Career Milestones</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase"
          >
            MY JOURNEY
          </motion.h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base mt-3 font-mono">
            Key academic foundations and professional milestones shaping my engineering discipline.
          </p>
        </div>

        {/* Central Vertical Timeline (Matches Screenshot 2) */}
        <div className="relative">
          {/* Centered Glowing Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-fuchsia-400 to-cyan-400 shadow-[0_0_15px_rgba(168,85,247,0.8)] hidden md:block" />

          {/* Mobile vertical line on the left */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-fuchsia-400 to-cyan-400 shadow-[0_0_15px_rgba(168,85,247,0.8)] md:hidden" />

          {/* Timeline Nodes & Cards */}
          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isLeft = item.side === 'left';

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Left Column (Card on left or empty spacer on right) */}
                  <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:hidden md:pr-0'} pl-12 md:pl-0`}>
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="p-7 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/40 transition-all duration-300 relative group shadow-2xl"
                      >
                        {/* Header Row: Icon + Titles + Status Pill */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3.5">
                            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:scale-110 transition-transform">
                              <Icon size={24} />
                            </div>
                            <div>
                              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                                {item.title}
                              </h3>
                              <p className="text-xs font-mono text-gray-400 mt-0.5">
                                {item.institution}
                              </p>
                            </div>
                          </div>

                          {/* Status Pill Badge (e.g. Completed, In Progress) */}
                          <span
                            className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase border shrink-0 ${item.statusColor}`}
                          >
                            {item.status}
                          </span>
                        </div>

                        {/* Period Line */}
                        <div className="flex items-center gap-2 mb-4 text-xs font-mono text-purple-300">
                          <Calendar size={13} />
                          <span>{item.period}</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Node Marker (Matches the glowing node ring in Screenshot 2) */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#050508] border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,1)] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                    </div>
                  </div>

                  {/* Right Column (Card on right or empty spacer on left) */}
                  <div className={`w-full md:w-1/2 ${!isLeft ? 'md:pl-12' : 'hidden md:block md:pl-0'} pl-12 md:pl-12 mt-6 md:mt-0`}>
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="p-7 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative group shadow-2xl"
                      >
                        {/* Header Row: Icon + Titles + Status Pill */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3.5">
                            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform">
                              <Icon size={24} />
                            </div>
                            <div>
                              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                                {item.title}
                              </h3>
                              <p className="text-xs font-mono text-gray-400 mt-0.5">
                                {item.institution}
                              </p>
                            </div>
                          </div>

                          {/* Status Pill Badge */}
                          <span
                            className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase border shrink-0 ${item.statusColor}`}
                          >
                            {item.status}
                          </span>
                        </div>

                        {/* Period Line */}
                        <div className="flex items-center gap-2 mb-4 text-xs font-mono text-cyan-300">
                          <Calendar size={13} />
                          <span>{item.period}</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Journey;
