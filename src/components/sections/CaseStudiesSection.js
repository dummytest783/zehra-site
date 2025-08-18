import React, { useEffect, useRef, useState } from 'react';
import './CaseStudiesSection.css';

const CaseStudiesSection = () => {
  // Real case study data with actual images
  const caseCategories = [
    {
      id: 'restorative',
      title: 'Restorative Dentistry',
      description: 'Restoring damaged, decayed or missing teeth with materials that look and function like natural teeth.',
      cases: [
        {
          id: 'composite-1',
          title: 'Composite Restoration I',
          description: 'Patient presented with decay on upper molar. A tooth-colored composite restoration was placed to restore function and aesthetics while preserving natural tooth structure.',
          treatment: 'Direct Composite Filling',
          beforeImage: '/images/dental-cases/composite-restoration-1-before.jpeg',
          afterImage: '/images/dental-cases/composite-restoration-1-after.jpeg'
        },
        {
          id: 'composite-2',
          title: 'Composite Restoration II',
          description: 'Patient with fractured front tooth and discoloration. A direct composite restoration was placed to rebuild the tooth structure and improve aesthetics.',
          treatment: 'Anterior Composite Bonding',
          beforeImage: '/images/dental-cases/composite-restoration-2-before.jpeg',
          afterImage: '/images/dental-cases/composite-restoration-2-after.jpeg'
        },
        {
          id: 'composite-3',
          title: 'Composite Restoration III',
          description: 'Patient with multiple interproximal caries. Conservative treatment with composite restorations preserved tooth structure while restoring proper contact points.',
          treatment: 'Multi-Surface Composite Fillings',
          beforeImage: '/images/dental-cases/composite-restoration-3-before.jpeg',
          afterImage: '/images/dental-cases/composite-restoration-3-after.jpeg'
        }
      ]
    },
    {
      id: 'prosthetic',
      title: 'Prosthetic Dentistry',
      description: 'Replacing missing teeth with functional and aesthetic dental prostheses to restore oral health and confidence.',
      cases: [
        {
          id: 'denture',
          title: 'Denture',
          description: 'Elderly patient with severe tooth loss and compromised oral function. Complete dentures were crafted to restore aesthetics, function, and quality of life.',
          treatment: 'Complete Denture Fabrication',
          beforeImage: '/images/dental-cases/denture-before.jpeg',
          afterImage: '/images/dental-cases/denture-after.jpeg'
        },
        {
          id: 'bridge',
          title: '4-Unit Dental Bridge',
          description: 'Patient presented with multiple missing teeth in the posterior region. A 4-unit bridge was fabricated to restore function and prevent further tooth movement.',
          treatment: 'Fixed Dental Bridge',
          beforeImage: '/images/dental-cases/4-unit-bridge-before.jpeg',
          afterImage: '/images/dental-cases/4-unit-bridge-after.jpeg'
        },
        {
          id: 'resin-bridge',
          title: 'Resin-Bonded Bridge I',
          description: 'Patient with a single missing anterior tooth. A conservative resin-bonded bridge was placed to restore aesthetics with minimal preparation of adjacent teeth.',
          treatment: 'Maryland Bridge',
          beforeImage: '/images/dental-cases/Resin-bonded-bridge-before.jpeg',
          afterImage: '/images/dental-cases/Resin-bonded-bridge-after.jpeg'
        },
        {
          id: 'resin-bridge-1',
          title: 'Resin-Bonded Bridge II',
          description: 'Patient with congenitally missing lateral incisor. A minimally invasive resin-bonded bridge was placed to create a complete smile while preserving healthy tooth structure.',
          treatment: 'Conservative Maryland Bridge',
          beforeImage: '/images/dental-cases/resin-bonded-bridge-1-before.jpeg',
          afterImage: '/images/dental-cases/resin-bonded-bridge-1-after.jpeg'
        }
      ]
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry',
      description: 'Enhancing the appearance of teeth, gums and smile through various procedures to create a more aesthetically pleasing result.',
      cases: [
        {
          id: 'veneer',
          title: 'Porcelain Veneers',
          description: 'Patient was unhappy with discoloration and minor misalignment of front teeth. Porcelain veneers were placed to create a natural, beautiful smile transformation.',
          treatment: 'Porcelain Veneer Application',
          beforeImage: '/images/dental-cases/veneer-before.jpeg',
          afterImage: '/images/dental-cases/veneer-after.jpeg'
        },
        {
          id: 'bonding',
          title: 'Composite Bonding',
          description: 'Patient with spacing between front teeth (diastema). Direct composite bonding was used to close the gaps and create a more harmonious smile.',
          treatment: 'Direct Composite Bonding',
          beforeImage: '/images/dental-cases/composite-bonding-before.jpeg',
          afterImage: '/images/dental-cases/composite-bonding-after.jpeg'
        }
      ]
    }
  ];

  // Handle slider interaction for before/after comparison
  const [sliders, setSliders] = useState({});
  
  const initializeSlider = (caseId, sliderRef, handleRef, beforeImageRef) => {
    if (!sliderRef.current || !handleRef.current || !beforeImageRef.current) return;
    
    const slider = sliderRef.current;
    const handle = handleRef.current;
    const beforeImage = beforeImageRef.current;
    
    let isDragging = false;
    let startX = 0;
    let startPercent = 50; // Start in the middle
    
    // Also add click functionality to the container for easier interaction
    slider.addEventListener('click', (e) => {
      const rect = slider.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = (x / rect.width) * 100;
      updateSliderPosition(percent);
    });
    
    const updateSliderPosition = (percent) => {
      // Clamp percentage between 0 and 100
      const clampedPercent = Math.max(0, Math.min(100, percent));
      
      // Update slider handle position
      handle.style.left = `${clampedPercent}%`;
      
      // Update clip path for before image
      beforeImage.style.clipPath = `polygon(0 0, ${clampedPercent}% 0, ${clampedPercent}% 100%, 0 100%)`;
      
      // Update slider state
      setSliders(prev => ({
        ...prev,
        [caseId]: clampedPercent
      }));
    };
    
    const onMouseDown = (e) => {
      e.preventDefault();
      isDragging = true;
      startX = e.clientX;
      
      // Get current handle position as percentage
      const rect = slider.getBoundingClientRect();
      startPercent = ((handle.getBoundingClientRect().left - rect.left) / rect.width) * 100;
      
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      
      // Change cursor style
      handle.style.cursor = 'grabbing';
    };
    
    const onMouseMove = (e) => {
      if (!isDragging) return;
      
      const rect = slider.getBoundingClientRect();
      const deltaX = e.clientX - startX;
      const deltaPercent = (deltaX / rect.width) * 100;
      
      updateSliderPosition(startPercent + deltaPercent);
    };
    
    const onMouseUp = () => {
      isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      
      // Reset cursor style
      handle.style.cursor = 'grab';
    };
    
    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      
      // Get current handle position as percentage
      const rect = slider.getBoundingClientRect();
      startPercent = ((handle.getBoundingClientRect().left - rect.left) / rect.width) * 100;
      
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
    };
    
    const onTouchMove = (e) => {
      if (!isDragging) return;
      
      const rect = slider.getBoundingClientRect();
      const deltaX = e.touches[0].clientX - startX;
      const deltaPercent = (deltaX / rect.width) * 100;
      
      updateSliderPosition(startPercent + deltaPercent);
    };
    
    const onTouchEnd = () => {
      isDragging = false;
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
    
    // Add event listeners
    handle.addEventListener('mousedown', onMouseDown);
    handle.addEventListener('touchstart', onTouchStart);
    
    // Set initial position with a slight delay to ensure images are loaded
    setTimeout(() => {
      updateSliderPosition(50);
    }, 100);
    
    return () => {
      handle.removeEventListener('mousedown', onMouseDown);
      handle.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
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
                    <CaseItem 
                      key={caseItem.id} 
                      caseItem={caseItem}
                    />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simplified component for case item with simple side-by-side images
const CaseItem = ({ caseItem }) => {
  return (
    <div className="case-item">
      <div className="before-after-simple">
        <div className="image-side before-side">
          <div className="image-wrapper">
            <img 
              src={caseItem.beforeImage} 
              alt={`${caseItem.title} before treatment`} 
              className="full-image"
            />
          </div>
          <div className="image-label before-label">Before</div>
        </div>
        
        <div className="image-side after-side">
          <div className="image-wrapper">
            <img 
              src={caseItem.afterImage} 
              alt={`${caseItem.title} after treatment`} 
              className="full-image"
            />
          </div>
          <div className="image-label after-label">After</div>
        </div>
      </div>
      <div className="case-content">
        <h4 className="case-title">{caseItem.title}</h4>
        <p className="case-description">{caseItem.description}</p>
        <div className="treatment-used">Treatment: {caseItem.treatment}</div>
      </div>
    </div>
  );
};

export default CaseStudiesSection;
