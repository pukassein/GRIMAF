import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ResearchAreasSection from './components/ResearchAreasSection';
import ProjectsSection from './components/ResearchSection';
import MembersSection from './components/MembersSection';
import PublicationsSection from './components/PublicationsSection';
import LabsSection from './components/LabsSection';
import ToolsSection from './components/ToolsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import InfoModal from './components/InfoModal';
import { ModalData } from './types';
import SupportSection from './components/SupportSection';
import FeedbackButton from './components/FeedbackButton';

const App: React.FC = () => {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const handleOpenModal = (data: ModalData) => {
    setModalData(data);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <div className="bg-light-bg min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <ResearchAreasSection />
        <ProjectsSection />
        <MembersSection onCardClick={handleOpenModal} />
        <PublicationsSection onCardClick={handleOpenModal} />
        <LabsSection onCardClick={handleOpenModal} />
        <ToolsSection />
        <ContactSection />
      </main>
      <SupportSection />
      <Footer />
      {modalData && <InfoModal isOpen={!!modalData} onClose={handleCloseModal} data={modalData} />}
      <FeedbackButton />
    </div>
  );
};

export default App;