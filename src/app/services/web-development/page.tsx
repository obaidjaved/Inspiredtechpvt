'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const capabilities = [
  {
    icon: '⚡',
    title: 'Custom Enterprise Web Apps',
    desc: 'High-performance, fault-tolerant web applications engineered with Next.js, React, Node.js, and TypeScript for mission-critical operations.',
    features: ['Server-Side Rendering (SSR) & SSG', 'Micro-frontends Architecture', 'Enterprise API Design & GraphQL', 'State Management & Real-Time Sync'],
    badge: 'Core Specialty',
  },
  {
    icon: '🛍️',
    title: 'E-Commerce & Digital Commerce',
    desc: 'High-conversion headless e-commerce stores, custom Shopify Plus developments, and custom multi-vendor marketplace platforms.',
    features: ['Headless Shopify & Custom Cart', 'Payment Gateway Integrations (Stripe, JazzCash, EasyPaisa, PayPal)', 'Real-time Inventory & ERP Sync', 'Sub-second Page Speeds'],
    badge: 'High ROI',
  },
  {
    icon: '📱',
    title: 'Progressive Web Apps (PWAs)',
    desc: 'App-like native experiences running directly in the browser with offline mode, push notifications, and frictionless onboarding.',
    features: ['Offline Caching & Service Workers', 'Background Sync & Push Alerts', 'Installable on iOS & Android', 'Ultra-lightweight footprint'],
    badge: 'Mobile First',
  },
  {
    icon: '🎨',
    title: 'UI/UX & Product Design',
    desc: 'User-centric, accessible design systems built in Figma with high-fidelity interactive prototyping, usability testing, and frictionless conversion funnels.',
    features: ['Design Systems & Component Libraries', 'WCAG 2.1 AA Accessibility', 'User Journey & Wireframing', 'Interactive Prototypes in Figma'],
    badge: 'Human-Centered',
  },
  {
    icon: '🔒',
    title: 'Enterprise CMS & Portals',
    desc: 'Secure customer portals, employee intranets, and Headless CMS (Sanity, Strapi, WordPress, Custom) that scale with your content team.',
    features: ['Role-Based Access Control (RBAC)', 'Omnichannel Content Distribution', 'Custom Workflow Approvals', 'Encrypted Document Vaults'],
    badge: 'Secure',
  },
  {
    icon: '☁️',
    title: 'Cloud Architecture & DevOps',
    desc: 'Automated CI/CD pipelines, containerized deployments on AWS/Azure/GCP, and zero-downtime serverless infrastructure.',
    features: ['Docker & Kubernetes Orchestration', 'AWS Lambda & Serverless Scale', 'Automated GitHub Actions CI/CD', '24/7 Monitoring & APM Logging'],
    badge: 'Scalable',
  },
];

