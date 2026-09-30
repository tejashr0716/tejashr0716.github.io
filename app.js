function App() {
  const HeroSection = window.HeroSection;
  const MarqueeSection = window.MarqueeSection;
  const AboutSection = window.AboutSection;
  const ServicesSection = window.ServicesSection;
  const ProjectsSection = window.ProjectsSection;
  return (
    <main className="bg-[#0C0C0C] min-h-screen w-full text-[#D7E2EA] font-kanit" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
