'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const clientLogos = [
  { name: 'National Medical Centre', url: '/clients/clients_img1.jpg' },
  { name: 'Benztech Solutions', url: '/clients/clients_img2.jpg' },
  { name: 'Foundation Securities', url: '/clients/clients_img3.jpg' },
  { name: 'Kolson', url: '/clients/clients_img4.png' },
  { name: 'Amna', url: '/clients/clients_img5.png' },
  { name: 'CP', url: '/clients/clients_img6.png' },
];

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '15+', label: 'Years Experience' },
  { value: '1,000+', label: 'Projects Completed' },
  { value: '24/7', label: 'Resident Support' },
];

const coreValues = [
  {
    icon: '🎯',
    title: 'Customer-Obsessed Delivery',
    desc: 'We measure success by tangible business outcomes: reduced downtime, cost savings, and accelerated time-to-market.',
  },
  {
    icon: '🛡️',
    title: 'Zero-Compromise Security',
    desc: 'From physical server rooms and structured cabling to zero-trust cloud architectures, security is foundational in everything we build.',
  },
  {
    icon: '⚡',
    title: 'Agile & High-Velocity',
    desc: 'Rapid sprint cycles, transparent communication, and continuous delivery to keep our clients ahead of market disruptions.',
  },
  {
    icon: '🌐',
    title: 'Global Delivery, Localized Care',
    desc: 'Deep understanding of regional regulations — from ZATCA mandates in Saudi Arabia to local IT networks in Pakistan and North America.',
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <Navbar />

      {/* Hero Section (Dark) */}
      <section className="pt-32 pb-24 bg-[#0a0a0a] relative overflow-hidden" aria-labelledby="about-hero-heading">
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
            <span className="text-[#818cf8] text-xs font-semibold">About Us</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-3xl"
          >
            <span className="badge badge-primary badge-lg mb-6 uppercase tracking-wider">
              About Inspired Technology
            </span>
            <h1 id="about-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#e8e8e8] leading-[1.08] tracking-tight">
              Powering Enterprise Growth Through <span className="gradient-text">Engineering Excellence</span>
            </h1>
            <p className="text-[#9a9a9a] text-base md:text-lg leading-relaxed mb-8">
              Founded in 2009, Inspired Technology is a global technology consulting and digital engineering partner. We combine deep enterprise infrastructure knowledge with modern software craft to build enduring digital capabilities for world-class brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar (Dark) */}
      <section className="bg-[#121212] border-y border-[#1f1f1f] py-12" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {stat.value}
                </div>
                <div className="text-[#9a9a9a] text-xs font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story & CEO Message (Light Section) */}
      <section className="section-light py-24 relative z-10" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="badge badge-primary mb-4">Our Heritage</span>
              <h2 id="story-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d] leading-tight">
                15+ Years of Proven Technical Leadership &amp; Innovation
              </h2>
              <p className="text-[#6b7280] text-sm leading-relaxed mt-4 mb-4">
                Inspired Technology started with a straightforward vision: to become the most trusted networking and infrastructure solution provider for corporate businesses. Over fifteen years, we have grown into a multi-national engineering partner with active operations across Pakistan, the United States, and Saudi Arabia.
              </p>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-8">
                Today, we lead the industry in full-spectrum technology solutions — from Cisco-certified structured fiber backbones and 24/7 SLA contracts to high-performance Next.js web applications, ZATCA-compliant ERP implementations, and cutting-edge autonomous AI agents.
              </p>

              <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-[#e5e7eb]">
                <p className="text-[#1f2937] text-sm italic mb-4 leading-relaxed">
                  &ldquo;We don&apos;t just deliver software or install hardware — we build resilient digital foundations that enable our clients to scale securely and dominate their respective industries.&rdquo;
                </p>
                <div>
                  <div className="font-bold text-[#0d0d0d] text-sm">Muhammad J. Khan</div>
                  <div className="text-[#6b7280] text-xs">Director &amp; CEO, Inspired Technology Pvt. Ltd.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#e5e7eb] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format"
                  alt="Inspired Technology engineering team"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#6366f1] text-white p-6 rounded-2xl shadow-xl hidden md:block max-w-xs">
                <div className="text-2xl font-bold mb-1">Cisco &amp; ISO</div>
                <div className="text-xs text-white/80">Certified Quality Standards &amp; Enterprise-grade SLA Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Leading Enterprises — Client Logos (Light Section) */}
      <section className="section-light py-20 border-t border-[#f0f0f0]" aria-label="Trusted by leading organizations">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="badge badge-primary mb-4">Trusted By</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3 text-[#0d0d0d]">Our Best Clients</h2>
            <p className="text-[#6b7280] text-sm mt-2 max-w-md mx-auto">
              Proud to deliver mission-critical solutions to leading corporate institutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="client-logo-card">
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="h-12 md:h-14 w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values (Light Gray Section) */}
      <section className="section-light-gray py-24 relative z-10" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="badge badge-primary mb-4">Our Principles</span>
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d]">
              What Sets Us Apart
            </h2>
            <p className="text-[#6b7280] text-sm mt-3 max-w-xl mx-auto">
              The foundational values that guide our engineering culture and client partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="bg-white border border-[#e5e7eb] rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-[#6366f1]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 flex items-center justify-center text-2xl mb-5">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0d0d0d] mb-2">{val.title}</h3>
                  <p className="text-[#6b7280] text-xs leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Contact CTA (Dark Section) */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f] relative overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <span className="text-[#818cf8] text-xs font-bold tracking-widest uppercase mb-4 block">// WORK WITH US</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Partner With a World-Class Engineering Team
          </h2>
          <p className="text-[#9a9a9a] text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you need custom web applications, ZATCA ERP implementation, or enterprise infrastructure support — our engineers are ready.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn btn-primary btn-lg"
            >
              Get in Touch Today
            </Link>
            <Link
              href="/services"
              className="btn btn-outline btn-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
