'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function Pagina3() {
  const beneficios = [
    {
      titulo: 'CATÁLOGO WINNER Y CERO MERMAS',
      descripcion:
        'Productos masivos de alta rotación y verdadero margen neto. Inspeccionamos unidad por unidad antes de despachar para que no pierdas un solo peso en fletes por productos defectuosos.',
      icon: (
        <svg className="w-6 h-6 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      titulo: 'DESPACHOS EN 24H Y MÁXIMA EFECTIVIDAD',
      descripcion:
        'Tecnología e integración operativa para empacar y entregar a la transportadora el mismo día. Dispara tu tasa de entregados y reduce drásticamente la cancelación de pedidos.',
      icon: (
        <svg className="w-6 h-6 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      titulo: 'RESPALDO LOGISTICO Y GARANTÍAS SIN ESTRÉS',
      descripcion:
        'Solución inmediata de novedades en Dropi y tramitación ágil de garantías. Sin respuestas demoradas ni excusas, te acompañamos mano a mano para resolver cuellos de botella y escalar tu tienda.',
      icon: (
        <svg className="w-6 h-6 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  // Tipado explícito para resolver el error de TypeScript
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section id="beneficios" className="py-20 bg-[#021420] border-t border-[#DBDCDE]/10 relative overflow-hidden">
      {/* Luz ambiental sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF3D00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide"
          >
            ¿Por qué vender los productos de <span className="text-[#FF3D00]">Vulkanexus</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#DBDCDE]/70 leading-relaxed"
          >
            Optimizamos cada eslabón de la cadena logística para proteger tu inversión en pauta publicitaria.
          </motion.p>
        </div>

        {/* Tarjetas */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {beneficios.map((item, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" } 
              }}
              whileTap={{ scale: 0.98 }}
              className="relative p-8 rounded-2xl bg-[#DBDCDE]/5 border border-[#DBDCDE]/10 hover:border-[#FF3D00]/50 hover:bg-[#DBDCDE]/10 transition-all duration-300 group flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Glow en Hover */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF3D00]/20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 pointer-events-none" />

              <div className="space-y-5 relative z-10">
                {/* Contenedor del Ícono con estado de color dinámico */}
                <motion.div 
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="p-3.5 w-fit rounded-xl bg-[#FF3D00]/10 border border-[#FF3D00]/20 text-[#FF3D00] group-hover:bg-[#FF3D00] group-hover:text-white transition-all duration-300 shadow-md"
                >
                  {item.icon}
                </motion.div>

                <h3 className="text-lg font-bold text-white uppercase tracking-wide leading-snug group-hover:text-[#FF3D00] transition-colors duration-300">
                  {item.titulo}
                </h3>
                <p className="text-sm text-[#DBDCDE]/70 leading-relaxed group-hover:text-[#DBDCDE] transition-colors duration-300">
                  {item.descripcion}
                </p>
              </div>

              {/* Borde inferior animado */}
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF3D00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-6" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}