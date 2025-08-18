import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  // Form handling removed

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="section-description text-center">
          <p>
            I'd love to hear from you. Whether you're looking to schedule an appointment or
            have questions about my services, please feel free to reach out.
          </p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-heading">Get in Touch</h3>
            <p className="contact-text">
              For appointments, inquiries, or more information about my dental services, please use any of
              the contact methods below. I strive to respond to all inquiries within 
              24 hours during business days.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-details">
                  <div className="method-label">Phone</div>
                  <div className="method-value">07391393553</div>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">✉️</div>
                <div className="method-details">
                  <div className="method-label">Email</div>
                  <div className="method-value">
                    <a href="mailto:zahrazabbasi@yahoo.com">zahrazabbasi@yahoo.com</a>
                  </div>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-details">
                  <div className="method-label">Address</div>
                  <div className="method-value">
                    83, Smeaton Avenue<br />
                    Birmingham
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
