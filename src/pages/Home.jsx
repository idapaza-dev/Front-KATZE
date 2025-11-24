import React from 'react';
import Hero from '../components/Hero';
import CatsGrid from '../components/CatsGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-[#1b140d] dark:text-background-light mb-4">Conoce a algunos de nuestros gatos</h2>
        <CatsGrid limit={8} />
      </section>

      <section id="howto" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-border-light">
            <h3 className="font-bold">Donar</h3>
            <p className="text-sm text-[#9a734c]">Tu contribución nos ayuda a cubrir gastos veterinarios y refugio.</p>
          </div>
          <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-border-light">
            <h3 className="font-bold">Voluntariado</h3>
            <p className="text-sm text-[#9a734c]">Únete a nuestro equipo y ayuda en el cuidado de los gatos.</p>
          </div>
          <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-border-light">
            <h3 className="font-bold">Hogar temporal</h3>
            <p className="text-sm text-[#9a734c]">Ofrece un hogar temporal a uno de nuestros gatos mientras buscamos adopción.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}