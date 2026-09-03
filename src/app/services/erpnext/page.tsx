'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const modules = [
  {
    icon: '💰',
    title: 'Financial Accounting & Tax',
    desc: 'Multi-currency general ledger, automated reconciliation, accounts payable/receivable, asset management, and automated tax compliance.',
    features: ['Chart of Accounts customization', 'Automated bank feed reconciliation', 'P&L, Balance Sheet & Cash Flow reports', 'Multi-currency & multi-company consolidation'],
    tag: 'Core Financials',
  },
  {
    icon: '📦',
    title: 'Supply Chain & Inventory',
    desc: 'Real-time stock tracking across multiple warehouses, batch & serialized tracking, automated reorder triggers, and landed cost computation.',
    features: ['Multi-warehouse batch & expiry tracking', 'Automated Purchase Orders & RFQs', 'Barcode & QR scanning integration', 'Stock valuation (FIFO/Moving Average)'],
    tag: 'Logistics',
  },
  {
    icon: '👥',
    title: 'HRMS & Automated Payroll',
    desc: 'Comprehensive employee management, automated attendance (biometric integration), leave policies, expense claims, and WPS/bank payroll disbursement.',
    features: ['Biometric attendance machine sync', 'Salary slips & automated tax deductions', 'Self-service employee portal (mobile app)', 'Performance reviews & onboarding workflows'],
    tag: 'Workforce',
  },
  {
    icon: '🏭',
    title: 'Manufacturing & MRP',
    desc: 'Multi-level Bill of Materials (BOM), production planning tool, capacity planning, workstation management, and job card tracking.',
    features: ['Multi-level Bill of Materials (BOM)', 'Work order scheduling & routing', 'Scrap & byproduct accounting', 'Real-time material consumption analytics'],
    tag: 'Operations',
  },
  {
    icon: '🤝',
    title: 'CRM & Omnichannel Sales',
    desc: 'Lead tracking, quotation generation, automated sales orders, commission management, and pipeline visibility across regional teams.',
    features: ['Lead capture from web forms & WhatsApp', 'Quotation to Sales Order conversion', 'Customer loyalty & credit limit control', 'Sales analytics & territory forecasting'],
    tag: 'Growth',
  },
  {
    icon: '🏪',
    title: 'Point of Sale (POS) & Retail',
    desc: 'Offline-ready POS interface with touch screens, thermal receipt printing, shift closures, payment terminal integrations, and inventory deductions.',
    features: ['Offline transaction caching', 'Barcode scanning & quick search', 'Multiple payment methods & split bills', 'Direct integration with central ledger'],
    tag: 'Retail',
  },
];

const comparisonData = [
  { feature: 'License Cost', erpnext: '100% Open Source ($0 License)', sap: '$3,000+ / user / yr', odoo: 'Paid per-module & user' },
  { feature: 'Customizability', erpnext: 'Complete Frappe Framework code access', sap: 'Expensive ABAP consultants', odoo: 'Custom code breaks upgrades' },
  { feature: 'ZATCA Compliance', erpnext: 'Native Phase 1 & 2 integration', sap: 'Heavy custom middleware', odoo: 'Requires third-party apps' },
  { feature: 'Hosting Freedom', erpnext: 'On-premise or any private cloud', sap: 'Vendor locked-in cloud', odoo: 'Odoo.sh or restricted hosting' },
  { feature: 'Implementation Time', erpnext: '4 – 8 Weeks average', sap: '6 – 18 Months', odoo: '3 – 6 Months' },
];

const zatcaFeatures = [
  {
    title: 'Phase 1: Generation & Storage',
    desc: 'Compliant tax invoices, debit notes, credit notes with cryptographic hash, formatted UUIDs, and tamper-proof TLV Base64 QR code generation.',
  },
  {
    title: 'Phase 2: Integration & Clearance',
    desc: 'Direct API handshake with ZATCA (FATOORA portal), cryptographic stamp integration, automated invoice clearance for B2B and reporting for B2C.',
  },
  {
    title: 'Multi-Branch & Multi-Device',
    desc: 'Automated CSID onboarding for multiple POS terminals and warehouse branches across Riyadh, Jeddah, Dammam, and beyond.',
  },
];

