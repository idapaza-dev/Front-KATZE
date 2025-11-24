import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/client';
import CatGallery from '../components/CatGallery';
import Button from '../components/Button';
import Chip from '../components/Chip';
import Loading from '../components/Loading';

export default function CatDetail() {
  const { id } = useParams();
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await api.get(`/cats/${id}`);
        setCat(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) return <Loading message="Cargando información del gato..." />;
  if (!cat) return (
    <div className="container mx-auto px-4 py-16 text-center">
      <p className="text-gray-600">No se encontró el gato.</p>
      <Link to="/adopt" className="text-orange-500 hover:text-orange-600 font-medium mt-4 inline-block">
        Ver todos los gatos →
      </Link>
    </div>
  );

  const getAgeLabel = (age) => {
    if (!age) return 'Edad desconocida';
    if (age < 1) return 'Menos de 1 año (Cachorro)';
    if (age < 3) return `${age} año${age !== 1 ? 's' : ''} (Joven)`;
    if (age < 10) return `${age} año${age !== 1 ? 's' : ''} (Adulto)`;
    return `${age} año${age !== 1 ? 's' : ''} (Senior)`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link to="/adopt" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Volver a la lista
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Gallery */}
            <div>
              <CatGallery photos={cat.photos} name={cat.name} />
            </div>

            {/* Info */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{cat.name}</h1>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cat.breed && <Chip variant="default">{cat.breed}</Chip>}
                {cat.age !== undefined && <Chip variant="primary">{getAgeLabel(cat.age)}</Chip>}
                {cat.gender && <Chip variant="default">{cat.gender === 'male' ? '♂ Macho' : '♀ Hembra'}</Chip>}
                {cat.urgent && <Chip variant="danger">¡Urgente!</Chip>}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Sobre {cat.name}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {cat.description || 'Este adorable gato está buscando un hogar lleno de amor.'}
                </p>
              </div>

              {/* Characteristics */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Características</h2>
                <div className="grid grid-cols-2 gap-4">
                  {cat.vaccinated !== undefined && (
                    <div className="flex items-center">
                      <span className={cat.vaccinated ? 'text-green-500' : 'text-gray-400'}>
                        {cat.vaccinated ? '✓' : '✗'}
                      </span>
                      <span className="ml-2 text-gray-700">Vacunado</span>
                    </div>
                  )}
                  {cat.sterilized !== undefined && (
                    <div className="flex items-center">
                      <span className={cat.sterilized ? 'text-green-500' : 'text-gray-400'}>
                        {cat.sterilized ? '✓' : '✗'}
                      </span>
                      <span className="ml-2 text-gray-700">Esterilizado</span>
                    </div>
                  )}
                  {cat.healthStatus && (
                    <div className="col-span-2">
                      <span className="text-gray-700">Estado de salud: {cat.healthStatus}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Link to={`/adopt/process?catId=${cat._id}&catName=${encodeURIComponent(cat.name)}`}>
                  <Button size="lg" className="w-full">
                    ¡Quiero adoptar a {cat.name}!
                  </Button>
                </Link>
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Al hacer clic, iniciarás el proceso de adopción con un formulario simple.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Proceso de Adopción</h3>
          <p className="text-gray-700 mb-4">
            Adoptar es un compromiso de amor y responsabilidad. Nuestro proceso incluye:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Formulario de adopción (online)</li>
            <li>Entrevista telefónica o por videollamada</li>
            <li>Visita domiciliaria</li>
            <li>Firma del contrato de adopción</li>
            <li>¡Llevar a tu nuevo amigo a casa!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}