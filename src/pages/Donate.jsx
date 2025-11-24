import React from 'react';
import Button from '../components/Button';

export default function Donate() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Apoya Nuestra Misión
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tu donación nos ayuda a seguir rescatando, cuidando y encontrando hogares para gatos en situación de calle.
          </p>
        </div>

        {/* Impact Section */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Tu donación hace la diferencia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-3">🏥</div>
              <h3 className="font-semibold text-gray-900 mb-2">$10.000</h3>
              <p className="text-sm text-gray-600">
                Cubre una consulta veterinaria básica
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-3">💉</div>
              <h3 className="font-semibold text-gray-900 mb-2">$30.000</h3>
              <p className="text-sm text-gray-600">
                Vacunas y desparasitación completa
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-3">✂️</div>
              <h3 className="font-semibold text-gray-900 mb-2">$50.000</h3>
              <p className="text-sm text-gray-600">
                Esterilización de un gato
              </p>
            </div>
          </div>
        </div>

        {/* Donation Options */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Opciones de donación</h2>
          
          <div className="space-y-6">
            {/* Bank Transfer */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Transferencia Bancaria
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Banco:</strong> Banco Estado</p>
                <p><strong>Tipo de cuenta:</strong> Cuenta Corriente</p>
                <p><strong>Número de cuenta:</strong> 123456789</p>
                <p><strong>RUT:</strong> 12.345.678-9</p>
                <p><strong>Beneficiario:</strong> Fundación KATZE</p>
                <p><strong>Email:</strong> donaciones@katze.org</p>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Por favor envía el comprobante a donaciones@katze.org para emitir tu certificado de donación.
              </p>
            </div>

            {/* Other Methods */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Otras formas de ayudar
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Donaciones en especie: alimento, arena, medicamentos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Apadrina un gato: contribuye mensualmente al cuidado de un gato específico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Voluntariado: dona tu tiempo y habilidades</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Transparency */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Transparencia y rendición de cuentas
          </h3>
          <p className="text-gray-700">
            En KATZE nos comprometemos con la transparencia. Todas las donaciones son utilizadas 
            exclusivamente para el cuidado, tratamiento veterinario y bienestar de los gatos rescatados. 
            Publicamos informes anuales detallando el uso de los fondos.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            ¿Tienes preguntas sobre donaciones?
          </p>
          <Button size="lg" onClick={() => window.location.href = 'mailto:donaciones@katze.org'}>
            Contáctanos
          </Button>
        </div>
      </div>
    </div>
  );
}
