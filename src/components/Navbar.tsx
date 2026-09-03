'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const serviceLinks = [
  {
    name: 'Website Development',
    href: '/services/web-development',
    desc: 'Next.js web apps, Headless e-commerce & PWAs',
    badge: 'NEW',
  },
  {
    name: 'ERPNext Implementation',
    href: '/services/erpnext',
    desc: 'ZATCA compliance, Accounting, HRMS & Supply Chain',
    badge: 'ZATCA',
  },
  {
    name: 'AI Automation & Agents',
    href: '/services/ai-automation',
    desc: 'Autonomous LLM agents, Enterprise RAG & OCR',
    badge: 'AI',
  },
  {
    name: 'All Services & Infrastructure',
    href: '/services',
    desc: 'Cisco networking, Data cabling, CCTV & 24/7 SLAs',
    badge: '15+ Yrs',
  },
];

const mainNavLinks = [
  { name: 'Company', href: '/about' },
  { name: 'Services', href: '/services', isDropdown: true },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-[#2a2a2a]/60 shadow-[0_1px_24px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="Inspired Technology - Home">
            <img
              src="/clients/logo.png"
              alt="Inspired Technology"
              className="h-9 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1" role="menubar">
            {mainNavLinks.map((link) => {
              const isActive = pathname === link.href || (link.isDropdown && pathname.startsWith('/services'));

              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href="/services"
                      className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg flex items-center gap-1.5 ${
                        isActive
                          ? 'text-white bg-white/10'
                          : 'text-[#9a9a9a] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-white' : 'text-[#636363]'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-[#121212] border border-[#2a2a2a] rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-2xl"
                        >
                          <div className="space-y-1">
                            {serviceLinks.map((svc) => (
                              <Link
                                key={svc.name}
                                href={svc.href}
                                onClick={() => setIsServicesOpen(false)}
                                className="p-3 rounded-xl hover:bg-white/5 transition-colors flex flex-col group block"
                              >
                                <div className="flex items-center justify-between mb-0.5">
                                  <span className="text-sm font-semibold text-white group-hover:text-[#818cf8] transition-colors">
                                    {svc.name}
                                  </span>
                                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#6366f1]/20 text-[#d0d1fb]">
                                    {svc.badge}
                                  </span>
                                </div>
                                <span className="text-xs text-[#636363] leading-tight">
                                  {svc.desc}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  role="menuitem"
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-[#9a9a9a] hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="ml-4 btn btn-primary btn-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden pt-[72px] overflow-y-auto"
          >
            <nav className="flex flex-col p-6 gap-2">
              <Link
                href="/about"
                className="text-xl font-semibold py-3 text-white hover:text-[#818cf8]"
                onClick={closeMobileMenu}
              >
                Company
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="text-xl font-semibold py-3 text-white hover:text-[#818cf8] w-full flex items-center justify-between"
                >
                  <span>Services</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isMobileServicesOpen && (
                  <div className="pl-4 space-y-3 py-2 border-l border-[#2a2a2a] my-2">
                    {serviceLinks.map((svc) => (
                      <Link
                        key={svc.name}
                        href={svc.href}
                        onClick={closeMobileMenu}
                        className="block text-sm text-[#9a9a9a] hover:text-white py-1"
                      >
                        {svc.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className="text-xl font-semibold py-3 text-white hover:text-[#818cf8]"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>

              <Link
                href="/about"
                className="text-xl font-semibold py-3 text-white hover:text-[#818cf8]"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn btn-primary w-full"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
