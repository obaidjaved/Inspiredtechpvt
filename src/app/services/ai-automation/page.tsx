'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const aiCapabilities = [
  {
    icon: '🤖',
    title: 'Autonomous AI Agents & Workflows',
    desc: 'Intelligent multi-agent systems that autonomously plan, retrieve context, call APIs, execute complex multi-step business logic, and verify results.',
    features: ['Multi-agent orchestration (LangGraph / CrewAI)', 'Automated email & CRM ticket resolution', 'Database querying via Natural Language (Text-to-SQL)', 'Self-correcting error recovery mechanisms'],
    tag: 'Agentic AI',
  },
  {
    icon: '📚',
    title: 'Enterprise RAG & Private Knowledge Bases',
    desc: 'Connect your internal manuals, contracts, SOPs, and database tables to private, hallucination-resistant LLMs with strict role-based access.',
    features: ['Hybrid semantic + keyword vector search', 'Chunking & metadata enrichment pipelines', 'Private on-premise LLM deployment (Ollama / vLLM)', 'Strict access control & citations provenance'],
    tag: 'Knowledge AI',
  },
  {
    icon: '👁️',
    title: 'Computer Vision & Intelligent OCR',
    desc: 'Extract structured tables and data from complex scanned PDFs, invoices, IDs, and sensor feeds with 99%+ extraction accuracy.',
    features: ['Automated invoice & receipt parsing', 'KYC & ID document verification', 'Visual defect inspection for manufacturing', 'Table extraction from complex handwritten forms'],
    tag: 'Vision & OCR',
  },
  {
    icon: '💬',
    title: 'Omnichannel Conversational AI',
    desc: 'Human-grade AI chatbots deployed across WhatsApp, Web chat, Slack, and Zendesk with native Urdu, Arabic, and English fluency.',
    features: ['WhatsApp Business API integration', 'Human-in-the-loop escalation triggers', 'Live CRM & ERP data lookup', 'Voice call speech-to-speech agents'],
    tag: 'Customer AI',
  },
  {
    icon: '📈',
    title: 'Predictive Analytics & Machine Learning',
    desc: 'Forecast customer churn, predict supply chain inventory stockouts, detect financial fraud, and personalize user experiences at scale.',
    features: ['Time-series sales forecasting', 'Credit risk & fraud scoring models', 'Predictive maintenance for industrial hardware', 'Customer lifetime value & churn modeling'],
    tag: 'Predictive AI',
  },
  {
    icon: '⚙️',
    title: 'Robotic Process Automation (RPA)',
    desc: 'Combine classic robotic workflow scripts with cognitive AI to automate repetitive back-office data entry between disconnected legacy apps.',
    features: ['Cross-application data synchronization', 'Automated reconciliation & audit trails', 'Legacy desktop app automation', 'Trigger-based event webhooks'],
    tag: 'Efficiency',
  },
];

const aiTechStack = [
  {
    category: 'LLMs & Foundation Models',
    technologies: [
      { name: 'OpenAI GPT-4o', desc: 'State-of-the-art reasoning, coding & vision' },
      { name: 'Anthropic Claude 3.5 Sonnet', desc: 'Industry-leading code generation & analysis' },
      { name: 'DeepSeek & Llama 3', desc: 'Open-weight models for cost-efficient deployment' },
      { name: 'Mistral Large & Embeddings', desc: 'Fast, multilingual enterprise tokenization' },
      { name: 'Whisper & ElevenLabs', desc: 'Real-time speech-to-text and voice synthesis' },
      { name: 'Local Ollama & vLLM', desc: '100% air-gapped on-premise model execution' },
    ],
  },
  {
    category: 'Frameworks & Orchestration',
    technologies: [
      { name: 'LangChain & LangGraph', desc: 'Stateful multi-actor agent workflows' },
      { name: 'LlamaIndex', desc: 'Data framework for LLM-based applications' },
      { name: 'CrewAI / AutoGen', desc: 'Collaborative autonomous multi-agent teams' },
      { name: 'Python & PyTorch', desc: 'Core machine learning model development' },
      { name: 'FastAPI & Celery', desc: 'Async distributed task execution for AI' },
      { name: 'Hugging Face Transformers', desc: 'Custom model fine-tuning & quantization' },
    ],
  },
  {
    category: 'Vector Databases & Memory',
    technologies: [
      { name: 'Qdrant', desc: 'High-performance vector search engine' },
      { name: 'PGVector (PostgreSQL)', desc: 'Enterprise relational vectors in existing DBs' },
      { name: 'Pinecone', desc: 'Managed serverless vector database' },
      { name: 'ChromaDB', desc: 'Fast local embedding vector store' },
      { name: 'Redis Vector Search', desc: 'Sub-millisecond vector indexing & caching' },
      { name: 'Unstructured.io', desc: 'Document ingestion & PDF parsing engine' },
    ],
  },
];

