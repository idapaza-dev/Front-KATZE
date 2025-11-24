import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-white px-4">
      <div className="text-center">
        <div className="text-9xl font-bold text-orange-500 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">¡Ups! Página no encontrada</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Parece que este gato se escondió. La página que buscas no existe o fue movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg">Volver al inicio</Button>
          </Link>
          <Link to="/adopt">
            <Button size="lg" variant="outline">Ver gatos en adopción</Button>
          </Link>
        </div>
        <div className="mt-12 text-6xl">🐱</div>
      </div>
    </div>
  );
}
