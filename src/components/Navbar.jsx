import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowDownToLine } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sectionIds = links.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#08070b]/80 backdrop-blur-xl border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors tracking-tight"
          >
            <span className="text-[var(--accent)]">&lt;</span>
            {' '}vignesh.dev{' '}
            <span className="text-[var(--accent)]">/&gt;</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`nav-link font-mono text-xs uppercase tracking-[0.15em] ${
                  activeSection === href.replace('#', '')
                    ? 'text-[var(--text-primary)] active'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                } transition-colors`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Resume + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              Resume
              <ArrowDownToLine size={13} />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#08070b]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl font-light tracking-tight text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {label}
              </motion.a>
            ))}

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 btn-outline inline-flex items-center gap-2"
            >
              Resume <ArrowDownToLine size={14} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
