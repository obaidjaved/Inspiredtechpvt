'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectMockup from '@/components/ProjectMockup';
import { caseStudies } from '@/data/case-studies';

export default function CaseStudyPage() {
  const params = useParams();
  const study = caseStudies.find((s) => s.slug === params.slug);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  if (!study) {
    return (
      <main id="main-content">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-[#e8e8e8]">Case Study Not Found</h1>
            <Link href="/portfolio" className="text-[#6366f1] hover:text-[#818cf8] transition-colors text-sm">
              ← Back to All Case Studies
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const currentIndex = caseStudies.findIndex((s) => s.slug === study.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main id="main-content">
      <Navbar />

      {/* Hero Section (Dark) */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 relative min-h-[60vh] flex flex-col justify-end overflow-hidden bg-[#0a0a0a]"
        aria-labelledby="case-study-hero-heading"
      >
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={study.featuredImage}
            alt=""
            className="w-full h-full object-cover opacity-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/60" />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6"
        >
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <Link href="/portfolio" className="text-[#636363] hover:text-white text-xs transition-colors">
              ← Case Studies
            </Link>
            <span className="text-[#454545] text-xs">/</span>
            <span className="text-[#818cf8] text-xs font-semibold">{study.client}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full"
              style={{ background: `${study.color}15`, color: study.color, border: `1px solid ${study.color}35` }}
            >
              {study.category}
            </span>
            <span className="text-[#9a9a9a] text-xs font-medium">{study.industry}</span>
            <span className="text-[#454545] text-xs">•</span>
            <a
              href={`https://${study.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6366f1] text-xs font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>https://{study.url}</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <motion.h1
            id="case-study-hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6 max-w-4xl tracking-tight text-[#e8e8e8]"
          >
            {study.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#9a9a9a] text-base md:text-lg max-w-3xl leading-relaxed mb-10"
          >
            {study.summary}
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#1f1f1f]">
            {study.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {metric.value}
                </div>
                <div className="text-[#636363] text-xs uppercase tracking-wider font-semibold">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Project Mockup Display Section (Light Section) */}
      <section className="section-light py-16 relative z-10" aria-label="Project visual overview">
        <div className="max-w-7xl mx-auto px-6">
          {/* High-Fidelity Interactive Mockup */}
          <div className="mb-16">
            <ProjectMockup
              image={study.featuredImage}
              title={study.title}
              url={study.url}
              type={study.mockupType || 'desktop'}
              accentColor={study.color}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Details (Challenge, Solution, Outcomes) */}
            <div className="lg:col-span-8 space-y-16">
              {/* Challenge */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-bold text-[#6366f1] opacity-30">01</span>
                  <h2 className="text-2xl font-bold text-[#0d0d0d]">The Challenge &amp; Business Constraints</h2>
                </div>
                <div className="space-y-4">
                  {study.challenge.map((item, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-[#f8f9fa] border border-[#e5e7eb] flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                        !
                      </div>
                      <p className="text-[#4b5563] text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-bold text-[#6366f1] opacity-30">02</span>
                  <h2 className="text-2xl font-bold text-[#0d0d0d]">Engineered Solution &amp; Technical Architecture</h2>
                </div>
                <div className="space-y-4">
                  {study.solution.map((item, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-[#f8f9fa] border border-[#e5e7eb] flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-[#6366f1] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                        ⚡
                      </div>
                      <p className="text-[#4b5563] text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-bold text-[#6366f1] opacity-30">03</span>
                  <h2 className="text-2xl font-bold text-[#0d0d0d]">Measurable Business Outcomes</h2>
                </div>
                <div className="space-y-4">
                  {study.outcomes.map((item, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0] flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                        ✓
                      </div>
                      <p className="text-emerald-950 text-sm leading-relaxed font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Specifications (Sticky Light Card) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#f8f9fa] border border-[#e5e7eb] rounded-3xl p-8 sticky top-28 shadow-sm">
                <h3 className="text-xs font-bold text-[#6366f1] uppercase tracking-wider mb-4">Technologies &amp; Tools</h3>
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-[#e5e7eb] text-[#374151]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 pt-6 border-t border-[#e5e7eb]">
                  <div>
                    <span className="text-[11px] font-bold text-[#9ca3af] uppercase tracking-wider block mb-0.5">Client</span>
                    <span className="text-sm font-bold text-[#0d0d0d]">{study.client}</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#9ca3af] uppercase tracking-wider block mb-0.5">Industry</span>
                    <span className="text-sm font-bold text-[#0d0d0d]">{study.industry}</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#9ca3af] uppercase tracking-wider block mb-0.5">Category</span>
                    <span className="text-sm font-bold text-[#0d0d0d]">{study.category}</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#9ca3af] uppercase tracking-wider block mb-0.5">Live URL</span>
                    <a
                      href={`https://${study.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#6366f1] hover:underline inline-flex items-center gap-1"
                    >
                      <span>{study.url}</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#e5e7eb]">
                  <Link
                    href="/contact"
                    className="w-full bg-[#6366f1] text-white py-3.5 px-4 rounded-xl font-bold text-xs hover:bg-[#5558e6] transition-all flex items-center justify-center gap-2 text-center"
                  >
                    Build a Similar Solution
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Case Study (Dark Section) */}
      <section className="py-20 bg-[#0a0a0a] border-t border-[#1f1f1f] relative z-10" aria-label="Next case study">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs text-[#636363] uppercase tracking-widest font-bold mb-4">// UP NEXT</div>
          <Link
            href={`/portfolio/${nextStudy.slug}`}
            className="group p-8 rounded-3xl bg-[#121212] border border-[#2a2a2a] hover:border-[#6366f1]/50 transition-all flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-6">
              <div className="text-4xl">{nextStudy.icon}</div>
              <div>
                <span className="text-xs font-bold text-[#818cf8] uppercase tracking-wider">{nextStudy.category}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#818cf8] transition-colors mt-1">
                  {nextStudy.title}
                </h3>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/10 px-6 py-3 rounded-full group-hover:bg-[#6366f1] transition-colors shrink-0">
              <span>View Case Study</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
