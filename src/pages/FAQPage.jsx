import React from 'react';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre adopción y cuidado de gatos.
          </p>
        </div>

        {/* FAQ Component */}
        <FAQ />

        {/* Still have questions? */}
        <div className="mt-12 bg-orange-50 border border-orange-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            ¿Aún tienes preguntas?
          </h2>
          <p className="text-gray-700 mb-6">
            No dudes en contactarnos. Estamos aquí para ayudarte en tu proceso de adopción.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">Contáctanos</Button>
            </Link>
            <Link to="/adopt">
              <Button size="lg" variant="outline">Ver gatos en adopción</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
