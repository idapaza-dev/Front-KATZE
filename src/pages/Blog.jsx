import React from 'react';
export default function Blog() {
  const posts = [
    { id: 1, title: 'Guía para la primera semana con tu gatito', excerpt: 'Consejos esenciales para una buena adaptación.' },
    { id: 2, title: 'Entendiendo el lenguaje corporal felino', excerpt: 'Aprende a leer las señales de tu gato.' },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(p => (
          <article key={p.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{p.title}</h3>
            <p className="text-sm text-[#9a734c]">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}