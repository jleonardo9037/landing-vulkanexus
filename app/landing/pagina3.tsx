'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  valor: string;
  etiqueta: string;
  subtexto: string;
}

const STATS: StatItem[] = [
  {
    valor: '+70K',
    etiqueta: 'Unidades Despachadas',
    subtexto: 'Volumen constante y stock garantizado en bodega.',
  },
  {
    valor: '82.2%',
    etiqueta: 'Entregas Exitosas',
    subtexto: 'Efectividad en entregas y cobro contraentrega.',
  },
  {
    valor: '24h',
    etiqueta: 'Tiempo Medio de Despacho',
    subtexto: 'Procesamiento ultrarrápido desde bodega central.',
  },
  {
    valor: '0%',
    etiqueta: 'Devoluciones por Calidad',
    subtexto: 'Inspección previa unidad por unidad antes de despachar.',
  },
];

export default function Metricas() {
  return (
    <section id="metricas" className="relative py-20 bg-[#021420] overflow-hidden border-t border-[#DBDCDE]/10">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF3D00]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF3D00]/10 border border-[#FF3D00]/30 text-xs font-bold uppercase tracking-widest text-[#FF3D00]"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF3D00] animate-ping" />
            <span>Métricas que Respaldan Tu Escala</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight"
          >
            Rendimiento Logístico en <span className="text-[#FF3D00]">Números Reales</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.etiqueta}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative group p-8 rounded-2xl bg-gradient-to-b from-[#DBDCDE]/10 to-[#DBDCDE]/5 border border-[#DBDCDE]/15 hover:border-[#FF3D00]/50 backdrop-blur-xl transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#FF3D00]/20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 pointer-events-none" />

              <div className="space-y-3 relative z-10">
                <span className="block text-4xl sm:text-5xl font-black tracking-tight text-[#FF3D00] font-mono">
                  {stat.valor}
                </span>

                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  {stat.etiqueta}
                </h3>
              </div>

              <p className="text-xs text-[#DBDCDE]/70 leading-relaxed pt-4 border-t border-[#DBDCDE]/10 mt-6 relative z-10">
                {stat.subtexto}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}