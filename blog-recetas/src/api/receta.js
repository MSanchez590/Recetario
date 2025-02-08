import axios from "axios";

const API_URL = "http://localhost:5000/api/recetas/";

export const getReceta = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener recetas:", error);
    return [];
  }
};

export const getRecetaID = async (id) => {
    try {
      const response = await axios.get(`${API_URL}${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener la receta:", error);
      return null;
    }
  };
  

export const updateReceta = async (id, recetaData) => {
    try {
      await axios.put(`${API_URL}${id}`, recetaData);//verificar
      alert("Receta actualizada con éxito");
    } catch (error) {
      console.error("Error al actualizar la receta ", error);
    }
  };
  
  export const createReceta = async (recetaData) => {
    try {
      await axios.post(`${API_URL}/createReceta`, recetaData);
      alert("Receta agregada con éxito");
    } catch (error) {
      console.error("Error al agregar la receta ", error);
    }
  };
  