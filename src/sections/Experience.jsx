import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: 'Full Stack Developer',
        company: 'Ondru Technologies',
        period: 'Jan 2025 - Present',
        description: [
            'Developed UI for Alliance Bank project using React.js, ensuring a seamless user experience.',
            'Working on VKS project — building scalable APIs using Node.js, GraphQL, and PostgreSQL.',
            'Designed database schemas and optimized API architecture for high performance.',
            'Implemented authentication and authorization flows for secure access.',
            'Built reusable frontend components to improve development efficiency.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Work <span className="text-neon-cyan">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My professional journey and contributions to the tech industry.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan to-electric-purple opacity-30" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-neon-cyan rounded-full shadow-[0_0_10px_#00f3ff] z-10 mt-6" />

                            {/* Content Card */}
                            <div className="md:w-1/2" />
                            <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12">
                                <div className={`glass p-6 rounded-xl border border-white/10 hover:border-neon-cyan/30 transition-colors text-left`}>
                                    <div className="flex items-center gap-2 text-neon-cyan mb-2">
                                        <Briefcase size={18} />
                                        <h3 className="text-xl font-bold">{exp.role}</h3>
                                    </div>
                                    <h4 className="text-lg text-white font-medium mb-2">{exp.company}</h4>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                        <Calendar size={16} />
                                        <span>{exp.period}</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                                <span className="text-electric-purple mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
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
