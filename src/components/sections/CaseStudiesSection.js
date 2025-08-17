import React from 'react';
import './CaseStudiesSection.css';

const CaseStudiesSection = () => {
  // Placeholder data for case studies - to be replaced with real cases later
  const caseCategories = [
    {
      id: 'restorative',
      title: 'Restorative Dentistry',
      description: 'Restoring damaged, decayed or missing teeth with materials that look and function like natural teeth.',
      cases: [
        {
          id: 'case1',
          title: 'Composite Restoration',
          description: 'Patient presented with extensive decay on upper molars. Treatment involved removal of decay and composite filling restoration.',
          treatment: 'Composite Resin Restoration',
          beforeImage: '/images/dental-cases/placeholder-before.jpg',
          afterImage: '/images/dental-cases/placeholder-after.jpg'
        },
        {
          id: 'case2',
          title: 'Inlay Restoration',
          description: 'Patient had old amalgam filling that needed replacement. An aesthetic ceramic inlay was used to restore function and appearance.',
          treatment: 'Ceramic Inlay',
          beforeImage: '/images/dental-cases/placeholder-before.jpg',
          afterImage: '/images/dental-cases/placeholder-after.jpg'
        }
      ]
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry',
      description: 'Enhancing the appearance of teeth, gums and smile through various procedures.',
      cases: [
        {
          id: 'case3',
          title: 'Porcelain Veneers',
          description: 'Patient was unhappy with the appearance of front teeth. A set of six porcelain veneers were placed to create a natural, beautiful smile.',
          treatment: 'Porcelain Veneers',
          beforeImage: '/images/dental-cases/placeholder-before.jpg',
          afterImage: '/images/dental-cases/placeholder-after.jpg'
        },
        {
          id: 'case4',
          title: 'Teeth Whitening',
          description: 'Patient desired a brighter smile. Professional whitening treatment was performed with excellent results.',
          treatment: 'Professional Whitening',
          beforeImage: '/images/dental-cases/placeholder-before.jpg',
          afterImage: '/images/dental-cases/placeholder-after.jpg'
        }
      ]
    },
    {
      id: 'endodontic',
      title: 'Endodontic Treatments',
      description: 'Treating the inside of the tooth including the pulp, root and surrounding tissues.',
      cases: [
        {
          id: 'case5',
          title: 'Root Canal Therapy',
          description: 'Patient presented with severe pain from an infected tooth. Root canal therapy saved the tooth and eliminated pain.',
          treatment: 'Root Canal Treatment',
          beforeImage: '/images/dental-cases/placeholder-before.jpg',
          afterImage: '/images/dental-cases/placeholder-after.jpg'
        }
      ]
    }
  ];

  // Placeholder function for slider interaction - would be implemented with real interaction in production
  const handleSliderInteraction = () => {
    console.log('Slider interaction would be implemented here');
  };

  // Create SVG placeholder images for demonstration
  const createSVGPlaceholder = (color, text, isAfter) => {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 250"
        xmlns="http://www.w3.org/2000/svg"
        className={`case-image ${isAfter ? 'after-image' : 'before-image'}`}
      >
        <rect width="400" height="250" fill={color} />
        <text 
          x="200" 
          y="125" 
          fontFamily="Arial" 
          fontSize="24" 
          fill="#ffffff" 
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {text}
        </text>
      </svg>
    );
  };

  return (
    <section id="cases" className="case-studies-section section">
      <div className="container">
        <h2 className="section-title">Case Studies</h2>
        
        <div className="section-intro">
          <p className="section-description">
            Browse through my portfolio of dental cases, showcasing the transformative results of various treatments.
            Each case represents a unique patient journey and demonstrates my commitment to excellence in dental care.
          </p>
        </div>
        
        <div className="case-categories">
          {caseCategories.map((category) => (
            <div key={category.id} className="case-category">
              <h3 className="case-category-title">{category.title}</h3>
              <p className="case-category-description">{category.description}</p>
              
              <div className="case-grid">
                {category.cases.map((caseItem) => (
                  <div key={caseItem.id} className="case-item">
                    <div className="before-after-container">
                      {/* Using SVG placeholders instead of images for the demo */}
                      {createSVGPlaceholder('#1E88E5', 'Before', false)}
                      {createSVGPlaceholder('#26A69A', 'After', true)}
                      
                      <div className="slider-handle"></div>
                      <div 
                        className="slider-button"
                        role="slider"
                        aria-label="Before and after comparison slider"
                        tabIndex={0}
                        onClick={handleSliderInteraction}
                        onKeyDown={handleSliderInteraction}
                      ></div>
                      <div className="slider-label before-label">Before</div>
                      <div className="slider-label after-label">After</div>
                    </div>
                    <div className="case-content">
                      <h4 className="case-title">{caseItem.title}</h4>
                      <p className="case-description">{caseItem.description}</p>
                      <div className="treatment-used">Treatment: {caseItem.treatment}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="dental-facts">
          <h3 className="facts-title">Did You Know?</h3>
          <ul className="facts-list">
            <li>Modern dental materials can last for over 15 years with proper care and maintenance.</li>
            <li>Porcelain veneers are stain-resistant and can provide a natural-looking solution for discolored or misshapen teeth.</li>
            <li>Root canal treatments have a success rate of more than 95% and can save teeth that would otherwise need to be extracted.</li>
            <li>Regular dental check-ups can help detect problems early, preventing more extensive and costly treatments later.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
