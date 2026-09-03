'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const metrics = [
  { value: 100, suffix: '+', label: 'Brands Scaled', description: 'Across 15+ industries worldwide' },
  { value: 10, suffix: 'M+', label: 'Ad Spend Managed', description: 'In performance marketing campaigns' },
  { value: 99, suffix: '.2%', label: 'Client Retention', description: 'Long-term partnership success' },
  { value: 500, suffix: '+', label: 'Projects Delivered', description: 'From concept to launch' },
];

const clients = [
  'Mucho Burrito', 'myZoi', "Stillman's", 'Combaxx', 'Tech Crafters',
  'Royal Canadian Steel', 'Aladdin Informatics', 'And More',
];

export default function Metrics() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-mono tracking-wider mb-4 block">// PROVEN RESULTS</span>
          <h2 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
            Numbers That <span className="gradient-text">Matter</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                <AnimatedCounter target={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-text-primary font-semibold mb-1">{metric.label}</div>
              <div className="text-text-muted text-sm">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-text-muted text-sm text-center mb-8 font-mono tracking-wider">
            // TRUSTED BY LEADING BRANDS
          </p>
          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />
            <div className="animate-marquee flex whitespace-nowrap">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="mx-12 px-8 py-4 bg-dark-card border border-dark-border rounded-xl flex items-center justify-center"
                >
                  <span className="text-text-muted text-lg font-semibold">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
