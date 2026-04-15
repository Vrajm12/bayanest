import useReveal from '../js/useReveal';
import { Link } from 'react-router-dom';

const Services = () => {
  useReveal();

  return (
    <>
      {/* ============ 6. SERVICES SECTION ============ */}
      <section className="section section--surface" id="services" style={{ paddingTop: '160px' }}>
        <div className="container">
          <div className="section-header" data-reveal>
            <div className="section-label">What We Offer</div>
            <h2>Full-Spectrum Real Estate Services</h2>
            <p>From strategy to execution — every service designed to maximize project success.</p>
          </div>

          {/* Primary Services: Large featured cards */}
          <div className="services__primary" data-reveal-stagger>
            <div className="service-primary">
              <div className="service-primary__num">01</div>
              <div className="service-primary__content">
                <h3>Sole Selling</h3>
                <p>Exclusive project mandates with dedicated sales teams, full market control, and end-to-end accountability from launch to last unit.</p>
              </div>
              <div className="service-primary__icon">
                <svg viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
            </div>

            <div className="service-primary">
              <div className="service-primary__num">02</div>
              <div className="service-primary__content">
                <h3>Channel Partner Network</h3>
                <p>Leveraging an extensive CP network for maximum reach, faster conversions, and systematized broker relationship management.</p>
              </div>
              <div className="service-primary__icon">
                <svg viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
            </div>

            <div className="service-primary">
              <div className="service-primary__num">03</div>
              <div className="service-primary__content">
                <h3>Performance Marketing</h3>
                <p>Data-driven digital campaigns across search, social, and programmatic — delivering qualified leads with measurable ROI.</p>
              </div>
              <div className="service-primary__icon">
                <svg viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              </div>
            </div>
          </div>

          {/* Secondary Services: Compact list */}
          <div className="services__secondary" data-reveal>
            <div className="services__secondary-header">Also Included</div>
            <div className="services__secondary-grid">
              <div className="service-compact">
                <svg viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                <span>Real Estate Consulting</span>
              </div>
              <div className="service-compact">
                <svg viewBox="0 0 24 24"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>
                <span>Marketing Consulting</span>
              </div>
              <div className="service-compact">
                <svg viewBox="0 0 24 24"><path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/></svg>
                <span>Media Planning</span>
              </div>
              <div className="service-compact">
                <svg viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                <span>Media Consulting</span>
              </div>
              <div className="service-compact">
                <svg viewBox="0 0 24 24"><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                <span>Social Media Marketing</span>
              </div>
              <div className="service-compact">
                <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"/></svg>
                <span>Sales Execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5. EXPERTISE SECTION ============ */}
      <section className="expertise section section--warm" id="expertise">
        <div className="container">
          <div className="section-header section-header--center" data-reveal>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Expertise</div>
            <h2>Where Strategy Meets Execution</h2>
            <p style={{ marginInline: 'auto' }}>We bridge the critical gaps in real estate — connecting every stakeholder to create exceptional outcomes.</p>
          </div>

          <div className="expertise__diagram" data-reveal>
            <div className="expertise__row">
              <div className="expertise__node expertise__node--primary">Projects</div>
              <div className="expertise__connector">
                <svg viewBox="0 0 32 32"><path d="M6 16h20M20 10l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="expertise__node">Buyers</div>
            </div>

            <div className="expertise__row">
              <div className="expertise__node">Marketing</div>
              <div className="expertise__connector">
                <svg viewBox="0 0 32 32"><path d="M6 16h20M20 10l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="expertise__node expertise__node--accent">Sales</div>
            </div>

            <div className="expertise__row">
              <div className="expertise__node expertise__node--accent">Strategy</div>
              <div className="expertise__connector">
                <svg viewBox="0 0 32 32"><path d="M6 16h20M20 10l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="expertise__node expertise__node--primary">Execution</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4. APPROACH SECTION ============ */}
      <section className="section" id="approach">
        <div className="container">
          <div className="section-header section-header--center" data-reveal>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Approach</div>
            <h2>Two Sides. One Mission.</h2>
            <p style={{ marginInline: 'auto' }}>We serve both sides of the real estate equation with equal excellence — because great outcomes require understanding every stakeholder.</p>
          </div>

          <div className="approach__grid" data-reveal-stagger>
            {/* For Home Buyers */}
            <div className="approach__panel approach__panel--buyers">
              <div className="approach__panel-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                For Home Buyers
              </div>
              <h3>Find Your Perfect Home</h3>
              <p>We curate options, negotiate the best terms, and guide you through every step — from discovery to possession.</p>
              
              <div className="approach__features">
                <div className="approach__feature">
                  <div className="approach__feature-icon">
                    <svg viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                  </div>
                  Curated project recommendations
                </div>
                <div className="approach__feature">
                  <div className="approach__feature-icon">
                    <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  RERA-verified properties only
                </div>
                <div className="approach__feature">
                  <div className="approach__feature-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  End-to-end buying support
                </div>
                <div className="approach__feature">
                  <div className="approach__feature-icon">
                    <svg viewBox="0 0 24 24"><path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                  </div>
                  Transparent pricing & documentation
                </div>
              </div>
            </div>

            {/* For Developers */}
            <div className="approach__panel approach__panel--developers">
              <div className="approach__panel-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                For Developers
              </div>
              <h3>Accelerate Your Sales</h3>
              <p>From sole selling mandates to performance marketing — we deploy the full arsenal to move your inventory.</p>

              <div className="approach__features">
                <div className="approach__feature">
                  <div className="approach__feature-icon">
                    <svg viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                  </div>
                  Sole selling & exclusive mandates
                </div>
                <div className="approach__feature">
                  <div className="approach__feature-icon">
                    <svg viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  Extensive CP network activation
                </div>
                <div className="approach__feature">
                  <div className="approach__feature-icon">
                    <svg viewBox="0 0 24 24"><path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>
                  </div>
                  Full-funnel digital marketing
                </div>
                <div className="approach__feature">
                  <div className="approach__feature-icon">
                    <svg viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                  </div>
                  Data-led strategy & reporting
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section--dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <div data-reveal>
            <h2 style={{ color: 'var(--color-text-inverse)', marginBottom: 'var(--space-24)' }}>Ready to Accelerate Your Growth?</h2>
            <Link to="/contact" className="btn btn--gold">
              Inquire Now
              <svg className="btn__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
