import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#f3ede7] dark:bg-black/20 text-[#1b140d] dark:text-background-light mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg">Katze Comunidad Felina</h4>
            <p className="text-sm text-[#9a734c] dark:text-gray-400">Dando a cada gato una segunda oportunidad.</p>
          </div>
          <div>
            <h5 className="font-bold mb-2">Navegación</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/cats" className="text-[#9a734c] hover:text-primary">Adoptar</a></li>
              <li><a href="#howto" className="text-[#9a734c] hover:text-primary">Cómo ayudar</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Contacto</h5>
            <p className="text-sm text-[#9a734c]">info@katzefelina.org</p>
            <p className="text-sm text-[#9a734c]">+1 (234) 567-890</p>
          </div>
          <div>
            <h5 className="font-bold mb-2">Síguenos</h5>
            <div className="flex gap-3">
              <a className="text-[#9a734c] hover:text-primary">IG</a>
              <a className="text-[#9a734c] hover:text-primary">FB</a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-[#9a734c] dark:text-gray-400">
          © 2025 Katze Comunidad Felina. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}