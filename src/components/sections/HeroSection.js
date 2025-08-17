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
            <img 
              src="/images/zehra-dp.png" 
              alt="Dr. Zehra Hinganghatwala"
              className="profile-image"
            />
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
