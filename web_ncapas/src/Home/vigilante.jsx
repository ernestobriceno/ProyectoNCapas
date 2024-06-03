import React, { useState } from 'react';
import carnet from '../img/carnet.png';

const DualFormPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Aquí puedes manejar el envío del formulario
  };

  const staticData = [
    { fullName: 'Juan Pérez' },
    { fullName: 'María López' },
    { fullName: 'Carlos Sánchez' },
    { fullName: 'Ana Torres' },
    { fullName: 'Luis Ramírez' }
  ];

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-16 rounded-lg shadow-md w-auto relative flex flex-col md:flex-row">
        <img src="/logo.png" alt="Logo" className="absolute top-4 left-4 w-12 md:w-16" />
        <div className="w-full  md:w-1/2 mb-8 md:mb-0 md:mr-4 flex flex-col justify-between">
          <div>
            <div className="text-center">
              <img src={carnet} alt="Left Section" className="w-24 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Agregar Vigilante</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700">Nombre</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border rounded"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="middleName" className="block text-gray-700">Segundo Nombre</label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  className="w-full px-4 py-2 border rounded"
                  value={formData.middleName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700">Apellido</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border rounded"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Agregar Vigilante
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:ml-4 flex flex-col justify-between items-center">
          <div>
            <div className="text-center">
              <h2 className="text-2xl m-20 md:text-3xl font-bold mb-4">Lista de Vigilantes</h2>
            </div>
            <div className="border p-4 rounded bg-gray-100">
              {staticData.map((resident, index) => (
                <div key={index} className="py-2 px-4 border-b last:border-b-0">
                  {resident.fullName}
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="w-60 mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Ver Vigilante
          </button>
          <div className="mt-4 flex justify-end">
        
        <a href="/home" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Regresar
        </a>
      </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default DualFormPage;
