import React, { useState } from 'react';
import BlogList from '../components/BlogList';

// Mock data - replace with API call when available
const mockArticles = [
  {
    _id: '1',
    slug: 'cuidados-basicos-gato',
    title: 'Cuidados Básicos para tu Nuevo Gato',
    excerpt: 'Aprende todo lo que necesitas saber para cuidar adecuadamente a tu nuevo compañero felino.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600',
    category: 'Cuidados',
    author: 'Dra. María González',
    date: '2024-03-15'
  },
  {
    _id: '2',
    slug: 'alimentacion-saludable',
    title: 'Guía de Alimentación Saludable para Gatos',
    excerpt: 'Descubre qué alimentos son mejores para tu gato y cómo establecer una dieta balanceada.',
    image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600',
    category: 'Nutrición',
    author: 'Carlos Rodríguez',
    date: '2024-03-10'
  },
  {
    _id: '3',
    slug: 'adopcion-responsable',
    title: 'La Importancia de la Adopción Responsable',
    excerpt: 'Por qué adoptar en lugar de comprar puede salvar vidas y cambiar el mundo.',
    image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=600',
    category: 'Adopción',
    author: 'Ana Martínez',
    date: '2024-03-05'
  },
  {
    _id: '4',
    slug: 'comportamiento-felino',
    title: 'Entendiendo el Comportamiento Felino',
    excerpt: 'Descifra lo que tu gato intenta decirte con su lenguaje corporal y comportamiento.',
    image: 'https://images.unsplash.com/photo-1573865526739-10c1d3a1f0cc?w=600',
    category: 'Comportamiento',
    author: 'Dr. Pedro Silva',
    date: '2024-02-28'
  },
  {
    _id: '5',
    slug: 'salud-preventiva',
    title: 'Salud Preventiva: Vacunas y Chequeos',
    excerpt: 'Mantén a tu gato saludable con un calendario de vacunas y controles veterinarios.',
    image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600',
    category: 'Salud',
    author: 'Dra. Laura Fernández',
    date: '2024-02-20'
  },
  {
    _id: '6',
    slug: 'juguetes-y-entretenimiento',
    title: 'Juguetes y Entretenimiento para Gatos',
    excerpt: 'Mantén a tu gato activo y feliz con estos juegos y actividades.',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600',
    category: 'Entretenimiento',
    author: 'Sofía Ramírez',
    date: '2024-02-15'
  }
];

export default function Blog() {
  const [articles] = useState(mockArticles);
  const [loading] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Blog KATZE
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Consejos, historias y guías sobre el cuidado de gatos y adopción responsable.
        </p>
      </div>

      {/* Articles Grid */}
      <BlogList articles={articles} loading={loading} />
    </div>
  );
}
