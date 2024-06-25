import React, { useState } from 'react';
import carnet from '../img/carnet.png';

const DualFormPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: ''
  });

  const [vigilantes, setVigilantes] = useState([
    { id: 1, fullName: 'Juan Pérez' },
    { id: 2, fullName: 'María López' }
   
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVigilante = {
      id: vigilantes.length + 1,
      fullName: `${formData.firstName} ${formData.middleName} ${formData.lastName}`
    };
    setVigilantes([...vigilantes, newVigilante]);
    setFormData({ firstName: '', middleName: '', lastName: '' });
  };

  const eliminarVigilante = (id) => {
    setVigilantes(vigilantes.filter(vigilante => vigilante.id !== id));
  };

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-16 rounded-lg shadow-md w-full max-w-4xl relative flex flex-col md:flex-row">
        <img src="/logo.png" alt="Logo" className="absolute top-4 left-4 w-12 md:w-16" />
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-4 flex flex-col justify-between">
          <div>
            <div className="text-center">
              <img src={carnet} alt="Left Section" className="w-24 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Agregar Residente Secundario</h2>
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
                <label htmlFor="middleName" className="block text-gray-700">Apellido</label>
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
                <label htmlFor="lastName" className="block text-gray-700">Correo</label>
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
                Agregar Residente 
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:ml-4 flex flex-col justify-between items-center">
          <div>
            <div className="text-center">
              <h2 className="text-2xl m-20 md:text-3xl font-bold mb-4">Lista de Residentes</h2>
            </div>
            <div className="border p-4 rounded bg-gray-100 w-full">
              {vigilantes.map((vigilante) => (
                <div key={vigilante.id} className="flex justify-between items-center py-2 px-4 border-b last:border-b-0">
                  {vigilante.fullName}
                  <button
                    onClick={() => eliminarVigilante(vigilante.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
          </div>
         
          <div className="mt-4 flex justify-end w-full">
            <a href="/home" className="bg-gray-500 text-white px-4 py-2 rounded">
              Regresar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualFormPage;
