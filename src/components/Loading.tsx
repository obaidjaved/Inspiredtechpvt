'use client';

import { motion } from 'framer-motion';

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] bg-dark flex items-center justify-center" role="status" aria-label="Loading page">
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo */}
        <motion.div
          className="relative w-20 h-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 border-2 border-accent/20 rounded-2xl" />
          <div className="absolute inset-0 border-2 border-t-accent rounded-2xl" />
          <div className="absolute inset-3 border-2 border-accent-blue/20 rounded-xl" />
          <div className="absolute inset-3 border-2 border-t-accent-blue rounded-xl" style={{ animationDirection: 'reverse', animationDuration: '3s' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-accent font-bold text-xl">I</span>
          </div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-text-muted text-sm font-mono tracking-wider">LOADING</span>
          <motion.span
            className="text-accent"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            ...
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-dark-card border border-dark-border rounded-3xl p-8 animate-pulse" aria-hidden="true">
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 bg-dark-hover rounded-2xl" />
        <div className="w-20 h-6 bg-dark-hover rounded-full" />
      </div>
      <div className="space-y-3 mb-6">
        <div className="h-6 bg-dark-hover rounded-lg w-3/4" />
        <div className="h-4 bg-dark-hover rounded-lg w-full" />
        <div className="h-4 bg-dark-hover rounded-lg w-5/6" />
      </div>
      <div className="flex gap-2">
        <div className="w-16 h-6 bg-dark-hover rounded-full" />
        <div className="w-20 h-6 bg-dark-hover rounded-full" />
        <div className="w-14 h-6 bg-dark-hover rounded-full" />
      </div>
    </div>
  );
}

export function SkeletonHero() {
  return (
    <div className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 pt-32" aria-hidden="true">
      <div className="space-y-6">
        <div className="h-4 bg-dark-hover rounded w-48" />
        <div className="space-y-4">
          <div className="h-16 bg-dark-hover rounded-lg w-full" />
          <div className="h-16 bg-dark-hover rounded-lg w-4/5" />
          <div className="h-16 bg-dark-hover rounded-lg w-3/5" />
        </div>
        <div className="h-6 bg-dark-hover rounded-lg w-2/3 mt-6" />
        <div className="flex gap-4 mt-8">
          <div className="h-14 bg-dark-hover rounded-full w-48" />
          <div className="h-14 bg-dark-hover rounded-full w-44" />
        </div>
        <div className="grid grid-cols-4 gap-8 mt-16">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-10 bg-dark-hover rounded w-20 mx-auto md:mx-0" />
              <div className="h-4 bg-dark-hover rounded w-24 mx-auto md:mx-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
