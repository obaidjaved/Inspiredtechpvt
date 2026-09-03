'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Inspired Technology transformed our digital presence completely. Their AI automation solutions saved us 40% in operational costs within the first quarter.",
    author: 'Sarah Mitchell',
    role: 'CEO, TechVentures Inc.',
    avatar: '/avatars/sarah.jpg',
  },
  {
    id: 2,
    quote: "The team delivered a world-class e-commerce platform that increased our online revenue by 310%. Their attention to detail and strategic thinking is unmatched.",
    author: 'Ahmed Al-Rashid',
    role: 'Founder, Luxe Commerce',
    avatar: '/avatars/ahmed.jpg',
  },
  {
    id: 3,
    quote: "From SEO to performance marketing, Inspired Technology took our brand from invisible to industry leader. We now generate 5x more qualified leads monthly.",
    author: 'Fatima Khan',
    role: 'Marketing Director, Global Brands',
    avatar: '/avatars/fatima.jpg',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-mono tracking-wider mb-4 block">// WHAT PEOPLE SAY</span>
          <h2 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
            Client <span className="gradient-text">Testimonials</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-dark-card border border-dark-border rounded-3xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <svg className="w-12 h-12 text-accent/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-xl md:text-2xl text-text-primary leading-relaxed mb-8">
                    {testimonials[currentIndex].quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-accent font-bold">
                        {testimonials[currentIndex].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-text-muted text-sm">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent w-8'
                    : 'bg-dark-border hover:bg-text-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
