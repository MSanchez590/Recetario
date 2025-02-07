import React from "react";

const RecetaCard = ({ receta }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={receta.image} alt={receta.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{receta.name}</h2>
      <p className="text-gray-600 text-sm">{receta.description}</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-2">
        Leer más
      </button>
    </div>
  );
};

export default RecetaCard;
