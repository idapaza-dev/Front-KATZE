import React, { useEffect, useState } from 'react';
import api from '../api/client';
import CatCard from './CatCard';

export default function CatsGrid({ limit = 12 }) {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      try {
        const res = await api.get(`/cats?limit=${limit}`);
        const data = res.data?.data || res.data || [];
        if (mounted) setCats(data);
      } catch (err) {
        console.error('Error cargando gatos', err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, [limit]);

  if (loading) return <p className="text-center py-8">Cargando gatos…</p>;
  if (!cats.length) return <p className="text-center py-8">No hay gatos disponibles.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cats.map(c => <CatCard key={c._id} cat={c} />)}
    </div>
  );
}