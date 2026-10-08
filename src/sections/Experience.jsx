import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Briefcase, Calendar, Star, CheckCircle2 } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: 'Full Stack Developer & AI Engineer',
        company: 'Ondru Technologies',
        period: 'Jan 2024 – Present',
        bullets: [
            <>Architected and deployed a production-grade <span className="metric-highlight">RAG pipeline</span> using Python, FastAPI, and Claude AI.</>,
            <>Built OCR pipelines processing <span className="metric-highlight">10,000+ TNPSC questions</span> with high accuracy.</>,
            <>Improved API performance by <span className="metric-highlight">35%</span> through database optimization and indexing.</>,
            <>Developed scalable <span className="metric-highlight">GraphQL APIs</span> using Node.js and PostgreSQL.</>,
            <>Deployed applications on <span className="metric-highlight">AWS (EC2, S3, IAM)</span> with 99% uptime.</>
        ],
        type: 'current'
    }
];

const ExperienceCard = ({ exp, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`relative flex flex-col md:flex-row items-center justify-between mb-24 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-deep-space border-4 border-neon-cyan rounded-full z-20 flex items-center justify-center">
                <div className="w-2 h-2 bg-neon-cyan rounded-full pulse-node-glow" />
            </div>

            {/* Content Side */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                className="w-full md:w-[45%] z-10"
            >
                <motion.div 
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="glass-premium p-8 md:p-10 rounded-[40px] relative overflow-hidden group border-t border-l border-white/10"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-electric-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex flex-col gap-4 relative z-10">
                        {/* Header */}
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-neon-cyan/10 rounded-2xl text-neon-cyan">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                                        {exp.role}
                                    </h3>
                                    <p className="text-lg font-bold text-gray-400 mt-1">{exp.company}</p>
                                </div>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                                <Calendar size={14} className="text-neon-cyan" />
                                {exp.period}
                            </div>
                        </div>

                        {/* Mobile Date */}
                        <div className="sm:hidden flex items-center gap-2 text-sm font-bold text-gray-400">
                            <Calendar size={16} className="text-neon-cyan" />
                            {exp.period}
                        </div>

                        {/* Achievement Badge */}
                        <div className="flex mt-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-electric-purple/10 border border-electric-purple/20 rounded-lg text-[10px] font-black uppercase tracking-widest text-electric-purple">
                                <Star size={12} fill="currentColor" />
                                Key Achievements
                            </div>
                        </div>

                        {/* Bullets */}
                        <ul className="mt-4 space-y-4">
                            {exp.bullets.map((bullet, i) => (
                                <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex items-start gap-3 text-gray-400 leading-relaxed font-medium"
                                >
                                    <CheckCircle2 size={18} className="text-neon-cyan/60 mt-1 flex-shrink-0" />
                                    <span>{bullet}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-cyan/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
            </motion.div>

            {/* Empty Side for alternating layout */}
            <div className="hidden md:block w-[45%]" />
        </div>
    );
};

const Experience = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" ref={sectionRef} className="py-32 relative overflow-hidden bg-deep-space">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-transparent via-cosmic-purple/5 to-transparent" />
            
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-electric-purple text-sm font-black uppercase tracking-[0.4em] mb-4 block"
                    >
                        Journey
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-black mb-6">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                        My professional journey and impact in building scalable software and AI systems.
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-neon-cyan via-white to-electric-purple mx-auto rounded-full mt-10" />
                </motion.div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Animated Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full" />
                    <motion.div 
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan via-electric-purple to-neon-cyan rounded-full shadow-[0_0_15px_#00f3ff] z-10"
                    />

                    <div className="relative z-20 pt-10">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={exp.id} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
