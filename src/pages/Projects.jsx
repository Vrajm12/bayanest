import { useState } from 'react';
import useReveal from '../js/useReveal';

const Projects = () => {
  useReveal();
  const [filter, setFilter] = useState('all');

  const allProjects = [
    {
      id: 1,
      name: "The Vantage Heights",
      category: "residential",
      location: "Baner, Pune",
      desc: "Premium 2 & 3 BHK luxury apartments with world-class amenities, smart home features, and panoramic city views.",
      type: "2 & 3 BHK",
      status: "Under Construction",
      gradient: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)",
      icon: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    },
    {
      id: 2,
      name: "NexHub Business Park",
      category: "commercial",
      location: "Hinjewadi, Pune",
      desc: "Modern commercial spaces designed for IT companies and startups with Grade A specifications and smart building infrastructure.",
      type: "Office Spaces",
      status: "Ready to Move",
      gradient: "linear-gradient(135deg, #0B2218 0%, #1B4332 100%)",
      icon: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      )
    },
    {
      id: 3,
      name: "Serenity Greens",
      category: "residential",
      location: "Wakad, Pune",
      desc: "Eco-friendly township with expansive green spaces, jogging tracks, and sustainable living features in the heart of Wakad.",
      type: "1, 2 & 3 BHK",
      status: "Launching Soon",
      gradient: "linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)",
      icon: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    },
    {
      id: 4,
      name: "Royal Orchid Residences",
      category: "residential",
      location: "Kharadi, Pune",
      desc: "Ultra-luxury 3 & 4 BHK penthouses featuring Italian marble flooring, private terraces, and concierge services.",
      type: "3 & 4 BHK",
      status: "Under Construction",
      gradient: "linear-gradient(135deg, #1B4332 0%, #0B2218 100%)",
      icon: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    },
    {
      id: 5,
      name: "Vertex Commerce Tower",
      category: "commercial",
      location: "Viman Nagar, Pune",
      desc: "Premium retail and office spaces in a high-footfall commercial corridor with anchor tenant commitments.",
      type: "Retail & Office",
      status: "Ready to Move",
      gradient: "linear-gradient(135deg, #0B2218 0%, #2D6A4F 100%)",
      icon: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      )
    },
    {
      id: 6,
      name: "Nest Urban Living",
      category: "residential",
      location: "Aundh, Pune",
      desc: "Smart, compact residences designed for young professionals with co-working spaces, fitness zones, and community areas.",
      type: "1 & 2 BHK",
      status: "Under Construction",
      gradient: "linear-gradient(135deg, #2D6A4F 0%, #0B2218 100%)",
      icon: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    }
  ];

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <>
      {/* ============ PAGE HERO ============ */}
      <section className="projects-hero" style={{ paddingTop: '160px' }}>
        <div className="container">
          <div className="projects-hero__content" data-reveal>
            <div className="section-label">Our Portfolio</div>
            <h1>Our Projects</h1>
            <p>Discover premium real estate opportunities across Pune — each one handpicked, RERA-verified, and market-ready.</p>
          </div>
        </div>
        <div className="projects-hero__pattern"></div>
      </section>

      {/* ============ FILTERS ============ */}
      <section className="projects-filters">
        <div className="container">
          <div className="projects-filters__bar" data-reveal>
            <div className="projects-filters__tabs">
              <button 
                className={`projects-filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Projects
                <span className="projects-filter-btn__count">{allProjects.length}</span>
              </button>
              <button 
                className={`projects-filter-btn ${filter === 'residential' ? 'active' : ''}`}
                onClick={() => setFilter('residential')}
              >
                Residential
                <span className="projects-filter-btn__count">{allProjects.filter(p => p.category === 'residential').length}</span>
              </button>
              <button 
                className={`projects-filter-btn ${filter === 'commercial' ? 'active' : ''}`}
                onClick={() => setFilter('commercial')}
              >
                Commercial
                <span className="projects-filter-btn__count">{allProjects.filter(p => p.category === 'commercial').length}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROJECTS GRID ============ */}
      <section className="projects-grid-section section">
        <div className="container">
          <div className="projects-list" id="projectsList">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-detail-card" 
                data-category={project.category} 
                data-reveal
              >
                <div className="project-detail-card__image" style={{ background: project.gradient }}>
                  <div className="project-detail-card__image-content">
                    {project.icon}
                  </div>
                  <div className="project-detail-card__badges">
                    <span className="badge" style={{ textTransform: 'capitalize' }}>{project.category}</span>
                    <span className="badge" style={{ background: 'rgba(27,67,50,0.9)', color: '#C9A84C' }}>RERA Verified</span>
                  </div>
                </div>
                <div className="project-detail-card__body">
                  <h3>{project.name}</h3>
                  <div className="project-detail-card__location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {project.location}
                  </div>
                  <p className="project-detail-card__desc">{project.desc}</p>
                  <div className="project-detail-card__meta">
                    <div className="project-detail-card__meta-item">
                      <span className="project-detail-card__meta-label">Type</span>
                      <span className="project-detail-card__meta-value">{project.type}</span>
                    </div>
                    <div className="project-detail-card__meta-item">
                      <span className="project-detail-card__meta-label">Status</span>
                      <span className="project-detail-card__meta-value">{project.status}</span>
                    </div>
                  </div>
                  <a href="#" className="btn btn--outline btn--sm">
                    Know More
                    <svg className="btn__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BAR ============ */}
      <section className="projects-cta section section--dark">
        <div className="container">
          <div className="projects-cta__inner" data-reveal>
            <div>
              <h2 style={{ color: 'var(--color-text-inverse)' }}>Don't See What You're Looking For?</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--fs-body-lg)', marginTop: 'var(--space-12)' }}>We have access to exclusive off-market opportunities. Let's find the perfect match for you.</p>
            </div>
            <a href="tel:+919876543210" className="btn btn--gold">
              Inquire Now
              <svg className="btn__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
