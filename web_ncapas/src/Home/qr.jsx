import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QrReaderComponent = ({ onBack }) => {
  const [data, setData] = useState('No result');

  const handleError = (err) => {
    console.error(err);
  };

  const handleScan = (result) => {
    if (result) {
      setData(result?.text || 'No result');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">Lector de QR</h1>
        <QrReader
          delay={300}
          onError={handleError}
          onResult={handleScan}
          className="w-full"
          style={{ width: '100%' }}
        />
        <p className="mt-4 text-center text-blue-300">{data}</p>
        <div className="mt-4 flex justify-end">
          <a href="/home" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Regresar
          </a>
        </div>
      </div>
    </div>
  );
};

export default QrReaderComponent;
