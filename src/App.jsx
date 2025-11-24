import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import CatsList from './pages/CatsList';
import CatDetail from './pages/CatDetail';
import Navbar from './components/NavBar';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<h2 className="text-2xl font-semibold">Bienvenido a Katze</h2>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cats" element={<CatsList />} />
          <Route path="/cats/:id" element={<CatDetail />} />
        </Routes>
      </main>
    </div>
  );
}