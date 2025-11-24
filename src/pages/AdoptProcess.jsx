import React from 'react';
import MultiStepForm from '../components/MultiStepForm';
import api from '../api/client';
import { useNavigate } from 'react-router-dom';

function StepPersonal({ data, onNext }) {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '' });
  return (
    <div>
      <label className="block mb-2">Nombre</label>
      <input className="w-full p-2 border rounded mb-3" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
      <label className="block mb-2">Email</label>
      <input className="w-full p-2 border rounded mb-3" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
      <label className="block mb-2">Teléfono</label>
      <input className="w-full p-2 border rounded mb-3" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
      <div className="flex justify-end">
        <button onClick={() => onNext(form)} className="px-4 py-2 bg-primary rounded">Siguiente</button>
      </div>
    </div>
  );
}

function StepHome({ data, onNext, onBack }) {
  const [form, setForm] = React.useState({ housing: 'Casa', members: '' });
  return (
    <div>
      <label className="block mb-2">Tipo de vivienda</label>
      <select className="w-full p-2 border rounded mb-3" value={form.housing} onChange={e => setForm({...form, housing: e.target.value})}>
        <option>Casa</option>
        <option>Apartamento</option>
        <option>Otro</option>
      </select>
      <label className="block mb-2">Miembros</label>
      <input className="w-full p-2 border rounded mb-3" value={form.members} onChange={e => setForm({...form, members: e.target.value})} />
      <div className="flex justify-between">
        <button onClick={onBack} className="px-4 py-2 border rounded">Anterior</button>
        <button onClick={() => onNext(form)} className="px-4 py-2 bg-primary rounded">Siguiente</button>
      </div>
    </div>
  );
}

export default function AdoptProcess() {
  const navigate = useNavigate();
  const steps = [StepPersonal, StepHome];

  const finish = async (payload) => {
    try {
      await api.post('/adoptions', payload);
      navigate('/adopt/confirm');
    } catch (e) {
      console.error(e);
      alert('Error enviando la solicitud');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Solicitud de Adopción</h1>
      <MultiStepForm steps={steps} onFinish={finish} />
    </div>
  );
}