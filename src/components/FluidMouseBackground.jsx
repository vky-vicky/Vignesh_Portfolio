import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const FluidMouseBackground = () => {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Mouse state & tracking
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      vx: 0,
      vy: 0,
      speed: 0,
      isMoving: false,
    };

    let lastMouseX = mouse.x;
    let lastMouseY = mouse.y;
    let idleTimer = null;

    // Fluid smoke / particle trail
    const trails = [];
    const maxTrails = 45;

    // Grid dots configuration
    const dotSpacing = 36;

    const onMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;

      mouse.vx = e.clientX - lastMouseX;
      mouse.vy = e.clientY - lastMouseY;
      mouse.speed = Math.min(Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy), 40);

      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      mouse.isMoving = true;

      // Spawn fluid particles on move
      if (mouse.speed > 1.5) {
        const count = Math.min(3, Math.floor(mouse.speed / 6) + 1);
        for (let i = 0; i < count; i++) {
          if (trails.length < maxTrails) {
            const hue = Math.random() > 0.5 ? 275 : 190; // Purple or Cyan
            trails.push({
              x: e.clientX + (Math.random() - 0.5) * 16,
              y: e.clientY + (Math.random() - 0.5) * 16,
              vx: (Math.random() - 0.5) * 1.8 + mouse.vx * 0.08,
              vy: (Math.random() - 0.5) * 1.8 + mouse.vy * 0.08,
              radius: Math.random() * 22 + 10,
              maxLife: Math.random() * 28 + 22,
              life: 0,
              hue: hue,
            });
          }
        }
      }

      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        mouse.isMoving = false;
        mouse.vx = 0;
        mouse.vy = 0;
      }, 100);

      // Update custom cursor elements if present
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    // Floating background ambient particles
    const ambientCount = 35;
    const ambients = [];
    for (let i = 0; i < ambientCount; i++) {
      ambients.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.6,
        color: Math.random() > 0.4 ? 'rgba(192, 132, 252, ' : 'rgba(34, 211, 238, ',
        alpha: Math.random() * 0.4 + 0.15,
      });
    }

    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.18;
      mouse.y += (mouse.targetY - mouse.y) * 0.18;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Mouse-Reactive Dot Matrix Grid
      for (let x = 0; x < width; x += dotSpacing) {
        for (let y = 0; y < height; y += dotSpacing) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            // Illuminated dots near cursor
            const intensity = 1 - dist / 140;
            ctx.fillStyle = `rgba(192, 132, 252, ${intensity * 0.65})`;
            ctx.beginPath();
            ctx.arc(x, y, 1.4 + intensity * 1.2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Default subtle dim dots
            ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }

      // 2. Render Soft Radial Cursor Spotlight
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        280
      );
      gradient.addColorStop(0, 'rgba(168, 85, 247, 0.14)');
      gradient.addColorStop(0.45, 'rgba(34, 211, 238, 0.05)');
      gradient.addColorStop(1, 'rgba(5, 5, 8, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 280, 0, Math.PI * 2);
      ctx.fill();

      // 3. Render Fluid Mouse Trails
      for (let i = trails.length - 1; i >= 0; i--) {
        const t = trails[i];
        t.life++;
        t.x += t.vx;
        t.y += t.vy;
        t.radius *= 0.96;

        const progress = t.life / t.maxLife;
        const alpha = (1 - progress) * 0.28;

        if (progress >= 1 || t.radius < 0.5) {
          trails.splice(i, 1);
          continue;
        }

        const radGrad = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, t.radius);
        if (t.hue === 275) {
          radGrad.addColorStop(0, `rgba(192, 132, 252, ${alpha})`);
          radGrad.addColorStop(1, 'rgba(168, 85, 247, 0)');
        } else {
          radGrad.addColorStop(0, `rgba(34, 211, 238, ${alpha})`);
          radGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');
        }

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Render Ambient Constellation Particles
      for (let i = 0; i < ambients.length; i++) {
        const a = ambients[i];
        a.x += a.vx;
        a.y += a.vy;

        if (a.x < 0) a.x = width;
        if (a.x > width) a.x = 0;
        if (a.y < 0) a.y = height;
        if (a.y > height) a.y = 0;

        ctx.fillStyle = `${a.color}${a.alpha})`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Top Gradient Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400 origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* Ambient Corner Atmosphere Glows */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-purple-700/12 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 -right-32 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[170px]" />
        <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-fuchsia-800/10 rounded-full blur-[180px]" />
      </div>

      {/* The Reactive Fluid Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
      />

      {/* Smooth Trailing Glow Cursor Aura */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 -ml-6 -mt-6 w-12 h-12 rounded-full border border-purple-400/40 pointer-events-none z-50 transition-transform duration-75 ease-out shadow-[0_0_20px_rgba(168,85,247,0.3)] hidden md:block"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-white pointer-events-none z-50 transition-transform duration-0 hidden md:block shadow-[0_0_8px_#ffffff]"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default FluidMouseBackground;
