import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Chip from '../components/Chip';

// Mock data - replace with API call when available
const mockArticle = {
  _id: '1',
  slug: 'cuidados-basicos-gato',
  title: 'Cuidados Básicos para tu Nuevo Gato',
  image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800',
  category: 'Cuidados',
  author: 'Dra. María González',
  date: '2024-03-15',
  content: `
    <h2>Bienvenido al mundo felino</h2>
    <p>Adoptar un gato es una experiencia maravillosa que trae mucha alegría a tu hogar. Sin embargo, es importante estar preparado para brindarle los cuidados necesarios.</p>
    
    <h3>1. Alimentación</h3>
    <p>Los gatos necesitan una dieta balanceada rica en proteínas. Asegúrate de proporcionarle alimento de buena calidad y agua fresca siempre disponible.</p>
    
    <h3>2. Higiene</h3>
    <p>Los gatos son animales muy limpios. Mantén su caja de arena limpia, cepilla su pelaje regularmente y programa chequeos veterinarios periódicos.</p>
    
    <h3>3. Juego y Ejercicio</h3>
    <p>Los gatos necesitan estimulación mental y física. Dedica tiempo cada día para jugar con tu gato y proporciónale juguetes variados.</p>
    
    <h3>4. Espacio Seguro</h3>
    <p>Crea un ambiente seguro en tu hogar. Elimina plantas tóxicas, asegura ventanas y balcones, y proporciona escondites y áreas elevadas.</p>
    
    <h3>5. Atención Veterinaria</h3>
    <p>Las visitas regulares al veterinario son esenciales. Mantén al día las vacunas, desparasitación y considera la esterilización.</p>
    
    <p>Recuerda, cada gato es único y puede tener necesidades específicas. Con amor, paciencia y cuidados adecuados, tu gato será un compañero feliz y saludable por muchos años.</p>
  `
};

export default function Article() {
  const { slug } = useParams();
  
  // In a real implementation, this would fetch from API based on slug
  // For now, we just use the mock article
  const article = useMemo(() => {
    return mockArticle;
  }, [slug]);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-gray-600">Cargando artículo...</p>
      </div>
    );
  }

  const date = new Date(article.date).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Volver al blog
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="h-96 overflow-hidden bg-gray-100">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800';
              }}
            />
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Meta Info */}
            <div className="flex items-center gap-3 mb-6">
              <Chip variant="primary">{article.category}</Chip>
              <span className="text-sm text-gray-500">{date}</span>
              <span className="text-sm text-gray-500">Por {article.author}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                lineHeight: '1.8',
              }}
            />
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            ¿Te gustó este artículo?
          </h3>
          <p className="text-gray-700 mb-4">
            Ayúdanos a seguir rescatando y cuidando gatos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/adopt" className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors font-medium">
              Ver gatos en adopción
            </Link>
            <Link to="/donate" className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-50 transition-colors font-medium">
              Hacer una donación
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
