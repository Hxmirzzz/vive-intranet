import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

const GALERIA = [
  { id: 1, type: 'img', src: './src/assets/images/modules/eventos/amor_y_amistad/1.jpeg', title: 'La Gran Entrega de Obsequios', desc: 'Momentos de expectativa, alegría y participación activa de todo el equipo durante la entrega de regalos.' },
  { id: 2, type: 'video', src: './src/assets/images/modules/eventos/amor_y_amistad/1.mp4', title: 'Sonrisas y Compañerismo', desc: 'Un ambiente cálido y de camaradería que afianza nuestra unión.' },
  { id: 3, type: 'img', src: './src/assets/images/modules/eventos/amor_y_amistad/2.jpeg', title: 'Integración de Personal', desc: 'Colaboradores compartiendo una pausa activa llena de energía positiva, conexión emocional y bienestar institucional.' },
  { id: 4, type: 'img', src: './src/assets/images/modules/eventos/amor_y_amistad/3.jpeg', title: 'Detalles Inolvidables', desc: 'Instantes de gran emoción al descubrir los obsequios preparados con dedicación, afecto y creatividad por cada compañero.' },
  { id: 5, type: 'video', src: './src/assets/images/modules/eventos/amor_y_amistad/2.mp4', title: 'Dinámica y Participación', desc: 'La emotiva participación de todo el equipo en la jornada.' },
  { id: 6, type: 'img', src: './src/assets/images/modules/eventos/amor_y_amistad/4.jpeg', title: 'Expectativa y Felicidad', desc: 'La alegría compartida en un espacio de sana convivencia, diversión y desconexión positiva dentro de la compañía.' },
  { id: 7, type: 'img', src: './src/assets/images/modules/eventos/amor_y_amistad/6.jpeg', title: 'Cultura de Bienestar', desc: 'Consolidando una cultura organizacional basada en el cuidado mutuo, la empatía, el reconocimiento y el valor humano.' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

export default function PanelEventos() {
  const [modalState, setModalState] = useState({ isOpen: false, src: '', title: '', desc: '' });

  const openModal = (src: string, title: string, desc: string) => setModalState({ isOpen: true, src, title, desc });
  const closeModal = () => setModalState({ ...modalState, isOpen: false });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="pt-20 bg-vatco-base min-h-screen overflow-hidden">
      <div className="bg-vatco-primary text-white py-24 px-4 text-center relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-[#134074] rounded-full filter blur-[100px] opacity-70"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-vatco-secondary rounded-full filter blur-[120px] opacity-20"
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <span className="inline-block bg-vatco-secondary text-vatco-primary font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-md">Bienestar y Clima Laboral</span>
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold tracking-tight mb-6 leading-tight">
            Momentos <span className="text-vatco-secondary italic font-light">Inolvidables</span>
          </h1>
          <p className="text-lg md:text-xl text-vatco-secondary font-semibold">VATCO Group Ltda. — Historial de Eventos</p>
          <p className="text-lg md:text-xl text-gray-300 font-medium">Revive las celebraciones y pausas que nos unen como equipo.</p>
        </motion.div>
      </div>

      <main className="container mx-auto px-4 py-16 max-w-[1400px]">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div>
            <h3 className="text-3xl font-bold text-vatco-primary border-l-4 border-vatco-secondary pl-4">Galería de Amigo Secreto</h3>
            <p className="text-gray-500 text-sm mt-2 pl-5">Instantes auténticos de nuestra celebración corporativa</p>
          </div>
          <span className="text-xs uppercase tracking-wider font-bold text-vatco-primary bg-vatco-primary/10 border border-vatco-primary/20 px-5 py-2.5 rounded-full shadow-sm">💡 Haz clic en cualquier foto para ampliarla</span>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {GALERIA.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow border border-gray-100 relative group ${item.id === 7 ? 'sm:col-span-2 lg:col-span-3 max-w-3xl mx-auto w-full' : ''} ${item.type === 'img' ? 'cursor-pointer' : ''}`}
              onClick={() => item.type === 'img' && openModal(item.src, item.title, item.desc)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-vatco-primary to-vatco-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 pointer-events-none"></div>

              <div className="h-72 overflow-hidden relative bg-gray-50">
                {item.type === 'img' ? (
                  <>
                    <img src={item.src} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-vatco-primary/0 group-hover:bg-vatco-primary/20 transition-colors duration-300 z-0"></div>
                  </>
                ) : (
                  <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
              </div>
              <div className="p-6 relative z-20 bg-white">
                <h4 className="font-bold text-lg text-vatco-primary mb-2 group-hover:text-vatco-accent transition-colors">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
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