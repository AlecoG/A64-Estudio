import React, { useState, useEffect } from 'react';
import { 
  Scissors, 
  Moon, 
  Sun, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Menu, 
  X, 
  CheckCircle2,
  Zap
} from 'lucide-react';

export default function A64Estudio() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Número de teléfono para WhatsApp (CAMBIAR ESTO POR EL REAL)
  const phoneNumber = "5350000000"; 
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hola,%20quisiera%20agendar%20un%20turno%20en%20A64%20Estudio.`;

  // Efecto para manejar el modo oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const services = [
    { name: "Corte Fade / Degradado", price: "500 CUP", desc: "Especialidad de la casa. Degradado limpio y moderno." },
    { name: "Corte Clásico", price: "400 CUP", desc: "Tijera y máquina, estilo tradicional." },
    { name: "Perfilado de Barba", price: "200 CUP", desc: "Toalla caliente, navaja y aceite hidratante." },
    { name: "Cejas", price: "100 CUP", desc: "Limpieza y perfilado con navaja." },
    { name: "Combo Completo", price: "700 CUP", desc: "Corte + Barba + Cejas + Peinado." },
    { name: "Styling / Peinado", price: "150 CUP", desc: "Lavado y peinado con productos premium." },
  ];

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-zinc-950 text-gray-100' : 'bg-white text-zinc-900'}`}>
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${darkMode ? 'bg-zinc-950/90 border-zinc-800' : 'bg-white/90 border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                <Scissors size={20} />
              </div>
              <span className="font-bold text-xl tracking-tighter">A64 ESTUDIO</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Inicio</button>
                <button onClick={() => scrollToSection('servicios')} className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Servicios</button>
                <button onClick={() => scrollToSection('ubicacion')} className="hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">Ubicación</button>
                <button 
                  onClick={toggleTheme} 
                  className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
                >
                  Agendar Cita
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex gap-4">
              <button 
                onClick={toggleTheme} 
                className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-zinc-800 text-yellow-400' : 'bg-gray-100 text-zinc-600'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-b dark:border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-zinc-950">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-3 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-zinc-900">Inicio</button>
              <button onClick={() => scrollToSection('servicios')} className="block w-full text-left px-3 py-3 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-zinc-900">Servicios</button>
              <button onClick={() => scrollToSection('ubicacion')} className="block w-full text-left px-3 py-3 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-zinc-900">Ubicación</button>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center mt-4 bg-blue-600 text-white px-3 py-3 rounded-lg text-base font-medium">
                Escribir al WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 sm:pt-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
              <Zap size={16} />
              <span>Abierto en Vedado</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
              Estilo Urbano <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                A64 Estudio
              </span>
            </h1>
            <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Más que un corte, es tu imagen. Especialistas en fades, diseños urbanos y cuidado de barba. 
              Ambiente relajado al aire libre en el corazón del Vedado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
              >
                <Phone size={20} />
                Reservar Turno
              </a>
              <button 
                onClick={() => scrollToSection('servicios')}
                className={`px-8 py-4 rounded-xl font-bold border transition-colors ${darkMode ? 'border-zinc-700 hover:bg-zinc-800' : 'border-gray-300 hover:bg-gray-50'}`}
              >
                Ver Precios
              </button>
            </div>
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80" 
              alt="Barber working on a fade" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-zinc-950/80' : 'from-black/50'} to-transparent`}></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-bold text-lg">Cortes de Precisión</p>
              <p className="text-sm opacity-90">Estilo & Actitud</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className={`py-20 ${darkMode ? 'bg-zinc-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Calidad profesional en un ambiente descontracturado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-zinc-950 border border-zinc-800 hover:border-zinc-700 shadow-zinc-900/20' 
                    : 'bg-white border border-gray-100 shadow-lg shadow-gray-200/50'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-zinc-900 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    <Scissors size={24} />
                  </div>
                  <span className={`text-lg font-bold px-3 py-1 rounded-full ${
                    darkMode ? 'bg-blue-900/20 text-blue-300' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {service.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  <CheckCircle2 size={16} />
                  <span>Resultado garantizado</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Location Section */}
      <section id="ubicacion" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl overflow-hidden ${darkMode ? 'bg-zinc-900' : 'bg-zinc-900 text-white'}`}>
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h2 className={`text-3xl font-bold mb-6 ${!darkMode && 'text-white'}`}>
                El Spot en el Vedado
              </h2>
              <p className={`mb-8 text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-300'}`}>
                No somos la típica barbería cerrada y aburrida. Estamos en el portal, al aire libre, disfrutando de la vibra del barrio. 
                Ven, relájate, habla de la vida y sal con el corte más duro de la zona.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-500 mt-1" size={24} />
                  <div>
                    <h4 className={`font-bold ${!darkMode && 'text-white'}`}>Dirección</h4>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-300'}`}>Calle Principal #123, e/ A y B, Vedado</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>(Portal de la casa A64)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-blue-500 mt-1" size={24} />
                  <div>
                    <h4 className={`font-bold ${!darkMode && 'text-white'}`}>Horarios</h4>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-300'}`}>Lunes a Sábado: 9:00 AM - 7:00 PM</p>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-300'}`}>Domingos: Con cita previa</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Phone size={18} />
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
            
            <div className="relative h-64 md:h-auto bg-zinc-800">
               {/* Placeholder for Map or Shop Image */}
               <img 
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Barber Tools Urban" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${darkMode ? 'border-zinc-800 bg-zinc-950' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Scissors size={20} className="text-blue-600" />
            <span className="font-bold text-xl tracking-tighter">A64 ESTUDIO</span>
          </div>
          <p className={`mb-6 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Estilo Urbano desde el Vedado, La Habana.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
              <Instagram size={24} />
            </a>
            <a href={whatsappLink} className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
              <Phone size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} A64 Estudio. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Floating Action Button (WhatsApp) */}
      <a 
        href={whatsappLink}
        target="_blank"
