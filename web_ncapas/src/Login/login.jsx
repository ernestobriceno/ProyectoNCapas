// src/components/Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para la navegación
  const { setUserType } = useUser();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'residente@example.com') {
      setUserType('residente');
    } 
    else if (email == 'user@example.com' )  {
      setUserType('user');
    } 
    else if (email == 'visitante@example.com' )  {
      setUserType('visitante');
    } 
    else if (email == 'vigilante@example.com' )  {
      setUserType('vigilante');
    } 
    else {
      setUserType('admin');
    }
    navigate('/home');
  };
+
  useEffect(() => {
    // Cargar el script de Google OAuth
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: '1079094457349-qi9tkg2daevpo2d6872immmm8jjrkcrh.apps.googleusercontent.com',
        callback: handleCallbackResponse
      });
      window.google.accounts.id.renderButton(
        document.getElementById('googleSignInButton'),
        { theme: 'outline', size: 'large' }
      );
    };
    document.body.appendChild(script);
  }, []);

  const handleCallbackResponse = (response) => {
    console.log('Encoded JWT ID token: ' + response.credential);
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="flex items-center  mb-4 text-center">
            <div>
                <h2 className='font-bold text-4xl' >Bienvenido</h2>
                <br />
                <h3 className='text-red-900 font-bold text-3xl ' >Residencial HLVS</h3>
            </div>
          <img src="/logo.png" alt="Logo" className="w-24 mx-auto" />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-600"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="mt-6 text-center">
          <div id="googleSignInButton" className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
