import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const FormPage = () => {
  const [formData, setFormData] = useState({
    field1: '4',  // Valor quemado para "Casa"
    field2: '',
    field3: '',
    field4: '',
    field5: '',
  });

  const navigate = useNavigate(); // Hook for navigation
  const goBack = () => navigate(-1); // Function to go back

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
    // Aquí puedes manejar el envío del formulario, incluyendo la lógica para la fecha de finalización
  };

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center">
      <div className="bg-white p-8 md:p-16 rounded-lg shadow-md w-full md:w-auto relative flex flex-col md:flex-row items-center">
        <img src="/logo.png" alt="Logo" className="absolute top-4 right-4 w-12 md:w-16" />
        <form onSubmit={handleSubmit} className="w-full md:w-auto">
          <div className="mb-6">
            <label htmlFor="field1" className="block text-gray-700">Casa</label>
            <input
              type="text"
              id="field1"
              name="field1"
              className="w-full md:w-80 px-4 py-3 border rounded"
              value="4"
              readOnly
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="field2" className="block text-gray-700">Dui</label>
            <input
              type="number"
              id="field2"
              name="field2"
              className="w-full md:w-80 px-4 py-3 border rounded"
              value={formData.field2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="field3" className="block text-gray-700">Nombre</label>
            <input
              type="text"
              id="field3"
              name="field3"
              className="w-full md:w-80 px-4 py-3 border rounded"
              value={formData.field3}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="field4" className="block text-gray-700">Apellido</label>
            <input
              type="text"
              id="field4"
              name="field4"
              className="w-full md:w-80 px-4 py-3 border rounded"
              value={formData.field4}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="field5" className="block text-gray-700">Correo</label>
            <input
              type="email"
              id="field5"
              name="field5"
              className="w-full md:w-80 px-4 py-3 border rounded"
              value={formData.field5}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-between space-x-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
            <button type="button" onClick={goBack} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
