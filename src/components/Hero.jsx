import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-background-light dark:bg-background-dark py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1b140d] dark:text-background-light leading-tight">
              Dale un hogar amoroso a un gato necesitado
            </h1>
            <p className="mt-4 text-base text-[#9a734c] dark:text-gray-300 max-w-xl">
              Rescatamos, rehabilitamos y buscamos familias para gatos. Explora perfiles, aplica para adoptar o ayúdanos siendo voluntario.
            </p>

            <div className="mt-6 flex gap-3">
              <Link to="/cats" className="inline-flex items-center px-5 py-3 bg-primary text-[#1b140d] rounded-lg font-bold">Ver nuestros gatos</Link>
              <a href="#about" className="inline-flex items-center px-5 py-3 bg-white text-[#1b140d] rounded-lg border">Sobre nosotros</a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="aspect-video rounded-xl bg-center bg-cover shadow" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=1200&q=80)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}