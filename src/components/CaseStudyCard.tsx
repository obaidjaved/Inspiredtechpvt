'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import type { CaseStudy } from '@/data/case-studies';
import ProjectVisual from '@/components/visuals/ProjectVisual';

const cardImages: Record<string, string> = {
  'tapsvs-lms': 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop&auto=format',
  'clineum-medical': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&auto=format',
  'dikhatz-shopify': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format',
  'drive-venturous': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop&auto=format',
  'english-evolution': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format',
  'made-by-throne': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop&auto=format',
  'meri-pharmacy': 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop&auto=format',
  'student-portal': 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop&auto=format',
};

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.32, 0.72, 0, 1] }}
    >
      <Link href={`/portfolio/${study.slug}`} className="block group" aria-label={`View case study: ${study.title}`}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative bg-[#111] border border-[#222] rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_16px_48px_-12px_rgba(99,102,241,0.12)]"
        >
          {/* Project Visual Banner */}
          <ProjectVisual
            gradient={study.gradient}
            icon={study.icon}
            title={study.client}
            index={index}
            image={cardImages[study.slug]}
          />

          {/* Content */}
          <div className="p-6">
            {/* Glare effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.04) 0%, transparent 60%)`,
              }}
            />

            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(90deg, transparent, ${study.color}, transparent)` }}
            />

            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-[#666666] text-[10px] font-medium tracking-wider uppercase mb-0.5">{study.industry}</p>
                <p className="text-white font-semibold text-xs">{study.client}</p>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center border border-[#222] group-hover:border-[rgba(99,102,241,0.3)] group-hover:bg-[rgba(99,102,241,0.05)] transition-all duration-200">
                <svg
                  className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#6366f1] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-2 group-hover:text-[#6366f1] transition-colors duration-200 leading-tight">
              {study.title}
            </h3>

            {/* Summary */}
            <p className="text-[#a0a0a0] text-xs leading-relaxed mb-4 line-clamp-3">
              {study.summary}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-black border border-[#222] rounded-lg px-2.5 py-1.5 flex flex-col"
                >
                  <span className="text-[9px] text-[#666666] mb-0.5">{metric.label}</span>
                  <span className="text-[10px] font-bold" style={{ color: study.color }}>
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2.5 py-1 bg-black border border-[#222] rounded-full text-[#666666] group-hover:border-[rgba(99,102,241,0.2)] group-hover:text-[#a0a0a0] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
