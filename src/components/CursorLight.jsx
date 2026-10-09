import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const CursorLight = () => {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const mouse = { x: w / 2, y: h / 2, tx: w / 2, ty: h / 2 };

    const onMouseMove = (e) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    // Hover expand effect for interactive elements
    const onPointerOver = (e) => {
      const target = e.target.closest('a, button, [role="button"]');
      if (target && cursorRef.current) {
        cursorRef.current.style.width = '48px';
        cursorRef.current.style.height = '48px';
        cursorRef.current.style.marginLeft = '-24px';
        cursorRef.current.style.marginTop = '-24px';
        cursorRef.current.style.borderColor = 'rgba(139, 92, 246, 0.5)';
      }
    };

    const onPointerOut = (e) => {
      const target = e.target.closest('a, button, [role="button"]');
      if (target && cursorRef.current) {
        cursorRef.current.style.width = '32px';
        cursorRef.current.style.height = '32px';
        cursorRef.current.style.marginLeft = '-16px';
        cursorRef.current.style.marginTop = '-16px';
        cursorRef.current.style.borderColor = 'rgba(139, 92, 246, 0.3)';
      }
    };

    document.addEventListener('pointerover', onPointerOver);
    document.addEventListener('pointerout', onPointerOut);

    const render = () => {
      mouse.x += (mouse.tx - mouse.x) * 0.12;
      mouse.y += (mouse.ty - mouse.y) * 0.12;

      ctx.clearRect(0, 0, w, h);

      // Soft radial light that follows cursor — very subtle
      const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 350);
      grad.addColorStop(0, 'rgba(139, 92, 246, 0.06)');
      grad.addColorStop(0.5, 'rgba(139, 92, 246, 0.02)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('pointerout', onPointerOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Scroll progress bar — thin, minimal */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none">
        <motion.div
          className="h-full bg-[#8b5cf6] origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* Ambient glow — extremely subtle, fixed */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-violet-900/[0.07] rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/[0.05] rounded-full blur-[200px]" />
      </div>

      {/* Cursor-follow canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
      />

      {/* Custom cursor ring — small, elegant */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border border-violet-500/30 pointer-events-none z-50 hidden md:block"
        style={{
          willChange: 'transform',
          transition: 'width 0.3s ease, height 0.3s ease, margin 0.3s ease, border-color 0.3s ease',
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-[3px] -mt-[3px] w-1.5 h-1.5 rounded-full bg-violet-400 pointer-events-none z-50 hidden md:block"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CursorLight;
