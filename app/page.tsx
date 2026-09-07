import Pagina1 from './landing/pagina1';
import Pagina2 from './landing/pagina2';
import Pagina3 from './landing/pagina3';
import Contacto from './landing/contacto';
import Pagina4 from './landing/pagina4';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#021420] text-[#DBDCDE]">
      <Pagina1 />
      <Pagina2 />
      <Pagina3 />
      <Pagina4 />
      <Contacto />
    </main>
  );
}