import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const HeroCosmicIdentity = () => {
  const containerRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -(y / (rect.height / 2)) * 12,
      y: (x / (rect.width / 2)) * 12,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto my-8 flex items-center justify-center select-none"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        className="relative w-full h-full flex items-center justify-center transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Soft Cosmic Core Glow */}
        <div className="absolute w-44 h-44 rounded-full bg-violet-600/[0.12] blur-3xl pointer-events-none" />

        {/* Outer Orbital Ring */}
        <div
          className="absolute inset-2 rounded-full border border-violet-500/20 animate-[spin_40s_linear_infinite]"
          style={{
            transform: 'rotateX(68deg) rotateY(15deg)',
            borderStyle: 'dashed',
            borderDasharray: '4 8',
          }}
        >
          {/* Outer Planet Node */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8]" />
        </div>

        {/* Inner Orbital Ring */}
        <div
          className="absolute inset-10 rounded-full border border-purple-400/25 animate-[spin_24s_linear_infinite_reverse]"
          style={{
            transform: 'rotateX(62deg) rotateY(-20deg)',
          }}
        >
          {/* Inner Planet Node */}
          <div className="absolute bottom-0 right-1/4 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24]" />
          {/* Second small satellite */}
          <div className="absolute top-1/4 left-0 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_#a855f7]" />
        </div>

        {/* Central Core Sphere: Developer Identity < V > */}
        <div
          className="relative z-10 w-28 h-28 rounded-full border border-white/10 bg-gradient-to-b from-[#1c162e] to-[#0c0915] shadow-[0_0_40px_rgba(139,92,246,0.3)] flex flex-col items-center justify-center group"
          style={{
            backdropFilter: 'blur(16px)',
            transform: 'translateZ(30px)',
          }}
        >
          {/* Ambient inner pulse */}
          <div className="absolute inset-0 rounded-full bg-violet-500/10 animate-pulse pointer-events-none" />

          {/* Central Logo Symbol */}
          <span
            className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:scale-105 transition-transform"
            style={{ textShadow: '0 0 20px rgba(168, 85, 247, 0.6)' }}
          >
            &lt; V /&gt;
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-violet-300/70 mt-1">
            DEV CORE
          </span>
        </div>

        {/* Floating Orbital Particle Accents */}
        <div className="absolute w-1.5 h-1.5 rounded-full bg-white/60 top-6 right-10 animate-ping opacity-30" />
      </motion.div>
    </div>
  );
};

export default HeroCosmicIdentity;