const techStack = [
  {
    category: 'Frontend & UI',
    technologies: [
      { name: 'Next.js 15', desc: 'App Router, Server Components & Edge Rendering' },
      { name: 'React 19', desc: 'Component-driven interactive user interfaces' },
      { name: 'TypeScript', desc: 'Type-safe enterprise software architecture' },
      { name: 'Tailwind CSS', desc: 'Utility-first modern responsive design system' },
      { name: 'Framer Motion', desc: 'Hardware-accelerated fluid micro-animations' },
      { name: 'Vue.js / Nuxt', desc: 'Lightweight reactive frontend applications' },
    ],
  },
  {
    category: 'Backend & APIs',
    technologies: [
      { name: 'Node.js & Express', desc: 'High-throughput asynchronous microservices' },
      { name: 'NestJS', desc: 'Enterprise-grade modular TypeScript backend' },
      { name: 'Python & FastAPI', desc: 'Lightning-fast APIs for AI & data processing' },
      { name: 'Go (Golang)', desc: 'Ultra-concurrent cloud backend services' },
      { name: 'GraphQL & REST', desc: 'Strictly-typed modern client-server communication' },
      { name: 'gRPC', desc: 'Low-latency inter-service microservice RPCs' },
    ],
  },
  {
    category: 'Database & Cache',
    technologies: [
      { name: 'PostgreSQL', desc: 'Reliable relational database with JSONB support' },
      { name: 'MongoDB', desc: 'Flexible document store for fast iteration' },
      { name: 'Redis', desc: 'Sub-millisecond in-memory caching & queues' },
      { name: 'Supabase', desc: 'Open-source Firebase alternative with Postgres' },
      { name: 'Elasticsearch', desc: 'Enterprise full-text search & analytics' },
      { name: 'Prisma / Drizzle', desc: 'Next-generation ORM and query builders' },
    ],
  },
  {
    category: 'E-Commerce & CMS',
    technologies: [
      { name: 'Shopify Plus', desc: 'Headless storefronts & custom apps' },
      { name: 'Sanity.io', desc: 'Structured real-time headless CMS' },
      { name: 'Strapi', desc: 'Self-hosted open-source Headless CMS' },
      { name: 'WooCommerce', desc: 'Custom WordPress e-commerce platforms' },
      { name: 'Payload CMS', desc: 'TypeScript-first headless CMS for Next.js' },
      { name: 'Stripe & PayPal', desc: 'Global payment gateway integrations' },
    ],
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategic Roadmap',
    desc: 'We analyze your target users, technical requirements, business objectives, and architecture constraints to build a bulletproof blueprint.',
    deliverables: ['Technical Specification Document', 'Information Architecture', 'Sprint Schedule & Milestones'],
  },
  {
    step: '02',
    title: 'UI/UX & Interactive Prototyping',
    desc: 'Our design team creates pixel-perfect Figma designs, comprehensive design tokens, and clickable prototypes for user testing and stakeholder signoff.',
    deliverables: ['Figma Design System', 'Clickable Prototype', 'Component Library Tokens'],
  },
  {
    step: '03',
    title: 'Agile Engineering Sprints',
    desc: 'We build with clean, type-safe code in two-week agile sprints with bi-weekly demos, staging environment previews, and continuous code reviews.',
    deliverables: ['Live Staging Environments', 'Clean Modular Codebase', 'Bi-weekly Sprint Demos'],
  },
  {
    step: '04',
    title: 'Rigorous QA & Security Auditing',
    desc: 'Automated end-to-end tests, penetration tests, cross-browser compatibility checks, performance profiling, and accessibility audits.',
    deliverables: ['Lighthouse 95+ Score Audit', 'Security Penetration Report', 'Cross-Device QA Sign-off'],
  },
  {
    step: '05',
    title: 'Zero-Downtime Launch & Scale',
    desc: 'Seamless deployment with automated CI/CD pipelines, CDN distribution, DNS routing, and 24/7 SLA uptime monitoring.',
    deliverables: ['Production Cloud Deployment', 'Comprehensive Documentation', '24/7 SLA Support'],
  },
];

const webCaseStudies = [
  {
    title: 'TapSVS — EdTech & LMS Platform',
    category: 'Education & Enterprise',
    stats: [{ val: '50k+', label: 'Active Students' }, { val: '99.99%', label: 'Uptime' }],
    desc: 'Built an enterprise learning management system with real-time video lectures, automated quizzes, and multi-tenant grading portals.',
    link: '/portfolio/tapsvs-lms',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'Meri Pharmacy — E-Commerce Medicine Store',
    category: 'Healthcare & E-Commerce',
    stats: [{ val: '3x', label: 'Sales Growth' }, { val: '0.8s', label: 'Page Load' }],
    desc: 'Engineered a lightning-fast pharmaceutical e-commerce website with prescription upload, real-time doctor consultation, and courier dispatch integration.',
    link: '/portfolio/meri-pharmacy',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'Clineum — Digital Healthcare Platform',
    category: 'HealthTech & Telemedicine',
    stats: [{ val: '40%', label: 'Cost Reduction' }, { val: '100k+', label: 'Appointments' }],
    desc: 'A HIPAA-compliant telemedicine platform connecting clinics, patients, and diagnostic labs with encrypted medical records.',
    link: '/portfolio/clineum-medical',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop&auto=format',
  },
];

