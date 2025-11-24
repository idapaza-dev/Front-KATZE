import React from 'react';
import Input from './Input';

// Step 1: Personal Information
export function PersonalInfoStep({ formData, setFormData, errors }) {
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Información Personal</h2>
      <div className="space-y-4">
        <Input
          label="Nombre completo"
          value={formData.fullName || ''}
          onChange={(e) => handleChange('fullName', e.target.value)}
          error={errors.fullName}
          required
        />
        <Input
          label="Email"
          type="email"
          value={formData.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          error={errors.email}
          required
        />
        <Input
          label="Teléfono"
          type="tel"
          value={formData.phone || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
          error={errors.phone}
          required
        />
        <Input
          label="RUT"
          value={formData.rut || ''}
          onChange={(e) => handleChange('rut', e.target.value)}
          error={errors.rut}
          required
        />
        <Input
          label="Edad"
          type="number"
          value={formData.age || ''}
          onChange={(e) => handleChange('age', e.target.value)}
          error={errors.age}
          required
        />
      </div>
    </div>
  );
}

// Step 2: Address Information
export function AddressStep({ formData, setFormData, errors }) {
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Información de Domicilio</h2>
      <div className="space-y-4">
        <Input
          label="Dirección"
          value={formData.address || ''}
          onChange={(e) => handleChange('address', e.target.value)}
          error={errors.address}
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Ciudad"
            value={formData.city || ''}
            onChange={(e) => handleChange('city', e.target.value)}
            error={errors.city}
            required
          />
          <Input
            label="Región"
            value={formData.region || ''}
            onChange={(e) => handleChange('region', e.target.value)}
            error={errors.region}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Tipo de vivienda <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.housingType || ''}
            onChange={(e) => handleChange('housingType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="otro">Otro</option>
          </select>
          {errors.housingType && <p className="text-sm text-red-600">{errors.housingType}</p>}
        </div>
      </div>
    </div>
  );
}

// Step 3: Living Situation
export function LivingSituationStep({ formData, setFormData, errors }) {
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Situación de Convivencia</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            ¿Tiene otros animales? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="si"
                checked={formData.hasOtherPets === 'si'}
                onChange={(e) => handleChange('hasOtherPets', e.target.value)}
                className="mr-2"
              />
              Sí
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="no"
                checked={formData.hasOtherPets === 'no'}
                onChange={(e) => handleChange('hasOtherPets', e.target.value)}
                className="mr-2"
              />
              No
            </label>
          </div>
          {errors.hasOtherPets && <p className="text-sm text-red-600">{errors.hasOtherPets}</p>}
        </div>

        {formData.hasOtherPets === 'si' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Describe tus mascotas actuales
            </label>
            <textarea
              value={formData.otherPetsDescription || ''}
              onChange={(e) => handleChange('otherPetsDescription', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="3"
            />
          </div>
        )}

        <Input
          label="Número de personas en el hogar"
          type="number"
          value={formData.householdSize || ''}
          onChange={(e) => handleChange('householdSize', e.target.value)}
          error={errors.householdSize}
          required
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            ¿Todos en el hogar están de acuerdo con la adopción? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="si"
                checked={formData.householdAgreement === 'si'}
                onChange={(e) => handleChange('householdAgreement', e.target.value)}
                className="mr-2"
              />
              Sí
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="no"
                checked={formData.householdAgreement === 'no'}
                onChange={(e) => handleChange('householdAgreement', e.target.value)}
                className="mr-2"
              />
              No
            </label>
          </div>
          {errors.householdAgreement && <p className="text-sm text-red-600">{errors.householdAgreement}</p>}
        </div>
      </div>
    </div>
  );
}

// Step 4: Experience and Motivation
export function ExperienceStep({ formData, setFormData, errors }) {
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Experiencia y Motivación</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            ¿Has tenido gatos antes? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="si"
                checked={formData.previousCatExperience === 'si'}
                onChange={(e) => handleChange('previousCatExperience', e.target.value)}
                className="mr-2"
              />
              Sí
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="no"
                checked={formData.previousCatExperience === 'no'}
                onChange={(e) => handleChange('previousCatExperience', e.target.value)}
                className="mr-2"
              />
              No
            </label>
          </div>
          {errors.previousCatExperience && <p className="text-sm text-red-600">{errors.previousCatExperience}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ¿Por qué quieres adoptar? <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.adoptionReason || ''}
            onChange={(e) => handleChange('adoptionReason', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows="4"
            required
          />
          {errors.adoptionReason && <p className="text-sm text-red-600">{errors.adoptionReason}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ¿Qué harías si el gato tuviera problemas de salud o comportamiento?
          </label>
          <textarea
            value={formData.emergencyPlan || ''}
            onChange={(e) => handleChange('emergencyPlan', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows="3"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-start">
            <input
              type="checkbox"
              checked={formData.agreeToTerms || false}
              onChange={(e) => handleChange('agreeToTerms', e.target.checked)}
              className="mt-1 mr-2"
            />
            <span className="text-sm text-gray-700">
              Acepto los términos y condiciones de adopción. Me comprometo a cuidar al gato de forma responsable, 
              proporcionarle atención veterinaria cuando sea necesario, y mantenerlo en un ambiente seguro y amoroso. <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.agreeToTerms && <p className="text-sm text-red-600">{errors.agreeToTerms}</p>}
        </div>
      </div>
    </div>
  );
}
