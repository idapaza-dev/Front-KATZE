import React, { useState, useEffect } from 'react';
import api from '../api/client';
import CatCard from '../components/CatCard';
import Loading from '../components/Loading';

export default function AdoptList() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await api.get('/cats');
        setCats(res.data?.data || res.data || []);
      } catch (e) { console.error(e); }
      setLoading(false);
    }
    load();
  }, []);

  const filtered = cats.filter(c => c.name?.toLowerCase().includes(q.toLowerCase()) || c.breed?.toLowerCase().includes(q.toLowerCase()));

  if (loading) return <Loading />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center gap-3 mb-6">
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar por nombre o raza" className="flex-1 rounded-xl p-3 border" />
      </div>
      {filtered.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(c => <CatCard key={c._id} cat={c} />)}
        </div>
      ) : (
        <p>No se encontraron gatos.</p>
      )}
    </div>
  );
}