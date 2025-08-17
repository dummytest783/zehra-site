import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          
          <div className="footer-section">
            <h3 className="footer-title">Navigate</h3>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Clinical Skills</a></li>
              <li><a href="#cases">Case Studies</a></li>
              <li><a href="#treatments">Treatments</a></li>
              <li><a href="#qualifications">Qualifications</a></li>
              <li><a href="#experience">Experience</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact Information</h3>
            <div className="footer-contact-info">
              <p><span className="footer-contact-label">Phone:</span> 07391393553</p>
              <p><span className="footer-contact-label">Email:</span> zahrazabbasi@yahoo.com</p>
              <p><span className="footer-contact-label">Address:</span> 83, Smeaton Avenue, Birmingham</p>
            </div>
            <div className="gdc-info">
              GDC Registration: 269585 | NHS Performer Number: 106330
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Professional Memberships</h3>
            <div className="footer-description">
              Dr. Zehra Hinganghatwala is committed to maintaining the highest standards of dental care through continuous professional development and active membership in respected dental associations.
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dr. Zehra Hinganghatwala | Restorative & Endodontic Dentistry</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
