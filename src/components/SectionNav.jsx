import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

const SectionNav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3.5 py-4 px-2 rounded-full glass-panel border border-white/5">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="group relative flex items-center justify-center p-1"
            aria-label={`Scroll to ${section.label}`}
          >
            {/* Tooltip */}
            <span className="absolute right-7 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider text-white bg-black/90 border border-white/10 uppercase opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-xl">
              {section.label}
            </span>

            {/* Dot */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2.5 h-6 bg-gradient-to-b from-purple-400 to-cyan-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/60'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default SectionNav;
