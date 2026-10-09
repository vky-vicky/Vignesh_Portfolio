import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const CosmicCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [cursorMode, setCursorMode] = useState('default'); // 'default' | 'button' | 'project'

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Detect element hover types
    const onPointerOver = (e) => {
      const target = e.target;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"], .project-card, article');
      if (projectEl) {
        setCursorMode('project');
        return;
      }

      const interactive = target.closest('a, button, [role="button"], input, textarea, .interactive-node');
      if (interactive) {
        setCursorMode('button');
        return;
      }

      setCursorMode('default');
    };

    const onPointerOut = () => {
      setCursorMode('default');
    };

    document.addEventListener('pointerover', onPointerOver, { passive: true });
    document.addEventListener('pointerout', onPointerOut, { passive: true });

    // Smooth ring follow
    let animId;
    const render = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('pointerout', onPointerOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator — thin celestial purple line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-500 via-purple-400 to-cyan-400 origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* Trailing Outer Ring / Indicator */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-color,border-radius] duration-200 ease-out"
        style={{
          width: cursorMode === 'project' ? '46px' : cursorMode === 'button' ? '40px' : '26px',
          height: cursorMode === 'project' ? '46px' : cursorMode === 'button' ? '40px' : '26px',
          marginLeft: cursorMode === 'project' ? '-23px' : cursorMode === 'button' ? '-20px' : '-13px',
          marginTop: cursorMode === 'project' ? '-23px' : cursorMode === 'button' ? '-20px' : '-13px',
          borderRadius: cursorMode === 'project' ? '9999px' : '9999px',
          border: cursorMode === 'project'
            ? '1.5px solid rgba(168, 85, 247, 0.7)'
            : cursorMode === 'button'
            ? '1px solid rgba(139, 92, 246, 0.45)'
            : '1px solid rgba(168, 85, 247, 0.22)',
          backgroundColor: cursorMode === 'project'
            ? 'rgba(168, 85, 247, 0.12)'
            : cursorMode === 'button'
            ? 'rgba(139, 92, 246, 0.08)'
            : 'transparent',
          backdropFilter: cursorMode === 'project' ? 'blur(4px)' : 'none',
        }}
      >
        {cursorMode === 'project' && (
          <span className="text-[12px] text-purple-300 font-mono select-none pointer-events-none leading-none">
            ↗
          </span>
        )}
      </div>

      {/* Tiny Sharp Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block w-1.5 h-1.5 rounded-full bg-violet-300 -ml-[3px] -mt-[3px] shadow-[0_0_8px_rgba(168,85,247,0.8)]"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CosmicCursor;
