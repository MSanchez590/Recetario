import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecetaID, updateReceta } from "../api/receta";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/recetaPage.css'
//import { useAuth } from "../auth/AuthContext"; // Para verificar si el usuario es admin

const RecetaPage = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  //const navigate = useNavigate();
  //const { user } = useAuth(); // Suponemos que `user` contiene { role: "admin" } o { role: "user" }

  
  
  useEffect(() => {
    const fetchRecipe = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/recetas/${id}`);
          setReceta(response.data);
        } catch (error) {
          console.error("Error al obtener la receta:", error);
        }
    }
    fetchRecipe();
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    await updateReceta(id, receta);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    setReceta({ ...receta, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h2>{isEditing ? "Editar Receta" : "Detalles de la Receta"}</h2>
      {receta && (
        <div className="container-receta">
            <div className="Container-image">
                <img 
                    onChange={handleChange} 
                    disabled={!isEditing} 
                    src={receta.image} 
                    className="receta-image"
                />
          </div>
          <div className="container-info">
            <label>Nombre:</label>
            <input
                type="text"
                name="name"
                value={receta.name}
                onChange={handleChange}
                disabled={!isEditing}
            />

            <label>Imagen (URL):</label>
            <input
                type="text"
                name="image"
                value={receta.image}
                onChange={handleChange}
                disabled={!isEditing}
            />
            
            <label>Descripcion:</label>
            <textarea
                name="description"
                value={receta.description}
                onChange={handleChange}
                disabled={!isEditing}
            />
            
            <label>Ingredientes:</label>
            <textarea
                name="ingredients"
                value={receta.ingredients}
                onChange={handleChange}
                disabled={!isEditing}
            />

            <label>Instrucciones:</label>
            <textarea
                name="instructions"
                value={receta.instructions}
                onChange={handleChange}
                disabled={!isEditing}
            />

            <label>Categoria:</label>
            <input
                name="category"
                value={receta.category}
                onChange={handleChange}
                disabled={!isEditing}
            />
          </div>          
          {
            <>
              {!isEditing ? (
                <button onClick={handleEdit}>Editar</button>
              ) : (
                <button onClick={handleSave}>Guardar</button>
              )}
            </>
          }
        </div>
        
      )}
      <Link to={`/`}>Regresar</Link>
    </div>
  );
};

export default RecetaPage;
