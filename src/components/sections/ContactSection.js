import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted');
    alert('Thank you for your message. This is a demo form - in a real website, your message would be sent to Dr. Zehra.');
  };

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
              the contact methods below or fill out the form. I strive to respond to all inquiries within 
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
            
            <div className="emergency-notice">
              <div className="emergency-title">Dental Emergency?</div>
              <p className="emergency-text">
                If you're experiencing a dental emergency during office hours, please call 
                <span className="emergency-phone"> 07391393553</span> immediately. For after-hours
                emergencies, please contact your local emergency dental service or visit the nearest
                hospital emergency department.
              </p>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone (optional)</label>
                <input type="tel" id="phone" className="form-control" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" className="form-control" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="form-button">Send Message</button>
              
              <div className="form-privacy">
                Your information will be kept private and only used to respond to your inquiry.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
