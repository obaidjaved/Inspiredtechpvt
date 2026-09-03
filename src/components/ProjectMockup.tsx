'use client';

import React from 'react';

interface ProjectMockupProps {
  image: string;
  title: string;
  url: string;
  type?: 'desktop' | 'mobile' | 'dashboard';
  accentColor?: string;
  className?: string;
}

export default function ProjectMockup({
  image,
  title,
  url,
  type = 'desktop',
  accentColor = '#6366f1',
  className = '',
}: ProjectMockupProps) {
  if (type === 'mobile') {
    return (
      <div className={`relative mx-auto w-full max-w-[280px] group ${className}`}>
        {/* Mobile Device Frame */}
        <div className="relative rounded-[36px] bg-[#1a1a1a] p-2.5 shadow-2xl border-4 border-[#2d2d2d] transition-transform duration-500 group-hover:scale-[1.02]">
          {/* Top Speaker / Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1e] mr-2" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#0a84ff]" />
          </div>

          {/* Screen */}
          <div className="relative rounded-[28px] overflow-hidden bg-black aspect-[9/18]">
            <img
              src={image}
              alt={`${title} mobile preview`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Mobile Browser Bottom Bar */}
            <div className="absolute bottom-2 left-3 right-3 py-1.5 px-3 rounded-full bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px] text-white/90 z-10">
              <span className="flex items-center gap-1 truncate font-medium">
                <svg className="w-2.5 h-2.5 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
                {url}
              </span>
              <span className="text-[#818cf8] font-bold">5G</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop / Dashboard Browser Mockup
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-[#141414] border border-[#2a2a2a] shadow-2xl transition-all duration-500 group ${className}`}>
      {/* Safari / Chrome Browser Top Bar */}
      <div className="h-9 px-4 bg-[#1e1e1e] border-b border-[#2a2a2a] flex items-center justify-between z-20 relative">
        {/* Traffic Light Dots */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-80" />
        </div>

        {/* Address Bar */}
        <div className="flex items-center gap-1.5 px-4 py-1 rounded-md bg-[#121212] border border-[#2c2c2c] text-[11px] text-[#9a9a9a] max-w-xs md:max-w-sm w-full mx-3 font-mono truncate">
          <svg className="w-3 h-3 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
          </svg>
          <span className="text-[#e8e8e8] font-medium truncate">https://{url}</span>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2 text-[#636363] text-xs">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
        </div>
      </div>

      {/* Screen Viewport with Zoom Effect */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden bg-black">
        <img
          src={image}
          alt={`${title} website preview`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

        {/* Live Badge in Corner */}
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[10px] text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold">Live Site</span>
        </div>
      </div>
    </div>
  );
}
