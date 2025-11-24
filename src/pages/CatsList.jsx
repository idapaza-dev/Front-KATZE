import React, { useEffect, useState } from 'react';
import api from '../api/client';
import { Link } from 'react-router-dom';

export default function CatsList() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await api.get('/cats');
        setCats(res.data.data || res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (!cats.length) return <p>No hay gatos aún.</p>;

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Gatos</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cats.map(c => (
          <li key={c._id} className="bg-white shadow rounded p-4">
            <Link to={`/cats/${c._id}`} className="block">
              <div className="text-lg font-medium">{c.name}</div>
              <div className="text-sm text-gray-500">{c.breed || 'Sin raza'}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}