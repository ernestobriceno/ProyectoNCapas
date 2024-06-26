import React, { useState } from 'react';

const TablePage = () => {
  const [searchId, setSearchId] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [searchVisitor, setSearchVisitor] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [data, setData] = useState([
    { id: 1, date: '2024-05-20', visitor: 'Briceño Magaña',residente: 'Primario',  house: 'Casa 1', estatus: 'ernes@gmail.com' },
    { id: 2, date: '2024-05-21', visitor: 'Briceño Magaña',residente: 'Secundario',  house: 'Casa 2', estatus: 'ernes@gmail.com' },
    { id: 3, date: '2024-05-22', visitor: 'Briceño Magaña',residente: 'Primario',  house: 'Casa 3', estatus: 'ernes@gmail.com' },
    { id: 4, date: '2024-05-23', visitor: 'Briceño Magaña',residente: 'Secundario',  house: 'Casa 4', estatus: 'ernes@gmail.com' },
    { id: 5, date: '2024-05-24', visitor: 'Briceño Magaña',residente: 'Primario',  house: 'Casa 5', estatus: 'ernes@gmail.com' },
    { id: 6, date: '2024-05-25', visitor: 'Briceño Magaña',residente: 'Secundario',  house: 'Casa 6', estatus: 'ernes@gmail.com' },
    { id: 7, date: '2024-05-26', visitor: 'Briceño Magaña',residente: 'Primario',  house: 'Casa 7', estatus: 'ernes@gmail.com' },
    { id: 8, date: '2024-05-27', visitor: 'Briceño Magaña',residente: 'Secundario',  house: 'Casa 8', estatus: 'ernes@gmail.com' },
    { id: 9, date: '2024-05-28', visitor: 'Briceño Magaña',residente: 'Primario',  house: 'Casa 9', estatus: 'ernes@gmail.com' },
    { id: 10, date: '2024-05-29', visitor: 'Briceño Magaña',residente: 'Secundario',  house: 'Casa 10', estatus: 'ernes@gmail.com' },
    { id: 11, date: '2024-05-30', visitor: 'Briceño Magaña',residente: 'Primario',  house: 'Casa 11', estatus: 'ernes@gmail.com' },
  ]);

  const handleRowChange = (id, field, newValue) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, [field]: newValue } : row
      )
    );
  };

  const filteredData = data.filter((row) =>
    row.id.toString().includes(searchId) &&
    row.date.includes(searchDate) &&
    row.visitor.toLowerCase().includes(searchVisitor.toLowerCase()) &&
    row.house.toLowerCase().includes(searchStatus.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-16 rounded-lg shadow-md w-full max-w-5xl relative">
        <img src="/logo.png" alt="Logo" className="absolute top-4 right-4 w-12 md:w-16" />
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">Administras Casas</h2>
        
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Buscar por ID..."
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Buscar por Visitante..."
            value={searchVisitor}
            onChange={(e) => setSearchVisitor(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Buscar por Casa..."
            value={searchStatus}
            onChange={(e) => setSearchStatus(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">ID</th>
                <th className="px-4 py-2 border-b">Tipo</th>
                <th className="px-4 py-2 border-b">Nombre</th>
                <th className="px-4 py-2 border-b">Casa</th>
                <th className="px-4 py-2 border-b"></th>
                <th className="px-4 py-2 border-b">Correo</th>
                <th className="px-4 py-2 border-b">Acciones</th>

              </tr>
            </thead>
            <tbody>
              {filteredData.map((row) => (
                <EditableRow key={row.id} row={row} onRowChange={handleRowChange} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-end">
          <a href="/home" className="bg-gray-500 text-white px-4 py-2 rounded ">
            Regresar
          </a>
        </div>
      </div>
    </div>
  );
};

const EditableRow = ({ row, onRowChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [visitor, setVisitor] = useState(row.visitor);
  const [estatus, setEstatus] = useState(row.estatus);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onRowChange(row.id, 'visitor', visitor);
    onRowChange(row.id, 'estatus', estatus);
  };

  const handleVisitorChange = (e) => {
    setVisitor(e.target.value);
  };

  const handleEstatusChange = (e) => {
    setEstatus(e.target.value);
  };

  return (
    <tr>
      <td className="px-4 py-2 border-b">{row.id}</td>
      <td className="px-4 py-2 border-b">{row.residente}</td>
      <td className="px-4 py-2 border-b">
        {isEditing ? (
          <input
            type="text"
            value={visitor}
            onChange={handleVisitorChange}
            className="p-1 border border-gray-300 rounded"
          />
        ) : (
          row.visitor
        )}
      </td>
      <td className="px-4 py-2 border-b">{row.house}</td>
      <td className="px-4 py-2 border-b">{row.Residente}</td>

      <td className="px-4 py-2 border-b">
        {isEditing ? (
          <input
            type="text"
            value={estatus}
            onChange={handleEstatusChange}
            className="p-1 border border-gray-300 rounded"
          />
        ) : (
          row.estatus
        )}
      </td>
      <td className="px-4 py-2 border-b">
        {isEditing ? (
          <button
            onClick={handleSaveClick}
            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
          >
            Guardar
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            Editar
          </button>
        )}
      </td>
    </tr>
  );
};

export default TablePage;
