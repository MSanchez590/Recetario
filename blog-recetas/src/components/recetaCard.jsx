import React from "react";
import { Link } from "react-router-dom";
import '../styles/recetaCard.css'

const RecetaCard = ({ receta}) => {
  return (
    <div className="receta-card">
      <img src={receta.image} alt={receta.name} className="receta-image"/>
      <h2>{receta.name}</h2>
      <p>{receta.description}</p>
      <Link to={`/receta/${receta.id}`}>Leer más</Link>
    </div>
  );
};

export default RecetaCard;
