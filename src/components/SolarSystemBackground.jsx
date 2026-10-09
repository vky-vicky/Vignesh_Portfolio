import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SolarSystemBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030208, 0.006);

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Camera — pulled back further so system fills full screen
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
    camera.position.set(0, 28, 90);
    camera.lookAt(0, 0, 0);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // fully transparent clear
    container.appendChild(renderer.domElement);

    // Mouse tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Scroll tracking
    let scrollY = window.scrollY;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });

    // ── 1. STARFIELD ──────────────────────────────────────────
    const starCount = window.innerWidth < 768 ? 1200 : 3000;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    const palette = [
      new THREE.Color('#ffffff'),
      new THREE.Color('#c4b5fd'),
      new THREE.Color('#7dd3fc'),
      new THREE.Color('#fde68a'),
      new THREE.Color('#fbcfe8'),
    ];

    for (let i = 0; i < starCount; i++) {
      const r = THREE.MathUtils.randFloat(100, 600);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(-Math.PI / 2, Math.PI / 2);

      starPositions[i * 3]     = r * Math.cos(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi);
      starPositions[i * 3 + 2] = r * Math.cos(phi) * Math.sin(theta);

      const col = palette[Math.floor(Math.random() * palette.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
      starSizes[i] = THREE.MathUtils.randFloat(0.5, 2.0);
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color',    new THREE.BufferAttribute(starColors, 3));
    starGeo.setAttribute('size',     new THREE.BufferAttribute(starSizes, 1));

    const starMat = new THREE.PointsMaterial({
      size: 1.2, vertexColors: true, transparent: true, opacity: 0.85, fog: false,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // ── 2. SUN ────────────────────────────────────────────────
    const sunGroup = new THREE.Group();
    scene.add(sunGroup);

    // Core
    const sunMesh = new THREE.Mesh(
      new THREE.SphereGeometry(3.2, 48, 48),
      new THREE.MeshBasicMaterial({ color: 0xfff7ed })
    );
    sunGroup.add(sunMesh);

    // Inner corona
    const corona1 = new THREE.Mesh(
      new THREE.SphereGeometry(4.5, 24, 24),
      new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.18, side: THREE.BackSide })
    );
    sunGroup.add(corona1);

    // Outer glow halo
    const corona2 = new THREE.Mesh(
      new THREE.SphereGeometry(7, 24, 24),
      new THREE.MeshBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.06, side: THREE.BackSide })
    );
    sunGroup.add(corona2);

    // Sun light
    const sunLight = new THREE.PointLight(0xfef3c7, 3.5, 300);
    sunGroup.add(sunLight);

    scene.add(new THREE.AmbientLight(0x1a1030, 1.0));

    // ── 3. PLANETS ────────────────────────────────────────────
    const planetsConfig = [
      { name: 'Mercury', radius: 0.6,  orbit: 10,  speed: 0.009,  incl: 0.05,  color: 0xfbbf24, emissive: 0x92400e },
      { name: 'Venus',   radius: 1.0,  orbit: 18,  speed: 0.0055, incl: -0.04, color: 0x38bdf8, emissive: 0x075985 },
      { name: 'Earth',   radius: 1.2,  orbit: 26,  speed: 0.004,  incl: 0.07,  color: 0xa855f7, emissive: 0x4c1d95, hasMoon: true },
      { name: 'Mars',    radius: 0.9,  orbit: 36,  speed: 0.003,  incl: -0.08, color: 0xf97316, emissive: 0x7c2d12 },
      { name: 'Jupiter', radius: 2.0,  orbit: 50,  speed: 0.002,  incl: 0.05,  color: 0x6366f1, emissive: 0x312e81, hasRings: true },
      { name: 'Saturn',  radius: 1.6,  orbit: 66,  speed: 0.0014, incl: -0.06, color: 0x4ade80, emissive: 0x14532d },
      { name: 'Uranus',  radius: 1.3,  orbit: 82,  speed: 0.001,  incl: 0.04,  color: 0x2dd4bf, emissive: 0x134e4a },
    ];

    const planets = [];
    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);

    planetsConfig.forEach((cfg) => {
      // Orbit ring
      const orbitCurve = new THREE.EllipseCurve(0, 0, cfg.orbit, cfg.orbit, 0, Math.PI * 2, false, 0);
      const orbitGeo = new THREE.BufferGeometry().setFromPoints(
        orbitCurve.getPoints(128).map(p => new THREE.Vector3(p.x, 0, p.y))
      );
      const orbitLine = new THREE.LineLoop(orbitGeo, new THREE.LineBasicMaterial({
        color: 0x8b5cf6, transparent: true, opacity: 0.1
      }));
      orbitLine.rotation.x = cfg.incl;
      orbitGroup.add(orbitLine);

      // Planet mesh
      const pMesh = new THREE.Mesh(
        new THREE.SphereGeometry(cfg.radius, 32, 32),
        new THREE.MeshStandardMaterial({ color: cfg.color, emissive: cfg.emissive, emissiveIntensity: 0.3, roughness: 0.5, metalness: 0.15 })
      );

      if (cfg.hasRings) {
        const ringMesh = new THREE.Mesh(
          new THREE.RingGeometry(cfg.radius * 1.6, cfg.radius * 2.5, 48),
          new THREE.MeshBasicMaterial({ color: 0xc4b5fd, side: THREE.DoubleSide, transparent: true, opacity: 0.22 })
        );
        ringMesh.rotation.x = Math.PI / 2.5;
        pMesh.add(ringMesh);
      }

      let moonMesh = null;
      if (cfg.hasMoon) {
        moonMesh = new THREE.Mesh(
          new THREE.SphereGeometry(cfg.radius * 0.28, 16, 16),
          new THREE.MeshStandardMaterial({ color: 0xe0e7ff, roughness: 0.9 })
        );
        pMesh.add(moonMesh);
      }

      scene.add(pMesh);
      planets.push({ mesh: pMesh, moon: moonMesh, config: cfg, angle: Math.random() * Math.PI * 2 });
    });

    // ── 4. ASTEROID BELT ──────────────────────────────────────
    const asteroidCount = 500;
    const asteroidPositions = new Float32Array(asteroidCount * 3);
    for (let i = 0; i < asteroidCount; i++) {
      const dist = THREE.MathUtils.randFloat(40, 46);
      const angle = THREE.MathUtils.randFloat(0, Math.PI * 2);
      asteroidPositions[i * 3]     = Math.cos(angle) * dist;
      asteroidPositions[i * 3 + 1] = THREE.MathUtils.randFloat(-1.0, 1.0);
      asteroidPositions[i * 3 + 2] = Math.sin(angle) * dist;
    }
    const asteroidGeo = new THREE.BufferGeometry();
    asteroidGeo.setAttribute('position', new THREE.BufferAttribute(asteroidPositions, 3));
    const asteroidBelt = new THREE.Points(asteroidGeo, new THREE.PointsMaterial({
      size: 0.5, color: 0x94a3b8, transparent: true, opacity: 0.4
    }));
    scene.add(asteroidBelt);

    // ── 5. NEBULA CLOUDS ──────────────────────────────────────
    // Soft large translucent spheres far away to add depth
    const nebulaPositions = [
      { pos: [-60, 20, -120], color: 0x4c1d95, size: 40 },
      { pos: [80, -30, -150], color: 0x1e3a5f, size: 55 },
      { pos: [20, 50, -180],  color: 0x3b0764, size: 45 },
    ];
    nebulaPositions.forEach(n => {
      const nebMesh = new THREE.Mesh(
        new THREE.SphereGeometry(n.size, 16, 16),
        new THREE.MeshBasicMaterial({ color: n.color, transparent: true, opacity: 0.04, side: THREE.BackSide })
      );
      nebMesh.position.set(...n.pos);
      scene.add(nebMesh);
    });

    // ── 6. ANIMATION LOOP ─────────────────────────────────────
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (document.hidden) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!prefersReducedMotion) {
        // Camera parallax + scroll depth
        camera.position.x = mouse.x * 8;
        camera.position.y = 28 - mouse.y * 6 - scrollY * 0.006;
        camera.position.z = 90 + scrollY * 0.012;
        camera.lookAt(0, -scrollY * 0.004, 0);

        // Stars slow drift
        starField.rotation.y = elapsed * 0.003;
        starField.rotation.x = elapsed * 0.001;

        // Asteroid belt rotation
        asteroidBelt.rotation.y = elapsed * 0.008;

        // Sun animation
        const pulse = 1 + Math.sin(elapsed * 1.2) * 0.04;
        corona1.scale.setScalar(pulse);
        corona2.scale.setScalar(1 + Math.sin(elapsed * 0.8) * 0.06);
        sunMesh.rotation.y = elapsed * 0.04;

        // Planet orbits
        planets.forEach(p => {
          p.angle += p.config.speed * (delta * 60);
          const x = Math.cos(p.angle) * p.config.orbit;
          const z = Math.sin(p.angle) * p.config.orbit;
          const y = Math.sin(p.angle) * p.config.orbit * p.config.incl;

          p.mesh.position.set(x, y, z);
          p.mesh.rotation.y += 0.015;

          if (p.moon) {
            const mAngle = elapsed * 2.8;
            p.moon.position.set(
              Math.cos(mAngle) * (p.config.radius * 2.5),
              Math.sin(mAngle * 0.4) * 0.5,
              Math.sin(mAngle) * (p.config.radius * 2.5)
            );
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const handleResize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      {/* The 3D WebGL Canvas — fixed so it covers the FULL website height */}
      <div
        ref={mountRef}
        className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden"
        style={{ zIndex: -20, background: '#030208' }}
        aria-hidden="true"
      />

      {/* Very subtle vignette overlay for readability */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -10,
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(139,92,246,0.03) 0%, rgba(5,4,8,0.20) 60%, rgba(3,2,7,0.60) 100%)',
        }}
      />
    </>
  );
};

export default SolarSystemBackground;
