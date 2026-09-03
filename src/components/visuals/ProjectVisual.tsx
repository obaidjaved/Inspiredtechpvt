'use client';

import { motion } from 'framer-motion';

interface ProjectVisualProps {
  gradient: string;
  icon: string;
  title: string;
  index: number;
  image?: string;
}

export default function ProjectVisual({ gradient, icon, title, index, image }: ProjectVisualProps) {
  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden group">
      {image ? (
        <>
          <img
            src={image}
            alt={`${title} project preview`}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </>
      ) : (
        <>
          {/* Gradient background fallback */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-25 group-hover:opacity-40 transition-opacity duration-500`} />

          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />

          {/* Central icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-5xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"
              whileHover={{ scale: 1.08, rotate: 3 }}
            >
              {icon}
            </motion.div>
          </div>
        </>
      )}

      {/* Floating shapes */}
      <motion.div
        className="absolute top-5 right-5 w-16 h-16 border border-white/8 rounded-lg"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-6 left-6 w-10 h-10 border border-white/8 rounded-full"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white/70 text-xs font-medium tracking-wide">{title}</p>
      </div>
    </div>
  );
}
