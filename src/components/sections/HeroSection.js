import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="about" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-info">
            <h1 className="hero-name">Dr. <span className="name-underline">Zehra Hinganghatwala</span></h1>
            <div className="hero-title">BDS, Associate Dentist</div>
            <div className="hero-tag">Restorative & Endodontic Dentistry</div>
            <div className="hero-gdc">GDC Registration: 269585</div>
            <p className="hero-bio">
              Highly skilled and dedicated dentist with a proven track record of providing exceptional
              patient care. Since qualifying and relocating to the UK in 2018, I have gained valuable
              experience across both NHS and private practices. My commitment to delivering personalized 
              care extends to all aspects of general dentistry, ensuring patients feel comfortable and 
              confident throughout their treatment journey.
            </p>
            <p className="hero-bio">
              Driven by a passion for restorative and endodontic dentistry, I aim to deliver painless 
              treatments that improve patients' oral health and overall well-being. I excel in creating 
              a relaxed and welcoming environment where patients feel comfortable expressing their concerns.
            </p>
            <div className="hero-cta">
              <a 
                href="#contact"
                className="hero-button primary-button"
              >
                Contact Me
              </a>
              <a 
                href="/zehra-resume.pdf"
                className="hero-button secondary-button"
                download
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="hero-image">
            <svg 
              width="350" 
              height="350" 
              viewBox="0 0 400 400" 
              xmlns="http://www.w3.org/2000/svg"
              className="profile-image"
            >
              <rect width="400" height="400" fill="#1E88E5" opacity="0.1"/>
              <circle cx="200" cy="170" r="100" fill="#1E88E5" opacity="0.7"/>
              <rect x="125" y="200" width="150" height="150" rx="20" fill="#1E88E5" opacity="0.7"/>
              <text x="200" y="350" fontFamily="Arial" fontSize="16" fill="#1E88E5" textAnchor="middle">Dr. Zehra</text>
            </svg>
            {/* Decorative dental icons */}
            <div className="dental-icon dental-icon-1">
              &#9784;
            </div>
            <div className="dental-icon dental-icon-2">
              &#x2605;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
