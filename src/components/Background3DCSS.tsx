'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function Background3DCSS() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * 0.5;
      canvas.height = height * 0.5;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const createParticles = () => {
      const count = Math.min(Math.floor((width * height) / 18000), 60);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 1000,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          size: Math.random() * 1.8 + 0.8,
          opacity: Math.random() * 0.4 + 0.08,
        });
      }
    };

    let time = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.004;

      const scaleX = canvas.width / width;
      const scaleY = canvas.height / height;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += Math.sin(time + i * 0.1) * 0.4;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const scale = 600 / (600 + p.z);
        const x2d = p.x * scale * scaleX;
        const y2d = p.y * scale * scaleY;
        const size2d = p.size * scale;

        ctx.beginPath();
        ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity * scale * 0.8})`;
        ctx.fill();

        particles.forEach((p2, j) => {
          if (j <= i) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineOpacity = (1 - dist / 110) * 0.1 * scale;
            ctx.beginPath();
            ctx.moveTo(x2d, y2d);
            const scale2 = 600 / (600 + p2.z);
            ctx.lineTo(p2.x * scale2 * scaleX, p2.y * scale2 * scaleY);
            ctx.strokeStyle = `rgba(99, 102, 241, ${lineOpacity})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0" style={{ opacity: 0.5 }} />
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(0,0,0,0.7) 100%)'
      }} />
    </div>
  );
}
