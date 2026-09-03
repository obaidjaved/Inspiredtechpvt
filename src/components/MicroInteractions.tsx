'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface RippleButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function RippleButton({ children, className = '', href, onClick, variant = 'primary' }: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const btnRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const variants = {
    primary: 'bg-[#6366f1] text-white hover:bg-[#5558e6] hover:shadow-[0_0_24px_rgba(99,102,241,0.35)] active:scale-[0.98]',
    secondary: 'border border-[#222] text-white hover:border-[rgba(99,102,241,0.4)] hover:bg-[rgba(99,102,241,0.05)] active:scale-[0.98]',
    ghost: 'text-[#a0a0a0] hover:text-[#6366f1] hover:bg-[rgba(99,102,241,0.05)]',
  };

  const handleClick = (e: React.MouseEvent) => {
    const ref = btnRef.current || linkRef.current;
    if (!ref) return;
    const rect = ref.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
    onClick?.();
  };

  const baseClass = `relative overflow-hidden inline-flex items-center gap-2 font-semibold transition-all duration-200 ${variants[variant]} ${className}`;

  const content = (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/15 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            transform: 'translate(-50%, -50%)',
            animation: 'ripple-expand 0.6s ease-out forwards',
          }}
        />
      ))}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <a ref={linkRef} href={href} className={baseClass} onClick={handleClick}>
        {content}
      </a>
    );
  }

  return (
    <button ref={btnRef} className={baseClass} onClick={handleClick}>
      {content}
    </button>
  );
}

interface MagneticElementProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticElement({ children, className = '', strength = 0.3 }: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  const words = children.split(' ');

  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-label={children}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.45,
            delay: delay + i * 0.04,
            ease: [0.32, 0.72, 0, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
