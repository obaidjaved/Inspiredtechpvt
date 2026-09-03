'use client';

import Link from 'next/link';

const serviceLinks = [
  { name: 'Website Development', href: '/services/web-development' },
  { name: 'ERPNext Implementation', href: '/services/erpnext' },
  { name: 'AI Automation & Agents', href: '/services/ai-automation' },
  { name: 'Network Security & Firewalls', href: '/services' },
  { name: '24/7 SLA Operations', href: '/services' },
  { name: 'Structured Data Cabling', href: '/services' },
  { name: 'CCTV & IP Surveillance', href: '/services' },
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies & Portfolio', href: '/portfolio' },
  { name: 'Leadership & Story', href: '/about#story-heading' },
  { name: 'Our Best Clients', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

const globalLocations = [
  { region: 'Pakistan HQ', contact: '+92 300 9221193', address: 'Main Shahrah-e-Faisal, Karachi' },
  { region: 'United States', contact: '+1 (973) 626-0873', address: '80 Addison Ave, Rockaway, NJ' },
  { region: 'International', contact: '+49 1575 5769970', address: 'European Representation' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="Inspired Technology - Home">
              <img
                src="/clients/logo.png"
                alt="Inspired Technology"
                className="h-9 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-[#636363] text-sm leading-relaxed max-w-sm mb-6">
              Pakistan&apos;s most trusted IT solutions provider and global digital engineering partner — delivering excellence in networking, security, ERPNext, and AI automation since 2016.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/www.inspired.com.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-ghost btn-sm text-[#9a9a9a] hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63c-.01-.9-.74-1.63-1.63-1.63Z" />
                </svg>
              </a>
              <a
                href="https://wa.me/4915755769970"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-ghost btn-sm text-[#9a9a9a] hover:text-emerald-400"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.42.06-.64.3-.22.23-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.29-.25-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.25-.64.79-.79.95-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.41-.41-.56-.42h-.47Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Services &amp; Solutions</h3>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#636363] text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5" role="list">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#636363] text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Global Hubs */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Global Locations</h3>
            <div className="space-y-3 text-xs">
              {globalLocations.map((loc) => (
                <div key={loc.region} className="p-2.5 rounded-lg bg-[#121212] border border-[#1f1f1f]">
                  <div className="font-bold text-[#e8e8e8] mb-0.5">{loc.region}</div>
                  <div className="text-[#818cf8] mb-0.5">{loc.contact}</div>
                  <div className="text-[#636363]">{loc.address}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1f1f1f] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#636363]">
          <div>
            &copy; {new Date().getFullYear()} Inspired Technology Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Security Overview</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
