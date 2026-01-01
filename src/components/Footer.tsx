import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="wave-container">
        <svg
          className="wave wave1"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="rgba(127, 219, 255, 0.1)"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="wave wave2"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="rgba(0, 31, 63, 0.05)"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="wave wave3"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="rgba(127, 219, 255, 0.05)"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20 2L20 38M20 2L10 15M20 2L30 15" stroke="#7FDBFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <ellipse cx="20" cy="25" rx="12" ry="10" stroke="#7FDBFF" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <h3 className="footer-logo">Sparkle Auto Wash</h3>
            <p className="tagline">Drive In Dirty, Drive Out Sparkling!</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="footer-link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-contact">
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <a href="tel:+27123456789" className="contact-value">+27-123-456-789</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href="mailto:info@sparkleautowash.co.za" className="contact-value">info@sparkleautowash.co.za</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2026 Sparkle Auto Wash. All rights reserved.
          </p>
          <p className="footer-tagline">
            💧 Premium Car Care for Your Vehicle 💧
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;