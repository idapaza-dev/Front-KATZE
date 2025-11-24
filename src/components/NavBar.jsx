import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    nav('/login');
  };

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">  
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 text-primary">
                <svg fill="currentColor" viewBox="0 0 48 48" className="w-8 h-8">
                  <path d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934" />
                </svg>
              </div>
              <h1 className="text-lg font-bold text-[#1b140d] dark:text-background-light">Katze</h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/cats" className="text-sm text-[#1b140d] dark:text-background-light hover:text-primary">Adoptar</Link>
            <a href="#howto" className="text-sm text-[#1b140d] dark:text-background-light hover:text-primary">Cómo ayudar</a>
            <a href="#about" className="text-sm text-[#1b140d] dark:text-background-light hover:text-primary">Sobre nosotros</a>
            <a href="#contact" className="text-sm text-[#1b140d] dark:text-background-light hover:text-primary">Contacto</a>
            <button className="ml-2 px-4 py-2 rounded-xl bg-primary text-[#1b140d] font-bold" onClick={() => window.location.href = '/donar'}>
              Donar
            </button>
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <>  
                <span className="text-sm text-gray-700 dark:text-gray-200 hidden sm:inline">{user.name}</span>
                <button onClick={logout} className="text-sm text-red-600">Salir</button>
              </>
            ) : (
              <Link to="/login" className="text-sm text-blue-600">Entrar</Link>
            )}

            <button className="md:hidden p-2" aria-label="menu">
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
