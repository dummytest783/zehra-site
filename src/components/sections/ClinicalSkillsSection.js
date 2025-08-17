import React from 'react';
import './ClinicalSkillsSection.css';

const ClinicalSkillsSection = () => {
  const skillData = [
    {
      category: "Comprehensive Oral Assessments",
      details: "Thorough oral examinations, diagnosis of oral conditions, personalized advice and guidance, detailed screening for oral cancer, gum disease, jaw joint issues, and bite analysis, development of tailored treatment plans."
    },
    {
      category: "Restorative Dentistry",
      details: "Prophylaxis procedures, NHS and private restorations including amalgam, composite, and RMGIC restorations, advanced dental healthcare guidance, development of strong patient relationships through personalized care."
    },
    {
      category: "Crowns & Bridgework",
      details: "All-ceramic crowns (Emax, Zirconia), porcelain bonded to metal crowns, non-precious metal crowns, complete and partial dentures (acrylic, metal, valplast), removable valplast bridges, resin bonded bridges, fixed bridges (2-6 units), post and crown procedures."
    },
    {
      category: "Aesthetic Dentistry",
      details: "NHS and private veneers (porcelain, composite, Emax), composite bonding, teeth whitening, smile makeovers, canine rise procedures, soft and hard splint construction (including B splints)."
    },
    {
      category: "Endodontic Treatments",
      details: "Root canal treatments for both anterior and posterior teeth, specialized pain management techniques, microscope-assisted endodontics, management of complex canal anatomies."
    },
    {
      category: "Preventive Dentistry",
      details: "Comprehensive oral hygiene instruction, professional scaling and polishing, application of fluoride treatments, fissure sealants, preventive dietary advice, individualized preventive care plans."
    }
  ];

  return (
    <section id="skills" className="clinical-skills-section section">
      <div className="container">
        <h2 className="section-title">Clinical Skills</h2>
        <p className="section-description">
          With extensive training and hands-on experience, I provide a wide range of dental services
          with a focus on exceptional patient care and comfort.
        </p>
        
        <div className="skills-table-container">
          <table className="skills-table">
            <thead>
              <tr>
                <th>Specialty</th>
                <th>Expertise</th>
              </tr>
            </thead>
            <tbody>
              {skillData.map((skill, index) => (
                <tr key={index}>
                  <td className="skill-category">{skill.category}</td>
                  <td className="skill-details">{skill.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ClinicalSkillsSection;
