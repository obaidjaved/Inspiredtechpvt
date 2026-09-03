'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Mucho Burrito',
    category: 'UI/UX Design & Web Development',
    metric: '+310% Revenue Growth',
    color: 'from-orange-500/20 to-red-500/20',
    image: '/projects/mucho.jpg',
  },
  {
    id: 2,
    title: 'myZoi Financial',
    category: 'Full Stack Marketing',
    metric: '3.4x ROAS',
    color: 'from-blue-500/20 to-cyan-500/20',
    image: '/projects/myzoi.jpg',
  },
  {
    id: 3,
    title: "Stillman's Beauty",
    category: 'E-Commerce & Brand Strategy',
    metric: '$1.2M Revenue',
    color: 'from-pink-500/20 to-purple-500/20',
    image: '/projects/stillmans.jpg',
  },
  {
    id: 4,
    title: 'Combaxx Sports',
    category: 'Web Development & SEO',
    metric: '85% Conversion Boost',
    color: 'from-green-500/20 to-emerald-500/20',
    image: '/projects/combaxx.jpg',
  },
  {
    id: 5,
    title: 'Tech Crafters',
    category: 'AI Automation & ERP',
    metric: '60% Cost Reduction',
    color: 'from-purple-500/20 to-indigo-500/20',
    image: '/projects/techcrafters.jpg',
  },
  {
    id: 6,
    title: 'Royal Canadian Steel',
    category: 'Web Development & Branding',
    metric: '+200% Lead Generation',
    color: 'from-yellow-500/20 to-orange-500/20',
    image: '/projects/rcsteel.jpg',
  },
];

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 relative bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-mono tracking-wider mb-4 block">// OUR WORK</span>
          <h2 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
            Case Studies That <span className="gradient-text">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />
              <div className="absolute inset-0 bg-dark/60" />
              
              {/* Content */}
              <div className="relative z-10 p-8 min-h-[400px] flex flex-col justify-between">
                <div>
                  <motion.div
                    animate={hoveredId === project.id ? { scale: 1.1 } : { scale: 1 }}
                    className="w-16 h-16 bg-dark-card border border-dark-border rounded-xl flex items-center justify-center mb-6"
                  >
                    <span className="text-accent text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {String(project.id).padStart(2, '0')}
                    </span>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {project.category}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="bg-accent/10 border border-accent/30 px-4 py-2 rounded-full">
                    <span className="text-accent text-sm font-semibold">{project.metric}</span>
                  </div>
                  
                  <motion.div
                    animate={hoveredId === project.id ? { x: 5 } : { x: 0 }}
                    className="w-10 h-10 border border-dark-border rounded-full flex items-center justify-center group-hover:border-accent/50 transition-colors"
                  >
                    <svg className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold"
            whileHover={{ x: 5 }}
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
