import useReveal from '../js/useReveal';
import { Link } from 'react-router-dom';

const Home = () => {
  useReveal();

  return (
    <>
      {/* ============ 1. HERO SECTION ============ */}
      <section className="hero section" id="home" aria-label="Hero — BayaNest Realty introduction">
        <div className="container">
          <div className="hero__content">
            <div className="hero__text">
              <div className="hero__label">Strategic Real Estate Partner</div>
              <h1 className="hero__title">
                We Weave <em>Growth</em> for Real Estate
              </h1>
              <p className="hero__subtitle">
                Your trusted partner for Real Estate Sales, Sole Selling & Performance Marketing in Pune.
              </p>
              <div className="hero__cta">
                <Link to="/projects" className="btn btn--primary">
                  Explore Projects
                  <svg className="btn__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link to="/contact" className="btn btn--outline">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="hero__visual">
              <div className="hero__process-panel">
                <div className="hero__process-header">
                  <span className="hero__process-label">Our Methodology</span>
                  <span className="hero__process-line"></span>
                </div>

                <div className="hero__process-steps">
                  <div className="hero__process-step">
                    <span className="hero__step-num">01</span>
                    <div className="hero__step-content">
                      <h4>Requirement Understanding</h4>
                      <p>Deep-dive into project goals, audience, and market context</p>
                    </div>
                  </div>
                  <div className="hero__process-step">
                    <span className="hero__step-num">02</span>
                    <div className="hero__step-content">
                      <h4>Market & Audience Analysis</h4>
                      <p>Data-led micro-market research and buyer profiling</p>
                    </div>
                  </div>
                  <div className="hero__process-step">
                    <span className="hero__step-num">03</span>
                    <div className="hero__step-content">
                      <h4>Strategic Positioning</h4>
                      <p>Pricing, branding, and channel strategy formulation</p>
                    </div>
                  </div>
                  <div className="hero__process-step">
                    <span className="hero__step-num">04</span>
                    <div className="hero__step-content">
                      <h4>Sales Execution</h4>
                      <p>On-ground team deployment and performance marketing</p>
                    </div>
                  </div>
                </div>

                <div className="hero__process-trust">
                  <div className="hero__trust-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                    MahaRERA Registered
                  </div>
                  <div className="hero__trust-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                    Data-Driven Approach
                  </div>
                  <div className="hero__trust-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                    End-to-End Execution
                  </div>
                </div>

                <Link to="/contact" className="hero__process-cta">
                  Start Consultation
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* ============ 9. PROJECTS PREVIEW ============ */}
      <section className="section section--surface" id="projects-preview">
        <div className="container">
          <div className="section-header section-header--center" data-reveal>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Portfolio</div>
            <h2>Featured Projects</h2>
            <p style={{ marginInline: 'auto' }}>Discover premium residential and commercial projects across Pune.</p>
          </div>

          <div className="projects-preview__grid" data-reveal-stagger>
            <div className="project-card" data-type="residential">
              <div className="project-card__image" style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="project-card__content">
                <div className="badge" style={{ marginBottom: 'var(--space-12)' }}>Residential</div>
                <h3 className="project-card__title">Premium Residences</h3>
                <div className="project-card__location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  Pune, Maharashtra
                </div>
                <Link to="/projects" className="project-card__cta">
                  View Details
                  <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            <div className="project-card" data-type="commercial">
              <div className="project-card__image" style={{ background: 'linear-gradient(135deg, #0B2218 0%, #1B4332 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div className="project-card__content">
                <div className="badge" style={{ marginBottom: 'var(--space-12)' }}>Commercial</div>
                <h3 className="project-card__title">Business Spaces</h3>
                <div className="project-card__location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  Pune, Maharashtra
                </div>
                <Link to="/projects" className="project-card__cta">
                  View Details
                  <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            <div className="project-card" data-type="residential">
              <div className="project-card__image" style={{ background: 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="project-card__content">
                <div className="badge" style={{ marginBottom: 'var(--space-12)' }}>Residential</div>
                <h3 className="project-card__title">Luxury Apartments</h3>
                <div className="project-card__location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  Pune, Maharashtra
                </div>
                <Link to="/projects" className="project-card__cta">
                  View Details
                  <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="projects-preview__more" data-reveal>
            <Link to="/projects" className="btn btn--primary">
              View All Projects
              <svg className="btn__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