const implementationStages = [
  {
    phase: 'Phase 01',
    title: 'Process Discovery & Gap Analysis',
    desc: 'We map every existing workflow, document business requirements, chart chart of accounts, and define custom module specifications.',
  },
  {
    phase: 'Phase 02',
    title: 'Configuration & Custom Frappe Apps',
    desc: 'We configure workflows, permissions, print formats, custom doctypes, and build tailored Frappe apps for your unique business logic.',
  },
  {
    phase: 'Phase 03',
    title: 'Data Cleansing & Migration',
    desc: 'We extract, clean, and import your historical master data (Customers, Suppliers, Items, Opening Balances) from legacy systems.',
  },
  {
    phase: 'Phase 04',
    title: 'User Acceptance Testing & Training',
    desc: 'Hands-on role-based training for executives, accountants, warehouse staff, and HR managers with tailored video tutorials.',
  },
  {
    phase: 'Phase 05',
    title: 'Go-Live & Dedicated On-Site SLA',
    desc: 'Flawless cutover with on-site resident engineers, real-time transaction monitoring, and SLA-backed maintenance.',
  },
];

const faqs = [
  {
    q: 'What is ERPNext and why should we choose it over SAP or Oracle?',
    a: 'ERPNext is an enterprise-grade, 100% open-source ERP built on the modern Frappe Python/JS framework. It eliminates expensive per-user licensing fees while delivering the full functional suite of SAP/Oracle (Accounting, HRMS, Inventory, Manufacturing, CRM) with complete data ownership and total customization freedom.',
  },
  {
    q: 'Are your ERPNext implementations compliant with Saudi ZATCA e-Invoicing?',
    a: 'Yes, 100%. We have completed multiple Phase 1 and Phase 2 ZATCA integrations across KSA. We handle CSID cryptographic certificate generation, FATOORA portal onboarding, B2B XML clearance, and B2C reporting APIs.',
  },
  {
    q: 'Can we integrate ERPNext with our existing e-commerce and POS hardware?',
    a: 'Absolutely. We regularly integrate ERPNext with Shopify, WooCommerce, custom web stores, biometric time clocks (ZKTeco), barcode scanners, thermal receipt printers, and local bank payment gateways.',
  },
  {
    q: 'Can ERPNext be deployed on our own on-premise servers in Pakistan or Saudi Arabia?',
    a: 'Yes. We support on-premise bare-metal deployments inside your server rooms, local data centers, or cloud environments like AWS, DigitalOcean, and Microsoft Azure with automated daily offsite backups.',
  },
];

