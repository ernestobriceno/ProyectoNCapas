import React from 'react';
import { useUser } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom'; // Importar useNavigate
import qr from '../img/qr.png';
import visitas from '../img/visitas.png';
import historial from '../img/historial.png';
import image from '../img/image.png';
import accesos from '../img/accesos.png';

const Home = () => {
  const { userType } = useUser(); // Obtener el tipo de usuario del contexto
  const navigate = useNavigate(); // Obtener el hook de navegación

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto">
       
        <h1 className="text-3xl font-bold text-center mb-8">Bienvenido a la Página Principal</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userType === 'residente' && (
            <>
              <Card
                imageUrl={qr}
                title="Crear Visitas"
                linkTo="/visitax"
              />
              <Card
                title="Autorizar Visitas"
                imageUrl={visitas}
                linkTo="/authvistas"
              />
              <Card
                title="Residente Secundarias"
                imageUrl={image}
                linkTo="/residentsec"
              />
              <Card
                title="Historial Visitas"
                imageUrl={historial}
                linkTo="/historial-visitas"
              />
              <Card
                title="Generar QR"
                imageUrl={qr}
                linkTo="/generarqr"
              />
            </>
          )}
          {userType === 'user' && (
            <>
              <Card
                imageUrl={qr}
                title="Crear Visitas"
                linkTo="/visitax"
              />
              <Card
                title="Autorizar Visitas"
                imageUrl={visitas}
                linkTo="/solicitudes"
              />
              <Card
                title="Generar QR"
                imageUrl={qr}
                linkTo="/generarqr"
              />
            </>
          )}
          {userType === 'visitante' && (
            <>
              <Card
                imageUrl={accesos}
                title="Mis accesos"
                linkTo="/solicitudes"
              />
            </>
          )}
          {userType === 'admin' && (
            <>
              <Card
                imageUrl={qr}
                title="Historial Visitas"
                linkTo="/historial-visitas"
              />
              <Card
                title="Casas"
                imageUrl={image}
                linkTo="/ingresos"
              />
              <Card
                title="Crear Vigilante"
                imageUrl={visitas}
                linkTo="/vigilante"
              />
              <Card
                title="Crear scanner"
                imageUrl={qr}
                linkTo="/scanner"
              />
            </>
          )}
           {userType === 'vigilante' && (
            <>
              <Card
                imageUrl={qr}
                title="Agregar Usuario "
                linkTo="/visitax"
              />
             
            </>
          )}
        </div>
        <button
          onClick={() => navigate('/')}
          className=" mt-8 px-4 py-2 bg-blue-300 text-white rounded hover:bg-blue-700"
        >
          Atrás
        </button>
      </div>
    </div>
  );
};

const Card = ({ title, description, imageUrl, linkTo }) => {
  return (
    <Link to={linkTo} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </Link>
  );
};

export default Home;
