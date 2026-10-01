const useRef = window.useRef;
const useScroll = window.useScroll;
const useTransform = window.useTransform;
const motion = window.motion;
const FadeIn = window.FadeIn;
const LiveProjectButton = window.LiveProjectButton;

const PROJECTS = [
  {
    id: 'p1', number: '01', name: 'Fleet Tracking', category: 'Personal',
    href: 'https://tejashr0716.github.io/fleet/',
    img1: 'https://opengraph.githubassets.com/1/tejashr0716/fleet',
    img2: 'https://github-readme-stats.vercel.app/api/pin/?username=tejashr0716&repo=fleet&theme=github_dark&hide_border=true',
    img3: 'https://opengraph.githubassets.com/2/tejashr0716/fleet',
  },
  {
    id: 'p2', number: '02', name: 'Flash Market', category: 'Personal',
    href: 'https://github.com/tejashr0716/flashmarket',
    img1: 'https://opengraph.githubassets.com/1/tejashr0716/flashmarket',
    img2: 'https://github-readme-stats.vercel.app/api/pin/?username=tejashr0716&repo=flashmarket&theme=github_dark&hide_border=true',
    img3: 'https://opengraph.githubassets.com/2/tejashr0716/flashmarket',
  },
  {
    id: 'p3', number: '03', name: 'PCA Reduction', category: 'Personal',
    href: 'https://github.com/tejashr0716/pca-dimension-reduction',
    img1: 'https://opengraph.githubassets.com/1/tejashr0716/pca-dimension-reduction',
    img2: 'https://github-readme-stats.vercel.app/api/pin/?username=tejashr0716&repo=pca-dimension-reduction&theme=github_dark&hide_border=true',
    img3: 'https://opengraph.githubassets.com/2/tejashr0716/pca-dimension-reduction',
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
          <LiveProjectButton href={project.href} />
        </div>
        <div className="flex flex-row gap-3 sm:gap-6 w-full items-stretch">
          <div className="w-[40%] flex flex-col gap-3 sm:gap-6">
            <div className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#161616]" style={{ height: 'clamp(130px, 16vw, 230px)' }}>
              <img src={project.img1} alt={project.name} className="w-full h-full object-cover select-none" />
            </div>
            <div className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#161616]" style={{ height: 'clamp(160px, 22vw, 340px)' }}>
              <img src={project.img2} alt={project.name} className="w-full h-full object-contain bg-[#0C0C0C] select-none" />
            </div>
          </div>
          <div className="w-[60%] overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#161616]">
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
