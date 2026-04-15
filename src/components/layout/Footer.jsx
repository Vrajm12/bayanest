import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <Link to="/" className="footer__logo">
            Baya<span>Nest</span>
          </Link>
          <p className="footer__text">© {new Date().getFullYear()} BayaNest Realty & Marketing. All rights reserved. | MahaRERA Registered</p>
          <div className="footer__links">
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/about" className="footer__link">About</Link>
            <Link to="/services" className="footer__link">Services</Link>
            <Link to="/projects" className="footer__link">Projects</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
