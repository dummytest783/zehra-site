import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import ClinicalSkillsSection from './components/sections/ClinicalSkillsSection';
import CaseStudiesSection from './components/sections/CaseStudiesSection';
import QualificationsSection from './components/sections/QualificationsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import DentalTreatmentsSection from './components/sections/DentalTreatmentsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import './App.css';

function App() {
  return (
    <Layout>
      <HeroSection />
      <ClinicalSkillsSection />
      <CaseStudiesSection />
      <DentalTreatmentsSection />
      <QualificationsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
