import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Alliance Bank UI',
        category: 'Frontend Development',
        description: 'A modern, secure, and responsive banking user interface built with React.js. Features include real-time transaction updates, dashboard analytics, and a seamless user experience.',
        tech: ['React.js', 'Tailwind CSS', 'Chart.js'],
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        links: { demo: '#', github: '#' }
    },
    {
        id: 2,
        title: 'VKS Project API',
        category: 'Backend Development',
        description: 'A robust backend system for VKS Project using Node.js and GraphQL. Handles complex data queries, authentication, and integrates with a PostgreSQL database for scalable performance.',
        tech: ['Node.js', 'GraphQL', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        links: { demo: '#', github: '#' }
    },
    {
        id: 3,
        title: 'TaskMaster Pro',
        category: 'Productivity App',
        description: 'A feature-rich task management application with drag-and-drop functionality, dark mode, and team collaboration features. Built to demonstrate complex state management.',
        tech: ['React', 'Redux', 'Firebase'],
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        links: { demo: '#', github: '#' }
    },
    {
        id: 4,
        title: 'E-Commerce Analytics',
        category: 'Data Dashboard',
        description: 'An analytics dashboard for e-commerce platforms, visualizing sales data, user demographics, and inventory levels using interactive charts.',
        tech: ['Next.js', 'D3.js', 'Supabase'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        links: { demo: '#', github: '#' }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Featured <span className="text-electric-purple">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A showcase of my technical projects and creative solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass rounded-xl overflow-hidden group hover:border-neon-cyan/50 transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-neon-cyan border border-neon-cyan/30">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.links.github} className="flex items-center gap-2 text-sm font-medium text-white hover:text-electric-purple transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.links.demo} className="flex items-center gap-2 text-sm font-medium text-white hover:text-neon-cyan transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
