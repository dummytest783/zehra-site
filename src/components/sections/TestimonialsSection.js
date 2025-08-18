import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  // Real testimonial data from actual patients
  const testimonials = [
    {
      id: 'testimonial1',
      text: "NEVER THOUGHT I'D LEAVE A REVIEW AFTER HAVING A TOOTH OUT BUT.... MY DENTIST, Zehra Hinganghatwala, WAS VERY ATTENTIVE, REASSURING AND EXPERTLY REMOVED MY TOOTH WITH THE MINIMUM OF FUSS: although I can't say I'm pain free, this was a far better experience than expected... IF YOU WANT EXPERT CARE, CAREFULLY EXPLAINED FROM AN UNDERSTANDING MEMBER OF STAFF YOU'D BE HARD PRESSED TO FIND ANYTHING BETTER - HIGHLY RECOMMENDED 😎👌👌 Zehra, thank you 🙏",
      rating: 5,
      author: "Mark Jellyman",
      role: "Tooth Extraction Patient",
      initials: "MJ",
      source: "Google Review",
      accentClass: "testimonial-accent-1"
    },
    {
      id: 'testimonial2',
      text: "Was treated by Dr. Zehra Hinganghatwala on 8th Aug 2025. Had a new crown created and fitted. Excellent and pain free result. Lovely lady. Would highly recommend.",
      rating: 5,
      author: "Elizabeth Dawson",
      role: "Crown Procedure Patient",
      initials: "ED",
      source: "Google Review",
      accentClass: "testimonial-accent-2"
    },
    {
      id: 'testimonial3',
      text: "Dr Zehra Hinganghatwala was excellent she did a wonderful job encapsulated with care and consideration. Many thanks.",
      rating: 5,
      author: "Anthony Sheppard",
      role: "Dental Treatment Patient",
      initials: "AS",
      source: "Google Review",
      accentClass: "testimonial-accent-3"
    },
    {
      id: 'testimonial4',
      text: "I had two extractions this morning performed by Zehra Hinganghtwala and i must say i never felt a thing, the assistant was very friendly and informative. I would highlyreccomend this surgery. 10/10",
      rating: 5,
      author: "Max Hartley",
      role: "Tooth Extraction Patient",
      initials: "MH",
      source: "Google Review",
      accentClass: "testimonial-accent-1"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className="rating-star">
          {i <= rating ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <section id="testimonials" className="testimonials-section section">
      <div className="container">
        <h2 className="section-title">Patient Testimonials</h2>
        
        <div className="section-description text-center">
          <p>
            Don't just take my word for it. Here's what my patients have to say about their
            dental experiences and the care they've received.
          </p>
        </div>
        
        <div className="testimonials-container">
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className={`testimonial-card ${testimonial.accentClass}`}>
                <div className="review-source">
                  <span className="source-icon">📝</span>
                  {testimonial.source}
                </div>
                
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
                
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.initials}
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
