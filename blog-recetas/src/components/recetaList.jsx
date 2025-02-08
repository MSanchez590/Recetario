import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecetaCard from './recetaCard';
import '../styles/recetaListStyle.css'


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
        setCategories(response.data.map((receta)=> receta.category));
        setFilteredRecetas(response.data);
        setLoading(false);
        })
        .catch((error)=> {
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
        filterRecetas(null, query);

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
            filtered = filtered.filter((receta) => receta.category.toLowerCase() === category);
        }

        setFilteredRecetas(filtered);
    }

    

    if(loading) return <p className="text-center">Cargando recetas...</p>
    if(error) return <p className="text-center">{error}</p>


  return (
    <div className="container">
      {/* búsqueda y filtro */}
      <div className="container-primero">
        <input type="text" placeholder="Buscar recetas..." value={searchQuery}
                onChange={handleSearch}/>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option value={category}>
              {category}
            </option>
          ))}
        </select>

        <button onClick={handleClearFilters}>Limpiar</button>
      </div>

      {/* Lista de recetas */}
      <div className="container-segundo">
        {filteredRecetas.length > 0 ? (
          filteredRecetas.map((receta) => <RecetaCard key={receta.id} receta={receta} />)
        ) : (
          <p>No hay recetas disponibles</p>
        )}
      </div>
    </div>
  );
};

export default RecetaList;
