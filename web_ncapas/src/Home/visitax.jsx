import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    field1: '4',  // Valor quemado para "Casa"
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    startDateTime: '',  // Campo vacío para que el usuario ingrese la fecha y hora de inicio
    endDateTime: '', 
    startTime: '', // Campo vacío para que el usuario ingrese la hora de inicio
    endTime: '',   // Campo vacío para que el usuario ingrese la fecha y hora de finalización
    daysOfWeek: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    }
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      daysOfWeek: {
        ...formData.daysOfWeek,
        [name]: checked
      }
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
              onChange={(e) => setFormData({ ...formData, field2: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, field3: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, field4: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, field5: e.target.value })}
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="startDateTime" className="block text-gray-700">Fecha de Inicio</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="w-full md:w-80 px-4 py-3 border rounded"
              value={formData.startDateTime}
              onChange={(e) => setFormData({ ...formData, startDateTime: e.target.value })}
              required
            />
          </div>
          <div className="mb-8">
  <label htmlFor="endDate" className="block text-gray-700">Fecha de Finalización</label>
  <input
    type="date"
    id="endDate"
    name="endDate"
    className="w-full md:w-80 px-4 py-3 border rounded"
    value={formData.endDateTime}
    onChange={(e) => setFormData({ ...formData, endDateTime: e.target.value })}
    required
  />
</div>

          <div className="mb-8">
            <label htmlFor="endDate" className="block text-gray-700">Hora de Entrada</label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              className="w-full md:w-80 px-4 py-3 border rounded"
              value={formData.startTime}
              onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="endTime" className="block text-gray-700">Hora de Salida</label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              className="w-full md:w-80 px-4 py-3 border rounded"
              value={formData.endTime}
              onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">¿Días de acceso?</label>
            <input
              type="checkbox"
              id="permissionDays"
              onChange={(e) => setFormData({ ...formData, showPermissionDays: e.target.checked })}
            />
          </div>
          {formData.showPermissionDays && (
            <div className="mb-8">
              <label className="block text-gray-700">Días de acceso</label>
              <div className="flex flex-wrap">
                {Object.entries(formData.daysOfWeek).map(([day, checked]) => (
                  <div key={day} className="mr-4 mb-2">
                    <input
                      type="checkbox"
                      id={day}
                      name={day}
                      checked={checked}
                      onChange={handleChange}
                    />
                    <label htmlFor={day} className="ml-2">{day.charAt(0).toUpperCase() + day.slice(1)}</label>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <button
            type="submit"
            className="w-full md:w-80 bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
          >
            Crear Visitas
          </button>
          <div className="mt-4 flex justify-end w-full">
            <a href="/home" className="w-full md:w-auto bg-gray-500 text-white px-4 py-2 rounded">
              Regresar
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
