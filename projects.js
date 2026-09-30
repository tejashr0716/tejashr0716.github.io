const useRef = window.useRef;
const useScroll = window.useScroll;
const useTransform = window.useTransform;
const motion = window.motion;
const FadeIn = window.FadeIn;
const LiveProjectButton = window.LiveProjectButton;

const PROJECTS = [
  {
    id: 'p1', number: '01', name: 'Nextlevel Studio', category: 'Client',
    img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    img3: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    id: 'p2', number: '02', name: 'Aura Brand Identity', category: 'Personal',
    img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    img3: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    id: 'p3', number: '03', name: 'Solaris Digital', category: 'Client',
    img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    img3: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

function ProjectCard({ project, index, totalCards }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const topOffset = index * 28;
  return (
    <div ref={containerRef} className="relative h-[85vh] w-full flex items-start justify-center">
      <motion.div
        style={{ scale, top: 'calc(6rem + ' + topOffset + 'px)' }}
        className="sticky top-24 md:top-32 w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8"
      >
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="font-black leading-none text-[#D7E2EA] select-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/60">{project.category}</span>
              <h3 className="text-sm sm:text-xl md:text-2xl font-semibold uppercase tracking-wide text-[#D7E2EA]">{project.name}</h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>
        <div className="flex flex-row gap-3 sm:gap-6 w-full items-stretch">
          <div className="w-[40%] flex flex-col gap-3 sm:gap-6">
            <div className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" style={{ height: 'clamp(130px, 16vw, 230px)' }}>
              <img src={project.img1} alt={project.name} className="w-full h-full object-cover select-none" />
            </div>
            <div className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" style={{ height: 'clamp(160px, 22vw, 340px)' }}>
              <img src={project.img2} alt={project.name} className="w-full h-full object-cover select-none" />
            </div>
          </div>
          <div className="w-[60%] overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]">
            <img src={project.img3} alt={project.name} className="w-full h-full object-cover select-none" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-20 sm:pb-32 z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center select-none mb-12 sm:mb-16 md:mb-24 leading-none" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Project
          </h2>
        </FadeIn>
        <div className="w-full flex flex-col mt-4">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} totalCards={PROJECTS.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
window.ProjectsSection = ProjectsSection;
