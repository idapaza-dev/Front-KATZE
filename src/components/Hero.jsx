import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-orange-400 to-orange-600 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Encuentra a tu compañero felino perfecto
          </h1>
          <p className="text-lg md:text-xl mb-8 text-orange-50">
            En KATZE rescatamos, cuidamos y encontramos hogares amorosos para gatos en situación de calle. 
            Cada adopción transforma una vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/adopt">
              <Button size="lg" variant="primary" className="bg-white text-orange-600 hover:bg-orange-50">
                Ver gatos en adopción
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                Apóyanos
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
