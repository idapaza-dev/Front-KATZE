import React, { useState } from 'react';
import api from '../api/client';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('admin@katze.local');
  const [password, setPassword] = useState('Admin123!');
  const [err, setErr] = useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      nav('/cats');
    } catch (error) {
      setErr(error.response?.data?.message || 'Error en login');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded p-6">
      <h3 className="text-xl font-semibold mb-4">Iniciar sesión</h3>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm">Email</label>
          <input className="w-full border rounded px-3 py-2" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm">Contraseña</label>
          <input type="password" className="w-full border rounded px-3 py-2" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded">Entrar</button>
        {err && <p className="text-red-600 mt-2">{err}</p>}
      </form>
    </div>
  );
}