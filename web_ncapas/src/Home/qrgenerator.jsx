import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom'; // Cambiado a useNavigate

const QRGeneratorr = () => {
  const [selectedOption, setSelectedOption] = useState(''); // Opción seleccionada en el dropdown
  const [qrValue, setQrValue] = useState(''); // Valor del código QR
  const [buttonDisabled, setButtonDisabled] = useState(false); // Controla la deshabilitación del botón
  const [timeLeft, setTimeLeft] = useState(0); // Estado para el contador
  const navigate = useNavigate(); // Hook para navegación

  const options = [
    { id: 1, name: 'Option 1', value: 'https://new-url1.com' },
    { id: 2, name: 'Option 2', value: 'https://new-url2.com' },
    { id: 3, name: 'Option 3', value: 'https://new-url3.com' },
    // Agrega más opciones según sea necesario
  ];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const generateQR = () => {
    if (selectedOption) {
      setQrValue(selectedOption);
      setButtonDisabled(true); // Deshabilita el botón cuando se genera el código QR
      setTimeLeft(120); // Inicializa el contador a 120 segundos (2 minutos)
    }
  };

  const goBack = () => {
    navigate('/home'); // Navega a la raíz
  };

  useEffect(() => {
    let timer;
    if (buttonDisabled && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setButtonDisabled(false); // Habilita el botón cuando el contador llega a cero
    }
    return () => clearInterval(timer);
  }, [buttonDisabled, timeLeft]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="flex flex-col">
          <div className="left-content p-4">
            {/* Dropdown de opciones */}
            <select 
              className="p-2 border rounded mb-4"
              onChange={handleSelectChange} 
              value={selectedOption}
            >
              <option value="">Select an Option</option>
              {options.map(option => (
                <option key={option.id} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <div className="right-content p-4">
            {/* Renderiza el código QR solo si qrValue no está vacío */}
            {qrValue && (
              <div className="mb-4 flex justify-center">
                <QRCode value={qrValue} size={256} />
              </div>
            )}
            <div>
              <button 
                onClick={generateQR} 
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50" 
                disabled={!selectedOption || buttonDisabled}
              >
                Generar QR
              </button>
              {buttonDisabled && (
                <div className="mt-2 text-red-500">
                  Tiempo restante para generar un nuevo código: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}
                </div>
              )}
            </div>
            <div className="mt-4">
              <button 
                onClick={goBack} 
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
              >
                Regresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRGeneratorr;