export default function ERPNextServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main id="main-content">
      <Navbar />

      {/* Hero Section (Dark) */}
      <section className="pt-32 pb-24 bg-[#0a0a0a] relative overflow-hidden" aria-labelledby="erp-hero-heading">
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(16,185,129,0.2) 1px, transparent 1px)',
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
            <span className="text-emerald-400 text-xs font-semibold">ERPNext Implementation</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Certified ERPNext Consultants
              </span>

              <h1 id="erp-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#e8e8e8] leading-[1.08] tracking-tight">
                Digitize Your Entire Enterprise with <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">ERPNext</span>
              </h1>

              <p className="text-[#9a9a9a] text-base md:text-lg max-w-2xl leading-relaxed mb-8">
                Eliminate disconnected spreadsheets and expensive legacy software. We implement end-to-end ERPNext solutions — from accounting and supply chain to HRMS and manufacturing — tailored to your region and ZATCA regulations.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/contact"
                  className="bg-emerald-600 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-emerald-500 transition-all duration-200 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-[0.98] inline-flex items-center gap-2"
                >
                  Schedule an ERP Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#modules"
                  className="border border-[#2a2a2a] text-[#e8e8e8] px-7 py-4 rounded-full text-sm font-semibold hover:bg-white/5 hover:border-emerald-500/40 transition-all duration-200 active:scale-[0.98]"
                >
                  View Modules
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1f1f1f]">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-[#636363] text-xs">ERP Deployments</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-[#636363] text-xs">ZATCA Compliant</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">40%</div>
                  <div className="text-[#636363] text-xs">OpEx Reduction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-2xl bg-[#121212]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format"
                  alt="ERP dashboard analytics"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between text-xs text-white/90 mb-2">
                    <span className="font-semibold text-emerald-400">Total License Fees</span>
                    <span className="font-bold text-white">$0.00 / user (Open Source)</span>
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

      {/* Modules Grid (Light Section) */}
      <section id="modules" className="section-light py-24 relative z-10" aria-labelledby="modules-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="badge-light mb-4" style={{ color: '#059669', borderColor: '#a7f3d0', background: '#ecfdf5' }}>Comprehensive Suite</span>
            <h2 id="modules-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d]">
              All Business Modules in One Single Unified Database
            </h2>
            <p className="text-[#6b7280] text-base mt-3 max-w-2xl mx-auto leading-relaxed">
              Experience seamless data flow between finance, supply chain, production, and human resources without double entry or reconciliation errors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="client-logo-card flex-col items-start text-left p-8 rounded-2xl bg-white border border-[#e5e7eb] hover:border-emerald-500/40"
              >
                <div className="flex items-center justify-between w-full mb-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-2xl">
                    {mod.icon}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
                    {mod.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">{mod.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-6">{mod.desc}</p>

                <div className="space-y-2 w-full pt-4 border-t border-[#f0f0f0]">
                  {mod.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-medium text-[#374151]">
                      <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* ZATCA & Regional Compliance Spotlight (Light Gray Section) */}
      <section className="section-light-gray py-24 relative z-10" aria-labelledby="zatca-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="badge-light mb-4" style={{ color: '#059669', borderColor: '#a7f3d0', background: '#ecfdf5' }}>Middle East &amp; Saudi Arabia</span>
              <h2 id="zatca-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d] leading-tight">
                Official ZATCA Phase 1 &amp; Phase 2 E-Invoicing Integration
              </h2>
              <p className="text-[#6b7280] text-sm leading-relaxed mt-4 mb-8">
                Operating in Saudi Arabia? Avoid severe fines with our compliant Frappe ZATCA e-Invoicing app. We handle end-to-end CSID cryptographic device onboarding and real-time clearance.
              </p>

              <div className="space-y-4">
                {zatcaFeatures.map((feat) => (
                  <div key={feat.title} className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm">
                    <h4 className="text-base font-bold text-[#0d0d0d] mb-1">{feat.title}</h4>
                    <p className="text-[#6b7280] text-xs leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white border border-[#e5e7eb] rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-[#0d0d0d] mb-6">Why Enterprises Switch from SAP/Odoo to ERPNext</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-[#e5e7eb]">
                        <th className="pb-3 text-[#6b7280]">Metric</th>
                        <th className="pb-3 text-emerald-600 font-bold">ERPNext</th>
                        <th className="pb-3 text-[#9ca3af]">SAP / Oracle</th>
                        <th className="pb-3 text-[#9ca3af]">Odoo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f3f4f6]">
                      {comparisonData.map((row) => (
                        <tr key={row.feature}>
                          <td className="py-3.5 font-semibold text-[#374151]">{row.feature}</td>
                          <td className="py-3.5 text-emerald-700 font-bold">{row.erpnext}</td>
                          <td className="py-3.5 text-[#6b7280]">{row.sap}</td>
                          <td className="py-3.5 text-[#6b7280]">{row.odoo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Phase Implementation Methodology (Dark Section) */}
      <section className="py-24 bg-[#0a0a0a] relative z-10" aria-labelledby="methodology-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-3 block">// HOW WE EXECUTE</span>
            <h2 id="methodology-heading" className="text-3xl md:text-4xl font-bold text-[#e8e8e8]">
              Our Proven ERP Implementation Methodology
            </h2>
            <p className="text-[#9a9a9a] text-sm mt-3 max-w-xl mx-auto">
              Guaranteed on-time, on-budget rollout with zero disruption to active business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {implementationStages.map((stage) => (
              <div
                key={stage.phase}
                className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-6 hover:border-emerald-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-3">{stage.phase}</span>
                  <h3 className="text-base font-bold text-white mb-2">{stage.title}</h3>
                  <p className="text-[#9a9a9a] text-xs leading-relaxed">{stage.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#1f1f1f] text-[10px] text-[#636363]">
                  ✓ Milestone Sign-off
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion (Light Section) */}
      <section className="section-light py-24 relative z-10" aria-labelledby="erp-faq-heading">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="badge-light mb-4" style={{ color: '#059669', borderColor: '#a7f3d0', background: '#ecfdf5' }}>Got Questions?</span>
            <h2 id="erp-faq-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d]">
              ERPNext Implementation FAQs
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
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#0d0d0d] hover:text-emerald-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-200 ${
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
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4 block">// READY FOR DIGITAL TRANSFORMATION?</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Book a Live Tailored ERPNext Demo for Your Industry
          </h2>
          <p className="text-[#9a9a9a] text-base max-w-xl mx-auto mb-10 leading-relaxed">
            See how ERPNext handles your specific invoices, warehouse workflows, payroll, and reports in a live interactive walkthrough with our principal ERP consultant.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-emerald-600 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-emerald-500 transition-all duration-200 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-[0.98]"
            >
              Book Live ERP Walkthrough
            </Link>
            <a
              href="tel:+923009221193"
              className="border border-[#2a2a2a] text-white px-7 py-4 rounded-full text-sm font-semibold hover:bg-white/5 transition-all"
            >
              Call Us: +92 300 9221193
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
