import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/client';

export default function CatDetail() {
  const { id } = useParams();
  const [cat, setCat] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.get(`/cats/${id}`);
        setCat(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, [id]);

  if (!cat) return <p>Cargando...</p>;

  return (
    <div className="bg-white shadow rounded p-6">
      <h3 className="text-2xl font-semibold">{cat.name}</h3>
      <p className="text-gray-700 my-3">{cat.description}</p>
      <div className="flex gap-3">
        {cat.photos?.length ? (
          cat.photos.map((p, i) => <img key={i} src={p.url} alt={p.alt || cat.name} className="w-40 rounded" />)
        ) : (
          <div className="w-40 h-28 bg-gray-100 flex items-center justify-center text-sm text-gray-400">Sin foto</div>
        )}
      </div>
    </div>
  );
}