import React, { useState, useEffect } from 'react';
import '../../styles/components/Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <div>
            <div className="logo-text">Dr. Zehra Hinganghatwala</div>
            <div className="logo-title">Specialist in Restorative & Endodontic Dentistry</div>
          </div>
          <div className="header-gdc">GDC: 269585</div>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <nav>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Clinical Skills</a>
            </li>
            <li className="nav-item">
              <a href="#cases" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Case Studies</a>
            </li>
            <li className="nav-item">
              <a href="#treatments" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Treatments</a>
            </li>
            <li className="nav-item">
              <a href="#qualifications" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Qualifications</a>
            </li>
            <li className="nav-item">
              <a href="#experience" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Experience</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
