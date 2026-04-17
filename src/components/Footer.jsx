import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="https://github.com/vignesh-ondrutech" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon-cyan transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/vignesh-m-7107aa2b3" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:vickypvm10@gmail.com" className="text-gray-400 hover:text-neon-cyan transition-colors">
                        <Mail size={24} />
                    </a>
                </div>
                <div className="text-center">
                    <p className="text-gray-500 text-sm mb-2">
                        © {new Date().getFullYear()} <span className="text-white font-medium">Vignesh M</span>. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs italic">
                        Architected in the <span className="text-neon-cyan/50">Digital Cosmos</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
