import React, { useEffect, useRef, useState } from 'react';

const StarsBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let stars = [];
        let nebulae = [];
        let shootingStars = [];

        const initParticles = () => {
            stars = Array.from({ length: 250 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5,
                depth: Math.random() * 1.5 + 0.5,
                opacity: Math.random(),
                blink: Math.random() * 0.02
            }));

            nebulae = Array.from({ length: 3 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 400 + 200,
                color: Math.random() > 0.5 ? 'rgba(0, 243, 255, 0.05)' : 'rgba(189, 0, 255, 0.05)',
                dx: (Math.random() - 0.5) * 0.2,
                dy: (Math.random() - 0.5) * 0.2
            }));
        };

        const spawnShootingStar = () => {
            if (Math.random() > 0.995 && shootingStars.length < 2) {
                shootingStars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * (canvas.height / 2),
                    length: Math.random() * 80 + 20,
                    speed: Math.random() * 15 + 10,
                    opacity: 1
                });
            }
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const handleMouseMove = (e) => {
            mouseRef.current.x = (e.clientX - window.innerWidth / 2) * 0.05;
            mouseRef.current.y = (e.clientY - window.innerHeight / 2) * 0.05;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        resizeCanvas();

        const draw = () => {
            ctx.fillStyle = '#030712';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Nebulae
            ctx.filter = 'blur(60px)';
            nebulae.forEach(n => {
                const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius);
                grad.addColorStop(0, n.color);
                grad.addColorStop(1, 'transparent');
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
                ctx.fill();

                n.x += n.dx;
                n.y += n.dy;
                if (n.x < -n.radius) n.x = canvas.width + n.radius;
                if (n.x > canvas.width + n.radius) n.x = -n.radius;
                if (n.y < -n.radius) n.y = canvas.height + n.radius;
                if (n.y > canvas.height + n.radius) n.y = -n.radius;
            });
            ctx.filter = 'none';

            // Draw Stars
            stars.forEach(s => {
                const parallaxX = mouseRef.current.x * s.depth;
                const parallaxY = mouseRef.current.y * s.depth;
                
                ctx.beginPath();
                ctx.arc(s.x + parallaxX, s.y + parallaxY, s.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
                ctx.fill();

                s.opacity += s.blink;
                if (s.opacity > 1 || s.opacity < 0.2) s.blink *= -1;
            });

            // Draw Shooting Stars
            spawnShootingStar();
            shootingStars.forEach((ss, i) => {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 255, 255, ${ss.opacity})`;
                ctx.lineWidth = 2;
                ctx.moveTo(ss.x, ss.y);
                ctx.lineTo(ss.x - ss.length, ss.y + ss.length);
                ctx.stroke();

                ss.x += ss.speed;
                ss.y += ss.speed;
                ss.opacity -= 0.02;

                if (ss.opacity <= 0) shootingStars.splice(i, 1);
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        initParticles();
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none -z-10"
        />
    );
};

export default StarsBackground;
