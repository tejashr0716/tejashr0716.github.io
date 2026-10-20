const useState = window.useState;
const useEffect = window.useEffect;
const useRef = window.useRef;

const ROW1 = [
  { k: 'Project  Oct 2026', t: 'MarketSentinel Surveillance', s: 'C# .NET 8  C++ SIMD  FastAPI  WebSockets  Redis DB 10  RabbitMQ  Spark  Postgres', href: 'https://tejashr0716.github.io/market-sentinel/', bg: 'linear-gradient(160deg, #070e1c 0%, #00f0ff 45%, #0C0C0C 100%)' },
  { k: 'Project  Oct 2026', t: 'SentinelTrust Auth', s: 'C++ Bloom Filter  FastAPI  WebSockets  Redis DB 8  RabbitMQ  Spark  Postgres', href: 'https://tejashr0716.github.io/sentineltrust/', bg: 'linear-gradient(160deg, #090e1f 0%, #00f0ff 45%, #0C0C0C 100%)' },
  { k: 'Project  Oct 2026', t: 'StreamForge CDC', s: 'C++ FNV-1a Core  FastAPI  WebSockets  Redis DB 7  RabbitMQ  Spark Lakehouse  Postgres', href: 'https://tejashr0716.github.io/streamforge/', bg: 'linear-gradient(160deg, #05192d 0%, #0284c7 45%, #0C0C0C 100%)' },
  { k: 'Project  Oct 2026', t: 'SyncCanvas CRDT', s: 'C++ CRDT Engine  FastAPI  WebSockets  Redis DB  RabbitMQ  Spark  Postgres', href: 'https://tejashr0716.github.io/synccanvas/', bg: 'linear-gradient(160deg, #091322 0%, #0284c7 45%, #0C0C0C 100%)' },
  { k: 'Project  Oct 2026', t: 'ChandyStore Raft', s: 'C++ Raft FSM  FastAPI  WebSockets  Redis DB  RabbitMQ  Spark  Postgres', href: 'https://tejashr0716.github.io/chandystore/', bg: 'linear-gradient(160deg, #10081c 0%, #7c3aed 45%, #0C0C0C 100%)' },
  { k: 'Project  Oct 2026', t: 'RiskGrid Engine', s: 'C++ Monte Carlo  Greeks  FastAPI  WebSockets  Redis DB  RabbitMQ  Spark', href: 'https://tejashr0716.github.io/riskgrid/', bg: 'linear-gradient(160deg, #1f1404 0%, #d97706 45%, #0C0C0C 100%)' },
  { k: 'Project  Oct 2026', t: 'CloudSentinel Engine', s: 'C++ SIMD Vectorized  FastAPI  WebSockets  Redis DB  RabbitMQ  Spark', href: 'https://tejashr0716.github.io/cloudsentinel/', bg: 'linear-gradient(160deg, #061e2d 0%, #0284c7 45%, #0C0C0C 100%)' },
  { k: 'Project  Oct 2026', t: 'FleetSync Platform', s: 'C++ Spatial SIMD  FastAPI  WebSockets  Redis GEO  RabbitMQ  Spark', href: 'https://tejashr0716.github.io/fleetsync/', bg: 'linear-gradient(160deg, #061922 0%, #0d9488 45%, #0C0C0C 100%)' },
  { k: 'Project  Oct 2026', t: 'GateKeeper Sentinel', s: 'C++ Token Bucket  FastAPI  Redis Lua  RabbitMQ  Spark  Postgres', href: 'https://tejashr0716.github.io/gatekeeper/', bg: 'linear-gradient(160deg, #091324 0%, #0891b2 45%, #0C0C0C 100%)' },
  { k: 'Project  Oct 2026', t: 'ApexMatch Engine', s: 'C++ LMAX Disruptor  FastAPI  WebSockets  Redis  RabbitMQ  Spark', href: 'https://tejashr0716.github.io/apex-match/', bg: 'linear-gradient(160deg, #041824 0%, #0284c7 45%, #0C0C0C 100%)' },
  { k: 'Project  Oct 2026', t: 'FraudShield Telemetry', s: 'FastAPI  C++ SIMD  RabbitMQ  Redis  Spark  Azure SQL', href: 'https://tejashr0716.github.io/fraud-shield/', bg: 'linear-gradient(160deg, #1f0408 0%, #be123c 45%, #0C0C0C 100%)' },
  { k: 'Project  Oct 2026', t: 'Real-Time Auction', s: 'FastAPI  WebSockets  Redis Pub/Sub  PostgreSQL  Lua', href: 'https://tejashr0716.github.io/auction/', bg: 'linear-gradient(160deg, #1f1404 0%, #b45309 45%, #0C0C0C 100%)' },
  { k: 'Project  Oct 2026', t: 'CineBox Ticketing', s: 'FastAPI  Redis  RabbitMQ  PostgreSQL  Tailwind', href: 'https://tejashr0716.github.io/cinebox/', bg: 'linear-gradient(160deg, #021a2e 0%, #0369a1 45%, #0C0C0C 100%)' },
  { k: 'Project  May 2026 -- Jul 2026', t: 'Flash Market', s: 'Python  FastAPI  MySQL  REST  JavaScript', href: 'https://github.com/tejashr0716/flashmarket', bg: 'linear-gradient(160deg, #1a1208 0%, #3d2a12 45%, #0C0C0C 100%)' },
  { k: 'Project  Nov 2025 -- Dec 2025', t: 'PCA Reduction', s: 'Python  NumPy  pandas  scikit-learn  Matplotlib', href: 'https://github.com/tejashr0716/pca-dimension-reduction', bg: 'linear-gradient(160deg, #101018 0%, #2a2450 45%, #0C0C0C 100%)' },
];
const ROW2 = [
  { k: 'Certification', t: 'SQL Basics for Data Science', s: 'UC Davis  Coursera', href: '', bg: 'linear-gradient(160deg, #08141c 0%, #1a3d55 45%, #0C0C0C 100%)' },
  { k: 'Certification', t: 'IBM DevOps and Software Engineering', s: 'IBM  Coursera', href: '', bg: 'linear-gradient(160deg, #1c1008 0%, #5a3210 45%, #0C0C0C 100%)' },
  { k: 'Certification', t: 'Data Analysis Using Python', s: 'Google  Coursera', href: '', bg: 'linear-gradient(160deg, #0c1410 0%, #1e3d28 45%, #0C0C0C 100%)' },
  { k: 'Certification', t: 'HTML5, CSS3, and JavaScript', s: 'IBM  Coursera', href: '', bg: 'linear-gradient(160deg, #141408 0%, #3d3a10 45%, #0C0C0C 100%)' },
  { k: 'Education  2022 -- 2026', t: 'B.E. Information Science', s: 'The Oxford College of Engineering  CGPA 8.08/10', href: '', bg: 'linear-gradient(160deg, #100814 0%, #2c1a40 45%, #0C0C0C 100%)' },
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
