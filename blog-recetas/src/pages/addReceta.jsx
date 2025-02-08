import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createReceta } from "../api/receta";
//import { useAuth } from "../auth/AuthContext"; // Para verificar si el usuario es admin

const AddRecetaPage = () => {
  const navigate = useNavigate();
  //const { user } = useAuth();

  // Estado inicial vacío para una nueva receta
  const [receta, setReceta] = useState({
    name: "",
    image: "",
    description: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => {
    setReceta({ ...receta, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await createReceta(receta);
    navigate("/"); // Redirige a la página principal tras agregar
  };

  /*if (user.role !== "admin") {
    return <h2>No tienes permisos para agregar recetas</h2>;
  }*/

  return (
    <div>
      <h2>Agregar Nueva Receta</h2>

      <label>Título:</label>
      <input type="text" name="title" value={receta.name} onChange={handleChange} />

      <label>Imagen (URL):</label>
      <input type="text" name="image" value={receta.image} onChange={handleChange} />

      <label>Descripcion:</label>
      <textarea name="description" value={receta.description} onChange={handleChange} />

      <label>Ingredientes:</label>
      <textarea name="ingredients" value={receta.ingredients} onChange={handleChange} />

      <label>Instrucciones:</label>
      <textarea name="instructions" value={receta.instructions} onChange={handleChange} />

      <label>Categoría:</label>
      <textarea name="Category" value={receta.category} onChange={handleChange}/>

      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default AddRecetaPage;
