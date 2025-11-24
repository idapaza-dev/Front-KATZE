import React from 'react';
import { Link } from 'react-router-dom';
import Chip from './Chip';

export default function CatCard({ cat }) {
  const mainPhoto = cat.photos?.[0]?.url || 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400';
  
  const getAgeLabel = (age) => {
    if (!age) return 'Edad desconocida';
    if (age < 1) return 'Cachorro';
    if (age < 3) return 'Joven';
    if (age < 10) return 'Adulto';
    return 'Senior';
  };

  return (
    <Link to={`/cats/${cat._id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img 
            src={mainPhoto} 
            alt={cat.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400';
            }}
          />
          {cat.urgent && (
            <div className="absolute top-2 right-2">
              <Chip variant="danger" size="sm">¡Urgente!</Chip>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{cat.name}</h3>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {cat.breed && <Chip variant="default" size="sm">{cat.breed}</Chip>}
            {cat.age && <Chip variant="primary" size="sm">{getAgeLabel(cat.age)}</Chip>}
            {cat.gender && <Chip variant="default" size="sm">{cat.gender === 'male' ? '♂ Macho' : '♀ Hembra'}</Chip>}
          </div>

          {cat.description && (
            <p className="text-gray-600 text-sm line-clamp-2 mb-3">
              {cat.description}
            </p>
          )}

          <div className="text-orange-500 text-sm font-medium group-hover:text-orange-600">
            Ver más →
          </div>
        </div>
      </div>
    </Link>
  );
}
