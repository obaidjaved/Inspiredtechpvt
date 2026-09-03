'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Link from 'next/link';

const offices = [
  {
    city: 'Karachi, Pakistan (Head Office)',
    address: 'Office A9, Lateefi Society, Main Shahrah-e-Faisal / Gulistan-e-Johar, Karachi 75400',
    phones: ['+92 300 9221193', '+92 320 8280254', '+92 333 233 8340'],
    email: 'contact@inspired.com.pk',
    hours: 'Mon – Fri, 9:00 AM – 6:00 PM PKT',
    badge: 'Global HQ',
  },
  {
    city: 'New Jersey, United States',
    address: '80 Addison Avenue, Rockaway, NJ 07866',
    phones: ['+1 (973) 626-0873'],
    email: 'usa@inspired.com.pk',
    hours: 'Mon – Fri, 9:00 AM – 5:00 PM EST',
    badge: 'Americas',
  },
  {
    city: 'Germany & International',
    address: 'European Representative Office',
    phones: ['+49 1575 5769970'],
    email: 'eu@inspired.com.pk',
    hours: 'Mon – Fri, 9:00 AM – 5:00 PM CET',
    badge: 'Europe',
  },
];

const process = [
  {
    step: '01',
    title: 'Schedule Discovery Call',
    description: 'We learn about your business goals, technical constraints, timeline, and budget in a focused 30-minute session.',
  },
  {
    step: '02',
    title: 'Architecture & Project Blueprint',
    description: 'Our principal architects create a detailed solution proposal, sprint roadmap, team allocation, and fixed milestones.',
  },
  {
    step: '03',
    title: 'Agile Execution & Scale',
    description: 'Bi-weekly demos, staging environment access, 24/7 SLA uptime monitoring, and continuous engineering iterations.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      } else {
        alert('Something went wrong. Please try again or email us directly at contact@inspired.com.pk');
      }
    } catch {
      alert('Something went wrong. Please try again or email us directly at contact@inspired.com.pk');
    }
    setIsSubmitting(false);
  };

  return (
    <main id="main-content">
      <Navbar />

      {/* Hero (Dark) */}
      <section className="pt-32 pb-24 bg-[#0a0a0a] relative overflow-hidden" aria-labelledby="contact-hero-heading">
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
            <span className="text-[#818cf8] text-xs font-semibold">Contact Us</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-3xl"
          >
            <span className="badge badge-primary badge-lg mb-6 uppercase tracking-wider">
              Let&apos;s Work Together
            </span>
            <h1 id="contact-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#e8e8e8] leading-[1.08] tracking-tight">
              Start Your Next Project with <span className="gradient-text">Inspired Technology</span>
            </h1>
            <p className="text-[#9a9a9a] text-base md:text-lg leading-relaxed mb-8">
              Have a question, need an architecture review, or looking to deploy an enterprise digital system? Connect directly with our team in Karachi, the US, Saudi Arabia, or Germany.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3-Step Process (Light Gray Section) */}
      <section className="section-light-gray py-16 border-b border-[#e5e7eb]" aria-label="Our onboarding process">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#e5e7eb] flex items-center justify-center font-bold text-[#6366f1] text-base shrink-0 shadow-sm">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0d0d0d] mb-1">{step.title}</h3>
                  <p className="text-[#6b7280] text-xs leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Contact Info (Light Section) */}
      <section className="section-light py-24 relative z-10" aria-labelledby="form-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <span className="badge badge-primary mb-3">Send a Message</span>
                <h2 id="form-heading" className="text-3xl font-bold text-[#0d0d0d] mt-2">
                  Tell Us About Your Project
                </h2>
                <p className="text-[#6b7280] text-sm mt-2">
                  Fill out the form below and an engineer will respond within 24 hours with next steps.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">Thank you! Your message has been sent.</h3>
                  <p className="text-emerald-700 text-sm max-w-md mx-auto mb-6">
                    Our technical solutions team has received your inquiry and will contact you via email or phone within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-success"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label htmlFor="name" className="label">
                        <span className="label-text text-xs font-bold uppercase tracking-wider text-[#374151]">Full Name *</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input input-bordered w-full"
                        placeholder="Muhammad Ali"
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="email" className="label">
                        <span className="label-text text-xs font-bold uppercase tracking-wider text-[#374151]">Corporate Email *</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input input-bordered w-full"
                        placeholder="ali@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label htmlFor="phone" className="label">
                        <span className="label-text text-xs font-bold uppercase tracking-wider text-[#374151]">Phone / WhatsApp</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input input-bordered w-full"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="company" className="label">
                        <span className="label-text text-xs font-bold uppercase tracking-wider text-[#374151]">Company / Organization</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="input input-bordered w-full"
                        placeholder="Enterprise Corp"
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label htmlFor="service" className="label">
                      <span className="label-text text-xs font-bold uppercase tracking-wider text-[#374151]">Primary Service of Interest *</span>
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="select select-bordered w-full"
                    >
                      <option value="">Select a service category</option>
                      <option value="web-development">Web Development &amp; Digital Engineering</option>
                      <option value="erpnext">ERPNext &amp; ZATCA E-Invoicing Implementation</option>
                      <option value="ai-automation">AI Automation &amp; Agentic Workflows</option>
                      <option value="network-security">Network Security &amp; Cisco Infrastructure</option>
                      <option value="sla">24/7 Service Level Agreement (SLA)</option>
                      <option value="cabling">Structured Data Cabling &amp; Comms Room</option>
                      <option value="cctv">IP CCTV Surveillance Systems</option>
                      <option value="consulting">General Technical Consulting</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label htmlFor="message" className="label">
                      <span className="label-text text-xs font-bold uppercase tracking-wider text-[#374151]">Project Details &amp; Requirements *</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="textarea textarea-bordered w-full resize-none"
                      placeholder="Please describe your current systems, objectives, timeline, and key requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full"
                  >
                    {isSubmitting ? 'Sending Your Message...' : 'Submit Inquiry'}
                  </button>
                </form>
              )}
            </div>

            {/* Offices Sidebar */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#f8f9fa] border border-[#e5e7eb] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-[#0d0d0d] mb-4">Our Global Locations</h3>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div key={office.city} className="p-4 bg-white border border-[#e5e7eb] rounded-xl shadow-xs">
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="font-bold text-sm text-[#0d0d0d]">{office.city}</h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#f3f4f6] text-[#4b5563]">
                          {office.badge}
                        </span>
                      </div>
                      <p className="text-[#6b7280] text-xs leading-relaxed mb-2.5">{office.address}</p>
                      <div className="space-y-1 text-xs">
                        {office.phones.map((p) => (
                          <div key={p}>
                            <a href={`tel:${p.replace(/\s+/g, '')}`} className="text-[#6366f1] font-semibold hover:underline">
                              {p}
                            </a>
                          </div>
                        ))}
                        <div className="text-[#9ca3af] text-[11px] pt-1">{office.hours}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 24/7 Support Hotline Box */}
              <div className="bg-[#6366f1] text-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-300 animate-ping" />
                    <h4 className="font-bold text-base" style={{ color: '#ffffff' }}>24/7 Critical Network Support</h4>
                </div>
                <p className="text-xs leading-relaxed mb-4" style={{ color: '#ffffff' }}>
                  For active SLA corporate clients experiencing emergency network or server downtime, our on-call resident engineers are available 24/7.
                </p>
                <a
                  href="https://wa.me/4915755769970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-white text-[#6366f1] hover:bg-white/90"
                >
                  Direct WhatsApp Hotline
                </a>
              </div>

              {/* Email Contacts */}
              <div className="bg-[#f8f9fa] border border-[#e5e7eb] rounded-2xl p-6">
                <h4 className="font-bold text-sm text-[#0d0d0d] mb-3">Email Us</h4>
                <div className="space-y-2 text-sm">
                  <a href="mailto:contact@inspired.com.pk" className="flex items-center gap-2 text-[#6366f1] font-semibold hover:underline">
                    contact@inspired.com.pk
                  </a>
                  <a href="mailto:fatima@inspired.com.pk" className="flex items-center gap-2 text-[#6366f1] font-semibold hover:underline">
                    fatima@inspired.com.pk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
