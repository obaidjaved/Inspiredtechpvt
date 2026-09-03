'use client';

import { motion } from 'framer-motion';

interface ServiceVisualProps {
  icon: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function ServiceVisual({ icon, color, size = 'md' }: ServiceVisualProps) {
  const sizes = {
    sm: { container: 'w-16 h-16', icon: 'text-2xl', ring: 'w-20 h-20' },
    md: { container: 'w-20 h-20', icon: 'text-3xl', ring: 'w-28 h-28' },
    lg: { container: 'w-24 h-24', icon: 'text-4xl', ring: 'w-32 h-32' },
  };

  const s = sizes[size];

  return (
    <div className="relative flex items-center justify-center">
      {/* Animated ring */}
      <motion.div
        className={`absolute ${s.ring} rounded-full border border-dashed`}
        style={{ borderColor: `${color}30` }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Glow effect */}
      <div
        className="absolute w-32 h-32 rounded-full blur-2xl opacity-20"
        style={{ background: color }}
      />

      {/* Icon container */}
      <motion.div
        className={`relative ${s.container} rounded-2xl flex items-center justify-center`}
        style={{
          background: `linear-gradient(135deg, ${color}20, ${color}05)`,
          border: `1px solid ${color}30`,
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        <span className={s.icon}>{icon}</span>
      </motion.div>
    </div>
  );
}