const securityPillars = [
  {
    icon: '🛡️',
    title: 'Zero Data Retention & Privacy',
    desc: 'Your proprietary company data is never used to train third-party models. We configure strict enterprise zero-retention API policies and HIPAA/GDPR safeguards.',
  },
  {
    icon: '🏢',
    title: 'On-Premise / Private VPC Hosting',
    desc: 'Deploy open-source LLMs (Llama 3, DeepSeek, Mistral) on your own private GPU servers or local Pakistan/Saudi data centers for complete data sovereignty.',
  },
  {
    icon: '🔒',
    title: 'Deterministic Guardrails',
    desc: 'We implement guardrail layers (NeMo Guardrails / Llama Guard) to filter hallucinations, prevent prompt injection attacks, and enforce brand safety.',
  },
  {
    icon: '📊',
    title: 'Full Observability & Audit Logs',
    desc: 'Every single LLM prompt, response, latency metric, and token cost is tracked via LangSmith / OpenTelemetry dashboards for complete governance.',
  },
];

const aiProcess = [
  {
    step: '01',
    title: 'AI Readiness & Feasibility Audit',
    desc: 'We evaluate your business workflows, inspect your data quality, quantify ROI, and identify high-leverage automation opportunities.',
  },
  {
    step: '02',
    title: 'Rapid Proof-of-Concept (2 Weeks)',
    desc: 'We build an interactive working prototype using your actual sample documents or CRM data to validate accuracy and speed.',
  },
  {
    step: '03',
    title: 'Production Engineering & Integration',
    desc: 'We engineer scalable API pipelines, vector stores, guardrails, and integrate seamlessly into your ERP, website, or mobile app.',
  },
  {
    step: '04',
    title: 'Continuous Evaluation & Fine-Tuning',
    desc: 'We establish human-in-the-loop feedback loops, automated evaluation benchmarks, and continuous model fine-tuning.',
  },
];

const faqs = [
  {
    q: 'Will our proprietary business data be shared with OpenAI or used for public training?',
    a: 'Never. We deploy enterprise OpenAI/Azure endpoints with strict Zero Data Retention policies, or deploy self-hosted models (Llama 3 / DeepSeek) inside your private virtual private cloud (VPC) where data never leaves your infrastructure.',
  },
  {
    q: 'How do you prevent hallucinations in customer-facing and financial AI applications?',
    a: 'We use Retrieval-Augmented Generation (RAG) which forces the LLM to only answer based on verified retrieved facts from your database, accompanied by strict semantic guardrails and automated confidence scoring that escalates to human agents when confidence falls below 95%.',
  },
  {
    q: 'Can AI chatbots understand and converse in Roman Urdu and regional dialects?',
    a: 'Yes. Our custom conversational models are specifically tuned for Roman Urdu, standard Urdu, Arabic (Gulf & Egyptian dialects), and English with automated language switching and localized business terminology.',
  },
  {
    q: 'What is the typical timeline and cost to implement an enterprise AI agent?',
    a: 'Most PoCs are live in 2 weeks. Full production integrations with ERP/CRM workflows and vector databases typically take 4 to 8 weeks depending on integration complexity.',
  },
];

