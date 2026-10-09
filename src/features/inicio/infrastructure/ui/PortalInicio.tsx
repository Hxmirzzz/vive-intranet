import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const elementoFlotante = new URL('../../../../assets/images/shared/vive-logo.webp', import.meta.url).href;

const EVENTOS_OCTUBRE = [
  {
    id: 'halloween',
    eyebrow: 'Temporada especial · Octubre',
    title: 'Halloween en VATCO',
    description: 'Prepárate para una celebración llena de creatividad, integración y trabajo en equipo.',
    date: '30 OCT',
    glow: 'bg-orange-500/35',
    accent: 'text-[#ffc64a]',
    icon: '🎃',
    label: '¡Se acerca!',
  },
  {
    id: 'actividades',
    eyebrow: 'Celebremos juntos',
    title: 'Una experiencia para compartir',
    description: 'Decora tu área, ven disfrazado y participa con tu equipo en las actividades de Halloween.',
    date: 'EN EQUIPO',
    glow: 'bg-violet-500/35',
    accent: 'text-[#ffd15c]',
    icon: '🦇',
    label: 'Creatividad · Integración · Diversión',
  },
  {
    id: 'modulos',
    eyebrow: 'Explora la intranet',
    title: 'Todo VATCO, en un solo lugar',
    description: 'Accede a tus áreas de trabajo y encuentra recursos, novedades y herramientas para el equipo.',
    date: '3 ÁREAS',
    glow: 'bg-cyan-400/30',
    accent: 'text-cyan-200',
    icon: '✦',
    label: 'Personas · Seguridad · Tecnología',
  },
];

const MODULOS = [
  { to: '/psicologia', icon: '🧠', title: 'Psicología', detail: 'Bienestar y acompañamiento', tone: 'bg-blue-400/15' },
  { to: '/sst', icon: '🦺', title: 'Seguridad · SST', detail: 'Cuidado y prevención', tone: 'bg-orange-400/15' },
  { to: '/tecnologia', icon: '💻', title: 'Tecnología IT', detail: 'Herramientas y soporte', tone: 'bg-cyan-400/15' },
];

