'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Check, 
  TrendingUp, 
  AlertTriangle,
  BarChart3,
  Package,
  Truck,
  Target,
  ShieldAlert,
  Zap,
  TrendingDown,
  DollarSign
} from 'lucide-react';

interface MonedaConfig {
  codigo: string;
  nombre: string;
  simbolo: string;
  locale: string;
}

const MONEDAS: MonedaConfig[] = [
  { codigo: 'GTQ', nombre: 'Quetzal Guatemalteco', simbolo: 'Q', locale: 'es-GT' },
  { codigo: 'COP', nombre: 'Peso Colombiano', simbolo: '$', locale: 'es-CO' },
];

function formatearMonedaLocal(monto: number, moneda: MonedaConfig): string {
  return new Intl.NumberFormat(moneda.locale, {
    style: 'currency',
    currency: moneda.codigo,
    maximumFractionDigits: 0,
  }).format(monto);
}

{/* COMPONENTE PARA ANIMAR LOS NÚMEROS (COUNT-UP) */}
function AnimatedNumber({ value, formatter }: { value: number; formatter?: (v: number) => string }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 400; // Duración en ms
    const initialValue = displayValue;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      
      const current = initialValue + (value - initialValue) * easeProgress;
      setDisplayValue(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value]);

  return <>{formatter ? formatter(displayValue) : Math.round(displayValue)}</>;
}

