import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database, Cpu, Wrench, Lightbulb } from 'lucide-react';

const skillCategories = [
    {
        title: 'Frontend',
        icon: Monitor,
        skills: ['React.js', 'Next.js', 'Redux Toolkit', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
        color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
        title: 'Backend',
        icon: Server,
        skills: ['Node.js', 'Express.js', 'GraphQL', 'Apollo Server', 'REST APIs'],
        color: 'from-green-500/20 to-emerald-500/20'
    },
    {
        title: 'Databases',
        icon: Database,
        skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM'],
        color: 'from-blue-600/20 to-indigo-600/20'
    },
    {
        title: 'AI / Modern Tech',
        icon: Cpu,
        skills: ['LLM Integration', 'RAG (Retrieval Augmented Generation)', 'Vector Databases (FAISS / Chroma)', 'LangChain', 'Prompt Engineering', 'OCR Pipelines'],
        color: 'from-purple-500/20 to-pink-500/20'
    },
    {
        title: 'Tools',
        icon: Wrench,
        skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Apollo Studio', 'Figma'],
        color: 'from-orange-500/20 to-yellow-500/20'
    },
    {
        title: 'Concepts',
        icon: Lightbulb,
        skills: ['API Design', 'Component Architecture', 'Responsive Design', 'State Management', 'Authentication (JWT)', 'RBAC (Role-Based Access Control)'],
        color: 'from-amber-500/20 to-orange-500/20'
    }
];

const SkillCard = ({ category, index }) => {
    const Icon = category.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-premium p-8 rounded-[32px] group relative overflow-hidden h-full flex flex-col cursor-default"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/30 transition-all duration-500">
                    <Icon size={24} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.1) + (i * 0.05) }}
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-400 text-sm font-semibold hover:border-white/20 hover:text-white transition-all duration-300"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>

            {/* Subtle glow effect on card hover */}
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-32 relative overflow-hidden bg-deep-space">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-purple/5 rounded-full blur-[120px] -z-10" />

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
                        className="text-neon-cyan text-sm font-black uppercase tracking-[0.4em] mb-4 block"
                    >
                        Expertise
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-black mb-6">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                        A comprehensive overview of my expertise in full stack development and AI engineering.
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-neon-cyan via-white to-electric-purple mx-auto rounded-full mt-10" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
