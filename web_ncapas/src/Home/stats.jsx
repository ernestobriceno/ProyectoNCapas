import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

const data = [
  { day: 'Monday', visits: 400 },
  { day: 'Tuesday', visits: 300 },
  { day: 'Wednesday', visits: 500 },
  { day: 'Thursday', visits: 700 },
  { day: 'Friday', visits: 200 },
  { day: 'Saturday', visits: 900 },
  { day: 'Sunday', visits: 600 },
];

const VisitsCharts = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/home'); // Navega a la raíz
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Promedio De Visitas Diario</h1>
        <div className="flex flex-col md:flex-row justify-around w-full mb-8">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-4">Dias</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="visits" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-4">Hora Con Mas Visitas</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visits" stroke="#003049" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <button 
          onClick={goBack} 
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
        >
          Regresar
        </button>
      </div>
    </div>
  );
};

export default VisitsCharts;
