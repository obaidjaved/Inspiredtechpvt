'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-cyan/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent text-sm font-mono tracking-wider mb-6 block">// READY TO GROW?</span>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8" style={{ fontFamily: 'Syne, sans-serif' }}>
            Ready to squish the{' '}
            <span className="gradient-text">competition?</span>
          </h2>
          
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Let&apos;s talk about how we can transform your digital presence and drive real results for your business.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact"
              className="bg-accent text-dark px-10 py-5 rounded-full text-lg font-semibold inline-flex items-center gap-3 hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 255, 102, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            
            <motion.a
              href="tel:+923009221193"
              className="border border-dark-border text-text-primary px-10 py-5 rounded-full text-lg font-semibold inline-flex items-center gap-3 hover:border-accent/50 hover:bg-accent/5 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
