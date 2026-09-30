const FadeIn = window.FadeIn;

const SERVICES = [
  { number: '01', title: '3D Modeling', desc: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.' },
  { number: '02', title: 'Rendering', desc: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.' },
  { number: '03', title: 'Motion Design', desc: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.' },
  { number: '04', title: 'Branding', desc: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.' },
  { number: '05', title: 'Web Design', desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.' },
];

function ServicesSection() {
  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-[#0C0C0C]">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center select-none mb-16 sm:mb-20 md:mb-28 leading-none" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Services
          </h2>
        </FadeIn>
        <div className="w-full flex flex-col">
          {SERVICES.map((service, i) => (
            <FadeIn
              key={service.number}
              delay={i * 0.1}
              y={30}
              className="flex flex-row items-start sm:items-center py-8 sm:py-10 md:py-12 w-full gap-6 sm:gap-12"
              style={{
                borderTop: '1px solid rgba(12, 12, 12, 0.15)',
                borderBottom: i === SERVICES.length - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
              }}
            >
              <span className="font-black leading-none text-[#0C0C0C] select-none min-w-[70px] sm:min-w-[150px]" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                {service.number}
              </span>
              <div className="flex flex-col gap-2 flex-grow">
                <h3 className="font-medium uppercase text-[#0C0C0C] tracking-wide" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {service.title}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}>
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ServicesSection = ServicesSection;
