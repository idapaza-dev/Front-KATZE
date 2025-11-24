import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    nav('/login');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors">
            🐱 KATZE
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Inicio
            </Link>
            <Link to="/adopt" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Adoptar
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Contacto
            </Link>
            <Link to="/donate" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium">
              Donar
            </Link>
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-700">Hola, {user.name}</span>
                <button 
                  onClick={logout} 
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Salir
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="text-sm text-gray-700 hover:text-orange-500 font-medium"
              >
                Entrar
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