function CarruselEventos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const evento = EVENTOS_OCTUBRE[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % EVENTOS_OCTUBRE.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const cambiarEvento = (direction: number) => {
    setActiveIndex((current) => (current + direction + EVENTOS_OCTUBRE.length) % EVENTOS_OCTUBRE.length);
  };

  return (
    <section
      aria-label="Eventos destacados de octubre"
      aria-roledescription="carrusel"
      className="relative isolate w-full lg:w-1/2 mt-14 lg:mt-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-visible">
        <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/20 blur-[90px]" />
        <motion.div
          animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute right-[12%] top-[8%] h-56 w-56 rounded-full ${evento.glow} blur-[85px]`}
        />
        <div className="absolute bottom-[8%] left-[5%] h-48 w-48 rounded-full bg-vatco-secondary/20 blur-[80px]" />
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute -inset-12 bg-[radial-gradient(ellipse_at_35%_48%,rgba(3,12,30,0.78)_0%,rgba(3,12,30,0.5)_38%,rgba(3,12,30,0.16)_68%,transparent_88%)] blur-[35px]" />
      </div>

      <div className="relative mx-auto h-[600px] w-full max-w-[600px] overflow-visible sm:h-[620px]">
        <AnimatePresence mode="wait">
          <motion.article
            key={evento.id}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${activeIndex + 1} de ${EVENTOS_OCTUBRE.length}: ${evento.title}`}
            initial={{ opacity: 0, filter: 'blur(14px)', y: 15 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, filter: 'blur(14px)', y: -12 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 overflow-hidden px-5 pb-16 pt-8 text-white sm:px-8 sm:pt-10"
          >
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -16, 0], rotate: [-4, 4, -4], filter: ['drop-shadow(0 0 18px rgba(255,190,80,.2))', 'drop-shadow(0 0 40px rgba(255,190,80,.55))', 'drop-shadow(0 0 18px rgba(255,190,80,.2))'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-2 top-24 -z-0 text-[7rem] opacity-80 sm:right-12 sm:top-20 sm:text-[10rem]"
            >
              {evento.icon}
            </motion.div>
            <motion.div aria-hidden="true" animate={{ rotate: 360 }} transition={{ duration: 70, repeat: Infinity, ease: 'linear' }} className="absolute right-0 top-20 -z-0 h-64 w-64 rounded-full border border-white/15 sm:right-5 sm:h-80 sm:w-80">
              <span className="absolute -left-1 top-1/2 h-2 w-2 rounded-full bg-amber-200 shadow-[0_0_18px_5px_rgba(255,220,140,.75)]" />
            </motion.div>

            {evento.id === 'modulos' ? (
              <div className="relative z-10 pt-16 sm:pt-14">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-white/90 backdrop-blur-md sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" /> {evento.eyebrow}
                </span>
                <h2 className="mt-4 max-w-[440px] font-serif text-3xl font-black leading-tight drop-shadow-[0_3px_18px_rgba(5,20,45,.5)] sm:text-5xl">
                  {evento.title}
                </h2>
                <p className="mt-2 max-w-[440px] text-xs leading-relaxed text-white/85 sm:text-sm">
                  {evento.description}
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-7 sm:gap-3">
                  {MODULOS.map((modulo, index) => (
                    <motion.div
                      key={modulo.to}
                      animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
                      transition={{ duration: 4 + index, delay: index * 0.25, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Link to={modulo.to} className={`group flex min-h-[102px] flex-col justify-between rounded-2xl border border-white/20 ${modulo.tone} p-3 text-white shadow-[0_12px_32px_rgba(5,20,45,.18)] backdrop-blur-xl transition hover:border-white/50 hover:bg-white/20 sm:min-h-[120px] sm:p-4`}>
                        <span className="text-2xl transition-transform group-hover:scale-110 sm:text-3xl">{modulo.icon}</span>
                        <span>
                          <span className="block text-[10px] font-extrabold leading-tight sm:text-xs">{modulo.title}</span>
                          <span className="mt-1 block text-[8px] leading-tight text-white/70 sm:text-[10px]">{modulo.detail}</span>
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="relative z-10 mt-12 max-w-[360px] sm:mt-16">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-white/90 backdrop-blur-md sm:text-xs">
                  <span className={`h-1.5 w-1.5 rounded-full ${evento.glow}`} /> {evento.eyebrow}
                </span>
                <div className={evento.id === 'actividades' ? 'mt-5' : 'mt-8'}>
                  <span className={`mb-3 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.25em] ${evento.accent}`}>
                    <span className="h-px w-7 bg-current" /> VATCO GROUP · CULTURA QUE NOS UNE
                  </span>
                  <h2 className={`font-serif font-black tracking-tight drop-shadow-[0_3px_18px_rgba(5,20,45,.5)] ${evento.id === 'actividades' ? 'text-3xl leading-tight sm:text-4xl' : 'text-4xl leading-[.98] sm:text-6xl'}`}>
                    {evento.title}
                  </h2>
                  <p className="mt-4 max-w-[330px] text-sm leading-relaxed text-white/90 drop-shadow sm:text-base">
                    {evento.description}
                  </p>
                  <div className="mt-6 flex flex-col items-start gap-3">
                    <span className="rounded-full bg-[#ffd15c] px-4 py-2 text-xs font-black tracking-widest text-[#102c50] shadow-[0_0_24px_rgba(255,190,80,.25)]">
                      {evento.date}
                    </span>
                    <span className="text-sm font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.9)]">{evento.label}</span>
                  </div>
                </div>
              </div>
            )}
          </motion.article>
        </AnimatePresence>

        <button
          type="button"
          aria-label="Evento anterior"
          onClick={() => cambiarEvento(-1)}
          className="absolute bottom-1 left-1 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-slate-950/35 text-xl text-white backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-vatco-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-0 sm:left-2"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Siguiente evento"
          onClick={() => cambiarEvento(1)}
          className="absolute bottom-1 right-1 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-slate-950/35 text-xl text-white backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-vatco-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-0 sm:right-2"
        >
          ›
        </button>

        <div className="absolute bottom-0 left-1/2 z-40 flex w-max -translate-x-1/2 items-center gap-5 rounded-full border border-white/15 bg-slate-950/25 px-4 py-2 backdrop-blur-md">
          <div className="flex gap-2" role="group" aria-label="Seleccionar evento">
            {EVENTOS_OCTUBRE.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Mostrar evento ${index + 1}: ${item.title}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-9 bg-[#ffd15c]' : 'w-2 bg-white/60 hover:bg-white'}`}
              />
            ))}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[.2em] text-white/70">{`0${activeIndex + 1} / 0${EVENTOS_OCTUBRE.length}`}</span>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">Evento destacado: {evento.title}</p>
    </section>
  );
}

export default function PortalInicio() {
  return (
    <>
      <main className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-8 max-w-[1400px] mx-auto min-h-[85vh] flex flex-col lg:flex-row items-center justify-between">
        
        <div className="w-full lg:w-1/2 relative z-10">
          <span className="text-vatco-primary font-bold tracking-widest uppercase text-xs mb-8 block">
            Portal Corporativo
          </span>

          <div className="mb-10 animate-float">
            <img 
              src={elementoFlotante} 
              alt="Vive Intranet Vatco" 
              className="w-full max-w-sm lg:max-w-sm object-contain drop-shadow-2xl" 
            />
          </div>

          <p className="text-gray-600 text-lg md:text-xl max-w-md leading-relaxed mb-10 font-medium">
            Accede a noticias, recursos exclusivos y servicios de tus departamentos. Navega por los módulos diseñados para potenciar tu experiencia en Vatco.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#modulos" className="bg-vatco-primary text-white text-sm font-bold py-4 px-8 rounded-full hover:bg-vatco-primary/90 transition shadow-xl shadow-vatco-primary/30 flex items-center gap-2">
              Explorar Módulos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        <CarruselEventos />
      </main>

      {/* Directorio de Módulos (Enrutamiento Visual) */}
      <section id="modulos" className="relative bg-vatco-dark text-white rounded-t-[3rem] lg:rounded-t-[4rem] px-8 py-24 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] z-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Departamentos</h2>
              <p className="text-gray-400 max-w-lg">Selecciona un área para acceder a sus noticias, recursos y herramientas especializadas.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Tarjeta Psicología */}
            <Link to="/psicologia" className="group relative overflow-hidden rounded-3xl bg-[#1a2f4c] border border-white/10 hover:border-white/30 transition-all h-[350px] flex flex-col justify-between p-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl mb-6 border border-white/20 group-hover:scale-110 transition-transform">
                  🧠
                </div>
                <h3 className="font-serif text-3xl font-bold mb-2">Psicología & Bienestar</h3>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  Agenda consultas confidenciales, accede a tips de manejo de estrés y participa en foros de salud mental.
                </p>
              </div>
              <div className="relative z-10 flex items-center text-vatco-secondary text-sm font-bold gap-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                Ingresar al módulo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </Link>

            {/* Tarjeta SST */}
            <Link to="/sst" className="group relative overflow-hidden rounded-3xl bg-[#4a1c1a] border border-white/10 hover:border-white/30 transition-all h-[350px] flex flex-col justify-between p-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl mb-6 border border-white/20 group-hover:scale-110 transition-transform">
                  🦺
                </div>
                <h3 className="font-serif text-3xl font-bold mb-2">Seguridad (SST)</h3>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  Reporte de incidentes, normativas laborales, guías ergonómicas y avisos de seguridad ocupacional.
                </p>
              </div>
              <div className="relative z-10 flex items-center text-vatco-secondary text-sm font-bold gap-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                Ingresar al módulo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </Link>

            {/* Tarjeta Tecnología */}
            <Link to="/tecnologia" className="group relative overflow-hidden rounded-3xl bg-[#111827] border border-white/10 hover:border-white/30 transition-all h-[350px] flex flex-col justify-between p-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
              <div className="absolute right-0 top-0 opacity-10">
                <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl mb-6 border border-white/20 group-hover:scale-110 transition-transform">
                  💻
                </div>
                <h3 className="font-serif text-3xl font-bold mb-2">Tecnología IT</h3>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  Estado de servidores, manuales de software interno, guías de configuración y alertas de mantenimiento.
                </p>
              </div>
              <div className="relative z-10 flex items-center text-vatco-secondary text-sm font-bold gap-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                Ingresar al módulo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}