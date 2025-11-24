import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center flex-col text-center p-6">
      <h1 className="text-4xl font-black text-[#1b140d]">404</h1>
      <p className="mt-2 text-lg text-[#9a734c]">Página no encontrada</p>
      <Link to="/" className="mt-6 px-5 py-3 bg-primary text-[#1b140d] rounded-lg">Volver al inicio</Link>
    </div>
  );
}