import useReveal from '../js/useReveal';

const Contact = () => {
  useReveal();

  return (
    <>
      {/* ============ 10. CONTACT SECTION ============ */}
      <section className="contact section" id="contact" style={{ paddingTop: '160px', minHeight: '90vh', display: 'flex', alignItems: 'center' }} aria-label="Contact BayaNest Realty">
        <div className="container">
          <div className="contact__grid">
            <div className="contact__info" data-reveal="left">
              <div className="section-label">Get In Touch</div>
              <h2>Let's Build Something Remarkable</h2>
              <p>Whether you're a developer seeking a sales partner or a home buyer exploring options — we're ready to help.</p>

              <div className="contact__methods">
                <a href="tel:+919876543210" className="contact__method">
                  <div className="contact__method-icon">
                    <svg viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <div className="contact__method-text">Call Us</div>
                    <div className="contact__method-value">+91 98765 43210</div>
                  </div>
                </a>

                <a href="mailto:hello@bayanestrealty.com" className="contact__method">
                  <div className="contact__method-icon">
                    <svg viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <div className="contact__method-text">Email Us</div>
                    <div className="contact__method-value">hello@bayanestrealty.com</div>
                  </div>
                </a>

                <div className="contact__method">
                  <div className="contact__method-icon">
                    <svg viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <div className="contact__method-text">Visit Us</div>
                    <div className="contact__method-value">Pune, Maharashtra</div>
                  </div>
                </div>
              </div>

              {/* Social Media Links Placeholder */}
              <div className="contact__social" style={{ marginTop: 'var(--space-40)', display: 'flex', gap: 'var(--space-16)' }}>
                <a href="#" style={{ color: 'var(--color-accent)' }}>LinkedIn</a>
                <a href="#" style={{ color: 'var(--color-accent)' }}>Instagram</a>
                <a href="#" style={{ color: 'var(--color-accent)' }}>Facebook</a>
              </div>
            </div>

            <div data-reveal="right">
              <div className="contact__cta-box">
                <h3>Schedule a Consultation</h3>
                <p>Fill out the form below or reach out via WhatsApp for a faster response.</p>
                <form 
                  className="contact__form" 
                  style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', marginTop: 'var(--space-32)' }}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'transparent', color: 'inherit' }}
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'transparent', color: 'inherit' }}
                  />
                  <textarea 
                    placeholder="How can we help?" 
                    rows="4"
                    style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--color-border)', backgroundColor: 'transparent', color: 'inherit' }}
                  ></textarea>
                  <button type="submit" className="btn btn--gold">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
