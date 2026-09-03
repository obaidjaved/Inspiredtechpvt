'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: '01',
    title: 'AI Business Automation',
    description: 'We simplify and supercharge your business operations with AI-powered automation. From lead capture and follow-ups to marketing integration and performance dashboards.',
    tags: ['Lead Automation', 'AI Chat Bots', 'CRM Workflows', 'Social Ad Automation'],
  },
  {
    id: '02',
    title: 'Web Development & UI/UX',
    description: 'We build responsive, high-performing websites tailored to your brand and audience — optimized for speed, scalability, and seamless user experiences.',
    tags: ['Next.js', 'Shopify', 'WordPress', 'Custom Systems'],
  },
  {
    id: '03',
    title: 'Performance Marketing',
    description: 'Our growth-focused performance campaigns are built to scale — driving measurable ROI through precision targeting and real-time optimization.',
    tags: ['Meta CAPI', 'Google Ads', 'Paid Social', 'Conversion API'],
  },
  {
    id: '04',
    title: 'E-Commerce Growth',
    description: 'From storefront optimization to integrated marketing, we manage your e-commerce ecosystem to maximize conversions and customer satisfaction.',
    tags: ['Amazon', 'Shopify 2.0', 'Walmart', 'Etsy'],
  },
  {
    id: '05',
    title: 'Search Engine Optimization',
    description: 'We improve your online visibility through data-backed SEO strategies that drive traffic, increase rankings, and grow your organic reach.',
    tags: ['Keyword Research', 'Technical SEO', 'Link Building', 'Content Strategy'],
  },
  {
    id: '06',
    title: 'Influencer & Social Media',
    description: 'We connect brands with the right voices. From strategy to execution, we manage influencer collaborations that feel authentic and drive real results.',
    tags: ['Content Creators', 'UGC', 'Social Strategy', 'Community Growth'],
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-mono tracking-wider mb-4 block">// OUR EXPERTISE</span>
          <h2 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
            Services That <span className="gradient-text">Drive Growth</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-dark-card border border-dark-border rounded-2xl p-8 hover-glow transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-accent text-4xl font-bold opacity-30 group-hover:opacity-100 transition-opacity" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {service.id}
                  </span>
                  <motion.div
                    animate={hoveredIndex === index ? { rotate: 45 } : { rotate: 0 }}
                    className="w-10 h-10 border border-dark-border rounded-full flex items-center justify-center group-hover:border-accent/50 transition-colors"
                  >
                    <svg className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>

                <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 bg-dark border border-dark-border rounded-full text-text-muted group-hover:border-accent/30 group-hover:text-accent/80 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
