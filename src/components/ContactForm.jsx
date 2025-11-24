import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.subject.trim()) newErrors.subject = 'El asunto es requerido';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus({ type: 'success', message: '¡Mensaje enviado con éxito! Te contactaremos pronto.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: 'Error al enviar el mensaje. Por favor intenta nuevamente.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Nombre completo"
        value={formData.name}
        onChange={(e) => handleChange('name', e.target.value)}
        error={errors.name}
        required
      />
      
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
        error={errors.email}
        required
      />
      
      <Input
        label="Asunto"
        value={formData.subject}
        onChange={(e) => handleChange('subject', e.target.value)}
        error={errors.subject}
        required
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          rows="5"
          required
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
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
        {loading ? 'Enviando...' : 'Enviar mensaje'}
      </Button>
    </form>
  );
}
