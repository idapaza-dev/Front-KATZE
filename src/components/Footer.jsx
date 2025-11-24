import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">KATZE</h3>
            <p className="text-sm">
              Fundación dedicada al rescate, cuidado y adopción de gatos en situación de calle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-400 transition-colors">Inicio</Link></li>
              <li><Link to="/adopt" className="hover:text-orange-400 transition-colors">Adoptar</Link></li>
              <li><Link to="/blog" className="hover:text-orange-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Help Us */}
          <div>
            <h4 className="text-white font-semibold mb-3">Ayúdanos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/donate" className="hover:text-orange-400 transition-colors">Donar</Link></li>
              <li><Link to="/volunteer" className="hover:text-orange-400 transition-colors">Voluntariado</Link></li>
              <li><Link to="/faq" className="hover:text-orange-400 transition-colors">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>📧 info@katze.org</li>
              <li>📱 +56 9 1234 5678</li>
              <li>📍 Santiago, Chile</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} KATZE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
