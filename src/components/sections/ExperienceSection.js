import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 'mydentist-stone',
      title: 'Associate Dentist',
      company: '{my}dentist Stone',
      period: 'September 2020 - Present',
      isCurrent: true,
      description: 'Working as a Private and NHS dentist providing comprehensive dental care with a focus on restorative and endodontic treatments.',
      highlights: [
        'Perform a wide range of dental procedures including restorative treatments, crown and bridge work, and root canal therapies',
        'Developed expertise in aesthetic dentistry, providing services such as composite bonding and porcelain veneers',
        'Maintain a high standard of patient care, focusing on patient comfort and satisfaction',
        'Participate in continuous professional development to stay current with the latest dental techniques and technologies',
        'Build and maintain strong patient relationships through clear communication and personalized care plans'
      ]
    },
    {
      id: 'mydentist-derby',
      title: 'Dentist',
      company: '{my}dentist Derby',
      period: 'October 2018 - August 2020',
      isCurrent: false,
      description: 'Provided comprehensive dental care to patients as part of a busy practice, gaining valuable experience in all aspects of general dentistry after relocating to the UK.',
      highlights: [
        'Conducted thorough dental examinations and developed personalized treatment plans',
        'Performed various dental procedures including fillings, extractions, and basic restorative work',
        'Advised patients on proper oral hygiene practices and preventive care',
        'Collaborated with dental specialists for complex cases requiring specialized care',
        'Adapted to the UK dental healthcare system and standards after qualifying'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="section-description text-center">
          <p>
            Throughout my career, I have been dedicated to providing exceptional dental care
            and building lasting relationships with my patients. My professional journey has equipped me
            with the skills and expertise to handle a wide range of dental treatments.
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-timeline">
            {experiences.map(experience => (
              <div key={experience.id} className="experience-item">
                <span className={`experience-period ${experience.isCurrent ? 'current-position' : ''}`}>
                  {experience.period}
                </span>
                <h3 className="experience-title">{experience.title}</h3>
                <div className="experience-company">{experience.company}</div>
                <p className="experience-description">{experience.description}</p>
                
                <div className="experience-highlights">
                  <div className="highlights-title">Key Responsibilities & Achievements:</div>
                  <ul className="highlights-list">
                    {experience.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="experience-commitment">
          <h3 className="commitment-title">My Commitment to Excellent Care</h3>
          <p className="commitment-text">
            I am passionate about providing the highest standard of dental care to my patients. My approach combines technical expertise with empathy and understanding, ensuring that each patient receives personalized care tailored to their unique needs. I believe in staying at the forefront of dental advancements through continuous learning and professional development, allowing me to offer the most effective and up-to-date treatments available.
          </p>
          <p className="commitment-text">
            Whether you're visiting for a routine check-up or require more complex treatment, my goal is to make your experience as comfortable and stress-free as possible, while delivering exceptional results that improve both your oral health and overall well-being.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
