import React from 'react';
import { Link } from 'react-router-dom';
export default function AdoptConfirm() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center flex-col text-center p-6">
      <div className="size-24 bg-primary/20 rounded-full p-6 mb-6">
        <span className="material-symbols-outlined text-primary text-4xl">pets</span>
      </div>
      <h1 className="text-3xl font-bold">¡Gracias por tu solicitud!</h1>
      <p className="mt-2 text-[#9a734c]">Hemos recibido tu solicitud y la revisaremos en breve.</p>
      <Link to="/cats" className="mt-6 px-5 py-3 bg-primary rounded-lg">Explorar más gatitos</Link>
    </div>
  );
}