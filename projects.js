const useRef = window.useRef;
const useScroll = window.useScroll;
const useTransform = window.useTransform;
const motion = window.motion;
const FadeIn = window.FadeIn;

const INTERNS = [
  {
    id: 'i1', number: '01', role: 'Full Stack Developer Intern', company: 'KodNest Technologies',
    dates: 'Jan 2026 -- Jun 2026', place: 'Bengaluru',
    stack: 'FastAPI  Flask  MySQL  Pytest',
    points: [
      'Built and shipped FastAPI and Flask services backed by MySQL for internal modules.',
      'Designed normalised schemas and added composite indexes on slow list queries.',
      'Delivered in two-week sprints with Git feature branches, review, and Pytest.',
    ],
  },
  {
    id: 'i2', number: '02', role: 'Web Developer Intern', company: 'SkillXAcademy',
    dates: 'Jul 2025 -- Dec 2025', place: 'Bengaluru',
    stack: 'HTML  CSS  JavaScript  FastAPI',
    points: [
      'Built data-driven UI modules in HTML, CSS, and JavaScript on FastAPI REST endpoints.',
      'Profiled rendering in Chrome DevTools and removed redundant API calls.',
      'Standardised loading and error states across views.',
    ],
  },
];

function InternCard({ item, index, totalCards }) {
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
        className="sticky top-24 md:top-32 w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-8"
      >
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="font-black leading-none text-[#D7E2EA] select-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {item.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/60">{item.dates}</span>
              <h3 className="text-sm sm:text-xl md:text-2xl font-semibold uppercase tracking-wide text-[#D7E2EA]">{item.role}</h3>
              <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/70">{item.company}  {item.place}</span>
            </div>
          </div>
        </div>
        <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-[#D7E2EA]/50">{item.stack}</p>
        <ul className="flex flex-col gap-3 sm:gap-4 text-[#D7E2EA] font-light leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.35rem)' }}>
          {item.points.map(function (pt) {
            return <li key={pt} className="border-t border-[#D7E2EA]/15 pt-3 sm:pt-4">{pt}</li>;
          })}
        </ul>
      </motion.div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="internships" className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-20 sm:pb-32 z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center select-none mb-12 sm:mb-16 md:mb-24 leading-none" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Intern
          </h2>
        </FadeIn>
        <div className="w-full flex flex-col mt-4">
          {INTERNS.map((item, index) => (
            <InternCard key={item.id} item={item} index={index} totalCards={INTERNS.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
window.ProjectsSection = ProjectsSection;
