import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  // Placeholder testimonial data - would be replaced with real testimonials in production
  const testimonials = [
    {
      id: 'testimonial1',
      text: "Dr. Zehra completely transformed my smile with porcelain veneers. Her attention to detail and genuine care for patient comfort made the whole experience surprisingly pleasant. I can't stop smiling now!",
      rating: 5,
      author: "Sarah Mitchell",
      role: "Porcelain Veneers Patient",
      initials: "SM",
      source: "Google Review",
      accentClass: "testimonial-accent-1"
    },
    {
      id: 'testimonial2',
      text: "I've always been terrified of root canals, but Dr. Zehra made it completely painless. She explained everything clearly beforehand and checked on my comfort throughout the procedure. Outstanding care!",
      rating: 5,
      author: "James Wilson",
      role: "Root Canal Treatment Patient",
      initials: "JW",
      source: "NHS Feedback",
      accentClass: "testimonial-accent-2"
    },
    {
      id: 'testimonial3',
      text: "Dr. Hinganghatwala's expertise in restorative dentistry is exceptional. She replaced my old fillings with composite ones that look completely natural. Her gentle approach and perfectionism make her my dentist for life.",
      rating: 5,
      author: "Emma Thompson",
      role: "Restorative Treatment Patient",
      initials: "ET",
      source: "Direct Feedback",
      accentClass: "testimonial-accent-3"
    },
    {
      id: 'testimonial4',
      text: "After putting off dental work for years due to anxiety, I'm so glad I found Dr. Zehra. She took the time to understand my concerns and made sure I was comfortable throughout my treatment. Her crown work is fantastic!",
      rating: 5,
      author: "Robert Davies",
      role: "Crown Procedure Patient",
      initials: "RD",
      source: "Google Review",
      accentClass: "testimonial-accent-1"
    },
    {
      id: 'testimonial5',
      text: "My dental bridge looks and feels like my natural teeth. Dr. Zehra's skill and dedication to getting everything perfect has given me back my confidence to smile. I highly recommend her for any dental work.",
      rating: 5,
      author: "Patricia Johnson",
      role: "Dental Bridge Patient",
      initials: "PJ",
      source: "NHS Feedback",
      accentClass: "testimonial-accent-2"
    },
    {
      id: 'testimonial6',
      text: "Regular check-ups with Dr. Zehra have transformed my dental health. She provides helpful advice and preventive care that has significantly reduced my dental issues. Her friendly, professional manner puts you at ease instantly.",
      rating: 5,
      author: "Michael Brown",
      role: "Regular Preventive Care Patient",
      initials: "MB",
      source: "Direct Feedback",
      accentClass: "testimonial-accent-3"
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
