import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import CatsList from './pages/CatsList';
import CatDetail from './pages/CatDetail';
import AdoptList from './pages/AdoptList';
import AdoptProcess from './pages/AdoptProcess';
import AdoptConfirm from './pages/AdoptConfirm';
import Blog from './pages/Blog';
import Article from './pages/Article';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          
          {/* Cats - Legacy routes */}
          <Route path="/cats" element={<CatsList />} />
          <Route path="/cats/:id" element={<CatDetail />} />
          
          {/* Adoption */}
          <Route path="/adopt" element={<AdoptList />} />
          <Route path="/adopt/process" element={<AdoptProcess />} />
          <Route path="/adopt/confirm" element={<AdoptConfirm />} />
          
          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          
          {/* Other Pages */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/faq" element={<FAQPage />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}