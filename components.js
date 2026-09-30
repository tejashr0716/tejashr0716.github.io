const useState = window.useState;
const useEffect = window.useEffect;
const useRef = window.useRef;
const motion = window.motion;
const useScroll = window.useScroll;
const useTransform = window.useTransform;
const motionTag = window.motionTag;

function FadeIn({ children, delay = 0, duration = 0.7, x = 0, y = 30, as = 'div', className = '', id, style }) {
  const Comp = motionTag(as);
  return (
    <Comp
      id={id}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </Comp>
  );
}

function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) {
  const containerRef = useRef(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const handleMouseMove = (ev) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = ev.clientX;
      const mouseY = ev.clientY;
      const isWithinX = mouseX >= rect.left - padding && mouseX <= rect.right + padding;
      const isWithinY = mouseY >= rect.top - padding && mouseY <= rect.bottom + padding;
      if (isWithinX && isWithinY) {
        const dx = (mouseX - centerX) / strength;
        const dy = (mouseY - centerY) / strength;
        setTransition(activeTransition);
        setTransform('translate3d(' + dx + 'px, ' + dy + 'px, 0px)');
      } else {
        setTransition(inactiveTransition);
        setTransform('translate3d(0px, 0px, 0px)');
      }
    };
    const handleMouseLeaveGlobal = () => {
      setTransition(inactiveTransition);
      setTransform('translate3d(0px, 0px, 0px)');
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveGlobal);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveGlobal);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={containerRef}
      className={'relative inline-block ' + className}
      style={{ transform, transition, willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

function Char({ char, index, progress, total }) {
  const step = 0.8 / total;
  const start = index * step;
  const end = Math.min(1, start + 0.15);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const display = char === ' ' ? '\u00A0' : char;
  return (
    <span className="relative inline-block whitespace-pre">
      <span className="opacity-0 select-none" aria-hidden="true">{display}</span>
      <motion.span style={{ opacity }} className="absolute inset-0 select-none">{display}</motion.span>
    </span>
  );
}

function AnimatedText({ text, className = '' }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });
  const chars = text.split('');
  return (
    <p ref={containerRef} className={'text-center leading-relaxed tracking-wide ' + className}>
      {chars.map((char, index) => (
        <Char key={index} char={char} index={index} progress={scrollYProgress} total={chars.length} />
      ))}
    </p>
  );
}

function ContactButton({ className = '' }) {
  const handleClick = (ev) => {
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      ev.preventDefault();
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <a
      href="#contact"
      onClick={handleClick}
      className={'inline-block text-center cursor-pointer rounded-full font-medium uppercase tracking-widest transition-transform hover:scale-[1.03] active:scale-[0.98] ' + className}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      <span className="block px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white">
        Contact Me
      </span>
    </a>
  );
}

function LiveProjectButton({ className = '', href }) {
  const cls = 'inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base px-8 py-3 sm:px-10 sm:py-3.5 transition-colors hover:bg-[#D7E2EA]/10 text-center ' + className;
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>Live Project</a>;
  }
  return <button type="button" className={cls}>Live Project</button>;
}

window.FadeIn = FadeIn;
window.Magnet = Magnet;
window.AnimatedText = AnimatedText;
window.ContactButton = ContactButton;
window.LiveProjectButton = LiveProjectButton;
