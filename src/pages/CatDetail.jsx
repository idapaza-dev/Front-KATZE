import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/client';
import CatGallery from '../components/CatGallery';
import Loading from '../components/Loading';

export default function CatDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.get(`/cats/${id}`);
        setCat(res.data || res.data?.data);
      } catch (e) { console.error(e); }
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) return <Loading />;
  if (!cat) return <p>No encontrado</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <CatGallery photos={cat.photos || [{ url: 'https://via.placeholder.com/800x600?text=Gato' }]} />
        </div>
        <div>
          <h1 className="text-3xl font-black">{cat.name}</h1>
          <p className="text-sm text-[#9a734c]">{cat.breed}</p>
          <p className="mt-4">{cat.description}</p>
          <div className="mt-6 flex gap-3">
            <button onClick={() => nav('/adopt/process')} className="px-4 py-2 bg-primary rounded-lg">Solicitar adopción</button>
            <a className="px-4 py-2 border rounded-lg" href="#">Contactar</a>
          </div>
        </div>
      </div>
    </div>
  );
}