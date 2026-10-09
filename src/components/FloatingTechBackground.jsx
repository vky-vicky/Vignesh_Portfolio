import React, { useEffect, useState, useRef } from 'react';
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiRedux, SiTailwindcss,
  SiNodedotjs, SiExpress, SiGraphql, SiPrisma, SiPostgresql, SiAmazonwebservices,
  SiDocker, SiGit, SiGithub, SiPostman, SiHtml5
} from 'react-icons/si';

const techs = [
  { icon: SiReact, color: '#38bdf8', name: 'React' },
  { icon: SiNextdotjs, color: '#f8fafc', name: 'Next.js' },
  { icon: SiJavascript, color: '#fde047', name: 'JavaScript' },
  { icon: SiTypescript, color: '#60a5fa', name: 'TypeScript' },
  { icon: SiRedux, color: '#a855f7', name: 'Redux' },
  { icon: SiTailwindcss, color: '#38bdf8', name: 'Tailwind CSS' },
  { icon: SiNodedotjs, color: '#4ade80', name: 'Node.js' },
  { icon: SiExpress, color: '#f8fafc', name: 'Express' },
  { icon: SiGraphql, color: '#f43f5e', name: 'GraphQL' },
  { icon: SiPrisma, color: '#818cf8', name: 'Prisma' },
  { icon: SiPostgresql, color: '#60a5fa', name: 'PostgreSQL' },
  { icon: SiAmazonwebservices, color: '#fb923c', name: 'AWS' },
  { icon: SiDocker, color: '#38bdf8', name: 'Docker' },
  { icon: SiGit, color: '#f43f5e', name: 'Git' },
  { icon: SiGithub, color: '#3b82f6', name: 'GitHub Actions' },
  { icon: SiPostman, color: '#fb923c', name: 'Postman' },
  { icon: SiHtml5, color: '#e34f26', name: 'HTML' }
];

const FloatingTechBackground = () => {
  const [nodes, setNodes] = useState([]);
  const requestRef = useRef();
  
  useEffect(() => {
    // Generate random starting positions
    const newNodes = techs.map((t, i) => ({
      ...t,
      id: i,
      x: Math.random() * 100, // vw
      y: Math.random() * 100, // vh
      speedX: (Math.random() - 0.5) * 0.08,
      speedY: (Math.random() - 0.5) * 0.08,
      scale: Math.random() * 0.4 + 0.8,
    }));
    setNodes(newNodes);
  }, []);

  useEffect(() => {
    if (nodes.length === 0) return;
    
    const animate = () => {
      setNodes(prevNodes => prevNodes.map(node => {
        let nx = node.x + node.speedX;
        let ny = node.y + node.speedY;
        
        // Bounce off walls loosely (a bit out of bounds so they don't pop instantly at edges)
        let sx = node.speedX;
        let sy = node.speedY;
        if (nx < -10 || nx > 110) sx *= -1;
        if (ny < -10 || ny > 110) sy *= -1;
        
        return { ...node, x: nx, y: ny, speedX: sx, speedY: sy };
      }));
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [nodes.length]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20 bg-[#060606]">
      {/* Subtle Dotted Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.1]" 
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)',
          backgroundSize: '35px 35px'
        }}
      />
      
      {/* Soft Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

      {/* Floating Tech Icons */}
      {nodes.map(node => {
        const Icon = node.icon;
        return (
          <div
            key={node.id}
            className="absolute flex flex-col items-center justify-center transition-transform duration-0"
            style={{
              left: `${node.x}vw`,
              top: `${node.y}vh`,
              transform: `translate(-50%, -50%) scale(${node.scale})`,
            }}
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Icon size={24} color={node.color} className="opacity-90 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
            </div>
            <span className="mt-1 text-[9px] font-mono tracking-widest text-white/60 bg-black/50 px-2 py-0.5 rounded border border-white/5 whitespace-nowrap">
              {node.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingTechBackground;
