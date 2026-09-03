'use client';

import { motion } from 'framer-motion';

const regions = [
  {
    flag: '🇺🇸',
    name: 'USA Market',
    description: 'High-performance custom web applications, cloud-native architecture, and AI-driven business intelligence for high-growth enterprises.',
    tags: ['Custom React/Node.js', 'Enterprise AI Integration'],
  },
  {
    flag: '🇦🇪 🇸🇦',
    name: 'Middle East (GCC)',
    description: 'ZATCA compliant ERPNext implementations, VAT automation, and digital transformation aligned with Saudi Vision 2030.',
    tags: ['ZATCA e-Invoicing', 'Localized Payroll/WPS'],
  },
  {
    flag: '🇵🇰',
    name: 'Pakistan',
    description: 'World-class enterprise networking, Cisco-certified infrastructure, and complete IT support for the local corporate sector.',
    tags: ['Network Infrastructure', 'Managed IT Services'],
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-sm font-mono tracking-wider mb-4 block">// WHO WE ARE</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              We Build Digital <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Inspired Technology is a network solutions provider based in Pakistan, delivering professional services to large-scale corporate businesses around the globe. We take pride in being the most trusted networking solution provider in Pakistan.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-dark-card border border-dark-border px-6 py-3 rounded-full">
                <span className="text-accent font-semibold">Cisco</span>
                <span className="text-text-muted text-sm ml-2">Certified Partner</span>
              </div>
              <div className="bg-dark-card border border-dark-border px-6 py-3 rounded-full">
                <span className="text-accent font-semibold">ISO</span>
                <span className="text-text-muted text-sm ml-2">Quality Standards</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - CEO Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-dark-card border border-dark-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-accent text-2xl font-bold">JK</span>
              </div>
              <div>
                <div className="font-semibold text-text-primary">Muhammad J. Khan</div>
                <div className="text-text-muted text-sm">Director & CEO</div>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed italic">
              &ldquo;Inspired Technology is the networking solution provider in Pakistan. We deliver professional services to corporate businesses. We&apos;re expanding our digital services with Website Development and ERP solutions to help businesses thrive in the digital age.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Global Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent text-sm font-mono tracking-wider mb-4 block">// GLOBAL EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ fontFamily: 'Syne, sans-serif' }}>
            Localized Solutions for <span className="gradient-text">Every Market</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-8 hover-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4">{region.flag}</div>
                <h3 className="text-xl font-semibold mb-3">{region.name}</h3>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  {region.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {region.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 bg-dark border border-dark-border rounded-full text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
