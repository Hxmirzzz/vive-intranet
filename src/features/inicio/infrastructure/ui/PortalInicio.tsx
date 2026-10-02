import { Link } from 'react-router-dom';

export default function PortalInicio() {
  return (
    <>
      {/* Hero Section */}
      <main className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-8 max-w-[1400px] mx-auto min-h-[85vh] flex flex-col lg:flex-row items-center justify-between">
        
        {/* Izquierda: Tipografía masiva */}
        <div className="w-full lg:w-1/2 relative z-10">
          <span className="text-vatco-primary font-bold tracking-widest uppercase text-xs mb-6 block">Portal Corporativo</span>
          <h1 className="font-serif text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tight font-extrabold text-vatco-text mb-8">
            Un equipo, <br />
            <span className="italic font-light text-gray-500">múltiples espacios.</span>
          </h1>
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

        {/* Derecha: Composición de Módulos Flotantes */}
        <div className="w-full lg:w-1/2 relative h-[500px] mt-16 lg:mt-0 flex justify-center items-center pointer-events-none">
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-vatco-primary/5 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute w-[300px] h-[300px] bg-vatco-secondary/20 rounded-full right-10 top-10 blur-3xl"></div>
          
          {/* Tarjeta SST */}
          <div className="absolute right-0 top-10 bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/60 animate-[float_6s_ease-in-out_infinite] pointer-events-auto z-20 w-64 transform rotate-3 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-vatco-accent text-xl">🦺</div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Módulo Activo</p>
                <p className="text-sm font-extrabold text-vatco-text">Seguridad (SST)</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-xs text-gray-500 font-medium border border-gray-100">
              <span className="text-green-600 font-bold">0</span> incidentes reportados este mes.
            </div>
          </div>

          {/* Tarjeta Psicología */}
          <div className="absolute left-0 bottom-20 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/60 animate-[float_6s_ease-in-out_3s_infinite] pointer-events-auto z-30 w-72 transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-vatco-primary text-xl">🧠</div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Módulo Activo</p>
                <p className="text-sm font-extrabold text-vatco-text">Psicología</p>
              </div>
            </div>
            <div className="flex -space-x-2 mb-2">
              <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="User" />
              <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=5" alt="User" />
              <div className="w-6 h-6 rounded-full border-2 border-white bg-vatco-secondary flex items-center justify-center text-[8px] font-bold text-vatco-text">+12</div>
            </div>
            <p className="text-xs text-gray-500">Compañeros en el foro de bienestar hoy.</p>
          </div>

          {/* Tarjeta Tecnología */}
          <div className="absolute right-12 bottom-0 bg-vatco-dark text-white p-5 rounded-3xl shadow-2xl border border-white/10 animate-[float_7s_ease-in-out_1s_infinite] pointer-events-auto z-10 w-60">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-vatco-secondary text-xl">💻</div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Módulo Activo</p>
                <p className="text-sm font-extrabold text-white">Tecnología IT</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Sistemas Operativos 100%
            </div>
          </div>
        </div>
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