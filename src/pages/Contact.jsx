import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes preguntas o necesitas más información? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
              <h2 className="text-2xl font-semibold mb-6">Información de contacto</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-orange-500 text-2xl mr-4">📧</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:info@katze.org" className="text-gray-600 hover:text-orange-500">
                      info@katze.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-orange-500 text-2xl mr-4">📱</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <a href="tel:+56912345678" className="text-gray-600 hover:text-orange-500">
                      +56 9 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-orange-500 text-2xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dirección</h3>
                    <p className="text-gray-600">
                      Santiago, Chile
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-orange-500 text-2xl mr-4">🕐</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Horario de atención</h3>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:00 - 18:00<br />
                      Sábados: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Síguenos en redes sociales
              </h3>
              <p className="text-gray-700 mb-4">
                Mantente al día con nuestras historias de rescate y adopciones exitosas.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-3xl hover:text-orange-500 transition-colors">📘</a>
                <a href="#" className="text-3xl hover:text-orange-500 transition-colors">📷</a>
                <a href="#" className="text-3xl hover:text-orange-500 transition-colors">🐦</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
