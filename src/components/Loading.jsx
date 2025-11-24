import React from 'react';

export default function Loading({ message = 'Cargando...' }) {
  return (
    <div className="flex items-center justify-center min-h-64">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-orange-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-gray-600">{message}</p>
      </div>
    </div>
  );
}
