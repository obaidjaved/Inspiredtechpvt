'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const featuredServices = [
  {
    title: 'Website & Web App Development',
    category: 'Digital Engineering',
    desc: 'Scalable Next.js, React, and full-stack web applications, headless e-commerce stores, and high-conversion progressive web apps.',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Shopify Plus', 'GraphQL'],
    metrics: [{ val: '<1.0s', label: 'Load Time' }, { val: '99.9%', label: 'Uptime' }],
    href: '/services/web-development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format',
    badge: 'Flagship Service',
    color: '#6366f1',
  },
  {
    title: 'ERPNext Implementation & Customization',
    category: 'Enterprise Platforms',
    desc: 'Complete open-source ERP implementation covering Financials, ZATCA e-Invoicing compliance, HRMS & Payroll, Inventory, and Manufacturing.',
    tags: ['Frappe Framework', 'ZATCA Phase 1 & 2', 'Financials', 'Supply Chain', 'HRMS'],
    metrics: [{ val: '$0', label: 'License Fee' }, { val: '40%', label: 'OpEx Saved' }],
    href: '/services/erpnext',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format',
    badge: 'ZATCA Certified',
    color: '#10b981',
  },
  {
    title: 'AI Automation & Autonomous Agents',
    category: 'Artificial Intelligence',
    desc: 'Custom LLM agent workflows, private enterprise RAG knowledge bases, intelligent document OCR extraction, and multilingual conversational AI.',
    tags: ['LangGraph', 'Enterprise RAG', 'OCR / Vision', 'WhatsApp AI', 'Llama 3 / GPT-4o'],
    metrics: [{ val: '60%', label: 'Workload Deflected' }, { val: '99.2%', label: 'Accuracy' }],
    href: '/services/ai-automation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&auto=format',
    badge: 'High Impact',
    color: '#818cf8',
  },
];

