import React from 'react';
export default function FAQ() {
  const items = [
    { q: '¿Cuáles son los requisitos?', a: 'Ser mayor de edad, identificación y comprobante de domicilio.' },
    { q: '¿Tiene costo la adopción?', a: 'Se sugiere una donación para gastos veterinarios.' },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Preguntas Frecuentes</h1>
      <div className="space-y-4">
        {items.map((it, i) => (
          <details key={i} className="p-4 bg-white rounded shadow">
            <summary className="font-bold">{it.q}</summary>
            <p className="mt-2 text-sm text-[#9a734c]">{it.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}