import { useState, useEffect } from 'react';

const GALERIA = [
  { id: 1, type: 'img', src: './src/assets/images/modules/eventos/amor_y_amistad/1.jpeg', title: 'La Gran Entrega de Obsequios', desc: 'Momentos de expectativa, alegría y participación activa de todo el equipo durante la entrega de regalos.' },
  { id: 2, type: 'video', src: './src/assets/images/modules/eventos/amor_y_amistad/1.mp4', title: 'Sonrisas y Compañerismo', desc: 'Un ambiente cálido y de camaradería que afianza nuestra unión.' },
  { id: 3, type: 'img', src: './src/assets/images/modules/eventos/amor_y_amistad/2.jpeg', title: 'Integración de Personal', desc: 'Colaboradores compartiendo una pausa activa llena de energía positiva, conexión emocional y bienestar institucional.' },
  { id: 4, type: 'img', src: './src/assets/images/modules/eventos/amor_y_amistad/3.jpeg', title: 'Detalles Inolvidables', desc: 'Instantes de gran emoción al descubrir los obsequios preparados con dedicación, afecto y creatividad por cada compañero.' },
  { id: 5, type: 'video', src: './src/assets/images/modules/eventos/amor_y_amistad/2.mp4', title: 'Dinámica y Participación', desc: 'La emotiva participación de todo el equipo en la jornada.' },
  { id: 6, type: 'img', src: './src/assets/images/modules/eventos/amor_y_amistad/4.jpeg', title: 'Expectativa y Felicidad', desc: 'La alegría compartida en un espacio de sana convivencia, diversión y desconexión positiva dentro de la compañía.' },
  { id: 7, type: 'img', src: './src/assets/images/modules/eventos/amor_y_amistad/6.jpeg', title: 'Cultura de Bienestar', desc: 'Consolidando una cultura organizacional basada en el cuidado mutuo, la empatía, el reconocimiento y el valor humano.' },
];

export default function PanelEventos() {
  const [modalState, setModalState] = useState({ isOpen: false, src: '', title: '', desc: '' });

  const openModal = (src: string, title: string, desc: string) => {
    setModalState({ isOpen: true, src, title, desc });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      
      {/* Hero Eventos */}
      <div className="bg-gradient-to-r from-vatco-primary via-[#134074] to-vatco-primary text-white shadow-xl py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-vatco-secondary text-vatco-primary font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-md">Bienestar y Clima Laboral</span>
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold tracking-tight mb-4 drop-shadow-sm">🎁 Especial Amigo Secreto</h1>
          <p className="text-lg md:text-xl text-vatco-secondary font-semibold">VATCO Group Ltda. — Historial de Eventos</p>
        </div>
        <div className="absolute -top-12 -left-12 w-52 h-52 bg-[#134074] rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute -bottom-12 -right-12 w-52 h-52 bg-vatco-secondary rounded-full filter blur-3xl opacity-25"></div>
      </div>

      <main className="container mx-auto px-4 py-12 max-w-[1400px]">
        <section className="bg-white rounded-[2rem] shadow-lg p-8 md:p-12 mb-16 border-t-4 border-vatco-secondary text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-vatco-primary mb-6 font-serif">Celebrando la Unión de Nuestra Gran Familia</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Los espacios de integración, recreación y pausa activa son fundamentales para fortalecer el clima laboral, la empatía y la salud mental en <strong className="text-vatco-primary">VATCO Group Ltda.</strong> Revivimos aquí los mejores momentos de nuestra celebración de Amigo Secreto.
          </p>
        </section>

        <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-3xl font-bold text-vatco-primary border-l-4 border-vatco-secondary pl-4">📸 Galería de Momentos Especiales</h3>
            <p className="text-gray-500 text-sm mt-2 pl-5">Instantes auténticos de nuestra celebración corporativa</p>
          </div>
          <span className="text-xs uppercase tracking-wider font-bold text-vatco-primary bg-vatco-primary/10 border border-vatco-primary/20 px-5 py-2.5 rounded-full shadow-sm">💡 Haz clic en cualquier foto para ampliarla</span>
        </div>

        {/* Grid de Galería Iterativo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALERIA.map((item) => (
            <div 
              key={item.id}
              className={`bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 ${item.id === 7 ? 'sm:col-span-2 lg:col-span-3 max-w-2xl mx-auto w-full' : ''} ${item.type === 'img' ? 'cursor-pointer' : ''}`}
              onClick={() => item.type === 'img' && openModal(item.src, item.title, item.desc)}
            >
              <div className="h-72 overflow-hidden relative bg-gray-100">
                {item.type === 'img' ? (
                  <>
                    <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white bg-black/70 backdrop-blur-md px-6 py-2.5 rounded-full text-sm font-bold shadow-xl flex items-center gap-2">🔍 Ampliar Imagen</span>
                    </div>
                  </>
                ) : (
                  <video className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" autoPlay loop muted playsInline>
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
              </div>
              <div className="p-6 text-center sm:text-left">
                <h4 className="font-bold text-xl text-vatco-primary mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal Declarativo de React (Se dibuja solo si modalState.isOpen es true) */}
      {modalState.isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity animate-in fade-in"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-[2rem] max-w-4xl w-full overflow-hidden shadow-2xl relative transform animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Evita que al hacer clic en la foto se cierre el modal
          >
            <button onClick={closeModal} className="absolute top-4 right-4 bg-black/50 hover:bg-vatco-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10 transition-colors shadow-lg">✕</button>
            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img src={modalState.src} alt={modalState.title} className="max-h-[70vh] w-auto object-contain" />
            </div>
            <div className="p-8 bg-white border-t border-gray-100 text-center">
              <h3 className="text-3xl font-serif font-bold text-vatco-primary mb-3">{modalState.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">{modalState.desc}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}