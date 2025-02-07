import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecetaCard from './recetaCard';

const RecetaList = () => {
  const [recetas, setRecetas] = useState([]);
  const [filteredRecetas, setFilteredRecetas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/recetas')
      .then(response => {
        setRecetas(response.data);
        setFilteredRecetas(response.data);
        setLoading(false);
        })
        .catch((error)=> {
            console.error("Error de busqueda", error);
            setError("No se pudieron cargar las recetas");
            setLoading(false);
        });

    axios.get('http://localhost:5000/api/recetas')
        .then(response => {
            setRecetas(response.data);
            setFilteredRecetas(response.data);
            setLoading(false);
        })
        .catch((error)=> {
            console.error("Error de busqueda", error);
            setError("No se pudieron cargar las recetas");
            setLoading(false);
        });
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        filterRecetas(query, selectedCategory);
    };

    const handleCategoryChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        filterRecetas(searchQuery, category);

    };

    const handleClearFilters = () => {
        setSearchQuery("");
        setSelectedCategory("");
        setFilteredRecetas(recetas);
    };

    const filterRecetas = (query, category) => {
         let filtered = recetas;
        if (query) {
            filtered = filtered.filter((receta) =>
                receta.name.toLowerCase().includes(query));
        }

        if(category) {
            filtered = filtered.filter((receta) => receta.category === category);
        }

        setFilteredRecetas(filtered);
    }

    

    if(loading) return <p className="text-center">Cargando recetas...</p>
    if(error) return <p className="text-center text-red-500">{error}</p>


  return (
    <div className="container mx-auto p-4">
      {/* búsqueda y filtro */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input type="text" placeholder="Buscar recetas..." value={searchQuery}
                onChange={handleSearch} className="w-full md:w-2/3 p-2 border border-gray-300 rounded"
        />
        <select value={selectedCategory} onChange={handleCategoryChange}
                className="w-full md:w-1/3 p-2 border border-gray-300 rounded"
        >
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleClearFilters}
          className="p-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
        >
          Limpiar
        </button>
      </div>

      {/* Lista de recetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecetas.length > 0 ? (
          filteredRecetas.map((receta) => <RecetaCard key={receta.id} receta={receta} />)
        ) : (
          <p className="text-center col-span-full">No hay recetas disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default RecetaList;