const faqs = [
  {
    q: 'What technology stack do you recommend for enterprise web applications?',
    a: 'For most modern enterprise applications, we recommend Next.js 15 with TypeScript, Tailwind CSS on the frontend, and Node.js (NestJS) or Python (FastAPI) on the backend, hosted on AWS or Vercel. This stack provides unparalleled speed, SEO, security, and developer velocity.',
  },
  {
    q: 'How do you guarantee performance and sub-second page loads?',
    a: 'We leverage Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), automatic image optimization, edge caching via Cloudflare/Vercel CDN, and aggressive tree-shaking to maintain 95+ Google Lighthouse scores across all metrics.',
  },
  {
    q: 'Can you migrate our legacy website to a modern headless architecture?',
    a: 'Yes. We specialize in legacy migrations from monolithic systems (older WordPress, Magento, PHP, ASP.NET) to modern decoupled stacks without data loss or SEO disruption, including 301 redirect mappings and zero-downtime data sync.',
  },
  {
    q: 'What support and SLA plans do you offer after launch?',
    a: 'We provide comprehensive 24/7 SLA support plans that include proactive monitoring, emergency security patches, bug fixes, automated backups, and monthly continuous improvement sprint hours.',
  },
];

export default function WebDevelopmentPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main id="main-content">
      <Navbar />

      {/* Hero Section (Dark) */}
      <section className="pt-32 pb-24 bg-[#0a0a0a] relative overflow-hidden" aria-labelledby="web-hero-heading">
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(99,102,241,0.2) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Link href="/" className="text-[#636363] hover:text-white text-xs transition-colors">Home</Link>
            <span className="text-[#454545] text-xs">/</span>
            <Link href="/services" className="text-[#636363] hover:text-white text-xs transition-colors">Services</Link>
            <span className="text-[#454545] text-xs">/</span>
            <span className="text-[#818cf8] text-xs font-semibold">Website Development</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 bg-[#6366f1]/15 border border-[#6366f1]/30 text-[#d0d1fb] text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
                Enterprise Web Engineering
              </span>

              <h1 id="web-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#e8e8e8] leading-[1.08] tracking-tight">
                High-Performance Web Apps &amp; <span className="gradient-text">Digital Experiences</span>
              </h1>

              <p className="text-[#9a9a9a] text-base md:text-lg max-w-2xl leading-relaxed mb-8">
                From scalable Next.js enterprise portals and headless e-commerce stores to progressive web applications, we engineer web platforms that load in milliseconds and convert visitors into high-value customers.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/contact"
                  className="bg-[#6366f1] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#5558e6] transition-all duration-200 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] active:scale-[0.98] inline-flex items-center gap-2"
                >
                  Start Your Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#capabilities"
                  className="border border-[#2a2a2a] text-[#e8e8e8] px-7 py-4 rounded-full text-sm font-semibold hover:bg-white/5 hover:border-[#6366f1]/40 transition-all duration-200 active:scale-[0.98]"
                >
                  Explore Capabilities
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1f1f1f]">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-[#636363] text-xs">Uptime & Reliability</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">&lt;1.0s</div>
                  <div className="text-[#636363] text-xs">Page Load Time</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">150+</div>
                  <div className="text-[#636363] text-xs">Web Apps Delivered</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-2xl bg-[#121212]">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format"
                  alt="Modern web development interfaces"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between text-xs text-white/80 mb-2">
                    <span className="font-semibold text-[#818cf8]">Lighthouse Performance</span>
                    <span className="font-bold text-emerald-400">100 / 100</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid (Light Section) */}
      <section id="capabilities" className="section-light py-24 relative z-10" aria-labelledby="capabilities-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="badge-light mb-4">Core Capabilities</span>
            <h2 id="capabilities-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d]">
              End-to-End Web Engineering Services
            </h2>
            <p className="text-[#6b7280] text-base mt-3 max-w-2xl mx-auto leading-relaxed">
              We design, build, test, and deploy resilient digital products that empower your operations and outpace competitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="client-logo-card flex-col items-start text-left p-8 rounded-2xl bg-white border border-[#e5e7eb] hover:border-[#6366f1]/40"
              >
                <div className="flex items-center justify-between w-full mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 flex items-center justify-center text-2xl">
                    {cap.icon}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#f3f4f6] text-[#4b5563]">
                    {cap.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">{cap.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-6">{cap.desc}</p>

                <div className="space-y-2 w-full pt-4 border-t border-[#f0f0f0]">
                  {cap.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-medium text-[#374151]">
                      <svg className="w-3.5 h-3.5 text-[#6366f1] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Matrix (Light Gray Section) */}
      <section className="section-light-gray py-24 relative z-10" aria-labelledby="tech-stack-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="badge-light mb-4">Technology Stack</span>
            <h2 id="tech-stack-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d]">
              Modern Technologies We Master
            </h2>
            <p className="text-[#6b7280] text-sm mt-3 max-w-xl mx-auto">
              We leverage the most resilient and performant frameworks to build forward-compatible software.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {techStack.map((stack, idx) => (
                <button
                  key={stack.category}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    activeTab === idx
                      ? 'bg-[#6366f1] text-white shadow-md'
                      : 'bg-white text-[#4b5563] border border-[#e5e7eb] hover:border-[#6366f1]/30'
                  }`}
                >
                  {stack.category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {techStack[activeTab].technologies.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-[#0d0d0d]">{tech.name}</h4>
                  <span className="w-2 h-2 rounded-full bg-[#6366f1]" />
                </div>
                <p className="text-[#6b7280] text-xs leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Spotlight (Dark Section) */}
      <section className="py-24 bg-[#0a0a0a] relative z-10" aria-labelledby="featured-projects-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-[#6366f1] text-xs font-bold tracking-widest uppercase mb-3 block">// PROVEN TRACK RECORD</span>
              <h2 id="featured-projects-heading" className="text-3xl md:text-4xl font-bold text-[#e8e8e8]">
                Featured Web Engineering Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-[#818cf8] hover:text-white font-semibold text-sm inline-flex items-center gap-2 transition-colors"
            >
              View All Case Studies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webCaseStudies.map((study) => (
              <div
                key={study.title}
                className="group bg-[#121212] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#6366f1]/40 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                    {study.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#818cf8] transition-colors">{study.title}</h3>
                    <p className="text-[#9a9a9a] text-xs leading-relaxed mb-6">{study.desc}</p>
                  </div>

                  <div>
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-[#1f1f1f] mb-4">
                      {study.stats.map((s) => (
                        <div key={s.label}>
                          <div className="text-xl font-bold text-white">{s.val}</div>
                          <div className="text-[10px] text-[#636363]">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={study.link}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#818cf8] hover:text-white transition-colors"
                    >
                      Read Case Study
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our 5-Step Process (Light Section) */}
      <section className="section-light py-24 relative z-10" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="badge-light mb-4">Engineering Lifecycle</span>
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d]">
              How We Build &amp; Deliver Web Apps
            </h2>
            <p className="text-[#6b7280] text-sm mt-3 max-w-xl mx-auto">
              A transparent, agile workflow designed for speed, security, and measurable outcomes.
            </p>
          </div>

          <div className="space-y-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#f8f9fa] border border-[#e5e7eb] rounded-2xl p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between hover:border-[#6366f1]/30 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-bold text-[#6366f1] opacity-40 shrink-0">{step.step}</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#0d0d0d] mb-2">{step.title}</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed max-w-2xl">{step.desc}</p>
                  </div>
                </div>

                <div className="shrink-0 flex flex-wrap gap-2 md:max-w-xs">
                  {step.deliverables.map((del) => (
                    <span key={del} className="text-[11px] font-semibold px-3 py-1 rounded-md bg-white border border-[#e5e7eb] text-[#374151]">
                      ✓ {del}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion (Light Gray Section) */}
      <section className="section-light-gray py-24 relative z-10" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="badge-light mb-4">Frequently Asked Questions</span>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d]">
              Web Development Insights &amp; FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#0d0d0d] hover:text-[#6366f1] transition-colors"
                >
                  <span>{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-[#6366f1] shrink-0 transition-transform duration-200 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-[#6b7280] text-sm leading-relaxed border-t border-[#f3f4f6] pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner (Dark CTA) */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f] relative overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <span className="text-[#818cf8] text-xs font-bold tracking-widest uppercase mb-4 block">// READY TO BUILD?</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Let&apos;s Build Your Next High-Performance Web Platform
          </h2>
          <p className="text-[#9a9a9a] text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Schedule a 30-minute discovery call with our principal solutions architects. We will discuss your technical requirements and provide a free architecture estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#6366f1] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#5558e6] transition-all duration-200 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] active:scale-[0.98]"
            >
              Book Free Technical Consultation
            </Link>
            <a
              href="tel:+923009221193"
              className="border border-[#2a2a2a] text-white px-7 py-4 rounded-full text-sm font-semibold hover:bg-white/5 transition-all"
            >
              Call +92 300 9221193
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
