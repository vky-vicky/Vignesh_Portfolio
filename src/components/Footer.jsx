import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon-cyan transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/vignesh-m-7107aa2b3" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-electric-purple transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:vickypvm10@gmail.com" className="text-gray-400 hover:text-neon-cyan transition-colors">
                        <Mail size={24} />
                    </a>
                </div>
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Vignesh M. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
