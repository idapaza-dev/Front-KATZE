import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import CatsList from './pages/CatsList';
import CatDetail from './pages/CatDetail';

export default function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <NavBar />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cats" element={<CatsList />} />
          <Route path="/cats/:id" element={<CatDetail />} />
        </Routes>
      </main>
    </div>
  );
}