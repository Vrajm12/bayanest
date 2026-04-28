import useReveal from '../js/useReveal';
import { Link } from 'react-router-dom';
import founderImage from '../assets/images/image.png';

const About = () => {
  useReveal();

  return (
    <>
      {/* ============ 2. INTRO / VALUE SECTION ============ */}
      <section className="intro section" id="intro" style={{ paddingTop: '160px' }}>
        <div className="container">
          <div className="intro__content">
            <div className="intro__heading" data-reveal="left">
              <div className="section-label">Our Philosophy</div>
              <h2>Not Just Brokers. <br />Strategic Growth <br />Partners.</h2>
              <div className="divider"></div>
            </div>

            <div className="intro__body" data-reveal="right">
              <p>
                At BayaNest Realty & Marketing, we combine deep real estate expertise with powerful marketing strategies to deliver measurable results. Whether you are a homebuyer looking for the right investment or a developer seeking structured sales growth, we provide end-to-end solutions backed by trust, transparency, and performance.
              </p>

              <div className="intro__highlight">
                <svg className="intro__highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <p>MahaRERA Registered — Ensuring complete transparency & compliance in every transaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3. ABOUT SECTION ============ */}
      <section className="section section--surface" id="about">
        <div className="container">
          <div className="split split--60-40">
            <div data-reveal="left">
              <div className="section-label">Who We Are</div>
              <h2>A New Standard in Real Estate Consultancy</h2>
              <div className="divider"></div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--fs-body-lg)', marginBottom: 'var(--space-24)' }}>
                We combine strategic advisory with execution excellence to transform how real estate projects are conceptualized, marketed, and sold in Pune.
              </p>

              <div className="about__list">
                <div className="about__list-item">
                  <svg className="about__list-check" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <span>Performance marketing expertise tailored for real estate</span>
                </div>
                <div className="about__list-item">
                  <svg className="about__list-check" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <span>End-to-end sales execution & channel partner network</span>
                </div>
                <div className="about__list-item">
                  <svg className="about__list-check" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <span>MahaRERA registered for full regulatory compliance</span>
                </div>
                <div className="about__list-item">
                  <svg className="about__list-check" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  <span>Data-driven approach to pricing & market positioning</span>
                </div>
              </div>
            </div>

            <div className="about__visual" data-reveal="right">
              <div className="about__block">
                <div className="about__block-icon">
                  <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h4>Speed</h4>
                <p>Rapid go-to-market strategies for new projects</p>
              </div>
              <div className="about__block">
                <div className="about__block-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <h4>Quality</h4>
                <p>Premium positioning for every project we handle</p>
              </div>
              <div className="about__block about__block--wide">
                <div className="about__block-icon" style={{ color: 'var(--color-accent)' }}>
                  <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h4>Trusted Advisory</h4>
                <p>We stand behind every recommendation with market data and proven results. Our MahaRERA registration ensures complete accountability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ============ ABOUT FOUNDER SECTION ============ */}
      <section className="founder section" id="founder">
        <div className="container">
          <div className="split split--40-60">
            <div className="founder__visual" data-reveal="left">
              <div className="founder__image-frame">
                <img src={founderImage} alt="Mr. Abhishek Raut" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div className="founder__image-accent-line"></div>
              </div>
              <div className="founder__name-card">
                <h3>Mr. Abhishek Raut</h3>
                <span>Founder – BayaNest Realty & Marketing</span>
              </div>
            </div>

            <div className="founder__content" data-reveal="right">
              <div className="section-label">About The Founder</div>
              <h2>Vision Backed by Experience</h2>
              <div className="divider"></div>

              <p className="founder__bio">
                With over 12+ years of experience across Sales, Media Planning, and Client Servicing, Abhishek brings a unique blend of market understanding and marketing intelligence.
              </p>

              <div className="founder__background">
                <h4 className="founder__background-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Professional Background
                </h4>

                <div className="founder__background-items">
                  <div className="founder__background-item">
                    <svg className="founder__check" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                    <span>Worked across Mumbai & Pune markets</span>
                  </div>
                  <div className="founder__background-item">
                    <svg className="founder__check" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                    <span>Experience in Print, Radio & Digital Media</span>
                  </div>
                  <div className="founder__background-item">
                    <svg className="founder__check" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                    <span>Hands-on expertise in Real Estate Sales & Marketing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="section" id="why">
        <div className="container">
          <div className="section-header section-header--center" data-reveal>
            <div className="section-label" style={{ justifyContent: 'center' }}>The Difference</div>
            <h2>Why BayaNest</h2>
            <p style={{ marginInline: 'auto' }}>We don't just sell properties — we engineer growth through strategic intelligence and relentless execution.</p>
          </div>

          <div className="why__grid" data-reveal-stagger>
            <div className="why__item">
              <div className="why__item-number">01</div>
              <h3>Strategy First, Always</h3>
              <p>Every project begins with deep market research, competitive analysis, and a tailored go-to-market strategy — not a one-size-fits-all playbook.</p>
            </div>

            <div className="why__item">
              <div className="why__item-number">02</div>
              <h3>Performance-Led Marketing</h3>
              <p>We measure what matters. From cost-per-lead to conversion rates, every rupee of your marketing budget is tracked and optimized.</p>
            </div>

            <div className="why__item">
              <div className="why__item-number">03</div>
              <h3>Full-Stack Execution</h3>
              <p>From digital ads to on-site sales teams, we own the entire funnel. No handoffs, no gaps, no excuses.</p>
            </div>

            <div className="why__item">
              <div className="why__item-number">04</div>
              <h3>RERA Compliance Built-In</h3>
              <p>Peace of mind isn't optional. Our MahaRERA registration ensures every interaction is transparent, documented, and compliant.</p>
            </div>

            <div className="why__item" style={{ gridColumn: '1 / -1', maxWidth: '640px', margin: '0 auto' }}>
              <div className="why__item-number">05</div>
              <h3>Skin in the Game</h3>
              <p>We align our success with yours. Performance-linked partnerships mean we only win when you win — ensuring relentless focus on results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <div data-reveal>
            <h2 style={{ color: 'var(--color-text-inverse)', marginBottom: 'var(--space-24)' }}>Ready to Partner with Us?</h2>
            <Link to="/contact" className="btn btn--gold">
              Get in Touch
              <svg className="btn__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
