import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Zap, Rocket, Cpu, Globe } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, delay, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="glass-premium p-6 rounded-3xl flex flex-col items-center justify-center text-center relative group overflow-hidden"
    >
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
            <Icon size={28} className="text-white" />
        </div>
        <h3 className="text-4xl font-black text-white mb-2 tracking-tighter">{value}</h3>
        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">{label}</p>
        
        {/* Glow Effect */}
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
    </motion.div>
);

const About = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="py-32 relative overflow-hidden bg-deep-space">
            {/* Background Moving Gradients */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[120px] animate-bg-move" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-electric-purple/10 rounded-full blur-[120px] animate-bg-move" style={{ animationDelay: '5s' }} />
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-20">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-neon-cyan text-sm font-black uppercase tracking-[0.3em] mb-4 block"
                        >
                            Discovery
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl font-black mb-6">
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-neon-cyan to-electric-purple mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* Main Content Card */}
                        <motion.div 
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="lg:col-span-12 glass-premium p-10 md:p-16 rounded-[40px] relative overflow-hidden shadow-glow border-t border-l border-white/10"
                        >
                            <motion.div variants={item} className="relative z-10">
                                <p className="text-xl md:text-3xl font-medium text-gray-200 leading-relaxed mb-8">
                                    I am a <span className="text-white font-black italic">Results-driven Full Stack Developer & AI Engineer</span> with hands-on production experience building and deploying end-to-end web and AI-powered applications.
                                </p>
                                
                                <p className="text-lg md:text-2xl text-gray-400 leading-relaxed mb-12">
                                    Proficient in <span className="text-gradient font-bold uppercase">Node.js, React.js, GraphQL, and PostgreSQL</span>, I specialize in architecting scalable systems and integrating advanced AI capabilities like <span className="text-white border-b-2 border-electric-purple/30 pb-1">RAG pipelines and LLM workflows</span>. My expertise extends to deploying high-performance applications on <span className="text-neon-cyan font-bold italic">AWS</span> and managing complex OCR pipelines.
                                </p>

                                <div className="flex flex-wrap gap-4 mt-8">
                                    {['Futuristic UI', 'AI Orchestration', 'Cloud Scale', 'Modern UX'].map((tech, i) => (
                                        <span key={i} className="px-5 py-2 rounded-full bg-white/5 border border-white/5 text-gray-500 text-sm font-bold tracking-tighter uppercase group-hover:border-neon-cyan transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-[80px] -z-10" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-purple/5 rounded-full blur-[80px] -z-10" />
                        </motion.div>

                        {/* Statistic Grid */}
                        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                            <StatCard 
                                icon={Briefcase} 
                                value="01+" 
                                label="Years Experience" 
                                delay={0.2} 
                                color="from-cyan-500/20 to-blue-500/20"
                            />
                            <StatCard 
                                icon={Rocket} 
                                value="05+" 
                                label="Projects Completed" 
                                delay={0.4} 
                                color="from-purple-500/20 to-pink-500/20"
                            />
                            <StatCard 
                                icon={Cpu} 
                                value="15+" 
                                label="Tech Stack Used" 
                                delay={0.6} 
                                color="from-emerald-500/20 to-teal-500/20"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
