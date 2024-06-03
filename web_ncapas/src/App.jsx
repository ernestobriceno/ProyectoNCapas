import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Login from './Login/login'
import Home from './Home/home'
import { UserProvider } from './context/UserContext';
import './App.css'
import Visitax from './Home/visitax';
import Authvistas from './Home/authvistas';
import Residentsec from './Home/residentsec';
import Historiavistas from './Home/hisrotiavistas';
import Qr from './Home/qr';
import Solicutdes from './Home/solicitudes';
import Ingresos from './Home/ingresos';
import Vigilante from './Home/vigilante';
import Scanner from './Home/scanner';


function App() {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path = "/visitax" element={<Visitax/>} />
      <Route path = "/authvistas" element={<Authvistas/>} />
      <Route path = "/residentsec" element={<Residentsec/>} />
      <Route path = "/historial-visitas" element={<Historiavistas/>} />
      <Route path = "/generarqr" element={<Qr/>} />
      <Route path = "/solicitudes" element={<Solicutdes/>} />
      <Route path = "/ingresos" element={<Ingresos/>} />
      <Route path = "/vigilante" element={<Vigilante/>} />
      <Route path = "/scanner" element={<Scanner/>} />

      

    </Routes>
  );
}

export default App