export default function AIAutomationPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main id="main-content">
      <Navbar />

      {/* Hero Section (Dark) */}
      <section className="pt-32 pb-24 bg-[#0a0a0a] relative overflow-hidden" aria-labelledby="ai-hero-heading">
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(129,140,248,0.25) 1px, transparent 1px)',
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
            <span className="text-[#818cf8] text-xs font-semibold">AI Automation</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 bg-[#6366f1]/15 border border-[#6366f1]/30 text-[#d0d1fb] text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#818cf8] animate-pulse" />
                Enterprise AI Solutions
              </span>

              <h1 id="ai-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#e8e8e8] leading-[1.08] tracking-tight">
                Empower Your Business With <span className="gradient-text">Autonomous AI Agents</span> &amp; Automation
              </h1>

              <p className="text-[#9a9a9a] text-base md:text-lg max-w-2xl leading-relaxed mb-8">
                Transform repetitive operations with custom LLM agents, enterprise RAG knowledge bases, intelligent document OCR, and multilingual conversational AI that scale 24/7 without growing headcount.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/contact"
                  className="bg-[#6366f1] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#5558e6] transition-all duration-200 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] active:scale-[0.98] inline-flex items-center gap-2"
                >
                  Schedule AI Feasibility Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#capabilities"
                  className="border border-[#2a2a2a] text-[#e8e8e8] px-7 py-4 rounded-full text-sm font-semibold hover:bg-white/5 hover:border-[#6366f1]/40 transition-all duration-200 active:scale-[0.98]"
                >
                  Explore AI Capabilities
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1f1f1f]">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">60%</div>
                  <div className="text-[#636363] text-xs">Workload Automated</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">&lt;2s</div>
                  <div className="text-[#636363] text-xs">AI Response Latency</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">99.2%</div>
                  <div className="text-[#636363] text-xs">Extraction Accuracy</div>
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
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&auto=format"
                  alt="AI neural network and autonomous agents"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between text-xs text-white/90 mb-2">
                    <span className="font-semibold text-[#818cf8]">Autonomous Agent Accuracy</span>
                    <span className="font-bold text-emerald-400">99.4% Validated</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#6366f1] h-full w-[99.4%]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid (Light Section) */}
      <section id="capabilities" className="section-light py-24 relative z-10" aria-labelledby="ai-capabilities-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="badge-light mb-4">Enterprise Capabilities</span>
            <h2 id="ai-capabilities-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d]">
              AI Solutions Designed for Real Business Impact
            </h2>
            <p className="text-[#6b7280] text-base mt-3 max-w-2xl mx-auto leading-relaxed">
              We engineer custom cognitive systems that integrate directly with your ERP, databases, customer communications, and back-office pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((cap, i) => (
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
                    {cap.tag}
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

      {/* AI Tech Stack & Model Support (Light Gray Section) */}
      <section className="section-light-gray py-24 relative z-10" aria-labelledby="ai-stack-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="badge-light mb-4">Enterprise AI Stack</span>
            <h2 id="ai-stack-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d]">
              Supported Models &amp; AI Frameworks
            </h2>
            <p className="text-[#6b7280] text-sm mt-3 max-w-xl mx-auto">
              We leverage leading frontier models and open-weight architectures optimized for speed, cost, and privacy.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {aiTechStack.map((stack, idx) => (
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
            {aiTechStack[activeTab].technologies.map((tech) => (
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

      {/* Security & Privacy Pillars (Dark Section) */}
      <section className="py-24 bg-[#0a0a0a] relative z-10" aria-labelledby="security-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#818cf8] text-xs font-bold tracking-widest uppercase mb-3 block">// ENTERPRISE GOVERNANCE</span>
            <h2 id="security-heading" className="text-3xl md:text-4xl font-bold text-[#e8e8e8]">
              Air-Gapped Security &amp; Data Privacy Standards
            </h2>
            <p className="text-[#9a9a9a] text-sm mt-3 max-w-xl mx-auto">
              We design AI systems with zero-trust architecture, strict data sovereignty, and deterministic guardrails.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#6366f1]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 flex items-center justify-center text-2xl mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-[#9a9a9a] text-xs leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process (Light Section) */}
      <section className="section-light py-24 relative z-10" aria-labelledby="ai-process-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="badge-light mb-4">Implementation Framework</span>
            <h2 id="ai-process-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d]">
              From Initial Audit to Scaled Production AI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiProcess.map((step) => (
              <div
                key={step.step}
                className="bg-[#f8f9fa] border border-[#e5e7eb] rounded-2xl p-7 flex flex-col justify-between hover:border-[#6366f1]/30 transition-colors"
              >
                <div>
                  <span className="text-3xl font-bold text-[#6366f1] mb-4 block">{step.step}</span>
                  <h3 className="text-lg font-bold text-[#0d0d0d] mb-2">{step.title}</h3>
                  <p className="text-[#6b7280] text-xs leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#e5e7eb] text-[11px] font-semibold text-[#4f46e5]">
                  ✓ Verified Stage Gate
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion (Light Gray Section) */}
      <section className="section-light-gray py-24 relative z-10" aria-labelledby="ai-faq-heading">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="badge-light mb-4">Enterprise AI FAQs</span>
            <h2 id="ai-faq-heading" className="text-3xl md:text-4xl font-bold mt-3 text-[#0d0d0d]">
              Frequently Asked Questions About AI Automation
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
          <span className="text-[#818cf8] text-xs font-bold tracking-widest uppercase mb-4 block">// START YOUR AI JOURNEY</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Ready to Automate Your Business Operations with AI?
          </h2>
          <p className="text-[#9a9a9a] text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Book a complimentary 30-minute AI feasibility consultation. Our AI solution architects will audit your processes and identify your highest-ROI automation use cases.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#6366f1] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#5558e6] transition-all duration-200 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] active:scale-[0.98]"
            >
              Book Free AI Feasibility Session
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
