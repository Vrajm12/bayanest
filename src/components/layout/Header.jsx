import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logoImage from '../../assets/images/Logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header>
      <nav className={`nav ${isScrolled || isMobileMenuOpen ? 'scrolled' : ''}`} id="mainNav" aria-label="Main navigation">
        <div className="container">
          <div className="nav__inner">
            <Link to="/" className="nav__logo">
              <img src={logoImage} alt="BayaNest Realty Logo" />
              <div className="nav__logo-text">
                BayaNest
                <span>Realty & Marketing</span>
              </div>
            </Link>

            <div className={`nav__links ${isMobileMenuOpen ? 'open' : ''}`} id="navLinks">
              <NavLink to="/" className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}>About Us</NavLink>
              <NavLink to="/services" className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}>Services</NavLink>
              <NavLink to="/projects" className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}>Projects</NavLink>
              <NavLink to="/rera" className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}>RERA</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}>Contact</NavLink>
              <Link to="/contact" className="btn btn--primary btn--sm nav__cta">Get In Touch</Link>
            </div>

            <button 
              className={`nav__toggle ${isMobileMenuOpen ? 'open' : ''}`} 
              id="navToggle" 
              aria-label="Toggle navigation"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
