import React from 'react';
import './QualificationsSection.css';

const QualificationsSection = () => {
  const qualifications = [
    {
      id: 'operative',
      icon: '🎓',
      title: 'PG Certificate in Operative Dentistry',
      institution: 'Paul Tipton Training',
      date: 'Ongoing',
      isOngoing: true,
      description: 'Advanced training in operative dentistry techniques focusing on complex restorative cases and precision dentistry.',
      tags: ['Operative Dentistry', 'Restorative Techniques', 'Dental Materials']
    },
    {
      id: 'clearcorrect',
      icon: '😁',
      title: 'Clear Correct Certification',
      institution: 'Clear Correct',
      date: 'May 2024',
      description: 'Certification in Clear Correct transparent aligner therapy for orthodontic treatment with a focus on adult orthodontics.',
      tags: ['Orthodontics', 'Clear Aligners', 'Cosmetic Dentistry']
    },
    {
      id: 'endodontics',
      icon: '🦷',
      title: 'Advanced Endodontics',
      institution: 'Simply Endo',
      date: 'June 2023',
      description: 'Specialized training in advanced root canal treatment techniques, including microscope-assisted endodontics and management of complex canal anatomies.',
      tags: ['Endodontics', 'Microscope Dentistry', 'Pain Management']
    },
    {
      id: 'restorative',
      icon: '✨',
      title: 'PG Certificate in Restorative Dentistry',
      institution: 'Paul Tipton Training',
      date: 'October 2022',
      description: 'Comprehensive training in advanced restorative techniques, prosthodontics, and aesthetic dentistry, focusing on full mouth rehabilitation.',
      tags: ['Restorative Dentistry', 'Prosthodontics', 'Aesthetic Dentistry']
    },
    {
      id: 'bds',
      icon: '🎓',
      title: 'Bachelor of Dental Surgery (BDS)',
      institution: 'Dental School',
      date: 'March 2011',
      description: 'Foundational dental education covering all aspects of general dentistry, including diagnosis, treatment planning, and clinical procedures.',
      tags: ['General Dentistry', 'Clinical Practice', 'Dental Sciences']
    }
  ];

  const registrations = [
    {
      icon: '🏛️',
      label: 'GDC Registration',
      value: '269585'
    },
    {
      icon: '🏥',
      label: 'NHS Performer Number',
      value: '106330'
    },
    {
      icon: '🌍',
      label: 'Nationality',
      value: 'British Citizen'
    }
  ];

  return (
    <section id="qualifications" className="qualifications-section section">
      <div className="container">
        <h2 className="section-title">Qualifications</h2>
        
        <div className="section-description text-center">
          <p>
            I am committed to continuous professional development to provide the highest standard of dental care.
            My education and training reflect my dedication to excellence in dentistry.
          </p>
        </div>
        
        <div className="qualifications-container">
          {qualifications.map(qualification => (
            <div key={qualification.id} className="qualification-card">
              <div className="qualification-logo">
                {qualification.icon}
              </div>
              <div className="qualification-info">
                <h3 className="qualification-title">
                  {qualification.title}
                  {qualification.isOngoing && <span className="ongoing-badge">In Progress</span>}
                </h3>
                <div className="qualification-institution">{qualification.institution}</div>
                <div className="qualification-date">{qualification.date}</div>
                <p className="qualification-description">{qualification.description}</p>
                
                <div className="certification-tags">
                  {qualification.tags.map((tag, index) => (
                    <span key={index} className="certification-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="professional-registrations">
          <h3 className="registrations-title">Professional Registrations</h3>
          <div className="registrations-grid">
            {registrations.map((registration, index) => (
              <div key={index} className="registration-item">
                <span className="registration-icon">{registration.icon}</span>
                <span className="registration-label">{registration.label}:</span>
                <span className="registration-value">{registration.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;
