'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Pais {
  nombre: string;
  code: string;
  activo: boolean;
}

const PAISES: Pais[] = [
  { nombre: 'Colombia', code: 'co', activo: true },
  { nombre: 'Guatemala', code: 'gt', activo: true },
  { nombre: 'Ecuador', code: 'ec', activo: true },
  { nombre: 'México', code: 'mx', activo: true },
  { nombre: 'Chile', code: 'cl', activo: true },
  { nombre: 'Perú', code: 'pe', activo: false },
  { nombre: 'Panamá', code: 'pa', activo: false },
  { nombre: 'Paraguay', code: 'py', activo: false },
  { nombre: 'Brasil', code: 'br', activo: false },
  { nombre: 'Argentina', code: 'ar', activo: true },
  { nombre: 'Venezuela', code: 've', activo: false },
];

export default function CoberturaLatam() {
  return (
    <section id="cobertura" className="relative z-10 py-20 overflow-hidden bg-[#021420] border-t border-[#DBDCDE]/10">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#FF3D00]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF3D00]/60 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF3D00]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF3D00]/10 border border-[#FF3D00]/30 text-xs font-bold uppercase tracking-widest text-[#FF3D00]"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF3D00] animate-ping" />
            <span>Infraestructura Cero Barreras</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white"
          >
            Dominio Logístico en <span className="text-[#FF3D00]">Toda Latinoamérica</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-[#DBDCDE]/70 leading-relaxed max-w-2xl mx-auto"
          >
            Conectamos directamente con las bodegas de Dropi para que despaches localmente en cada país sin trámites de importación.
          </motion.p>
        </div>
      </div>

      {/* Marquee Bucle Optimizado en CSS */}
      <div className="mt-12 relative w-full overflow-hidden whitespace-nowrap flex pointer-events-none select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] py-2">
        <div className="flex gap-5 items-center shrink-0 transform-gpu animate-marquee">
          {PAISES.map((item) => (
            <TarjetaPais key={item.code} item={item} />
          ))}
        </div>

        <div className="flex gap-5 items-center shrink-0 transform-gpu animate-marquee" aria-hidden="true">
          {PAISES.map((item) => (
            <TarjetaPais key={`dup-${item.code}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TarjetaPais({ item }: { item: Pais }) {
  return (
    <div 
      className={`flex items-center gap-3.5 bg-gradient-to-b border p-2.5 pr-6 rounded-2xl backdrop-blur-xl shrink-0 shadow-2xl relative transition-all ${
        item.activo 
          ? 'from-[#DBDCDE]/10 to-emerald-950/20 border-emerald-500/40' 
          : 'from-[#DBDCDE]/10 to-[#DBDCDE]/5 border-[#DBDCDE]/15'
      }`}
    >
      <div className={`w-10 h-10 rounded-xl bg-[#021420] border flex items-center justify-center overflow-hidden shrink-0 shadow-inner relative ${
        item.activo ? 'border-emerald-500/50' : 'border-[#DBDCDE]/20'
      }`}>
        <Image 
          src={`https://flagcdn.com/w80/${item.code}.png`} 
          alt={`Bandera de ${item.nombre}`} 
          width={40}
          height={40}
          className="object-cover w-full h-full"
          unoptimized
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-white uppercase font-mono tracking-wider">
            {item.nombre}
          </span>
          <span 
            className={`w-1.5 h-1.5 rounded-full animate-pulse ${
              item.activo ? 'bg-emerald-400' : 'bg-[#FF3D00]'
            }`} 
          />
        </div>
        
        <span className={`text-[10px] font-semibold tracking-wide ${
          item.activo ? 'text-emerald-400' : 'text-[#FF3D00]'
        }`}>
          {item.activo ? 'Activo en Dropi' : 'Próximamente Dropi'}
        </span>
      </div>
    </div>
  );
}