import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; 

const Card = ({ title }) => {
  return (
    <Link to="/ruta-a-la-que-deseas-redirigir" className="card-link">
      <div className="card">
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
