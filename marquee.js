const useState = window.useState;
const useEffect = window.useEffect;
const useRef = window.useRef;

const ROW1 = [
  { k: 'Project', t: 'Fleet Tracking', s: 'FastAPI  PostgreSQL  Redis  WebSockets', href: 'https://tejashr0716.github.io/fleet/', bg: 'linear-gradient(160deg, #082018 0%, #0f3d32 45%, #0C0C0C 100%)' },
  { k: 'Project', t: 'Flash Market', s: 'FastAPI  MySQL  Inventory API', href: 'https://github.com/tejashr0716/flashmarket', bg: 'linear-gradient(160deg, #1a1208 0%, #3d2a12 45%, #0C0C0C 100%)' },
  { k: 'Project', t: 'PCA Reduction', s: 'Python  Flask  NumPy', href: 'https://github.com/tejashr0716/pca-dimension-reduction', bg: 'linear-gradient(160deg, #101018 0%, #2a2450 45%, #0C0C0C 100%)' },
  { k: 'Project', t: 'Employee System', s: 'Python  Flask  Oracle SQL', href: 'https://github.com/tejashr0716/enterprise-employee-management-system', bg: 'linear-gradient(160deg, #081018 0%, #12344a 45%, #0C0C0C 100%)' },
  { k: 'Project', t: 'Drug Interaction', s: 'Python  Flask  Oracle SQL', href: 'https://github.com/tejashr0716/automated-drug-interaction', bg: 'linear-gradient(160deg, #180818 0%, #3a1240 45%, #0C0C0C 100%)' },
];
const ROW2 = [
  { k: 'Course', t: 'SQL for Data Science', s: 'University of California, Davis', href: '', bg: 'linear-gradient(160deg, #08141c 0%, #1a3d55 45%, #0C0C0C 100%)' },
  { k: 'Course', t: 'Programming for Everybody', s: 'University of Michigan', href: '', bg: 'linear-gradient(160deg, #1c1008 0%, #5a3210 45%, #0C0C0C 100%)' },
  { k: 'Course', t: 'HTML CSS JavaScript', s: 'Coursera', href: '', bg: 'linear-gradient(160deg, #0c1410 0%, #1e3d28 45%, #0C0C0C 100%)' },
  { k: 'Course', t: '300+ DSA Problems', s: 'LeetCode  GeeksforGeeks', href: 'https://leetcode.com/u/TejasHR2004', bg: 'linear-gradient(160deg, #141408 0%, #3d3a10 45%, #0C0C0C 100%)' },
  { k: 'Education', t: 'B.E. Information Science', s: 'Oxford College of Engineering  2022-2026', href: '', bg: 'linear-gradient(160deg, #100814 0%, #2c1a40 45%, #0C0C0C 100%)' },
];

function WorkCard({ item }) {
  const inner = (
    <div
      className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl p-7 flex flex-col justify-between border border-white/10"
      style={{ background: item.bg }}
    >
      <span className="text-xs uppercase tracking-[0.18em] text-[#D7E2EA]/50">{item.k}</span>
      <div>
        <h3 className="text-2xl font-semibold leading-tight text-white">{item.t}</h3>
        <p className="mt-2 text-sm text-[#D7E2EA]/70">{item.s}</p>
      </div>
    </div>
  );
  if (item.href) {
    return <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">{inner}</a>;
  }
  return inner;
}

function MarqueeRow({ items, direction }) {
  return (
    <div className="flex gap-3 flex-nowrap" style={{ transform: direction, willChange: 'transform' }}>
      {items.map((item, i) => (
        <WorkCard key={item.t + i} item={item} />
      ))}
    </div>
  );
}

function MarqueeSection() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const tripled1 = ROW1.concat(ROW1, ROW1);
  const tripled2 = ROW2.concat(ROW2, ROW2);
  return (
    <section id="work" ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full">
      <div className="flex flex-col gap-3 w-full">
        <div className="w-full overflow-hidden">
          <MarqueeRow items={tripled1} direction={'translateX(' + (offset - 200) + 'px)'} />
        </div>
        <div className="w-full overflow-hidden">
          <MarqueeRow items={tripled2} direction={'translateX(' + -(offset - 200) + 'px)'} />
        </div>
      </div>
    </section>
  );
}
window.MarqueeSection = MarqueeSection;
