'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  name: string;
  href: string;
  esRutaLocal?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { name: 'Calculadora', href: '#calculadora'},
  { name: 'Rendimiento', href: '#metricas' },
  { name: 'Beneficios', href: '#beneficios' },
  { name: 'Cobertura', href: '#cobertura' },
];

const WHATSAPP_URL = "https://wa.me/573013351878?text=Hola%20Vulkanexus,%20quiero%20vender%20tus%20productos%20en%20Dropi";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#021420]/85 backdrop-blur-md border-b border-[#DBDCDE]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3 group" aria-label="Ir al inicio">
          <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/Isologo.png"
              alt="Vulkanexus Group Isologo"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg font-black tracking-wider text-white uppercase font-sans">
            Vulkanexus <span className="text-[#FF3D00]">Group</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            link.esRutaLocal ? (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-[#DBDCDE] hover:text-[#FF3D00] transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-[#DBDCDE] hover:text-[#FF3D00] transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
          
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-[#FF3D00] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF3D00]/25 transition-all flex items-center gap-2"
          >
            <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shine_1s_ease-in-out_infinite]" />
            <span className="absolute inset-0 rounded-xl bg-[#FF3D00] animate-ping opacity-20 pointer-events-none" />
            <span className="relative z-10">Vender Productos</span>
          </motion.a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-[#FF3D00] focus:outline-none focus:ring-2 focus:ring-[#FF3D00]/50 rounded-lg transition-colors"
          aria-label={isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#021420] border-b border-[#DBDCDE]/10 px-4 pt-2 pb-6 space-y-4 overflow-hidden"
          >
            {NAV_LINKS.map((link) => (
              link.esRutaLocal ? (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-semibold uppercase tracking-wider text-[#DBDCDE] hover:text-[#FF3D00] transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-semibold uppercase tracking-wider text-[#DBDCDE] hover:text-[#FF3D00] transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsOpen(false)}
              className="relative block w-full text-center px-5 py-3 rounded-xl bg-[#FF3D00] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF3D00]/25 overflow-hidden"
            >
              <span className="relative z-10">Vender Productos</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}