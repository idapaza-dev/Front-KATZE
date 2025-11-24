import React, { useState } from 'react';
import api from '../api/client';
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const submit = async (e) => { e.preventDefault(); alert('Mensaje enviado (simulado)'); };
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>
      <form onSubmit={submit} className="bg-white p-6 rounded shadow">
        <label className="block mb-2">Nombre</label>
        <input className="w-full p-2 border rounded mb-3" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        <label className="block mb-2">Email</label>
        <input className="w-full p-2 border rounded mb-3" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        <label className="block mb-2">Mensaje</label>
        <textarea className="w-full p-2 border rounded mb-3" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
        <button className="px-4 py-2 bg-primary rounded">Enviar</button>
      </form>
    </div>
  );
}