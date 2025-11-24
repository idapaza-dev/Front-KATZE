import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    availability: '',
    interests: [],
    experience: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleInterestToggle = (interest) => {
    const interests = formData.interests.includes(interest)
      ? formData.interests.filter(i => i !== interest)
      : [...formData.interests, interest];
    setFormData({ ...formData, interests });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus({ 
        type: 'success', 
        message: '¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.' 
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        availability: '',
        interests: [],
        experience: ''
      });
    } catch {
      setStatus({ 
        type: 'error', 
        message: 'Error al enviar el formulario. Por favor intenta nuevamente.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const volunteerAreas = [
    { id: 'cuidado', label: 'Cuidado directo de gatos', icon: '🐱' },
    { id: 'transporte', label: 'Transporte a veterinarios', icon: '🚗' },
    { id: 'eventos', label: 'Organización de eventos', icon: '🎉' },
    { id: 'social', label: 'Redes sociales y comunicación', icon: '📱' },
    { id: 'adopciones', label: 'Seguimiento de adopciones', icon: '📋' },
    { id: 'hogar', label: 'Hogar temporal', icon: '🏠' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Únete como Voluntario
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tu tiempo y dedicación pueden cambiar la vida de muchos gatos. 
            Únete a nuestro equipo de voluntarios apasionados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Benefits */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-6">¿Por qué ser voluntario?</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">💝</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Impacto Real</h3>
                    <p className="text-gray-600 text-sm">
                      Contribuye directamente al bienestar de gatos rescatados
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-3">🤝</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Comunidad</h3>
                    <p className="text-gray-600 text-sm">
                      Conoce personas con tus mismos intereses y valores
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-3">🎓</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Aprendizaje</h3>
                    <p className="text-gray-600 text-sm">
                      Aprende sobre cuidado felino y bienestar animal
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-3">😊</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Satisfacción Personal</h3>
                    <p className="text-gray-600 text-sm">
                      La alegría de ayudar no tiene precio
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Áreas de voluntariado
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {volunteerAreas.map(area => (
                  <div key={area.id} className="text-center">
                    <div className="text-3xl mb-1">{area.icon}</div>
                    <p className="text-sm text-gray-700">{area.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Formulario de Postulación</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Nombre completo"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />

              <Input
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
              />

              <Input
                label="Teléfono"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Disponibilidad <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.availability}
                  onChange={(e) => handleChange('availability', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="weekdays">Entre semana</option>
                  <option value="weekends">Fines de semana</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Áreas de interés
                </label>
                <div className="space-y-2">
                  {volunteerAreas.map(area => (
                    <label key={area.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(area.id)}
                        onChange={() => handleInterestToggle(area.id)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">{area.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Experiencia previa (opcional)
                </label>
                <textarea
                  value={formData.experience}
                  onChange={(e) => handleChange('experience', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows="3"
                  placeholder="Cuéntanos sobre tu experiencia con animales..."
                />
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-md ${
                    status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Enviando...' : 'Enviar postulación'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
