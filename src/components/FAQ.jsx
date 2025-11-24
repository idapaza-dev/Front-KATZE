import React, { useState } from 'react';

const faqs = [
  {
    question: '¿Cuál es el proceso de adopción?',
    answer: 'El proceso incluye: 1) Llenar el formulario de adopción online, 2) Entrevista telefónica o por videollamada, 3) Visita domiciliaria, 4) Firma del contrato de adopción, 5) ¡Llevar a tu nuevo amigo felino a casa!'
  },
  {
    question: '¿Cuánto cuesta adoptar un gato?',
    answer: 'La adopción tiene un costo de recuperación que incluye vacunas, desparasitación, esterilización y microchip. El monto varía según la edad del gato, pero generalmente está entre $30.000 y $50.000.'
  },
  {
    question: '¿Los gatos vienen esterilizados?',
    answer: 'Sí, todos nuestros gatos son esterilizados antes de la adopción. También están al día con sus vacunas y desparasitación.'
  },
  {
    question: '¿Puedo devolver al gato si no funciona?',
    answer: 'Entendemos que a veces las circunstancias cambian. Si por alguna razón no puedes quedarte con el gato, te pedimos que nos contactes. Trabajaremos contigo para asegurar el bienestar del animal.'
  },
  {
    question: '¿Qué necesito para adoptar?',
    answer: 'Necesitas ser mayor de 18 años, tener un hogar estable, contar con el consentimiento de todos los miembros del hogar, y estar dispuesto a asumir la responsabilidad financiera y de cuidado del gato.'
  },
  {
    question: '¿Puedo adoptar si tengo otras mascotas?',
    answer: 'Sí, pero evaluamos cada caso individualmente. Es importante que tus mascotas actuales estén vacunadas y esterilizadas, y que el ambiente sea adecuado para una nueva mascota.'
  },
  {
    question: '¿Qué pasa si el gato se enferma después de la adopción?',
    answer: 'Te proporcionamos un seguimiento post-adopción. Si el gato presenta problemas de salud relacionados con su tiempo en el refugio, trabajaremos contigo. Sin embargo, los gastos veterinarios regulares son responsabilidad del adoptante.'
  },
  {
    question: '¿Cuánto tiempo toma el proceso de adopción?',
    answer: 'El proceso completo puede tomar entre 1 y 2 semanas, dependiendo de la disponibilidad para entrevistas y visita domiciliaria.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900">{faq.question}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
