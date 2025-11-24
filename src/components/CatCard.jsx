import React from 'react';
import { Link } from 'react-router-dom';

export default function CatCard({ cat }) {
  const photo = cat?.photos?.length ? cat.photos[0].url : 'https://via.placeholder.com/600x800?text=Gato';
  return (
    <article className="bg-white dark:bg-background-dark rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden">
      <Link to={`/cats/${cat._id}`} className="block">
        <div className="aspect-[3/4] bg-cover bg-center" style={{ backgroundImage: `url(${photo})` }} />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#1b140d] dark:text-background-light">{cat.name}</h3>
          <p className="text-sm text-[#9a734c] dark:text-gray-400">{cat.breed || 'Sin raza'}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">{cat.age ? `${cat.age} años` : 'Edad desconocida'}</span>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">{cat.status}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}