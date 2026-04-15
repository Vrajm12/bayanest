import useReveal from '../js/useReveal';
import { Link } from 'react-router-dom';

const Rera = () => {
  useReveal();

  return (
    <>
      {/* ============ 7. RERA TRUST SECTION ============ */}
      <section className="rera section" id="rera" style={{ paddingTop: '160px', minHeight: '80vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-base)' }}>
        <div className="container">
          <div className="rera__content">
            <div data-reveal="left">
              <div className="section-label rera__label">Importance of RERA Registered Agent</div>
              <div className="rera__badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                MahaRERA Registered
              </div>
              <h2>Your Shield of <br />Trust & Transparency</h2>
              <p className="rera__text">
                MahaRERA registration isn't just a legal requirement — it's our commitment to ethical practice, accountability, and protecting your investment at every stage.
              </p>
              <div style={{ marginTop: 'var(--space-40)' }}>
                <Link to="/contact" className="btn btn--gold">
                  Consult a RERA Expert
                </Link>
              </div>
            </div>

            <div className="rera__points" data-reveal-stagger>
              <div className="rera__point">
                <div className="rera__point-icon">
                  <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div>
                  <h4>Legal Compliance</h4>
                  <p>Every transaction follows MahaRERA guidelines ensuring legal protection for buyers and developers.</p>
                </div>
              </div>

              <div className="rera__point">
                <div className="rera__point-icon">
                  <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div>
                  <h4>Financial Transparency</h4>
                  <p>Clear documentation, regulated escrow accounts, and no hidden charges.</p>
                </div>
              </div>

              <div className="rera__point">
                <div className="rera__point-icon">
                  <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div>
                  <h4>Timeline Accountability</h4>
                  <p>RERA mandates delivery timelines — your project stays on track.</p>
                </div>
              </div>

              <div className="rera__point">
                <div className="rera__point-icon">
                  <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div>
                  <h4>Buyer Protection</h4>
                  <p>Carpet area clarity, quality assurance, and grievance redressal mechanisms.</p>
                </div>
              </div>

              <div className="rera__point">
                <div className="rera__point-icon">
                  <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div>
                  <h4>Verified Project Information</h4>
                  <p>All project details publicly available and verified through MahaRERA portal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Seal Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div data-reveal>
            <h3>Our Registration Number</h3>
            <p style={{ fontSize: 'var(--fs-h3)', color: 'var(--color-accent)', fontWeight: 'var(--fw-bold)', margin: 'var(--space-24) 0' }}>
              MahaRERA: A521000XXXXX
            </p>
            <p>Verification available on the official MahaRERA portal. We recommend every home buyer verify the agent and project details before any financial commitment.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rera;
