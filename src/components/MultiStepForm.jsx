import React, { useState } from 'react';
import Button from './Button';
import Timeline from './Timeline';

export default function MultiStepForm({ 
  steps, 
  stepLabels, 
  onSubmit,
  submitLabel = 'Enviar',
  loading = false
}) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    if (onSubmit) {
      await onSubmit();
    }
  };

  const StepComponent = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Timeline */}
      <Timeline steps={stepLabels} currentStep={currentStep} />

      {/* Step Content */}
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 my-8">
        <StepComponent />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4">
        <Button
          variant="secondary"
          onClick={prevStep}
          disabled={currentStep === 0 || loading}
        >
          ← Anterior
        </Button>

        {isLastStep ? (
          <Button
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Enviando...' : submitLabel}
          </Button>
        ) : (
          <Button onClick={nextStep} disabled={loading}>
            Siguiente →
          </Button>
        )}
      </div>
    </div>
  );
}
