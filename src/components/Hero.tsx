'use client';

import { motion } from 'framer-motion';

const capabilities = [
  'PERFORMANCE MARKETING',
  'UI/UX DESIGN',
  'AI AUTOMATION',
  'E-COMMERCE GROWTH',
  'CUSTOM WEB SYSTEMS',
  'SEO OPTIMIZATION',
  'SOCIAL MEDIA GROWTH',
  'INFLUENCER MARKETING',
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-dark-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dark-border/20 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-accent text-sm font-mono tracking-wider">// INSPIRED TECHNOLOGY</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 max-w-5xl"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          We Build, Design, and Scale{' '}
          <span className="gradient-text">Digital Experiences</span>{' '}
          That Deliver.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mb-12"
        >
          From AI-powered automation to high-performance web platforms — we engineer growth for ambitious brands across Pakistan, USA & Middle East.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-4 mb-20"
        >
          <motion.a
            href="#contact"
            className="bg-accent text-dark px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2 hover:bg-accent/90 transition-colors"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 102, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Talk To Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          <motion.a
            href="#work"
            className="border border-dark-border text-text-primary px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2 hover:border-accent/50 hover:bg-accent/5 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Work
            <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
          </motion.a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { value: '100+', label: 'Brands Scaled' },
            { value: '$10M+', label: 'Ad Spend Managed' },
            { value: '99.2%', label: 'Client Retention' },
            { value: '24/7', label: 'Expert Support' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                {stat.value}
              </div>
              <div className="text-text-muted text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative border-y border-dark-border bg-dark-card/50 py-4 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...capabilities, ...capabilities].map((capability, index) => (
            <span key={index} className="mx-8 text-sm font-mono text-text-muted tracking-wider">
              {capability}
              <span className="ml-8 text-accent">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
