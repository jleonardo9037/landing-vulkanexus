'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Contacto() {
  const currentYear = new Date().getFullYear();
  const driveUrl = "https://drive.google.com/file/d/1P0WR5PJX33LvYejylb0ml73SfG_loVZx/view?usp=sharing";

  return (
    <footer className="bg-[#021420] text-[#DBDCDE] pt-16 pb-8 border-t border-[#DBDCDE]/10 relative overflow-hidden">
      {/* Luz de fondo sutil con el color de acento Coquelicot */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-96 h-96 bg-[#FF3D00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Columna 1: Branding VULKANEXUS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-black tracking-wider text-white uppercase">
              VULKANEXUS<span className="text-[#FF3D00]"> GROUP</span>
            </h3>
            <p className="text-sm text-[#DBDCDE]/80 leading-relaxed">
              Proveedor e importador líder en el ecosistema e-commerce y Dropi Latam. Productos ganadores con alta rotación y logística optimizada.
            </p>
            <div className="pt-2">
              <a
                href="https://www.vulkanexus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF3D00] hover:underline"
              >
                vulkanexus.com
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Columna 2: Enlaces Rápidos B2B */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white tracking-wide uppercase">Plataforma</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#catalogo" className="hover:text-[#FF3D00] transition-colors duration-200">
                  Catálogo Dropi
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-[#FF3D00] transition-colors duration-200">
                  Beneficios Dropshippers
                </a>
              </li>
              <li>
                <a href="#garantias" className="hover:text-[#FF3D00] transition-colors duration-200">
                  Garantías y Despachos
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-[#FF3D00] transition-colors duration-200">
                  Material Creativo
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Columna 3: Información Oficial de Contacto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white tracking-wide uppercase">Contacto Directo</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="https://wa.me/573013351878" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#FF3D00] transition-colors duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-[#DBDCDE]/5 border border-[#DBDCDE]/10 group-hover:border-[#FF3D00]/50 group-hover:bg-[#FF3D00]/10 transition-colors">
                    {/* SVG Teléfono */}
                    <svg className="w-4 h-4 text-[#FF3D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span>+57 301 335 1878</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@vulkanexus.com" 
                  className="flex items-center gap-3 hover:text-[#FF3D00] transition-colors duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-[#DBDCDE]/5 border border-[#DBDCDE]/10 group-hover:border-[#FF3D00]/50 group-hover:bg-[#FF3D00]/10 transition-colors">
                    {/* SVG Mail */}
                    <svg className="w-4 h-4 text-[#FF3D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>info@vulkanexus.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/vulkanexus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#FF3D00] transition-colors duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-[#DBDCDE]/5 border border-[#DBDCDE]/10 group-hover:border-[#FF3D00]/50 group-hover:bg-[#FF3D00]/10 transition-colors">
                    {/* SVG Instagram */}
                    <svg className="w-4 h-4 text-[#FF3D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* Columna 4: Call to Action B2B */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white tracking-wide uppercase">¿Vendes en Dropi?</h4>
            <p className="text-sm text-[#DBDCDE]/80 leading-relaxed">
              Únete a nuestro canal exclusivo de proveedores e integra nuestros productos a tu tienda hoy.
            </p>
            <a
              href="https://wa.me/573013351878?text=Hola%20Vulkanexus,%20quiero%20vender%20sus%20productos%20en%20Dropi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#FF3D00] text-white font-bold text-sm hover:bg-[#FF3D00]/90 transition-all duration-200 shadow-lg shadow-[#FF3D00]/20 active:scale-95"
            >
              <span>Hablar con un asesor</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

        </div>

        {/* Línea Divisoria y Derechos Reservados */}
        <div className="pt-8 mt-8 border-t border-[#DBDCDE]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#DBDCDE]/60">
          <p>© {currentYear} VULKANEXUS GROUP. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href={driveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#DBDCDE] transition-colors">Términos y Condiciones</a>
            <a href={driveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#DBDCDE] transition-colors">Políticas de Privacidad</a>
            <a href={driveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#DBDCDE] transition-colors">Garantías Dropi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}