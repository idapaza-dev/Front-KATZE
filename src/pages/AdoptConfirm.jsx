import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Button from '../components/Button';

export default function AdoptConfirm() {
  const [searchParams] = useSearchParams();
  const catName = searchParams.get('catName') || 'tu nuevo amigo felino';

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ¡Solicitud Enviada con Éxito!
        </h1>
        
        <p className="text-xl text-gray-700 mb-6">
          Tu solicitud de adopción para <strong>{catName}</strong> ha sido recibida.
        </p>

        {/* What's Next */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8 text-left">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">¿Qué sigue ahora?</h2>
          <ol className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold mr-3">1</span>
              <span><strong>Revisión de solicitud:</strong> Nuestro equipo revisará tu solicitud en los próximos 2-3 días hábiles.</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold mr-3">2</span>
              <span><strong>Entrevista:</strong> Te contactaremos para agendar una entrevista telefónica o por videollamada.</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold mr-3">3</span>
              <span><strong>Visita domiciliaria:</strong> Agendaremos una visita a tu hogar para verificar que sea un ambiente adecuado.</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold mr-3">4</span>
              <span><strong>Adopción:</strong> Si todo está en orden, firmaremos el contrato de adopción y podrás llevar a tu nuevo amigo a casa.</span>
            </li>
          </ol>
        </div>

        {/* Important Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-blue-800">
            <strong>Importante:</strong> Por favor revisa tu correo electrónico (incluyendo la carpeta de spam) 
            para recibir actualizaciones sobre tu solicitud.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg">Volver al inicio</Button>
          </Link>
          <Link to="/adopt">
            <Button size="lg" variant="outline">Ver más gatos</Button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            ¿Tienes preguntas? Contáctanos en{' '}
            <a href="mailto:info@katze.org" className="text-orange-500 hover:text-orange-600 font-medium">
              info@katze.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
