import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px] -z-10 animate-pulse-glow" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-purple/20 rounded-full blur-[128px] -z-10 animate-pulse-glow" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-neon-cyan font-medium tracking-widest mb-4 uppercase text-sm md:text-base">
                        Welcome to my digital space
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Vignesh</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-purple">
                            Full Stack Developer
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Transforming ideas into scalable digital products. I build frontend magic and backend logic with a focus on performance and user experience.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link to="projects" smooth={true} duration={500}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors"
                            >
                                View My Work <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                            >
                                Contact Me
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-neon-cyan rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
