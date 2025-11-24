import React from 'react';
import { Link } from 'react-router-dom';
import Chip from './Chip';

export default function BlogCard({ article }) {
  const imageUrl = article.image || 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600';
  const articleDate = article.date || new Date().toISOString();
  const date = new Date(articleDate).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Link to={`/blog/${article.slug || article._id}`} className="block group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img 
            src={imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600';
            }}
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category & Date */}
          <div className="flex items-center gap-2 mb-3">
            {article.category && (
              <Chip variant="primary" size="sm">{article.category}</Chip>
            )}
            <span className="text-xs text-gray-500">{date}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
            {article.title}
          </h3>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-gray-600 text-sm line-clamp-3 mb-3">
              {article.excerpt}
            </p>
          )}

          {/* Author */}
          {article.author && (
            <div className="flex items-center text-sm text-gray-500">
              <span>Por {article.author}</span>
            </div>
          )}

          <div className="text-orange-500 text-sm font-medium mt-3 group-hover:text-orange-600">
            Leer más →
          </div>
        </div>
      </article>
    </Link>
  );
}
