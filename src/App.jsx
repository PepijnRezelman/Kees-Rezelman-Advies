import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PillarsSection from './components/PillarsSection';
import SectorsSection from './components/SectorsSection';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectsOverviewSection from './components/ProjectsOverviewSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProjectDetailModal from './components/ProjectDetailModal';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const scrollToSection = (id) => {
    setActiveSection(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenContact = () => {
    scrollToSection('contact');
  };

  const handleOpenProject = (projectId) => {
    setSelectedProjectId(projectId);
  };

  // Scroll spy to update active nav link on scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'sectoren', 'expertise', 'projecten', 'over-ons', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        if (section === 'home' && window.scrollY < 300) {
          setActiveSection('home');
          break;
        }
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <div id="home">
          <Hero
            onExploreSectors={() => scrollToSection('sectoren')}
            onExploreExpertise={() => scrollToSection('expertise')}
            onOpenContact={handleOpenContact}
          />
        </div>

        <PillarsSection
          onSelectPillar={(pillarId) => {
            scrollToSection('expertise');
          }}
        />

        <SectorsSection onOpenProject={handleOpenProject} />

        <ExpertiseSection
          onOpenContact={handleOpenContact}
          onSelectProject={handleOpenProject}
        />

        <ProjectsOverviewSection onSelectProject={handleOpenProject} />

        <AboutSection onOpenContact={handleOpenContact} />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive In-Depth Project Case Study Modal */}
      {selectedProjectId && (
        <ProjectDetailModal
          projectId={selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
          onOpenContact={handleOpenContact}
        />
      )}
    </div>
  );
}
