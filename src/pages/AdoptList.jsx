import React, { useEffect, useState } from 'react';
import CatsGrid from '../components/CatsGrid';
import Input from '../components/Input';
import Button from '../components/Button';
import api from '../api/client';

export default function AdoptList() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    gender: '',
    age: '',
    breed: ''
  });

  useEffect(() => {
    async function loadCats() {
      setLoading(true);
      try {
        const res = await api.get('/cats');
        const catsData = res.data.data || res.data;
        setCats(catsData);
        setFilteredCats(catsData);
      } catch (err) {
        console.error('Error loading cats:', err);
      } finally {
        setLoading(false);
      }
    }
    loadCats();
  }, []);

  useEffect(() => {
    let result = [...cats];

    // Search filter
    if (search) {
      result = result.filter(cat =>
        cat.name.toLowerCase().includes(search.toLowerCase()) ||
        cat.description?.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Gender filter
    if (filters.gender) {
      result = result.filter(cat => cat.gender === filters.gender);
    }

    // Age filter
    if (filters.age) {
      if (filters.age === 'young') {
        result = result.filter(cat => cat.age < 3);
      } else if (filters.age === 'adult') {
        result = result.filter(cat => cat.age >= 3 && cat.age < 10);
      } else if (filters.age === 'senior') {
        result = result.filter(cat => cat.age >= 10);
      }
    }

    // Breed filter
    if (filters.breed) {
      result = result.filter(cat => cat.breed === filters.breed);
    }

    setFilteredCats(result);
  }, [search, filters, cats]);

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const clearFilters = () => {
    setSearch('');
    setFilters({ gender: '', age: '', breed: '' });
  };

  const uniqueBreeds = [...new Set(cats.map(cat => cat.breed).filter(Boolean))];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Gatos en Adopción</h1>
        <p className="text-lg text-gray-600">
          Encuentra a tu compañero perfecto entre nuestros {cats.length} gatos disponibles.
        </p>
      </div>

      {/* Filters Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Filtros de búsqueda</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <Input
            placeholder="Buscar por nombre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Gender Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Género</label>
            <select
              value={filters.gender}
              onChange={(e) => handleFilterChange('gender', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Todos</option>
              <option value="male">Macho</option>
              <option value="female">Hembra</option>
            </select>
          </div>

          {/* Age Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Edad</label>
            <select
              value={filters.age}
              onChange={(e) => handleFilterChange('age', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Todas</option>
              <option value="young">Joven (&lt; 3 años)</option>
              <option value="adult">Adulto (3-10 años)</option>
              <option value="senior">Senior (&gt; 10 años)</option>
            </select>
          </div>

          {/* Breed Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Raza</label>
            <select
              value={filters.breed}
              onChange={(e) => handleFilterChange('breed', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Todas</option>
              {uniqueBreeds.map(breed => (
                <option key={breed} value={breed}>{breed}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Clear Filters Button */}
        <div className="mt-4">
          <Button
            variant="secondary"
            size="sm"
            onClick={clearFilters}
          >
            Limpiar filtros
          </Button>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Mostrando {filteredCats.length} de {cats.length} gatos
        </p>
      </div>

      {/* Cats Grid */}
      <CatsGrid cats={filteredCats} loading={loading} />
    </div>
  );
}
