import React, { useState } from 'react';
import axios from 'axios';

const RecetaForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/recetas', { name, category })
      .then(() => {
        setName('');
        setCategory('');
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Título" />
      <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder="Categoría" />
      <button type="submit">Agregar Receta</button>
    </form>
  );
};

export default RecetaForm;
