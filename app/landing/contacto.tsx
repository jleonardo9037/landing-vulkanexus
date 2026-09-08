'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Constantes centralizadas fuera del componente para evitar asignación de memoria en cada render
const URLS = {
  materialCreativo: 'https://drive.google.com/drive/folders/1xV2OK-x8_-CWeoVEPT8JUcAvEUewSnlC?usp=sharing',
  garantiasYDespachos: 'https://drive.google.com/file/d/1OYM_5K2I-Y-2ynGHhOeeWdjuOJ-5ssDR/view?usp=sharing',
  terminosYPoliticas: 'https://drive.google.com/file/d/1h-xEWTdGXQviORvgCnfW-YjOjeZymEPJ/view?usp=sharing',
  garantiasDropi: 'https://drive.google.com/file/d/1OYM_5K2I-Y-2ynGHhOeeWdjuOJ-5ssDR/view?usp=sharing',
  whatsapp: 'https://wa.me/573013351878?text=Hola%20Vulkanexus,%20quiero%20vender%20sus%20productos%20en%20Dropi',
  instagram: 'https://instagram.com/vulkanexus',
  email: 'mailto:info@vulkanexus.com',
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

export default function Contacto() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#021420] text-[#DBDCDE] pt-16 pb-8 border-t border-[#DBDCDE]/10 relative overflow-hidden">
      {/* Luz ambiental decorativa */}
      <div 
        className="absolute top-0 right-0 -translate-y-1/2 w-96 h-96 bg-[#FF3D00]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Columna 1: Branding */}
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-black tracking-wider text-white uppercase">
              VULKANEXUS<span className="text-[#FF3D00]"> GROUP</span>
            </h3>
            <p className="text-sm text-[#DBDCDE]/80 leading-relaxed">
              Aliado estratégico para E-commerce y Dropi Latam. En Vulkanexus Group contamos con los productos con mayor rotación en Latam y la menor tasa de devolución del mercado.
            </p>
          </motion.div>

          {/* Columna 2: Plataforma */}
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white tracking-wide uppercase">Plataforma</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#metricas" className="hover:text-[#FF3D00] transition-colors duration-200">
                  Rendimiento Logístico
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-[#FF3D00] transition-colors duration-200">
                  Beneficios Dropshippers
                </a>
              </li>
              <li>
                <a 
                  href={URLS.garantiasYDespachos} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#FF3D00] transition-colors duration-200"
                >
                  Garantías y Despachos
                </a>
              </li>
              <li>
                <a 
                  href={URLS.materialCreativo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#FF3D00] transition-colors duration-200"
                >
                  Material Creativo
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Columna 3: Contacto Directo */}
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white tracking-wide uppercase">Contacto Directo</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href={URLS.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#FF3D00] transition-colors duration-200 group"
                  aria-label="Contactar por WhatsApp"
                >
                  <div className="p-2 rounded-lg bg-[#DBDCDE]/5 border border-[#DBDCDE]/10 group-hover:border-[#FF3D00]/50 group-hover:bg-[#FF3D00]/10 transition-colors">
                    <svg className="w-4 h-4 text-[#FF3D00]" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span>+57 301 335 1878</span>
                </a>
              </li>
              <li>
                <a 
                  href={URLS.email} 
                  className="flex items-center gap-3 hover:text-[#FF3D00] transition-colors duration-200 group"
                  aria-label="Enviar correo electrónico"
                >
                  <div className="p-2 rounded-lg bg-[#DBDCDE]/5 border border-[#DBDCDE]/10 group-hover:border-[#FF3D00]/50 group-hover:bg-[#FF3D00]/10 transition-colors">
                    <svg className="w-4 h-4 text-[#FF3D00]" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>info@vulkanexus.com</span>
                </a>
              </li>
              <li>
                <a 
                  href={URLS.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#FF3D00] transition-colors duration-200 group"
                  aria-label="Ir al perfil de Instagram"
                >
                  <div className="p-2 rounded-lg bg-[#DBDCDE]/5 border border-[#DBDCDE]/10 group-hover:border-[#FF3D00]/50 group-hover:bg-[#FF3D00]/10 transition-colors">
                    <svg className="w-4 h-4 text-[#FF3D00]" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>@vulkanexus</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Columna 4: CTA Conversión B2B */}
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white tracking-wide uppercase">¿Vendes en Dropi?</h4>
            <p className="text-sm text-[#DBDCDE]/80 leading-relaxed">
              Únete a nuestro grupo exclusivo de empresarios e integra nuestros productos a tu tienda hoy.
            </p>

            <motion.a
              href={URLS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#FF3D00] text-white font-bold text-sm hover:bg-[#FF3D00]/90 transition-all duration-200 shadow-[0_4px_20px_rgba(255,61,0,0.3)] hover:shadow-[0_4px_25px_rgba(255,61,0,0.5)] relative overflow-hidden"
            >
              <span>Hablar con un asesor</span>
              <motion.svg 
                className="w-4 h-4" 
                aria-hidden="true"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.a>
          </motion.div>

        </div>

        {/* Footer Inferior */}
        <div className="pt-8 mt-8 border-t border-[#DBDCDE]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#DBDCDE]/60">
          <p>© {currentYear} VULKANEXUS GROUP. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={URLS.terminosYPoliticas} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#DBDCDE] transition-colors"
            >
              Términos y Condiciones
            </a>
            <a 
              href={URLS.terminosYPoliticas} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#DBDCDE] transition-colors"
            >
              Políticas de Privacidad
            </a>
            <a 
              href={URLS.garantiasDropi} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#DBDCDE] transition-colors"
            >
              Garantías Dropi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}