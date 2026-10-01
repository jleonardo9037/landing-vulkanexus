'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface BeneficioItem {
  metric: string;
  titulo: string;
  descripcion: string;
  icon: React.ReactNode;
}

const BENEFICIOS: BeneficioItem[] = [
  {
    metric: '> 30% Margen',
    titulo: 'Margen Neto Superior al 30%',
    descripcion:
      'Excelente rentabilidad neta por unidad vendida. Diseñamos nuestros costos para absorber holgadamente tus costos de pauta (CPA) y dejar utilidad real en tu billetera desde el primer despacho.',
    icon: (
      <svg className="w-6 h-6 text-current" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    metric: 'Cada 30-45 Días',
    titulo: 'Flujo de Caja Constante',
    descripcion:
      'Alta tasa de rotación y recompra periódica. Construye una base de clientes leales que recompran cada 30-45 días, estabilizando el flujo de caja de tu e-commerce mes a mes.',
    icon: (
      <svg className="w-6 h-6 text-current" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    metric: '< 20% Devolución',
    titulo: 'Riesgo Mínimo Operativo',
    descripcion:
      'Blindamos tu operación con 0% de devoluciones por fallas de calidad o empaque defectuoso. Cero pesos tirados a la basura en fletes de retorno por producto dañado o reclamos de clientes.',
    icon: (
      <svg className="w-6 h-6 text-current" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    metric: 'Recompensas Activas',
    titulo: 'Incentivos y Bonos por Ventas',
    descripcion:
      'Premiamos las tiendas que escalan. Accede a bonos en efectivo, descuentos en fletes y mejores precios de costo a medida que aumentas tu volumen diario de pedidos en Dropi.',
    icon: (
      <svg className="w-6 h-6 text-current" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-20 bg-[#021420] border-t border-[#DBDCDE]/10 relative overflow-hidden">
      {/* Glow de fondo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF3D00]/5 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl font-black uppercase text-white tracking-wide"
          >
            Ventajas <span className="text-[#FF3D00]">Financieras y Operativas</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#DBDCDE]/70 leading-relaxed"
          >
            Maximiza el retorno de tu inversión y protege tu flujo de caja con un modelo de negocio altamente rentable y respaldado.
          </motion.p>
        </div>

        {/* Grid de Tarjetas 2x2 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {BENEFICIOS.map((item) => (
            <motion.div 
              key={item.titulo}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                scale: 1.01,
                transition: { duration: 0.2, ease: "easeOut" } 
              }}
              whileTap={{ scale: 0.98 }}
              className="relative p-8 rounded-2xl bg-[#DBDCDE]/5 border border-[#DBDCDE]/10 hover:border-[#FF3D00]/50 hover:bg-[#DBDCDE]/10 transition-all duration-300 group flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Glow interno al pasar el mouse */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#FF3D00]/15 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  {/* Icono */}
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="p-3.5 w-fit rounded-xl bg-[#FF3D00]/10 border border-[#FF3D00]/20 text-[#FF3D00] group-hover:bg-[#FF3D00] group-hover:text-white transition-all duration-300 shadow-md"
                  >
                    {item.icon}
                  </motion.div>

                  {/* Badge de KPI / Métrica */}
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FF3D00]/10 text-[#FF3D00] border border-[#FF3D00]/30 tracking-wider uppercase">
                    {item.metric}
                  </span>
                </div>

                {/* Título y Descripción */}
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#FF3D00] transition-colors duration-300">
                  {item.titulo}
                </h3>
                <p className="text-sm text-[#DBDCDE]/70 leading-relaxed group-hover:text-[#DBDCDE] transition-colors duration-300">
                  {item.descripcion}
                </p>
              </div>

              {/* Borde inferior dinámico */}
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF3D00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-6" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}