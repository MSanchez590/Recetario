import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecetaList from './components/recetaList';
import RecetaForm from './components/recetaForm';
import Home from './pages/home'
import RecetaPage from './pages/receta';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/receta/:id' element={<RecetaPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;