{/* TOOLTIP OFICIAL */}
function Tooltip({ contenido }: { contenido: string }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div 
      className="relative inline-flex items-center ml-2 align-middle cursor-pointer"
      onMouseEnter={() => setMostrar(true)}
      onMouseLeave={() => setMostrar(false)}
    >
      <span className="w-4 h-4 rounded-full bg-[#021420] border border-[#FF3D00]/50 text-[#FF3D00] text-[10px] font-bold flex items-center justify-center transition-all duration-200 hover:border-[#FF3D00] hover:bg-[#FF3D00] hover:text-white shrink-0">
        ?
      </span>
      <AnimatePresence>
        {mostrar && (
          <motion.div 
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-60 p-3 bg-[#021420] border border-[#DBDCDE]/20 rounded-xl text-xs font-sans text-[#DBDCDE]/80 font-normal leading-relaxed text-center shadow-2xl z-[9999] pointer-events-none"
          >
            {contenido}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-[#021420] border-r border-b border-[#DBDCDE]/20 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SelectorMonedaCustom({
  monedaSeleccionada,
  setMonedaSeleccionada,
}: {
  monedaSeleccionada: MonedaConfig;
  setMonedaSeleccionada: (m: MonedaConfig) => void;
}) {
  const [abierto, setAbierto] = useState(false);
  const contenedorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (contenedorRef.current && !contenedorRef.current.contains(e.target as Node)) {
        setAbierto(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative z-30" ref={contenedorRef}>
      <label className="block text-xs font-semibold text-[#DBDCDE] mb-2 uppercase tracking-wider">
        Moneda de Cálculo
        <Tooltip contenido="Moneda local utilizada para las conversiones y cálculos del simulador." />
      </label>

      <motion.button
        whileTap={{ scale: 0.98 }}
        type="button"
        onClick={() => setAbierto(!abierto)}
        className={`w-full bg-[#021420] border text-white text-xs font-bold rounded-xl p-3.5 flex items-center justify-between cursor-pointer outline-none transition-all duration-200 ${
          abierto
            ? 'border-[#FF3D00] shadow-lg shadow-[#FF3D00]/10'
            : 'border-[#DBDCDE]/20 hover:border-[#FF3D00]/50'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#FF3D00]" />
          <span className="font-mono text-[10px] bg-[#FF3D00]/15 text-[#FF3D00] px-2 py-0.5 rounded border border-[#FF3D00]/30 font-bold">
            {monedaSeleccionada.codigo}
          </span>
          <span className="truncate">{monedaSeleccionada.nombre}</span>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-[#FF3D00] transition-transform duration-200 ${
            abierto ? 'rotate-180' : ''
          }`}
        />
      </motion.button>

      <AnimatePresence>
        {abierto && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 w-full mt-2 bg-[#021420] border border-[#DBDCDE]/20 rounded-xl shadow-2xl z-[999] overflow-hidden"
          >
            <div className="py-1 divide-y divide-[#DBDCDE]/10">
              {MONEDAS.map((m) => {
                const esSeleccionada = m.codigo === monedaSeleccionada.codigo;
                return (
                  <button
                    key={m.codigo}
                    type="button"
                    onClick={() => {
                      setMonedaSeleccionada(m);
                      setAbierto(false);
                    }}
                    className={`w-full text-left px-3.5 py-2.5 text-xs font-bold transition-all duration-150 flex items-center justify-between cursor-pointer ${
                      esSeleccionada
                        ? 'bg-[#FF3D00]/15 text-[#FF3D00]'
                        : 'text-[#DBDCDE] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                          esSeleccionada
                            ? 'bg-[#FF3D00]/20 text-[#FF3D00]'
                            : 'bg-white/5 text-[#DBDCDE]/60'
                        }`}
                      >
                        {m.codigo}
                      </span>
                      <span>{m.nombre}</span>
                    </div>
                    {esSeleccionada && (
                      <Check className="w-4 h-4 text-[#FF3D00]" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CalculadoraDropshipper() {
  const [monedaSeleccionada, setMonedaSeleccionada] = useState<MonedaConfig>(MONEDAS[0]);

  // ESTADOS DROPSHIPPER
  const [dropUnidades, setDropUnidades] = useState<number>(100);
  const [dropCostoProducto, setDropCostoProducto] = useState<number>(45);
  const [dropFletePromedio, setDropFletePromedio] = useState<number>(25);
  const [dropCpaAds, setDropCpaAds] = useState<number>(30);
  const [dropTasaDevolucion, setDropTasaDevolucion] = useState<number>(15);
  const [dropMargenDeseado, setDropMargenDeseado] = useState<number>(25);

  useEffect(() => {
    if (monedaSeleccionada.codigo === 'COP') {
      setDropCostoProducto(25000);
      setDropFletePromedio(14000);
      setDropCpaAds(18000);
    } else {
      setDropCostoProducto(45);
      setDropFletePromedio(25);
      setDropCpaAds(30);
    }
  }, [monedaSeleccionada.codigo]);

  const formatoMoneda = (monto: number) => 
    formatearMonedaLocal(monto, monedaSeleccionada);

  // CÁLCULOS FINANCIEROS Y DE ABSORCIÓN DE PÉRDIDAS
  const metricasDropshipper = useMemo(() => {
    const totalGenerados = Math.max(1, Number(dropUnidades) || 1);
    const cProducto = Math.max(0, Number(dropCostoProducto) || 0);
    const fIda = Math.max(0, Number(dropFletePromedio) || 0);
    const cpaPorPedido = Math.max(0, Number(dropCpaAds) || 0);
    const pctDev = (Math.max(0, Number(dropTasaDevolucion) || 0)) / 100;
    const mDeseado = (Math.max(0, Number(dropMargenDeseado) || 0)) / 100;

    const udsDevueltas = totalGenerados * pctDev;
    const udsEntregadas = totalGenerados - udsDevueltas;

    const costoDevolucionPorPaquete = fIda * 1.8;
    const costoTotalFletesDevueltos = udsDevueltas * costoDevolucionPorPaquete;
    const cpaTotalPerdidoDevoluciones = udsDevueltas * cpaPorPedido;
    const perdidaTotalDevoluciones = costoTotalFletesDevueltos + cpaTotalPerdidoDevoluciones;

    const gastoTotalAds = totalGenerados * cpaPorPedido;
    const cpaEfectivoPorEntregado = udsEntregadas > 0 ? (gastoTotalAds / udsEntregadas) : 0;
    const castigoFletesUnitarioEfectivo = udsEntregadas > 0 ? (costoTotalFletesDevueltos / udsEntregadas) : 0;

    const costoBasePorEntregado = cProducto + fIda + cpaEfectivoPorEntregado + castigoFletesUnitarioEfectivo;

    const denominador = 1 - mDeseado;
    const precioVentaSugeridoFinal = denominador > 0 ? (costoBasePorEntregado / denominador) : (costoBasePorEntregado * 2);

    const gananciaNetaUnidad = precioVentaSugeridoFinal * mDeseado;
    const ventaTotalProyectada = precioVentaSugeridoFinal * udsEntregadas;
    const gananciaNetaTotal = gananciaNetaUnidad * udsEntregadas;

    const roasObjetivoReal = cpaEfectivoPorEntregado > 0 ? (precioVentaSugeridoFinal / cpaEfectivoPorEntregado) : 0;

    return {
      qtyTotal: totalGenerados,
      qtyEntregadas: Math.round(udsEntregadas),
      qtyDevueltas: Math.round(udsDevueltas),
      fleteIda: fIda,
      cpaPorPedido,
      cpaEfectivoPorEntregado,
      castigoFletesUnitarioEfectivo,
      costoTotalFletesDevueltos,
      cpaTotalPerdidoDevoluciones,
      perdidaTotalDevoluciones,
      precioVentaSugeridoFinal,
      gananciaNetaUnidad,
      ventaTotalProyectada,
      gananciaNetaTotal,
      roasObjetivoReal
    };
  }, [dropUnidades, dropCostoProducto, dropFletePromedio, dropCpaAds, dropTasaDevolucion, dropMargenDeseado]);

  return (
    <section id="calculadora" className="relative bg-[#021420] text-[#DBDCDE] py-20 font-sans border-t border-[#DBDCDE]/10 overflow-hidden">
      
      {/* GLOW DE FONDO */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-[#FF3D00]/15 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 px-4 sm:px-6 w-full max-w-6xl mx-auto space-y-12">
        
        {/* ENCABEZADO */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DBDCDE]/10 border border-[#DBDCDE]/20 text-xs font-semibold uppercase tracking-wider text-[#FF3D00]"
          >
            <Zap className="w-3.5 h-3.5 text-[#FF3D00]" />
            Simulador Financiero de Operación
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
          >
            CALCULADORA DE RENTABILIDAD EN <span className="text-[#FF3D00]">CADA VENTA</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#DBDCDE]/80 text-sm sm:text-base font-normal leading-relaxed"
          >
            Ajusta los parámetros de tu campaña para calcular automáticamente la absorción de cancelaciones y fijar un precio de venta rentable.
          </motion.p>
        </div>

        {/* CONTENEDOR EN DOS COLUMNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* PANEL DE PARÁMETROS */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#021420] p-6 sm:p-8 rounded-2xl border border-[#DBDCDE]/20 space-y-5 shadow-2xl"
          >
            <span className="text-xs font-bold text-white uppercase tracking-wider block border-b border-[#DBDCDE]/10 pb-3 flex items-center gap-2">
              <Package className="w-4 h-4 text-[#FF3D00]" />
              1. Datos de Operación
            </span>

            <SelectorMonedaCustom
              monedaSeleccionada={monedaSeleccionada}
              setMonedaSeleccionada={setMonedaSeleccionada}
            />

            {/* UNIDADES */}
            <div className="bg-[#021420] border border-[#FF3D00]/30 p-4 rounded-xl">
              <label className="block text-xs font-bold text-white uppercase mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Package className="w-4 h-4 text-[#FF3D00]" />
                  Pedidos Totales Generados
                </span>
                <Tooltip contenido="Volumen total de pedidos conseguidos en tu pauta publicitaria." />
              </label>
              <input
                type="number"
                min="1"
                value={dropUnidades}
                onChange={(e) => setDropUnidades(Math.max(1, Number(e.target.value)))}
                placeholder="100"
                className="w-full bg-[#021420] border border-[#DBDCDE]/20 rounded-lg p-3 font-mono text-white text-lg font-black text-center focus:border-[#FF3D00] outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            {/* COSTO BODEGA */}
            <div>
              <label className="block text-xs font-semibold text-[#DBDCDE] mb-1">
                Costo del Producto ({monedaSeleccionada.codigo})
                <Tooltip contenido="Precio del producto ofrecido por el proveedor en Dropi." />
              </label>
              <input
                type="number"
                min="0"
                value={dropCostoProducto}
                onChange={(e) => setDropCostoProducto(Number(e.target.value))}
                className="w-full bg-[#021420] border border-[#DBDCDE]/20 rounded-xl p-3 font-mono text-white text-sm font-bold focus:border-[#FF3D00] outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            {/* FLETE SALIDA */}
            <div>
              <label className="block text-xs font-semibold text-[#DBDCDE] mb-1 flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#DBDCDE]/60" />
                Flete Promedio de Salida ({monedaSeleccionada.codigo})
                <Tooltip contenido="Costo cobrado por la transportadora para llevar el pedido." />
              </label>
              <input
                type="number"
                min="0"
                value={dropFletePromedio}
                onChange={(e) => setDropFletePromedio(Number(e.target.value))}
                className="w-full bg-[#021420] border border-[#DBDCDE]/20 rounded-xl p-3 font-mono text-white text-sm font-bold focus:border-[#FF3D00] outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            {/* CPA ADS */}
            <div>
              <label className="block text-xs font-semibold text-[#DBDCDE] mb-1 flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-[#DBDCDE]/60" />
                CPA Deseado en Anuncios ({monedaSeleccionada.codigo})
                <Tooltip contenido="Costo por adquisición cobrado por Meta o TikTok por cada pedido registrado." />
              </label>
              <input
                type="number"
                min="0"
                value={dropCpaAds}
                onChange={(e) => setDropCpaAds(Number(e.target.value))}
                className="w-full bg-[#021420] border border-[#DBDCDE]/20 rounded-xl p-3 font-mono text-white text-sm font-bold focus:border-[#FF3D00] outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            {/* SLIDER DEVOLUCIONES */}
            <div className="bg-[#021420] border border-[#FF3D00]/30 p-4 rounded-xl space-y-3">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#FF3D00] flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  % Devoluciones
                  <Tooltip contenido="Tasa estimada de pedidos no entregados." />
                </span>
                <span className="font-mono text-[#FF3D00] font-bold">{dropTasaDevolucion}%</span>
              </div>
              <div className="relative flex items-center">
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={dropTasaDevolucion}
                  onChange={(e) => setDropTasaDevolucion(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #FF3D00 0%, #FF3D00 ${(dropTasaDevolucion / 50) * 100}%, #0a253a ${(dropTasaDevolucion / 50) * 100}%, #0a253a 100%)`
                  }}
                  className="w-full h-2.5 bg-[#0a253a] border border-[#DBDCDE]/20 rounded-lg appearance-none cursor-pointer accent-[#FF3D00] focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FF3D00] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-[#FF3D00]/50 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#FF3D00] [&::-moz-range-thumb]:border-none"
                />
              </div>
            </div>

            {/* SLIDER MARGEN DESEADO */}
            <div className="bg-[#021420] border border-[#DBDCDE]/30 p-4 rounded-xl space-y-3">
              <div className="flex justify-between text-xs font-semibold text-white">
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-[#FF3D00]" />
                  % Ganancia Neta Libre Deseada
                  <Tooltip contenido="Margen de utilidad limpia que deseas obtener sobre las ventas entregadas." />
                </span>
                <span className="font-mono text-[#FF3D00] font-bold">{dropMargenDeseado}%</span>
              </div>
              <div className="relative flex items-center">
                <input
                  type="range"
                  min="5"
                  max="60"
                  value={dropMargenDeseado}
                  onChange={(e) => setDropMargenDeseado(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #FF3D00 0%, #FF3D00 ${((dropMargenDeseado - 5) / 55) * 100}%, #0a253a ${((dropMargenDeseado - 5) / 55) * 100}%, #0a253a 100%)`
                  }}
                  className="w-full h-2.5 bg-[#0a253a] border border-[#DBDCDE]/20 rounded-lg appearance-none cursor-pointer accent-[#FF3D00] focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FF3D00] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-[#FF3D00]/50 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#FF3D00] [&::-moz-range-thumb]:border-none"
                />
              </div>
            </div>
          </motion.div>

          {/* PANEL DE RESULTADOS ANIMADO */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#021420] p-6 sm:p-8 rounded-2xl border border-[#DBDCDE]/20 space-y-6 shadow-2xl"
          >
            <span className="text-xs font-bold text-white uppercase tracking-wider block border-b border-[#DBDCDE]/10 pb-3 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#FF3D00]" />
              2. Resultado y Métricas Objetivo
            </span>

            {/* TARJETAS SECUNDARIAS ANIMADAS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* TARJETA 1: PÉRDIDA POR CANCELACIONES */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-[#021420] p-5 rounded-2xl border border-[#FF3D00]/40 flex flex-col justify-between space-y-2 shadow-lg shadow-[#FF3D00]/5 hover:shadow-[#FF3D00]/20 hover:border-[#FF3D00] transition-colors duration-300 cursor-pointer"
              >
                <span className="text-[11px] text-[#FF3D00] font-bold uppercase tracking-wider flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <TrendingDown className="w-3.5 h-3.5" />
                    Pérdida por Devoluciones
                  </span>
                  <Tooltip contenido="Dinero invertido en fletes no cobrados y pauta publicitaria quemada por pedidos cancelados." />
                </span>

                <span className="text-2xl sm:text-3xl font-black font-mono text-[#FF3D00]">
                  <AnimatedNumber 
                    value={metricasDropshipper.perdidaTotalDevoluciones} 
                    formatter={(v) => formatoMoneda(v)} 
                  />
                </span>

                <div className="border-t border-[#FF3D00]/20 pt-2 space-y-1 text-[11px] font-mono text-[#DBDCDE]/80">
                  <div className="flex justify-between">
                    <span>Fletes Devueltos (1.8x):</span>
                    <span className="text-white font-bold">{formatoMoneda(metricasDropshipper.costoTotalFletesDevueltos)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CPA Ads Quemado:</span>
                    <span className="text-white font-bold">{formatoMoneda(metricasDropshipper.cpaTotalPerdidoDevoluciones)}</span>
                  </div>
                </div>
              </motion.div>

              {/* TARJETA 2: ROAS OBJETIVO */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-[#021420] p-5 rounded-2xl border border-[#DBDCDE]/30 flex flex-col justify-between space-y-2 shadow-lg hover:border-[#FF3D00]/50 hover:shadow-[#FF3D00]/10 transition-colors duration-300 cursor-pointer"
              >
                <span className="text-[11px] text-white font-bold uppercase tracking-wider flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-[#FF3D00]" />
                    ROAS Mínimo Objetivo
                  </span>
                  <Tooltip contenido="Relación Mínima en Anuncios para no perder dinero y mantener el margen deseado." />
                </span>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-white">
                    <AnimatedNumber 
                      value={metricasDropshipper.roasObjetivoReal} 
                      formatter={(v) => `${v.toFixed(2)}x`} 
                    />
                  </span>
                  <span className="text-xs text-[#FF3D00] font-bold font-mono">
                    (Mínimo Exigido)
                  </span>
                </div>

                <div className="border-t border-[#DBDCDE]/10 pt-2 text-[11px] font-mono text-[#DBDCDE]/80 space-y-1">
                  <div className="flex justify-between">
                    <span>• Órdenes Entregadas:</span>
                    <span className="text-white font-bold">{metricasDropshipper.qtyEntregadas} Uds</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Órdenes Canceladas:</span>
                    <span className="text-[#FF3D00] font-bold">{metricasDropshipper.qtyDevueltas} Uds</span>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* TARJETA 3: PRECIO SUGERIDO DESTACADO ANIMADO */}
            <motion.div 
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#021420] p-6 sm:p-8 rounded-2xl border-2 border-[#FF3D00] text-center space-y-3 shadow-2xl shadow-[#FF3D00]/10 hover:shadow-[#FF3D00]/25 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <span className="text-xs font-bold text-[#DBDCDE] uppercase tracking-widest block flex items-center justify-center gap-1.5">
                <DollarSign className="w-4 h-4 text-[#FF3D00]" />
                PRECIO SUGERIDO DE VENTA AL CLIENTE FINAL
                <Tooltip contenido="Precio recomendado para proteger tu margen neto absorbiendo cancelaciones y pauta total." />
              </span>
              
              <span className="text-3xl sm:text-5xl font-black font-mono text-[#FF3D00] block my-2">
                <AnimatedNumber 
                  value={metricasDropshipper.precioVentaSugeridoFinal} 
                  formatter={(v) => formatoMoneda(v)} 
                />
              </span>
              
              <div className="bg-[#DBDCDE]/10 inline-block px-4 py-2 rounded-xl border border-[#DBDCDE]/20">
                <span className="text-xs text-white font-semibold">
                  Ganancia Neta por Unidad Entregada:{" "}
                  <span className="text-[#FF3D00] font-mono font-bold text-sm">
                    <AnimatedNumber 
                      value={metricasDropshipper.gananciaNetaUnidad} 
                      formatter={(v) => formatoMoneda(v)} 
                    />
                  </span>
                </span>
              </div>
            </motion.div>

            {/* TOTALES ACUMULADOS */}
            <div className="bg-[#021420] border border-[#DBDCDE]/20 p-5 rounded-2xl space-y-3 font-mono shadow-xl">
              <div className="flex justify-between items-center text-xs border-b border-[#DBDCDE]/10 pb-2">
                <span className="text-[#DBDCDE] uppercase font-bold">Venta Total Real ({metricasDropshipper.qtyEntregadas} entregadas):</span>
                <span className="text-white font-black text-base">{formatoMoneda(metricasDropshipper.ventaTotalProyectada)}</span>
              </div>
              <div className="flex justify-between items-center text-xs pt-1">
                <span className="text-[#FF3D00] uppercase font-extrabold tracking-wider">Ganancia Neta Acumulada Libre:</span>
                <span className="text-[#FF3D00] font-black text-base bg-[#FF3D00]/10 px-3 py-1 rounded-lg border border-[#FF3D00]/30">{formatoMoneda(metricasDropshipper.gananciaNetaTotal)}</span>
              </div>
            </div>

            {/* DESGLOSE FINANCIERO */}
            <div className="bg-[#021420] p-4 rounded-xl border border-[#DBDCDE]/10 space-y-2 text-xs font-mono">
              <span className="text-[10px] text-[#DBDCDE]/60 font-bold uppercase block mb-1">
                Desglose unitario para orden entregada ({formatoMoneda(metricasDropshipper.precioVentaSugeridoFinal)}):
              </span>
              <div className="flex justify-between text-[#DBDCDE]">
                <span>• Costo Producto (Bodega):</span>
                <span>{formatoMoneda(dropCostoProducto)}</span>
              </div>
              <div className="flex justify-between text-[#DBDCDE]">
                <span>• Flete Envío Exitoso:</span>
                <span>{formatoMoneda(metricasDropshipper.fleteIda)}</span>
              </div>
              <div className="flex justify-between text-[#DBDCDE]">
                <span>• CPA Absorbiendo Cancelaciones:</span>
                <span>{formatoMoneda(metricasDropshipper.cpaEfectivoPorEntregado)}</span>
              </div>
              <div className="flex justify-between text-[#FF3D00] font-bold">
                <span>• Absorción Fletes Devueltos (180%):</span>
                <span>{formatoMoneda(metricasDropshipper.castigoFletesUnitarioEfectivo)}</span>
              </div>
              <div className="flex justify-between text-white font-bold border-t border-[#DBDCDE]/10 pt-2 text-sm">
                <span>(=) Ganancia Neta Libre ({dropMargenDeseado}%):</span>
                <span className="text-[#FF3D00]">{formatoMoneda(metricasDropshipper.gananciaNetaUnidad)}</span>
              </div>
            </div>

            {/* CRITERIO FINANCIERO */}
            <div className="bg-[#021420] border border-[#DBDCDE]/10 rounded-2xl p-4 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#FF3D00]" />
                <span className="text-[#FF3D00] font-bold text-xs uppercase tracking-wider">Criterio Financiero de Absorción</span>
              </div>
              <p className="text-xs text-[#DBDCDE]/80 leading-relaxed">
                De las <strong className="text-white">{metricasDropshipper.qtyTotal} órdenes</strong>, estimamos que <strong className="text-white">{metricasDropshipper.qtyEntregadas} serán entregadas</strong> y <strong className="text-white">{metricasDropshipper.qtyDevueltas} devueltas</strong>. La inversión publicitaria de los pedidos cancelados ({formatoMoneda(metricasDropshipper.cpaTotalPerdidoDevoluciones)}) y la penalización por retorno de fletes ({formatoMoneda(metricasDropshipper.costoTotalFletesDevueltos)}) se transfieren al precio sugerido para proteger tu margen neto.
              </p>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}