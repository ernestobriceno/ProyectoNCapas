import React from 'react';

const TablePage = () => {
  const data = [
    { id: 1, date: '2024-05-20', visitor: 'Briceño Magaña', house: 'Casa 1' },
    { id: 2, date: '2024-05-21', visitor: 'Briceño Magaña', house: 'Casa 2' },
    { id: 3, date: '2024-05-22', visitor: 'Briceño Magaña', house: 'Casa 3' },
    { id: 4, date: '2024-05-23', visitor: 'Briceño Magaña', house: 'Casa 4' },
    { id: 5, date: '2024-05-24', visitor: 'Briceño Magaña', house: 'Casa 5' },
    { id: 6, date: '2024-05-25', visitor: 'Briceño Magaña', house: 'Casa 6' },
    { id: 7, date: '2024-05-26', visitor: 'Briceño Magaña', house: 'Casa 7' },
    { id: 8, date: '2024-05-27', visitor: 'Briceño Magaña', house: 'Casa 8' },
    { id: 9, date: '2024-05-28', visitor: 'Briceño Magaña', house: 'Casa 9' },
    { id: 10, date: '2024-05-29', visitor: 'Briceño Magaña', house: 'Casa 10' },
    { id: 11, date: '2024-05-30', visitor: 'Briceño Magaña', house: 'Casa 11' },
  ];

  const handleAccept = (id) => {
    console.log(`Accepted: ${id}`);
    // Lógica adicional para aceptar la visita
  };

  const handleDeny = (id) => {
    console.log(`Denied: ${id}`);
    // Lógica adicional para denegar la visita
  };

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-16 rounded-lg shadow-md w-full max-w-5xl relative">
        <img src="/logo.png" alt="Logo" className="absolute top-4 right-4 w-12 md:w-16" />
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">Historial de Visitantes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">ID</th>
                <th className="px-4 py-2 border-b">Fecha de Entrada</th>
                <th className="px-4 py-2 border-b">Visitante</th>
                <th className="px-4 py-2 border-b">Casa</th>
                <th className="px-4 py-2 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td className="px-4 py-2 border-b">{row.id}</td>
                  <td className="px-4 py-2 border-b">{row.date}</td>
                  <td className="px-4 py-2 border-b">{row.visitor}</td>
                  <td className="px-4 py-2 border-b">{row.house}</td>
                  <td className="px-4 py-2 border-b flex flex-col md:flex-row">
                  
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDeny(row.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-end">
          <a href="/home" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Regresar
          </a>
        </div>
      </div>
    </div>
  );
};

export default TablePage;
