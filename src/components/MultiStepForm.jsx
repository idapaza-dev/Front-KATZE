import React, { useState } from 'react';
export default function MultiStepForm({ steps = [], onFinish }) {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState({});
  const Step = steps[index] || (() => null);
  const next = (stepData) => {
    setData(prev => ({ ...prev, ...stepData }));
    if (index + 1 < steps.length) setIndex(index + 1);
    else onFinish && onFinish({ ...data, ...stepData });
  };
  const back = () => setIndex(i => Math.max(0, i - 1));
  return (
    <div>
      <div className="mb-4 text-sm text-gray-600">Paso {index + 1} de {steps.length}</div>
      <div className="bg-white dark:bg-background-dark p-4 rounded-lg shadow">
        <Step data={data} onNext={next} onBack={back} />
      </div>
    </div>
  );
}