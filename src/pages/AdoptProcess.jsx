import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MultiStepForm from '../components/MultiStepForm';
import { PersonalInfoStep, AddressStep, LivingSituationStep, ExperienceStep } from '../components/AdoptionFlow';
import api from '../api/client';

export default function AdoptProcess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const catId = searchParams.get('catId');
  const catName = searchParams.get('catName') || 'un gato';
  
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateStep = (stepData, requiredFields) => {
    const newErrors = {};
    requiredFields.forEach(field => {
      if (!stepData[field] || (typeof stepData[field] === 'string' && !stepData[field].trim())) {
        newErrors[field] = 'Este campo es requerido';
      }
    });
    return newErrors;
  };

  const handleSubmit = async () => {
    // Final validation
    const requiredFields = [
      'fullName', 'email', 'phone', 'rut', 'age',
      'address', 'city', 'region', 'housingType',
      'hasOtherPets', 'householdSize', 'householdAgreement',
      'previousCatExperience', 'adoptionReason'
    ];

    const finalErrors = validateStep(formData, requiredFields);

    if (!formData.agreeToTerms) {
      finalErrors.agreeToTerms = 'Debes aceptar los términos y condiciones';
    }

    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);
      return;
    }

    setLoading(true);

    try {
      // Prepare adoption payload
      const adoptionData = {
        catId: catId,
        adopter: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          rut: formData.rut,
          age: formData.age,
          address: formData.address,
          city: formData.city,
          region: formData.region,
          housingType: formData.housingType,
          hasOtherPets: formData.hasOtherPets === 'si',
          otherPetsDescription: formData.otherPetsDescription || '',
          householdSize: formData.householdSize,
          householdAgreement: formData.householdAgreement === 'si',
          previousCatExperience: formData.previousCatExperience === 'si',
          adoptionReason: formData.adoptionReason,
          emergencyPlan: formData.emergencyPlan || '',
        },
        agreeToTerms: formData.agreeToTerms
      };

      // Submit to API
      await api.post('/adoptions', adoptionData);

      // Navigate to confirmation page
      navigate(`/adopt/confirm?catName=${encodeURIComponent(catName)}`);
    } catch (error) {
      console.error('Error submitting adoption:', error);
      setErrors({ submit: error.response?.data?.message || 'Error al enviar la solicitud. Por favor intenta nuevamente.' });
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    () => <PersonalInfoStep formData={formData} setFormData={setFormData} errors={errors} />,
    () => <AddressStep formData={formData} setFormData={setFormData} errors={errors} />,
    () => <LivingSituationStep formData={formData} setFormData={setFormData} errors={errors} />,
    () => <ExperienceStep formData={formData} setFormData={setFormData} errors={errors} />
  ];

  const stepLabels = [
    'Información Personal',
    'Domicilio',
    'Convivencia',
    'Experiencia'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Solicitud de Adopción
        </h1>
        <p className="text-lg text-gray-600">
          {catId ? `Estás solicitando adoptar a ${catName}` : 'Completa el siguiente formulario para adoptar'}
        </p>
      </div>

      {errors.submit && (
        <div className="max-w-4xl mx-auto mb-6 bg-red-50 border border-red-200 text-red-800 p-4 rounded-md">
          {errors.submit}
        </div>
      )}

      <MultiStepForm
        steps={steps}
        stepLabels={stepLabels}
        onSubmit={handleSubmit}
        submitLabel="Enviar solicitud"
        loading={loading}
      />

      <div className="max-w-4xl mx-auto mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <p className="text-sm text-blue-800">
          <strong>Nota:</strong> Una vez enviada tu solicitud, nos pondremos en contacto contigo 
          en un plazo de 2-3 días hábiles para agendar una entrevista y continuar con el proceso de adopción.
        </p>
      </div>
    </div>
  );
}
