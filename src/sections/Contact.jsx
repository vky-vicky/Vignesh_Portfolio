import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Rocket, Send } from 'lucide-react';
import StarsBackground from '../components/StarsBackground';

const ContactItem = ({ icon: Icon, label, value, link, color }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noreferrer"
        whileHover={{ x: 10, scale: 1.02 }}
        className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group"
    >
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${color} text-white shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
            <Icon size={28} />
        </div>
        <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">{label}</h4>
            <p className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">{value}</p>
        </div>
    </motion.a>
);

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen py-32 relative overflow-hidden flex items-center justify-center">
            {/* The Dynamic Cosmos Background */}
            <StarsBackground />
            
            <div className="container mx-auto px-6 relative z-10 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="w-full max-w-2xl"
                >
                    {/* Centered Floating Card */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="glass-premium p-10 md:p-16 rounded-[50px] relative overflow-hidden text-center shadow-glow border-t border-l border-white/10"
                    >
                        {/* Title Section */}
                        <div className="mb-12">
                            <motion.span 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="inline-block px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-6"
                            >
                                Get In Touch
                            </motion.span>
                            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                Let's Connect in the <br />
                                <span className="text-gradient">Digital Cosmos</span>
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg mx-auto">
                                Open to opportunities, collaborations, and innovative ideas. Let's build something extraordinary together.
                            </p>
                        </div>

                        {/* Contact List */}
                        <div className="space-y-4 mb-12 text-left">
                            <ContactItem 
                                icon={Mail} 
                                label="Email" 
                                value="vickypvm10@gmail.com" 
                                link="mailto:vickypvm10@gmail.com"
                                color="from-cyan-500 to-blue-500"
                            />
                            <ContactItem 
                                icon={Linkedin} 
                                label="LinkedIn" 
                                value="vignesh-m-7107aa2b3" 
                                link="https://linkedin.com/in/vignesh-m-7107aa2b3"
                                color="from-blue-600 to-indigo-600"
                            />
                            <ContactItem 
                                icon={Github} 
                                label="GitHub" 
                                value="vignesh-ondrutech" 
                                link="https://github.com/vignesh-ondrutech"
                                color="from-gray-700 to-gray-900"
                            />
                        </div>

                        {/* CTA Button */}
                        <motion.a
                            href="mailto:vickypvm10@gmail.com"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,243,255,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-10 py-5 bg-neon-cyan text-black font-black rounded-2xl hover:bg-white transition-all duration-300 group shadow-lg"
                        >
                            LET'S TALK <Rocket size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>

                        {/* Background Accents */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-[100px] -z-10" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-purple/5 rounded-full blur-[100px] -z-10" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
