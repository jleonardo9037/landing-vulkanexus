import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#021420',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'VULKANEXUS GROUP | Proveedor Oficial Dropi Latam',
  description: 'Proveedor e importador líder en e-commerce y Dropi. Productos ganadores con alta rotación, despachos en 24h y logística optimizada.',
  keywords: ['Dropi', 'Dropshipping', 'Proveedor Latam', 'E-commerce', 'Vulkanexus', 'Importaciones'],
  authors: [{ name: 'VULKANEXUS GROUP' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'VULKANEXUS GROUP | Proveedor Oficial Dropi Latam',
    description: 'Productos ganadores con alta rotación y menor tasa de devolución en Latam.',
    type: 'website',
    locale: 'es_CO',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-[#021420] text-[#DBDCDE] antialiased selection:bg-[#FF3D00] selection:text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}