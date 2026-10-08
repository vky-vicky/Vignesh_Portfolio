import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, CheckCircle2, Star } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'TNPSC AI Learning App',
        description: 'AI-powered learning platform using RAG and LLM for smart competitive exam preparation.',
        featured: true,
        highlights: [
            <>Built RAG pipeline with <span className="metric-highlight">FAISS/Chroma</span></>,
            <>Processed <span className="metric-highlight">10,000+ exam questions</span></>,
            <>Achieved <span className="metric-highlight">sub-200ms</span> response time</>,
            <>Reduced manual effort by <span className="metric-highlight">60%</span></>
        ],
        tech: ['Python', 'FastAPI', 'Claude AI', 'AWS', 'Vector DB'],
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
        links: { demo: '#', github: 'https://github.com/vignesh-ondrutech/ondru-tnpsc-api' },
        color: 'from-cyan-500/20 to-blue-500/20'
    },
    {
        id: 2,
        title: 'Jewellery Financial Backend',
        description: 'Scalable financial system managing gold savings and complex珠宝 transactions.',
        featured: true,
        highlights: [
            <>Designed <span className="metric-highlight">GraphQL APIs</span> for high load</>,
            <>Implemented <span className="metric-highlight">JWT & RBAC</span> security</>,
            <>Improved query performance by <span className="metric-highlight">35%</span></>,
            <>Managed complex financial ledgers</>
        ],
        tech: ['Node.js', 'GraphQL', 'PostgreSQL', 'JWT'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        links: { demo: '#', github: 'https://github.com/Ondrutech-Technologies/OneProJewel' },
        color: 'from-purple-500/20 to-indigo-500/20'
    },
    {
        id: 3,
        title: 'Banking Web Application',
        description: 'Modular React-based banking interface with reusable architectural components.',
        featured: false,
        highlights: [
            <>Built <span className="metric-highlight">reusable component system</span></>,
            <><span className="metric-highlight">40% faster</span> development cycles</>,
            <>Integrated real-time <span className="metric-highlight">REST APIs</span></>,
            <>Optimized UI performance metrics</>
        ],
        tech: ['React.js', 'Tailwind CSS', 'REST API', 'Framer Motion'],
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
        links: { demo: '#', github: 'https://github.com/Ondrutech-Technologies/v3template' },
        color: 'from-emerald-500/20 to-teal-500/20'
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-premium rounded-[40px] overflow-hidden group relative flex flex-col border-t border-l border-white/10"
        >
            {/* Project Image/Preview */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent z-10" />
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Featured Badge */}
                {project.featured && (
                    <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-neon-cyan/20 backdrop-blur-md border border-neon-cyan/30 rounded-full">
                        <Star size={14} className="text-neon-cyan" fill="currentColor" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-cyan">Featured</span>
                    </div>
                )}
            </div>

            {/* Content Container */}
            <div className="p-8 md:p-10 flex flex-col flex-grow relative z-20">
                <div className={`absolute -top-20 right-10 w-32 h-32 bg-gradient-to-br ${project.color} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <h3 className="text-3xl font-black mb-4 leading-tight">
                    <span className="text-gradient drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        {project.title}
                    </span>
                </h3>

                <p className="text-gray-400 text-lg font-medium leading-relaxed mb-8">
                    {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-10">
                    {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-neon-cyan/50 mt-1 flex-shrink-0" />
                            <p className="text-gray-300 font-medium text-sm leading-snug">{highlight}</p>
                        </div>
                    ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                    {project.tech.map((tag, i) => (
                        <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-gray-500 text-[10px] font-black uppercase tracking-widest hover:border-neon-cyan/30 hover:text-white transition-all">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                    <a 
                        href={project.links.demo} 
                        className="flex items-center justify-center gap-2 py-4 bg-neon-cyan/10 border border-neon-cyan/20 rounded-2xl text-neon-cyan font-bold hover:bg-neon-cyan hover:text-black transition-all duration-300"
                    >
                        <ExternalLink size={18} />
                        <span className="text-sm">Live Demo</span>
                    </a>
                    <a 
                        href={project.links.github} 
                        className="flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white/10 transition-all duration-300"
                    >
                        <Github size={18} />
                        <span className="text-sm">GitHub</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden bg-deep-space">
            {/* Cosmic Flourishes */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-electric-purple/5 rounded-full blur-[140px] -z-10" />
            <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[140px] -z-10" />

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
                        Portfolio
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-black mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                        A showcase of real-world applications and AI-powered systems I have built.
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-neon-cyan via-white to-electric-purple mx-auto rounded-full mt-10" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
