import React from 'react';
export default function CatGallery({ photos = [] }) {
  if (!photos.length) return (
    <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">Sin imágenes</div>
  );
  return (
    <div className="flex gap-3 overflow-x-auto snap-x pb-2">
      {photos.map((p, i) => (
        <div key={i} className="min-w-[300px] snap-center rounded-lg overflow-hidden bg-center bg-cover" style={{ backgroundImage: `url(${p.url})`, height: 220 }} aria-hidden />
      ))}
    </div>
  );
}