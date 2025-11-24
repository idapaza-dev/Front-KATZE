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
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-lg font-bold">KATZE</Link>
          <Link to="/cats" className="text-sm text-gray-600 hover:text-gray-900">Gatos</Link>
        </div>
        <div>
          {user ? (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-700">{user.name}</span>
              <button onClick={logout} className="text-sm text-red-600">Salir</button>
            </div>
          ) : (
            <Link to="/login" className="text-sm text-blue-600">Entrar</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
