import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiRedux, SiTailwindcss,
  SiNodedotjs, SiExpress, SiGraphql, SiPrisma, SiPostgresql, SiAmazonwebservices,
  SiDocker, SiGit, SiGithub, SiPostman, SiHtml5, SiCss3,
} from 'react-icons/si';

const techs = [
  { id: 0,  name: 'React',          icon: SiReact,            color: '#38bdf8', category: 'Frontend',   desc: 'Component-based UI' },
  { id: 1,  name: 'Next.js',        icon: SiNextdotjs,        color: '#f8fafc', category: 'Frontend',   desc: 'SSR & Full-Stack' },
  { id: 2,  name: 'JavaScript',     icon: SiJavascript,       color: '#fde047', category: 'Language',   desc: 'Core Language' },
  { id: 3,  name: 'TypeScript',     icon: SiTypescript,       color: '#60a5fa', category: 'Language',   desc: 'Typed JavaScript' },
  { id: 4,  name: 'Redux',          icon: SiRedux,            color: '#a855f7', category: 'Frontend',   desc: 'State Management' },
  { id: 5,  name: 'Tailwind CSS',   icon: SiTailwindcss,      color: '#38bdf8', category: 'Styling',    desc: 'Utility-first CSS' },
  { id: 6,  name: 'Node.js',        icon: SiNodedotjs,        color: '#4ade80', category: 'Backend',    desc: 'Server Runtime' },
  { id: 7,  name: 'Express',        icon: SiExpress,          color: '#d1d5db', category: 'Backend',    desc: 'REST Framework' },
  { id: 8,  name: 'GraphQL',        icon: SiGraphql,          color: '#f43f5e', category: 'Backend',    desc: 'Query Language' },
  { id: 9,  name: 'Prisma',         icon: SiPrisma,           color: '#818cf8', category: 'Database',   desc: 'ORM Layer' },
  { id: 10, name: 'PostgreSQL',     icon: SiPostgresql,       color: '#60a5fa', category: 'Database',   desc: 'Relational DB' },
  { id: 11, name: 'AWS',            icon: SiAmazonwebservices,color: '#fb923c', category: 'Cloud',      desc: 'Cloud Platform' },
  { id: 12, name: 'Docker',         icon: SiDocker,           color: '#38bdf8', category: 'DevOps',     desc: 'Containerization' },
  { id: 13, name: 'Git',            icon: SiGit,              color: '#f97316', category: 'DevOps',     desc: 'Version Control' },
  { id: 14, name: 'GitHub',         icon: SiGithub,           color: '#e2e8f0', category: 'DevOps',     desc: 'Code Hosting' },
  { id: 15, name: 'Postman',        icon: SiPostman,          color: '#fb923c', category: 'Tools',      desc: 'API Testing' },
  { id: 16, name: 'HTML5',          icon: SiHtml5,            color: '#e34f26', category: 'Frontend',   desc: 'Web Markup' },
  { id: 17, name: 'CSS3',           icon: SiCss3,             color: '#38bdf8', category: 'Styling',    desc: 'Web Styling' },
];

// Deterministic initial positions spread across the whole section
const generatePositions = (count) => {
  const positions = [];
  // Use a grid-spread approach so icons don't cluster
  for (let i = 0; i < count; i++) {
    const cols = 6;
    const rows = Math.ceil(count / cols);
    const col = i % cols;
    const row = Math.floor(i / cols);
    positions.push({
      x: (col / cols) * 100 + (Math.random() - 0.5) * 10,  // 0-100% with noise
      y: (row / rows) * 100 + (Math.random() - 0.5) * 10,
      speedX: (Math.random() - 0.5) * 0.06,
      speedY: (Math.random() - 0.5) * 0.06,
      scale: Math.random() * 0.3 + 0.85,
    });
  }
  return positions;
};

const Skills = () => {
  const [positions, setPositions] = useState(() => generatePositions(techs.length));
  const [hovered, setHovered] = useState(null);
  const rafRef = useRef(null);
  const posRef = useRef(positions);

  // Animation loop using a ref to avoid stale closure
  useEffect(() => {
    posRef.current = positions;
  }, [positions]);

  useEffect(() => {
    const animate = () => {
      posRef.current = posRef.current.map(p => {
        let nx = p.x + p.speedX;
        let ny = p.y + p.speedY;
        let sx = p.speedX;
        let sy = p.speedY;

        if (nx < -8 || nx > 105) sx *= -1;
        if (ny < -8 || ny > 105) sy *= -1;

        return { ...p, x: nx, y: ny, speedX: sx, speedY: sy };
      });
      setPositions([...posRef.current]);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section id="skills" className="py-32 relative overflow-hidden min-h-[85vh] flex flex-col">
      <div className="section-line" />

      {/* Section Header — stays on top */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 pt-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] text-[var(--accent)] uppercase tracking-[0.25em] mb-4 flex items-center gap-2"
        >
          <span>✦</span> Technologies
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9]"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          TECH<br />
          <span className="text-[var(--accent)]">UNIVERSE</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-[0.2em] mt-6"
        >
          Hover or touch any icon to explore
        </motion.p>
      </div>

      {/* Floating Icons Arena */}
      <div className="relative flex-1 min-h-[600px] mt-8">
        {/* Subtle dotted background just for this section */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Ambient glow in center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[100px]" />
        </div>

        {techs.map((tech, i) => {
          const pos = positions[i];
          if (!pos) return null;
          const Icon = tech.icon;
          const isActive = hovered === tech.id;

          return (
            <motion.div
              key={tech.id}
              className="absolute cursor-pointer"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: `translate(-50%, -50%) scale(${pos.scale})`,
                zIndex: isActive ? 30 : 10,
              }}
              onMouseEnter={() => setHovered(tech.id)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(tech.id)}
              onTouchEnd={() => setTimeout(() => setHovered(null), 1200)}
              animate={{
                scale: isActive ? pos.scale * 1.5 : pos.scale,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Icon container */}
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`relative flex items-center justify-center rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'w-20 h-20 bg-black/70 backdrop-blur-md shadow-[0_0_35px_rgba(255,255,255,0.15)]'
                      : 'w-12 h-12 bg-black/40 backdrop-blur-sm'
                  }`}
                  style={{
                    borderColor: isActive ? tech.color + '80' : 'rgba(255,255,255,0.07)',
                    boxShadow: isActive ? `0 0 30px ${tech.color}40, 0 0 60px ${tech.color}20` : 'none',
                  }}
                >
                  <Icon
                    size={isActive ? 40 : 24}
                    color={isActive ? tech.color : tech.color + 'aa'}
                    className="transition-all duration-300"
                  />
                </div>

                {/* Name label — always visible, bigger on hover */}
                <div className="flex flex-col items-center">
                  <span
                    className="font-mono tracking-widest text-center whitespace-nowrap transition-all duration-300"
                    style={{
                      fontSize: isActive ? '11px' : '9px',
                      color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {tech.name}
                  </span>

                  {/* Extra info on hover */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: -4, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="mt-1 flex flex-col items-center gap-0.5"
                      >
                        <span
                          className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border"
                          style={{
                            color: tech.color,
                            borderColor: tech.color + '40',
                            backgroundColor: tech.color + '15',
                          }}
                        >
                          {tech.category}
                        </span>
                        <span className="text-[10px] text-white/60 font-light mt-0.5">
                          {tech.desc}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
