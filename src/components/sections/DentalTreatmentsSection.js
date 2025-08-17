import React from 'react';
import './DentalTreatmentsSection.css';

const DentalTreatmentsSection = () => {
  const treatmentCategories = [
    {
      id: 'preventive',
      title: 'Preventive Care',
      treatments: [
        {
          id: 'checkup',
          icon: '🦷',
          title: 'Comprehensive Dental Check-ups',
          description: 'Thorough examination of teeth, gums, and oral tissues to detect potential issues early.'
        },
        {
          id: 'cleaning',
          icon: '✨',
          title: 'Professional Cleaning',
          description: 'Removal of plaque and tartar build-up that cannot be eliminated through regular brushing and flossing.'
        },
        {
          id: 'fluoride',
          icon: '💧',
          title: 'Fluoride Treatments',
          description: 'Application of fluoride to strengthen tooth enamel and prevent decay.'
        }
      ]
    },
    {
      id: 'restorative',
      title: 'Restorative Dentistry',
      treatments: [
        {
          id: 'fillings',
          icon: '🔍',
          title: 'Dental Fillings',
          description: 'Tooth-colored composite, amalgam, and glass ionomer restorations to repair decayed or damaged teeth.'
        },
        {
          id: 'crowns',
          icon: '👑',
          title: 'Crowns & Bridges',
          description: 'Custom-made porcelain, ceramic, or metal restorations to protect damaged teeth or replace missing ones.'
        },
        {
          id: 'dentures',
          icon: '😁',
          title: 'Complete & Partial Dentures',
          description: 'Removable appliances to replace multiple missing teeth and restore function and aesthetics.'
        },
        {
          id: 'inlays',
          icon: '🧩',
          title: 'Inlays & Onlays',
          description: 'Custom-made indirect restorations that fit into or onto a tooth, providing strength and durability.'
        }
      ]
    },
    {
      id: 'endodontic',
      title: 'Endodontic Treatments',
      treatments: [
        {
          id: 'rootcanal',
          icon: '🌱',
          title: 'Root Canal Therapy',
          description: 'Removal of infected pulp tissue, cleaning of the canal system, and sealing to preserve natural teeth.'
        },
        {
          id: 'retreatment',
          icon: '🔄',
          title: 'Root Canal Retreatment',
          description: 'Revision of previous root canal treatment to address persistent infection or new problems.'
        }
      ]
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry',
      treatments: [
        {
          id: 'veneers',
          icon: '✨',
          title: 'Porcelain Veneers',
          description: 'Thin porcelain shells bonded to the front of teeth to improve appearance and correct minor imperfections.'
        },
        {
          id: 'bonding',
          icon: '🔄',
          title: 'Composite Bonding',
          description: 'Application of tooth-colored composite resin to repair chips, cracks, and gaps between teeth.'
        },
        {
          id: 'whitening',
          icon: '⚪',
          title: 'Teeth Whitening',
          description: 'Professional brightening treatments to remove stains and discoloration for a more vibrant smile.'
        }
      ]
    }
  ];

  return (
    <section id="treatments" className="dental-treatments-section section">
      <div className="container">
        <h2 className="section-title">Dental Treatments</h2>
        
        <div className="section-description text-center">
          <p>
            I offer a comprehensive range of dental services tailored to meet your individual needs.
            From routine check-ups to advanced restorative procedures, my goal is to provide exceptional
            care in a comfortable environment.
          </p>
        </div>
        
        <div className="treatments-container">
          {treatmentCategories.map(category => (
            <div key={category.id} className="treatment-category">
              <h3 className="category-title">{category.title}</h3>
              
              <div className="treatments-grid">
                {category.treatments.map(treatment => (
                  <div key={treatment.id} className="treatment-card">
                    <div className="treatment-icon">
                      {treatment.icon}
                    </div>
                    <h4 className="treatment-title">{treatment.title}</h4>
                    <p className="treatment-description">{treatment.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="approach-box">
          <div className="approach-content">
            <h3>My Patient-Centered Approach</h3>
            <p>
              I believe that exceptional dental care goes beyond technical expertise. My approach focuses on understanding 
              your unique needs and concerns, ensuring that every treatment is tailored specifically to you.
            </p>
            <ul className="approach-points">
              <li>Comprehensive consultations to understand your dental history and goals</li>
              <li>Clear explanations of treatment options and procedures</li>
              <li>Gentle techniques to ensure your comfort throughout treatment</li>
              <li>Personalized aftercare instructions for optimal results</li>
              <li>Flexible scheduling to accommodate your busy lifestyle</li>
              <li>Continuous education to provide the most current treatment methods</li>
            </ul>
          </div>
          <div className="approach-image">
            <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="300" height="200" fill="rgba(30, 136, 229, 0.1)" />
              <circle cx="150" cy="70" r="40" fill="rgba(30, 136, 229, 0.3)" />
              <rect x="110" y="110" width="80" height="60" rx="10" fill="rgba(30, 136, 229, 0.3)" />
              <text x="150" y="160" fontFamily="Arial" fontSize="14" fill="#1E88E5" textAnchor="middle">Patient-Centered Care</text>
              <path d="M130,70 Q150,100 170,70" stroke="#26A69A" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalTreatmentsSection;
