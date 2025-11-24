import React from 'react';
export default function Loading({ message = 'Cargando...' }) {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="text-center">
        <div className="animate-pulse text-primary text-4xl">● ● ●</div>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{message}</p>
      </div>
    </div>
  );
}