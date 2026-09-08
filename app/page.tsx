import Pagina1 from './landing/pagina1';
import Pagina2 from './landing/pagina2';
import Pagina3 from './landing/pagina3';
import Pagina4 from './landing/pagina4';
import Contacto from './landing/contacto';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#021420] text-[#DBDCDE] selection:bg-[#FF3D00] selection:text-white">
      <Pagina1 />
      <Pagina2 />
      <Pagina3 />
      <Pagina4 />
      <Contacto />
    </main>
  );
}