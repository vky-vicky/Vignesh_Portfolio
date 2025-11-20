import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiGraphql, SiPostgresql, SiTailwindcss, SiTypescript, SiMongodb } from 'react-icons/si';

const skills = [
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        My <span className="text-electric-purple">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Technologies I use to build scalable and performant applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            whileHover={{ y: -5, borderColor: skill.color }}
                            className="glass p-6 rounded-xl flex flex-col items-center justify-center gap-4 border border-white/5 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all group"
                            style={{ '--hover-color': skill.color }}
                        >
                            <div className="text-4xl text-gray-400 group-hover:text-[var(--hover-color)] transition-colors duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="font-medium text-gray-300 group-hover:text-white transition-colors">
                                {skill.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
