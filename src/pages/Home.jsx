import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CatsGrid from '../components/CatsGrid';
import Button from '../components/Button';
import api from '../api/client';

export default function Home() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCats() {
      setLoading(true);
      try {
        const res = await api.get('/cats?limit=6');
        setCats(res.data.data || res.data);
      } catch (err) {
        console.error('Error loading cats:', err);
      } finally {
        setLoading(false);
      }
    }
    loadCats();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Cats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gatos en Adopción
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estos adorables gatos están buscando un hogar lleno de amor. 
            ¿Serás tú quien les dé una segunda oportunidad?
          </p>
        </div>

        <CatsGrid cats={cats} loading={loading} />

        <div className="text-center mt-10">
          <Link to="/adopt">
            <Button size="lg">Ver todos los gatos</Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre KATZE
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Somos una fundación dedicada al rescate, cuidado y adopción responsable de gatos en situación de calle. 
              Cada día trabajamos para brindarles una segunda oportunidad a estos maravillosos animales.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Con tu apoyo, podemos seguir salvando vidas y conectando gatos con familias amorosas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/volunteer">
                <Button size="lg" variant="outline">Quiero ser voluntario</Button>
              </Link>
              <Link to="/donate">
                <Button size="lg">Hacer una donación</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How to Help Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo puedes ayudar?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-3">Adopta</h3>
            <p className="text-gray-600 mb-4">
              Dale un hogar amoroso a un gato que lo necesita. 
              La adopción es el mayor acto de amor.
            </p>
            <Link to="/adopt" className="text-orange-500 font-medium hover:text-orange-600">
              Ver gatos →
            </Link>
          </div>

          <div className="text-center">
            <div className="text-6xl mb-4">💝</div>
            <h3 className="text-xl font-semibold mb-3">Dona</h3>
            <p className="text-gray-600 mb-4">
              Tu donación nos ayuda a cubrir gastos médicos, 
              alimentación y cuidados de los gatos rescatados.
            </p>
            <Link to="/donate" className="text-orange-500 font-medium hover:text-orange-600">
              Donar ahora →
            </Link>
          </div>

          <div className="text-center">
            <div className="text-6xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-3">Voluntariado</h3>
            <p className="text-gray-600 mb-4">
              Únete a nuestro equipo de voluntarios y ayuda 
              directamente en el cuidado de los gatos.
            </p>
            <Link to="/volunteer" className="text-orange-500 font-medium hover:text-orange-600">
              Únete →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tienes preguntas?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Estamos aquí para ayudarte. Contáctanos o revisa nuestras preguntas frecuentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="primary" className="bg-white text-orange-600 hover:bg-orange-50">
                Contáctanos
              </Button>
            </Link>
            <Link to="/faq">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                Preguntas Frecuentes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
