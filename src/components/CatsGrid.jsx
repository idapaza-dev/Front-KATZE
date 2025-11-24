import React from 'react';
import CatCard from './CatCard';

export default function CatsGrid({ cats, loading = false }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-gray-100 rounded-lg h-80 animate-pulse"></div>
        ))}
      </div>
    );
  }

  if (!cats || cats.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No se encontraron gatos disponibles.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cats.map(cat => (
        <CatCard key={cat._id} cat={cat} />
      ))}
    </div>
  );
}
