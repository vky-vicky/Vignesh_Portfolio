import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-center">
                        About <span className="text-neon-cyan">Me</span>
                    </h2>

                    <div className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-electric-purple/10 rounded-full blur-3xl -z-10" />

                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I am an aspiring <span className="text-white font-semibold">Full Stack Developer</span> with a passion for building clean UIs and scalable backend APIs.
                            My journey involves working with modern technologies like <span className="text-neon-cyan">React.js, Node.js, GraphQL, and PostgreSQL</span>.
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            Currently, I am working at <span className="text-white font-semibold">Ondru Technologies</span>, where I contribute to real-world projects like the Alliance Bank UI and VKS Project.
                            I thrive in dynamic environments and am always eager to learn new tools to solve complex problems.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                            <div className="text-center p-4 border border-white/5 rounded-xl bg-white/5">
                                <h3 className="text-3xl font-bold text-neon-cyan mb-1">01+</h3>
                                <p className="text-gray-400 text-sm">Years Experience</p>
                            </div>
                            <div className="text-center p-4 border border-white/5 rounded-xl bg-white/5">
                                <h3 className="text-3xl font-bold text-electric-purple mb-1">04+</h3>
                                <p className="text-gray-400 text-sm">Projects Completed</p>
                            </div>
                            <div className="text-center p-4 border border-white/5 rounded-xl bg-white/5">
                                <h3 className="text-3xl font-bold text-white mb-1">10+</h3>
                                <p className="text-gray-400 text-sm">Tech Stack Used</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