const infrastructureServices = [
  {
    id: '01',
    title: 'Network Security & Firewall Architecture',
    desc: 'Cisco and multi-vendor installations of any scale. We deploy next-gen firewalls, zero-trust VPNs, and intrusion prevention systems to secure corporate data.',
    tags: ['Cisco Certified', 'Zero Trust', 'Palo Alto', 'Fortinet', 'SIEM & SOC'],
    features: ['Next-Gen Firewall Deployment', '24/7 Security Operations Monitoring', 'Vulnerability Assessment & Penetration Testing', 'Regulatory Compliance Auditing'],
  },
  {
    id: '02',
    title: '24/7 Service Level Agreements (SLAs)',
    desc: 'Guaranteed uptime with on-site resident engineers, automated network monitoring, rapid incident response, and proactive hardware maintenance.',
    tags: ['24/7/365 On-Call', 'Resident Engineers', 'Remote Telemetry', '99.99% Uptime'],
    features: ['Guaranteed 15-minute response SLA', 'Dedicated resident network engineers', 'Proactive bandwidth & packet loss alerting', 'Quarterly executive infrastructure reports'],
  },
  {
    id: '03',
    title: 'Comms Room & Data Center Engineering',
    desc: 'Structured cabling, fiber optic backbones, precision cooling, CCTV integration, access control, and complete server room infrastructure deployment.',
    tags: ['Server Racks', 'Fiber Backbone', 'Access Control', 'Precision Cooling'],
    features: ['Clean rack cable management', 'Environmental temperature & humidity sensors', 'Biometric door access & IP surveillance', 'Automated backup power (UPS & Generator)'],
  },
  {
    id: '04',
    title: 'Data Cabling & Structured Cabling',
    desc: 'Professional multi-pair trunk cabling, Cat6/Cat6A/Cat7 copper installations, and cross-building connections certified to international standards.',
    tags: ['Cat6A / Cat7', 'Multi-Floor Trunking', 'Fluke Certified', 'Patch Panels'],
    features: ['Comprehensive site surveys & layout blueprints', 'Fluke network certification testing', 'Numbered & color-coded patch panels', '25-year manufacturer system warranty'],
  },
  {
    id: '05',
    title: 'IT Infrastructure & Network Audits',
    desc: 'Detailed vulnerability analysis, hardware lifecycle auditing, and software license compliance to eliminate risks and optimize IT expenditure.',
    tags: ['Risk Assessment', 'License Compliance', 'Bandwidth Profiling', 'Disaster Recovery'],
    features: ['End-to-end hardware & software asset inventory', 'Network topology mapping & bottleneck detection', 'Disaster recovery & backup validation', 'Prioritized remediation roadmap'],
  },
  {
    id: '06',
    title: 'Fiber Optic Design & Splicing',
    desc: 'Single-mode and multi-mode fiber optic cabling systems with fusion splicing, OTDR testing, and ultra-high-speed campus interconnections.',
    tags: ['Single-mode', 'Multi-mode', 'Fusion Splicing', 'OTDR Certified'],
    features: ['Precision core-alignment fusion splicing', 'OTDR loss & reflection certification', 'Armored underground & aerial cable runs', 'Emergency fiber break repair SLA'],
  },
  {
    id: '07',
    title: 'Enterprise CCTV & IP Surveillance',
    desc: 'Commercial 4K IP camera network design, NVR storage arrays, video analytics, AI motion tracking, and centralized remote monitoring.',
    tags: ['4K IP Cameras', 'NVR RAID Storage', 'AI Video Analytics', 'Mobile App Access'],
    features: ['Day/Night infrared & starlight sensors', 'License plate & facial recognition analytics', 'Redundant RAID storage servers', 'Encrypted cloud & remote smartphone feeds'],
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content">
      <Navbar />

      {/* Hero (Dark) */}
      <section className="pt-32 pb-24 bg-[#0a0a0a] relative overflow-hidden" aria-labelledby="services-hero-heading">
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
            <span className="text-[#818cf8] text-xs font-semibold">Services</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-3xl"
          >
            <span className="badge badge-primary badge-lg mb-6 uppercase tracking-wider">
              Comprehensive Technology Solutions
            </span>
            <h1 id="services-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#e8e8e8] leading-[1.08] tracking-tight">
              Engineering Digital Products &amp; <span className="gradient-text">Enterprise Infrastructure</span>
            </h1>
            <p className="text-[#9a9a9a] text-base md:text-lg leading-relaxed mb-8">
              From cutting-edge digital transformation — custom web applications, ZATCA-compliant ERPNext, and agentic AI automation — to mission-critical Cisco enterprise networking and 24/7 SLA operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Digital Transformation Services (Light Section) */}
      <section className="section-light py-24 relative z-10" aria-labelledby="featured-services-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="badge badge-primary mb-4">Digital Transformation</span>
            <h2 id="featured-services-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d]">
              Our Core Digital Capabilities
            </h2>
            <p className="text-[#6b7280] text-base mt-3 max-w-2xl mx-auto">
              Explore our dedicated digital engineering practices designed to build scalable, high-conversion software platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="client-logo-card flex-col items-start text-left p-0 rounded-2xl bg-white border border-[#e5e7eb] overflow-hidden hover:border-[#6366f1]/50 group"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {service.category}
                  </span>
                  <span
                    className="absolute top-4 right-4 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full text-white"
                    style={{ background: service.color }}
                  >
                    {service.badge}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white">
                    {service.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-xl font-bold">{m.val}</div>
                        <div className="text-[10px] text-white/70">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between w-full">
                  <div>
                    <h3 className="text-xl font-bold text-[#0d0d0d] mb-3 group-hover:text-[#6366f1] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {service.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#f3f4f6] text-[#374151]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={service.href}
                    className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold text-white transition-all flex items-center justify-center gap-2"
                    style={{ background: service.color }}
                  >
                    Explore Detailed Page &amp; Solutions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Infrastructure & Networking (Light Gray Section) */}
      <section className="section-light-gray py-24 relative z-10" aria-labelledby="infrastructure-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="badge badge-primary mb-4">Infrastructure &amp; Security</span>
            <h2 id="infrastructure-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d]">
              Enterprise Networking &amp; Managed IT Solutions
            </h2>
            <p className="text-[#6b7280] text-base mt-3 max-w-2xl mx-auto">
              Trusted by leading Pakistani and international corporations for 15+ years. Cisco-certified engineers and 24/7 on-site resident support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructureServices.map((infra, i) => (
              <motion.div
                key={infra.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-[#e5e7eb] rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-[#6366f1]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[#6366f1] opacity-30">{infra.id}</span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#f3f4f6] text-[#4b5563]">
                      Enterprise
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0d0d0d] mb-2">{infra.title}</h3>
                  <p className="text-[#6b7280] text-xs leading-relaxed mb-6">{infra.desc}</p>

                  <div className="space-y-2 pt-4 border-t border-[#f3f4f6] mb-6">
                    {infra.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-[#374151]">
                        <svg className="w-3.5 h-3.5 text-[#6366f1] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 pt-4 border-t border-[#f3f4f6]">
                  {infra.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-[#f8f9fa] border border-[#e5e7eb] text-[#6b7280]">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Consultation CTA (Dark Section) */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f] relative overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <span className="text-[#818cf8] text-xs font-bold tracking-widest uppercase mb-4 block">// LET&apos;S COLLABORATE</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Need a Tailored IT or Software Solution?
          </h2>
          <p className="text-[#9a9a9a] text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Our principal technical architects are available to review your existing architecture, calculate cost savings, and map out your digital roadmap.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn btn-primary btn-lg"
            >
              Contact Our Solutions Team
            </Link>
            <a
              href="tel:+923009221193"
              className="btn btn-outline btn-lg"
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
