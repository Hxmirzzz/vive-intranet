import { Link, Outlet } from 'react-router-dom';

export default function IntranetLayout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar Global */}
      <header className="absolute top-0 w-full z-50 px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-vatco-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
            V
          </div>
          <span className="font-extrabold text-vatco-text tracking-tight text-lg">
            Vatco<span className="font-normal opacity-50">Group</span>
          </span>
        </div>
        
        {/* Navegación hacia las Features */}
        <nav className="hidden md:flex bg-white/70 backdrop-blur-md border border-white/50 px-8 py-3 rounded-full shadow-sm gap-8 text-sm font-semibold text-gray-600">
          <Link to="/" className="text-vatco-primary hover:text-vatco-primary/80 transition-colors">Inicio</Link>
          <Link to="/psicologia" className="hover:text-vatco-primary transition-colors">Psicología</Link>
          <Link to="/sst" className="hover:text-vatco-primary transition-colors">SST (Seguridad)</Link>
          <Link to="/tecnologia" className="hover:text-vatco-primary transition-colors">Tecnología</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="bg-vatco-primary text-white text-sm font-bold py-3 px-6 rounded-full hover:bg-vatco-primary/90 transition shadow-xl shadow-vatco-primary/20">
            Mi Perfil
          </button>
        </div>
      </header>

      {/* Aquí se renderiza el contenido de cada Feature (PortalInicio, PanelPsicologia, etc.) */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}