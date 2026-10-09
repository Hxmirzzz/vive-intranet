import { useState } from 'react';
import QRCode from "react-qr-code";
import { motion, AnimatePresence, Variants } from 'framer-motion';

const psicologiaBienestarImage = new URL(
  '../../../../assets/images/modules/psicologia/psicologia-y-bienestar.webp',
  import.meta.url,
).href;

const TEMAS = [
  {
    id: 1,
    tag: 'Tema 01',
    color: 'primary',
    image: psicologiaBienestarImage,
    fallback: 'https://placehold.co/600x300/235286/F8E04B?text=Regulacion+Emocional',
    title: 'LIDERAR PARA CUIDAR',
    subtitle: 'El liderazgo que transforma, acompaña y protege en VATCO',
    desc: 'Desde Psicología VATCO queremos acompañar a nuestros líderes para que cada conversación, cada decisión y cada gesto sea una oportunidad para escuchar, comprender, apoyar y fortalecer a nuestros equipos.',
    details: 'Porque detrás de cada colaborador hay una persona que merece sentirse escuchada, valorada y cuidada. Liderar para cuidar es poner a las personas en el centro.'
  },
  {
    id: 2,
    tag: 'Tema 02',
    color: 'primary',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    fallback: 'https://placehold.co/600x300/235286/F8E04B?text=Regulacion+Emocional',
    title: 'Psicología y Regulación Emocional',
    subtitle: '',
    desc: 'Modelo de Barlow y Sistemas de Paul Gilbert (Amenaza, Logro y Afiliación). Entendimiento de las respuestas emocionales ante situaciones de alta responsabilidad operativa.',
    details: 'Sistema de Amenaza: Detecta riesgos y activa el cortisol. Sistema de Logro: Impulsa metas. Sistema de Afiliación: Genera calma, seguridad y conexión social. Clave para la resiliencia en VATCO Group.'
  },
  {
    id: 3,
    tag: 'Tema 03',
    color: 'secondary',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    fallback: 'https://placehold.co/600x300/F8E04B/235286?text=Autocompasion',
    title: 'Autocompasión y Dimensiones de Kristin Neff',
    subtitle: '',
    desc: 'Cultivar la autocompasión para gestionar el error y la presión sin caer en la autoexigencia destructiva ni en el aislamiento emocional.',
    details: '1. Amabilidad vs. Autocrítica: Tratarse con gentileza. 2. Humanidad Compartida: Entender que el sufrimiento es universal. 3. Mindfulness: Observar pensamientos dolorosos sin identificarse ciegamente.'
  },
  {
    id: 4,
    tag: 'Tema 04',
    color: 'accent',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80',
    fallback: 'https://placehold.co/600x300/ce2c26/ffffff?text=Sistema+Nervioso',
    title: 'Biología y Sistema Nervioso',
    subtitle: '',
    desc: 'Simpático vs. Parasimpático. Regulación de la activación fisiológica ante situaciones operativas exigentes en transporte de valores.',
    details: 'Sistema Simpático: Acelera el ritmo y prepara la defensa. Sistema Parasimpático: Promueve descanso y recuperación. Herramienta: Respiración diafragmática para activar el nervio vago.'
  },
  {
    id: 5,
    tag: 'Tema 05',
    color: 'primary',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    fallback: 'https://placehold.co/600x300/235286/F8E04B?text=Entornos+Saludables',
    title: 'Entornos de Trabajo Saludables',
    subtitle: '',
    desc: 'Construcción de espacios de confianza donde la seguridad psicológica permita reportar incidentes, proponer mejoras y expresar necesidades.',
    details: 'Seguridad Psicológica: Ausencia de temor al castigo por expresar dudas o reportar fallas mecánicas/operativas. Liderazgo Protector: Jefaturas cercanas que escuchan activamente.'
  },
  {
    id: 6,
    tag: 'Tema 06',
    color: 'secondary',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    fallback: 'https://placehold.co/600x300/F8E04B/235286?text=Marco+Legal+Colombia',
    title: 'Marco Legal de Riesgo Psicosocial',
    subtitle: '',
    desc: 'Actualización normativa con la Ley 2460/2025 y el Decreto 728/2025 sobre prevención de riesgos psicosociales en el trabajo.',
    details: 'Ley 2460 de 2025: Obligatoriedad de programas de intervención en salud mental. Decreto 728 de 2025: Lineamientos técnicos para evaluación de factores psicosociales.'
  },
  {
    id: 7,
    tag: 'Tema 07',
    color: 'accent',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
    fallback: 'https://placehold.co/600x300/ce2c26/ffffff?text=Tecnodestres',
    title: 'Hiperconectividad y Tecnoestrés',
    subtitle: '',
    desc: 'Derecho a la desconexión laboral consagrado en la Ley 2191 de 2022. Protección del tiempo de descanso y vida personal.',
    details: 'Ley 2191 de 2022: Garantiza que los trabajadores no respondan llamadas fuera de su jornada. Prevención: Establecer canales claros de emergencia.'
  },
  {
    id: 8,
    tag: 'Tema 08',
    color: 'primary',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    fallback: 'https://placehold.co/600x300/235286/F8E04B?text=Ambiente+Respetuoso',
    title: 'Acoso Sexual Laboral',
    subtitle: '',
    desc: 'Lineamientos estrictos de la Ley 2365 de 2024 y el Decreto 1040 de 2026 para la prevención y sanción de violencias basadas en género.',
    details: 'Ley 2365 / Decreto 1040: Protocolos obligatorios de atención, canales seguros de denuncia y protección contra represalias en VATCO Group.'
  },
  {
    id: 9,
    tag: 'Tema 09',
    color: 'secondary',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    fallback: 'https://placehold.co/600x300/F8E04B/235286?text=Andragogia+Knowles',
    title: 'Andragogía: Liderar es Enseñar a Adultos',
    subtitle: '',
    desc: 'Principios de Malcolm Knowles aplicados al liderazgo: los adultos aprenden desde la experiencia, la utilidad práctica y la motivación intrínseca.',
    details: 'Enfoque Práctico: Capacitaciones orientadas a resolver problemas reales de campo y seguridad en el transporte de valores.'
  },
  {
    id: 10,
    tag: 'Tema 10',
    color: 'accent',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
    fallback: 'https://placehold.co/600x300/ce2c26/ffffff?text=Cultura+Organizacional',
    title: 'Cultura Contra Cultura',
    subtitle: '',
    desc: 'Transformación de narrativas organizacionales tóxicas ("aguantar todo") hacia una cultura de cuidado mutuo, reporte oportuno y corresponsabilidad.',
    details: 'Nuevo Paradigma: El verdadero valor en VATCO Group radica en cuidar la integridad física y mental de cada colaborador.'
  },
  {
    id: 11,
    tag: 'Tema 11',
    color: 'primary',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80',
    fallback: 'https://placehold.co/600x300/235286/F8E04B?text=ISO+45003',
    title: 'Gestión del Desempeño que Cuida',
    subtitle: '',
    desc: 'Basado en la norma internacional ISO 45003:2021 sobre gestión de la salud y seguridad psicológica en el trabajo.',
    details: 'ISO 45003:2021: Identificación de peligros psicosociales y diseño de cargas de trabajo equilibradas sin burn-out.'
  },
  {
    id: 12,
    tag: 'Tema 12',
    color: 'secondary',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    fallback: 'https://placehold.co/600x300/F8E04B/235286?text=Prevencion+SST',
    title: 'Tres Niveles de Prevención',
    subtitle: '',
    desc: 'Estrategia integral en SST: Primaria (eliminar riesgos), Secundaria (detección temprana) y Terciaria (rehabilitación y reincorporación).',
    details: 'Intervención Multinivel: Garantiza seguimiento médico y psicológico continuo en VATCO Group.'
  },
  {
    id: 13,
    tag: 'Tema 13',
    color: 'accent',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80',
    fallback: 'https://placehold.co/600x300/ce2c26/ffffff?text=Ruta+Salud+Mental',
    title: 'Ruta de Prevención de Salud Mental',
    subtitle: '',
    desc: 'Alianza institucional Colsubsidio + Universidad del Rosario para la atención oportuna y derivación médica especializada.',
    details: 'Ruta Clara: Canales de atención confidencial, líneas de apoyo psicológico 24/7 y programas de bienestar Colsanitas.'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

export default function PanelPsicologia() {
  const [quiz, setQuiz] = useState({ q1: '3', q2: '3', q3: '3' });
  const [resultado, setResultado] = useState<{ title: string; desc: string; color: string } | null>(null);

  const calcularResultado = () => {
    const v1 = parseInt(quiz.q1);
    const v2 = parseInt(quiz.q2);
    const v3 = parseInt(quiz.q3);
    const total = v1 + v2 + v3;

    let titleStr = '';
    let descStr = '';
    let colorClass = '';
    let resultadoLog = '';

    if (total >= 7) {
        titleStr = '🌟 Alto Nivel de Autocuidado';
        descStr = 'Excelente. Sus hábitos actuales le permiten gestionar la presión de forma saludable. ¡Siga promoviendo esta actitud en su equipo!';
        colorClass = 'text-green-600 border-green-500';
        resultadoLog = 'Excelente Nivel de Autocuidado';
    } else if (total >= 5) {
        titleStr = '⚠️ Nivel Medio - Alerta';
        descStr = 'Se encuentra en un punto de equilibrio frágil. Le recomendamos explorar los recursos de Autocompasión y priorizar sus pausas de desconexión.';
        colorClass = 'text-vatco-secondary border-vatco-secondary';
        resultadoLog = 'Nivel Moderado: Oportunidad de Mejora';
    } else {
        titleStr = '🛡️ Nivel Crítico - Prioridad de Cuidado';
        descStr = 'Es muy importante que atienda su bienestar. Le sugerimos hacer uso de la Ruta de Prevención de Salud Mental. No tiene que enfrentar esto solo/a.';
        colorClass = 'text-vatco-accent border-vatco-accent';
        resultadoLog = 'Alerta de Carga Emocional Elevada';
    }

    setResultado({ title: titleStr, desc: descStr, color: colorClass });

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwec9l4pBIOTiJR5IJs2hT6BP_pM7GFAfMI_Qnm6FlFfVzlkM6WsU4LBknRZ_93AN6o/exec';
    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
        q1: v1, q2: v2, q3: v3, total: total, resultado: resultadoLog
        })
    })
    .then(() => console.log('Respuesta enviada a Google Sheets.'))
    .catch((error) => console.error('Error al enviar la respuesta:', error));
  };

  return (
    <div className="block pt-20 bg-gray-50/50">
      <div className="bg-vatco-primary/95 text-white py-2 border-b border-vatco-secondary/20 text-xs sm:text-sm backdrop-blur-md sticky top-[88px] z-40">
        <div className="max-w-7xl mx-auto px-4 flex justify-center sm:justify-end gap-6 font-medium">
          <a href="#temas" className="hover:text-vatco-secondary transition flex items-center gap-2"><i className="fa-solid fa-list-check text-vatco-secondary"></i> 13 Temas Clave</a>
          <a href="#autocompasion" className="hover:text-vatco-secondary transition flex items-center gap-2"><i className="fa-solid fa-brain text-vatco-secondary"></i> Test Autocompasión</a>
          <a href="#evaluacion" className="hover:text-vatco-secondary transition flex items-center gap-2"><i className="fa-solid fa-clipboard-question text-vatco-secondary"></i> Autoevaluación</a>
        </div>
      </div>

      <section className="bg-gradient-to-br from-vatco-primary via-[#1c426c] to-vatco-dark text-white relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-vatco-secondary">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F8E04B_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-vatco-secondary rounded-full filter blur-[120px] opacity-20 pointer-events-none"
        />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vatco-secondary/10 border border-vatco-secondary/30 text-vatco-secondary text-xs sm:text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(248,224,75,0.2)]"
          >
            <i className="fa-solid fa-shield-heart"></i> Conferencia Colsanitas & Colsubsidio — Salud Mental
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight mb-6 leading-tight"
          >
            Liderazgo con Sentido Humano para la <span className="text-vatco-secondary italic font-light">Protección Operativa</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
            className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            En <strong className="text-white">VATCO Group Ltda.</strong> promovemos entornos de trabajo seguros, empáticos y regulados emocionalmente para proteger el activo más valioso: nuestro equipo humano.
          </motion.p>
        </div>
      </section>

      <main id="temas" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <span className="text-vatco-accent font-bold uppercase tracking-wider text-xs bg-vatco-accent/10 px-4 py-1.5 rounded-full border border-vatco-accent/20">Marco Teórico y Normativo</span>
          <h3 className="text-3xl sm:text-4xl font-serif font-extrabold text-vatco-primary mt-6">Los 13 Temas Esenciales de "Liderar para Cuidar"</h3>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm sm:text-base font-medium">
            Haga clic en el botón de <strong className="text-vatco-primary"><i className="fa-solid fa-plus text-xs"></i> Detalle</strong> en cada tarjeta para desplegar la información y conceptos clave.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TEMAS.map((tema) => (
            <motion.div 
              key={tema.id} 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden relative`}
            >
              <div className={`absolute top-0 left-0 w-full h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 ${
                tema.color === 'primary' ? 'bg-vatco-primary shadow-[0_0_20px_#235286]' : 
                tema.color === 'secondary' ? 'bg-vatco-secondary shadow-[0_0_20px_#F8E04B]' : 'bg-vatco-accent shadow-[0_0_20px_#ce2c26]'
              }`}></div>

              <div className={`h-52 w-full relative overflow-hidden bg-gray-100`}>
                <img 
                  src={tema.image} 
                  alt={tema.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                  onError={(e) => e.currentTarget.src = tema.fallback}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                <span className={`absolute bottom-4 left-4 text-xs font-bold px-4 py-1.5 rounded-xl shadow-lg backdrop-blur-md border border-white/10 ${
                  tema.color === 'primary' ? 'bg-vatco-primary/90 text-white' : 
                  tema.color === 'secondary' ? 'bg-vatco-secondary/90 text-vatco-primary' : 'bg-vatco-accent/90 text-white'
                }`}>
                  {tema.tag}
                </span>
              </div>
              
              <div className="p-7 flex-1 flex flex-col justify-between relative bg-white z-10">
                <div>
                  <h4 className="text-xl font-bold text-vatco-primary mb-2 leading-tight group-hover:text-vatco-accent transition-colors">{tema.title}</h4>
                  {tema.subtitle && <h3 className="text-sm font-semibold text-vatco-primary/60 mb-3">{tema.subtitle}</h3>}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{tema.desc}</p>
                </div>
                
                <div className="mt-auto">
                  <details className="group/details bg-gray-50 rounded-2xl p-4 border border-gray-200 hover:border-gray-300 open:bg-white open:border-vatco-secondary/50 open:shadow-md transition-all cursor-pointer">
                    <summary className="font-bold text-vatco-primary text-xs flex items-center justify-between select-none uppercase tracking-wide list-none [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center group-open/details:bg-vatco-secondary group-open/details:border-vatco-secondary transition-colors">
                          <i className="fa-solid fa-plus text-xs group-open/details:rotate-45 transition-transform duration-300"></i>
                        </div>
                        Ver detalle
                      </span>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-700 space-y-2 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                      <p>{tema.details}</p>
                    </div>
                  </details>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <section id="autocompasion" className="py-24 bg-vatco-dark text-white relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vatco-secondary/10 text-vatco-secondary text-xs font-semibold mb-4 border border-vatco-secondary/20">
              <i className="fa-solid fa-qrcode"></i> Enlace Oficial y Código QR
            </div>
            <h3 className="text-3xl sm:text-5xl font-serif font-extrabold text-white">Test de Autocompasión</h3>
            <p className="text-gray-400 mt-4 text-sm sm:text-base font-medium">
              Escala de Autocompasión desarrollada por Kristin Neff. Instrucciones oficiales para colaboradores de VATCO Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="lg:col-span-8 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 sm:p-12 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-vatco-secondary text-vatco-primary flex items-center justify-center font-bold text-2xl shadow-lg">
                  <i className="fa-solid fa-brain"></i>
                </div>
                <div>
                  <span className="text-xs text-vatco-secondary uppercase tracking-widest font-bold">Mensaje para el equipo</span>
                  <h4 className="text-2xl font-bold text-white mt-1">Estimado/a colaborador/a:</h4>
                </div>
              </div>

              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Como parte de una actividad orientada al bienestar, le invitamos a completar el siguiente <strong className="text-vatco-secondary">Test de Autocompasión</strong>:
              </p>

              <div className="bg-vatco-primary/40 border border-vatco-primary/60 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 group">
                <div className="flex items-center gap-3 truncate">
                  <i className="fa-solid fa-link text-vatco-secondary text-xl"></i>
                  <span className="text-sm font-mono text-gray-300 truncate">https://self-compassion.org/self-compassion-test/</span>
                </div>
                <a href="https://self-compassion.org/self-compassion-test/" target="_blank" rel="noopener noreferrer" className="bg-vatco-secondary hover:bg-yellow-400 text-vatco-primary font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all transform group-hover:scale-105 whitespace-nowrap flex items-center gap-2">
                  <span>Abrir Test</span> <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>

              <div className="space-y-4 bg-black/40 p-6 rounded-2xl border border-white/5 text-sm text-gray-300 leading-relaxed">
                <div className="flex items-start gap-4">
                  <i className="fa-solid fa-thumbtack text-vatco-secondary mt-1 text-lg"></i>
                  <div><strong className="text-white block mb-1">¿Qué debe hacer?</strong> Responda de acuerdo con lo que realmente suele experimentar. No existen respuestas correctas o incorrectas.</div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="fa-solid fa-lock text-vatco-secondary mt-1 text-lg"></i>
                  <div><strong className="text-white block mb-1">Importante:</strong> La prueba es de autoconocimiento, no es una evaluación de desempeño laboral. Sus respuestas deben ser contestadas con sinceridad.</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 flex flex-col items-center justify-center bg-white text-gray-900 rounded-[2.5rem] p-10 shadow-2xl border-4 border-vatco-secondary text-center h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-vatco-secondary/10 rounded-bl-full -z-0"></div>
              
              <span className="relative z-10 text-xs uppercase tracking-widest font-bold text-vatco-accent bg-vatco-accent/10 px-4 py-1.5 rounded-full mb-6">Escanee con su Celular</span>
              <h5 className="relative z-10 text-2xl font-extrabold text-vatco-primary mb-3">Acceso Directo</h5>
              <p className="relative z-10 text-gray-500 text-sm mb-8 leading-relaxed">Apunte la cámara de su smartphone hacia el código QR para iniciar el cuestionario.</p>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative z-10 p-5 bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center mb-8"
              >
                  <QRCode value="https://self-compassion.org/self-compassion-test/" size={160} fgColor="#235286" />
              </motion.div>
              
              <div className="relative z-10 w-full bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs text-gray-600 font-bold">
                <i className="fa-solid fa-building-shield text-vatco-primary mr-2"></i> Área de Bienestar y SST
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="evaluacion" className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-vatco-primary font-bold uppercase tracking-widest text-xs bg-vatco-primary/10 px-4 py-1.5 rounded-full border border-vatco-primary/20">Autoevaluación Rápida VATCO</span>
            <h3 className="text-3xl sm:text-4xl font-serif font-extrabold text-vatco-primary mt-6">¿Cómo está su Nivel de Autocuidado Hoy?</h3>
            <p className="text-gray-500 text-base mt-4 font-medium">Seleccione su nivel actual en los 3 pilares clave para obtener una recomendación personalizada.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-[2.5rem] p-8 sm:p-12 shadow-xl border border-gray-200"
          >
            <form className="space-y-8">
              {/* Selects de la Autoevaluación... (iguales que antes pero con estilos refinados) */}
              <div className="group">
                <label className="block text-base font-bold text-vatco-primary mb-3 group-hover:text-vatco-secondary transition-colors">1. ¿Cómo califica su nivel de desconexión y descanso fuera del horario laboral?</label>
                <select 
                  value={quiz.q1} onChange={(e) => setQuiz({...quiz, q1: e.target.value})}
                  className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-vatco-secondary focus:border-vatco-secondary focus:outline-none transition-shadow cursor-pointer shadow-sm"
                >
                  <option value="3">Excelente: logro desconectarme y recargar energías.</option>
                  <option value="2">Regular: a veces pienso en el trabajo durante mi descanso.</option>
                  <option value="1">Bajo: me cuesta mucho desconectarme y siento agotamiento continuo.</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-base font-bold text-vatco-primary mb-3 group-hover:text-vatco-secondary transition-colors">2. Ante un error o situación difícil en la operación, ¿cómo suele reaccionar consigo mismo?</label>
                <select 
                  value={quiz.q2} onChange={(e) => setQuiz({...quiz, q2: e.target.value})}
                  className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-vatco-secondary focus:border-vatco-secondary focus:outline-none transition-shadow cursor-pointer shadow-sm"
                >
                  <option value="3">Con comprensión y búsqueda de soluciones sin castigarme en exceso.</option>
                  <option value="2">Con autocrítica moderada, aunque suelo sobrepensarlo.</option>
                  <option value="1">Con alta dureza y autocrítica severa que afecta mi estado anímico.</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-base font-bold text-vatco-primary mb-3 group-hover:text-vatco-secondary transition-colors">3. ¿Siente que cuenta con espacios de escucha y apoyo con sus compañeros y líderes?</label>
                <select 
                  value={quiz.q3} onChange={(e) => setQuiz({...quiz, q3: e.target.value})}
                  className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-vatco-secondary focus:border-vatco-secondary focus:outline-none transition-shadow cursor-pointer shadow-sm"
                >
                  <option value="3">Sí, tenemos excelente comunicación y confianza mutua.</option>
                  <option value="2">Parcialmente, aunque a veces falta más apertura.</option>
                  <option value="1">No mucho; siento que debo cargar con todo individualmente.</option>
                </select>
              </div>

              <div className="text-center pt-8 border-t border-gray-200">
                <motion.button 
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  type="button" 
                  onClick={calcularResultado} 
                  className="bg-vatco-primary hover:bg-[#1a3d66] text-white font-bold px-8 py-4 rounded-full shadow-xl transition-colors flex items-center justify-center gap-3 mx-auto"
                >
                  <i className="fa-solid fa-calculator text-vatco-secondary"></i> Ver mi Diagnóstico y Recomendación
                </motion.button>
              </div>
            </form>

            {/* Animación fluida al mostrar el resultado (AnimatePresence) */}
            <AnimatePresence>
              {resultado && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 40 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  className="overflow-hidden"
                >
                  <div className={`p-8 rounded-3xl border-2 shadow-sm ${resultado.color}`}>
                    <h4 className="text-xl font-extrabold mb-3">{resultado.title}</h4>
                    <p className="text-gray-700 text-base leading-relaxed font-medium">{resultado.desc}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
}