'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { caseStudies } from '@/data/case-studies';

export default function PortfolioPage() {
  return (
    <main id="main-content">
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          padding: '96px 8vw 64px',
          borderBottom: '1px solid rgba(255,255,255,0.10)',
          background:
            'radial-gradient(60% 50% at 15% 0%, rgba(77,124,255,0.14), transparent 60%), #0a0a0c',
        }}
      >
        <p
          style={{
            color: '#4d7cff',
            fontSize: '13px',
            letterSpacing: '0.02em',
            margin: '0 0 18px',
            fontFamily: "'IBM Plex Mono', monospace",
          }}
        >
          // SELECTED WORK
        </p>
        <h1
          style={{
            fontSize: 'clamp(32px,4.2vw,56px)',
            lineHeight: 1.08,
            fontWeight: 600,
            maxWidth: '16ch',
            margin: '0 0 20px',
            fontFamily: "'Space Grotesk', sans-serif",
            color: '#f5f6f8',
          }}
        >
          Fourteen builds, one consistent frame.
        </h1>
        <p
          style={{
            color: '#9aa0a9',
            maxWidth: '56ch',
            fontSize: '16px',
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          Live screenshots from each project, set inside a shared device-mockup system — laptop
          frame for desktop-led sites, dual-phone frame for mobile-led and Shopify storefronts.
        </p>
      </section>

      {/* Case Study Rows */}
      {caseStudies.map((project, index) => {
        const isEven = index % 2 === 1;
        const isMobile = project.mockupType === 'mobile';
        const num = String(index + 1).padStart(2, '0');

        return (
          <section
            key={project.slug}
            style={{
              display: 'grid',
              gridTemplateColumns: isEven ? '1.15fr 0.85fr' : '0.85fr 1.15fr',
              gap: '64px',
              alignItems: 'center',
              padding: '88px 8vw',
              borderBottom: '1px solid rgba(255,255,255,0.10)',
              background: '#0a0a0c',
            }}
          >
            {/* Copy */}
            <div style={{ order: isEven ? 2 : 1 }}>
              <p
                style={{
                  color: '#4d7cff',
                  fontSize: '13px',
                  margin: '0 0 14px',
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {num}
              </p>
              <h2
                style={{
                  fontSize: 'clamp(24px,2.4vw,34px)',
                  fontWeight: 600,
                  margin: '0 0 12px',
                  lineHeight: 1.2,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: '#f5f6f8',
                }}
              >
                {project.title}
              </h2>
              <p
                style={{
                  color: '#9aa0a9',
                  fontSize: '13.5px',
                  margin: '0 0 22px',
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {project.url}
              </p>
              <p
                style={{
                  color: '#9aa0a9',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  maxWidth: '42ch',
                  margin: '0 0 24px',
                }}
              >
                {project.summary}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '11.5px',
                      letterSpacing: '0.02em',
                      color: '#9aa0a9',
                      border: '1px solid rgba(255,255,255,0.10)',
                      padding: '6px 12px',
                      borderRadius: '100px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Device Stage */}
            <div
              style={{
                position: 'relative',
                height: '520px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                order: isEven ? 1 : 2,
              }}
            >
              {/* Ambient glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: `radial-gradient(closest-side, rgba(77,124,255,0.20), transparent 72%)`,
                  filter: 'blur(6px)',
                  opacity: 0.9,
                }}
              />

              {isMobile ? (
                /* Dual Phone Layout */
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                  }}
                >
                  {/* Phone A */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '6%',
                      top: '8%',
                      zIndex: 2,
                      transform: 'rotate(-9deg)',
                      width: '220px',
                      borderRadius: '34px',
                      padding: '9px',
                      background: 'linear-gradient(160deg,#2b2822,#100f0c)',
                      boxShadow: '0 30px 60px -22px rgba(0,0,0,0.8)',
                      border: '1px solid #2a2a2a',
                    }}
                  >
                    <div
                      style={{
                        borderRadius: '26px',
                        overflow: 'hidden',
                        aspectRatio: '9/19.3',
                        background: '#0a0906',
                        position: 'relative',
                      }}
                    >
                      <img
                        src={project.featuredImage}
                        alt={`${project.title} mobile preview`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        loading="lazy"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '14px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '70px',
                          height: '18px',
                          background: '#0a0906',
                          borderRadius: '100px',
                          zIndex: 2,
                        }}
                      />
                    </div>
                  </div>

                  {/* Phone B */}
                  <div
                    style={{
                      position: 'absolute',
                      right: '6%',
                      top: '20%',
                      zIndex: 1,
                      transform: 'rotate(7deg)',
                      width: '220px',
                      borderRadius: '34px',
                      padding: '9px',
                      background: 'linear-gradient(160deg,#2b2822,#100f0c)',
                      boxShadow: '0 30px 60px -22px rgba(0,0,0,0.8)',
                      border: '1px solid #2a2a2a',
                    }}
                  >
                    <div
                      style={{
                        borderRadius: '26px',
                        overflow: 'hidden',
                        aspectRatio: '9/19.3',
                        background: '#0a0906',
                        position: 'relative',
                      }}
                    >
                      <img
                        src={project.featuredImage}
                        alt={`${project.title} mobile preview`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        loading="lazy"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '14px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '70px',
                          height: '18px',
                          background: '#0a0906',
                          borderRadius: '100px',
                          zIndex: 2,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* Laptop Layout */
                <div
                  style={{
                    position: 'relative',
                    width: 'min(72%,480px)',
                    zIndex: 1,
                  }}
                >
                  {/* Lid */}
                  <div
                    style={{
                      background: 'linear-gradient(180deg,#2b2822,#17150f)',
                      borderRadius: '14px',
                      padding: '12px 12px 0',
                      boxShadow: '0 40px 70px -30px rgba(0,0,0,0.75)',
                      border: '1px solid #2a2a2a',
                    }}
                  >
                    <div
                      style={{
                        borderRadius: '4px',
                        overflow: 'hidden',
                        aspectRatio: '16/10.4',
                        background: '#0a0906',
                      }}
                    >
                      <img
                        src={project.featuredImage}
                        alt={`${project.title} website preview`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Hinge */}
                  <div
                    style={{
                      height: '12px',
                      background: 'linear-gradient(180deg,#2b2822,#100f0c)',
                      borderRadius: '0 0 6px 6px',
                    }}
                  />

                  {/* Base */}
                  <div
                    style={{
                      height: '14px',
                      margin: '0 -18px',
                      background: 'linear-gradient(180deg,#d9d3c6,#a49d8c)',
                      borderRadius: '0 0 10px 10px',
                      position: 'relative',
                      clipPath: 'polygon(3% 0, 97% 0, 100% 100%, 0% 100%)',
                      border: '1px solid #2a2a2a',
                      borderTop: 'none',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        transform: 'translateX(-50%)',
                        width: '64px',
                        height: '5px',
                        background: '#8d8674',
                        borderRadius: '0 0 4px 4px',
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })}

      <Footer />
    </main>
  );
}
