import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import vigneshImg from '../assets/vignesh.jpg';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';

const Hero = () => {
    const roles = [
        "Front End Developer",
        "React.js Developer",
        "JavaScript Developer",
        "Web Developer",
        "Backend Developer",
        "Node.js Developer"
    ];

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Cosmic Background Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cosmic-purple/20 rounded-full blur-[128px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left py-10 lg:py-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-bold mb-8 uppercase tracking-widest">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                        </span>
                        AVAILABLE FOR NEW OPPORTUNITIES
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-8 leading-[1.1] tracking-tight">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-star-dust to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">VIGNESH M</span>
                    </h1>

                    <div className="mb-8">
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-2xl md:text-4xl font-bold text-neon-cyan"
                        >
                            Full Stack Developer | AI Engineer
                        </motion.p>
                    </div>

                    <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed font-medium">
                        Crafting high-performance web applications, scalable cloud architectures, and intelligent AI systems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 mb-12">
                        <Link to="projects" smooth={true} duration={500}>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,243,255,0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-10 py-5 bg-neon-cyan text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                            >
                                EXPLORE WORK <ArrowRight size={22} className="stroke-[3]" />
                            </motion.button>
                        </Link>
                        <a href="/resume.pdf" target="_blank" rel="noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-10 py-5 border-2 border-white/10 bg-white/5 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3"
                            >
                                VIEW RESUME
                            </motion.button>
                        </a>
                    </div>

                    <div className="flex gap-8">
                        <a href="https://github.com/vignesh-ondrutech" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-all transform hover:scale-110">
                            <Github size={28} />
                        </a>
                        <a href="https://linkedin.com/in/vignesh-m-7107aa2b3" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-all transform hover:scale-110">
                            <Linkedin size={28} />
                        </a>
                        <a href="mailto:vickypvm10@gmail.com" className="text-gray-500 hover:text-white transition-all transform hover:scale-110">
                            <Mail size={28} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Content - Hero Image & Floating Tags */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center lg:justify-end items-center"
                >
                    <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                        {/* Animated Border/Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20" />
                        
                        {/* Profile Image Container */}
                        <div className="absolute inset-4 rounded-full border-4 border-slate-900 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-slate-800">
                            <img 
                                src={vigneshImg} 
                                alt="Vignesh M" 
                                className="w-full h-full object-cover object-top grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                        {/* Floating Skill Tags - Matching Reference Style */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-10 -left-10 bg-[#0a0a0a] border border-white/10 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-2xl z-20"
                        >
                            <div className="text-neon-cyan text-xl"><FaReact /></div>
                            <span className="text-white font-bold tracking-tight">React.js</span>
                        </motion.div>

                        <motion.div 
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute top-1/2 -right-10 translate-y-[-50%] bg-[#0a0a0a] border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-3 shadow-2xl z-20"
                        >
                            <div className="text-blue-400 text-2xl"><SiPostgresql /></div>
                            <span className="text-white font-bold tracking-tight whitespace-nowrap">PostgreSQL</span>
                        </motion.div>

                        <motion.div 
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                            className="absolute bottom-10 -left-6 bg-[#0a0a0a] border border-white/10 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl z-20"
                        >
                            <div className="text-green-500 text-xl"><FaNodeJs /></div>
                            <span className="text-white font-bold tracking-tight">Node.js</span>
                        </motion.div>
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
