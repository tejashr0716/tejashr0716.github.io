const FadeIn = window.FadeIn;
const Magnet = window.Magnet;
const ContactButton = window.ContactButton;

function HeroSection() {
  const handleNavClick = (ev, targetId) => {
    ev.preventDefault();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  const navCls = 'text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70';
  return (
    <section className="relative h-screen w-full flex flex-col overflow-x-clip bg-[#0C0C0C]">
      <FadeIn as="nav" delay={0} y={-20} className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-30">
        <a href="#about" onClick={(ev) => handleNavClick(ev, 'about')} className={navCls}>About</a>
        <a href="#work" onClick={(ev) => handleNavClick(ev, 'work')} className={navCls}>Work</a>
        <a href="#internships" onClick={(ev) => handleNavClick(ev, 'internships')} className={navCls}>Intern</a>
        <a href="#contact" onClick={(ev) => handleNavClick(ev, 'contact')} className={navCls}>Contact</a>
      </FadeIn>

      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-16 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out" className="w-full">
            <img
              src="https://avatars.githubusercontent.com/u/300985715?v=4&s=520"
              alt="Tejas HR"
              className="w-full h-auto object-cover select-none pointer-events-none rounded-full border-2 border-[#D7E2EA]/30"
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="w-full overflow-hidden z-0">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i{String.fromCharCode(8217)}m tejas
          </h1>
        </FadeIn>
      </div>

      <div className="mt-auto w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
        <FadeIn delay={0.35} y={20} className="max-w-[180px] sm:max-w-[240px] md:max-w-[300px]">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            a python backend developer driven by building fast apis and real-time systems
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
window.HeroSection = HeroSection;
