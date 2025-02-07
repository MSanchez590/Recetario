import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecetaList from './components/recetaList';
import RecetaForm from './components/recetaForm';

function App() {
  return (
    <div>
      <h1 className="text-center text-2x1 font-vold my-4">Recetas</h1>
      <RecetaList/>
    </div>
  );
}

export default App;