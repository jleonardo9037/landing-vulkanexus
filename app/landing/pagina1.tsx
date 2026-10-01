'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Menu from './menu';

const WHATSAPP_URL = "https://wa.me/573013351878?text=Hola%20Vulkanexus,%20quiero%20vender%20sus%20productos%20en%20Dropi";

export default function Pagina1() {
  return (
    <div className="relative bg-[#021420] text-[#DBDCDE] min-h-screen flex flex-col justify-between overflow-hidden">
      <Menu />

      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 flex-grow flex items-center">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[500px] h-[450px] sm:h-[500px] bg-[#FF3D00]/15 rounded-full blur-[120px] pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-3xl mx-auto space-y-5 sm:space-y-6">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DBDCDE]/10 border border-[#DBDCDE]/20 text-xs font-semibold uppercase tracking-wider text-[#FF3D00]"
            >
              <svg className="w-4 h-4 text-[#FF3D00]" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span>Proveedor Oficial Dropi Latam</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.15]"
            >
              Escala tus ventas sin preocuparte por el <span className="text-[#FF3D00]">Stock</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-[#DBDCDE]/80 leading-relaxed max-w-2xl mx-auto"
            >
              En <strong className="text-white">VULKANEXUS GROUP</strong> contamos con inventario 100% real en bodega, despachos garantizados en menos de 24h y control de calidad unidad por unidad para blindar tu margen neto.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-3.5 pt-2 sm:pt-4"
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FF3D00] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#FF3D00]/90 transition-all duration-200 shadow-xl shadow-[#FF3D00]/25 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Solicitar Catálogo en WhatsApp</span>
              </motion.a>

              <motion.a
                href="#beneficios"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#DBDCDE]/5 border border-[#DBDCDE]/20 text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#DBDCDE]/10 transition-all duration-200 text-center"
              >
                Conocer Ventajas
              </motion.a>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}