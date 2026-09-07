'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#021420]/80 backdrop-blur-md border-b border-[#DBDCDE]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* ISOLOGO EN EL MENÚ */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-18 h-18 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/Isologo.png" // Nombre del archivo en la carpeta /public
              alt="Vulkanexus Group Isologo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg font-black tracking-wider text-white uppercase font-sans">
            Vulkanexus <span className="text-[#FF3D00]">Group</span>
          </span>
        </a>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider text-[#DBDCDE] hover:text-[#FF3D00] transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#contacto"
            className="px-5 py-2.5 rounded-xl bg-[#FF3D00] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#FF3D00]/90 transition-all shadow-lg shadow-[#FF3D00]/20"
          >
            Ser Proveedor
          </a>
        </nav>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-[#FF3D00] focus:outline-none"
          aria-label="Abrir Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#021420] border-b border-[#DBDCDE]/10 px-4 pt-2 pb-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider text-[#DBDCDE] hover:text-[#FF3D00]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-xl bg-[#FF3D00] text-white font-bold text-xs uppercase tracking-wider"
            >
              Ser Proveedor
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}