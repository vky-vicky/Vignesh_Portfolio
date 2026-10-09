import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Github, ChevronLeft, ChevronRight, Activity, Database, Network } from 'lucide-react';

const projects = [
  {
    id: '01',
    number: '01',
    title: 'VKS JEWELS',
    subtitle: 'FINANCIAL BACKEND',
    category: 'FinTech',
    accent: '#3b82f6',
    description: 'Scalable backend system for a jewelry savings platform with customer savings, gold accumulation plans, and financial transactions.',
    tech: ['Node.js', 'GraphQL', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/Ondrutech-Technologies/OneProJewel',
    Visual: () => (
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center opacity-40 group-hover:opacity-80 transition-opacity duration-700">
        <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.3)_0%,transparent_70%)]" />
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
          <Database className="w-16 h-16 text-blue-500/50" strokeWidth={1} />
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-1 h-8 bg-blue-500/30 rounded-full" style={{ animation: `pulse ${1 + i * 0.2}s infinite` }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: '02',
    number: '02',
    title: 'ALLIANCE BANK',
    subtitle: 'TRADING APPLICATION',
    category: 'Market Platform',
    accent: '#8b5cf6',
    description: 'Responsive trading dashboard for portfolio monitoring, market data, transaction history and real-time visualization.',
    tech: ['React.js', 'Redux', 'Tailwind', 'REST APIs'],
    github: 'https://github.com/Ondrutech-Technologies/v3template',
    Visual: () => (
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center opacity-40 group-hover:opacity-80 transition-opacity duration-700">
        <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(88,28,135,0.3)_0%,transparent_70%)]" />
        <div className="relative w-full h-full flex items-center justify-center">
          <Activity className="w-24 h-24 text-purple-500/50" strokeWidth={0.5} />
          <svg className="absolute w-full h-32 opacity-30" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,100 L20,60 L40,80 L60,20 L80,50 L100,10" fill="none" stroke="#8b5cf6" strokeWidth="1" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: '03',
    number: '03',
    title: 'KARKA AI',
    subtitle: 'EXAMINATION PLATFORM',
    category: 'AI Systems',
    accent: '#06b6d4',
    description: 'AI-powered examination platform with question generation, examination management, and RAG analytics dashboards.',
    tech: ['React.js', 'Node.js', 'LLM', 'RAG'],
    github: 'https://github.com/Arun-OndruTech/ondru-assist-backend-api',
    Visual: () => (
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center opacity-40 group-hover:opacity-80 transition-opacity duration-700">
        <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(8,145,178,0.3)_0%,transparent_70%)]" />
        <div className="relative w-full h-full flex items-center justify-center">
          <Network className="w-20 h-20 text-cyan-500/50" strokeWidth={1} />
          <div className="absolute w-32 h-32 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute w-48 h-48 border border-dashed border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        </div>
      </div>
    ),
  },
];

const Projects = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag to scroll logic
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Wheel horizontal scroll logic
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        // Prevent default vertical scroll ONLY if we haven't reached ends
        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        if (
          (e.deltaY > 0 && el.scrollLeft < maxScrollLeft) ||
          (e.deltaY < 0 && el.scrollLeft > 0)
        ) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const scrollBy = (amount) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 pt-20">
        
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-24">
          
          {/* Left Column: Editorial Title */}
          <div className="xl:w-1/4 flex flex-col justify-center xl:sticky xl:top-32 h-fit z-10">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-[var(--accent)] uppercase tracking-[0.25em] mb-6 flex items-center gap-2"
            >
              <span>✦</span> Selected
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.9] mb-8"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              FEATURED<br/>
              <span className="text-[var(--accent)]">WORK</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm font-light text-[var(--text-muted)] max-w-sm leading-relaxed mb-10"
            >
              A collection of production applications, backend systems and modern full-stack experiences.
            </motion.p>

            {/* Navigation Arrows (Desktop) */}
            <div className="hidden xl:flex items-center gap-4">
              <button 
                onClick={() => scrollBy(-400)}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scrollBy(400)}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Column: Carousel */}
          <div className="xl:w-3/4 relative">
            <div 
              ref={carouselRef}
              className={`flex overflow-x-auto gap-6 sm:gap-8 pb-12 snap-x snap-mandatory scrollbar-hide select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="min-w-[85vw] sm:min-w-[500px] lg:min-w-[600px] flex-shrink-0 snap-center lg:snap-start group"
                >
                  <div className="relative h-[450px] sm:h-[500px] lg:h-[600px] rounded-3xl border border-white/[0.05] bg-[#050508] overflow-hidden transition-all duration-500 hover:-translate-y-2 group-hover:border-white/[0.15]">
                    
                    {/* Abstract Visual Top Half */}
                    <div className="absolute top-0 left-0 w-full h-[55%] border-b border-white/[0.05] bg-black/20 overflow-hidden">
                      <project.Visual />
                    </div>

                    {/* Content Bottom Half */}
                    <div className="absolute bottom-0 left-0 w-full h-[45%] p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-t from-[#020204] to-transparent">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-[10px] tracking-widest uppercase border border-white/10 px-3 py-1 rounded-full text-white/70 group-hover:border-[var(--accent)]/50 group-hover:text-[var(--accent)] transition-colors">
                            {project.category}
                          </span>
                          <span className="font-mono text-[10px] text-white/30 tracking-widest">
                            {project.number}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] font-light line-clamp-2 pr-12">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex items-end justify-between">
                        <div className="flex flex-wrap gap-2 pr-10">
                          {project.tech.slice(0, 3).map(t => (
                            <span key={t} className="font-mono text-[10px] text-[var(--text-muted)] bg-white/[0.02] px-2 py-1 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                        
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-black/50 hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all group-hover:translate-x-2 backdrop-blur-sm"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Spacer at the end of scroll */}
              <div className="min-w-[5vw] sm:min-w-[10vw] flex-shrink-0" />
            </div>

            {/* Mobile Navigation Arrows */}
            <div className="flex xl:hidden justify-center items-center gap-4 mt-6">
              <button 
                onClick={() => scrollBy(-300)}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white bg-white/5"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={() => scrollBy(300)}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white bg-white/5"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;

