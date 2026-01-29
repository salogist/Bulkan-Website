import React from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import HeroSection from './components/sections/HeroSection/HeroSection';
import AboutProject from './components/sections/AboutProject/AboutProject';
import MissionSection from './components/sections/MissionSection/MissionSection';
import ThreatsSection from './components/sections/ThreatsSection/ThreatsSection';
import AnimalsSection from './components/sections/AnimalsSection/AnimalsSection';
import ImpactSection from './components/sections/ImpactSection/ImpactSection';
import GetInvolvedSection from './components/sections/GetInvolvedSection/GetInvolvedSection';
import NewsletterSection from './components/sections/NewsletterSection/NewsletterSection';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutProject />
      <MissionSection />
      <ThreatsSection />
      <AnimalsSection />
      <ImpactSection />
      <GetInvolvedSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;
