
import { Route, Routes } from 'react-router-dom';
import AboutMe from '../components/AboutMe/AboutMe';
import Contacto from '../components/Contacto/Contacto';
import Habilidades from '../components/Habilidades/Habilidades';
import LandingPage from '../components/LandingPage/LandingPage';
import Proyectos from '../components/Proyectos/Proyectos';


function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/habilidades' element={<Habilidades />} />
        <Route path='/proyectos' element={<Proyectos />} />       
        <Route path='/contacto' element={<Contacto />} />
      </Routes>      
    </div>
  );
}

export default AppRoutes;
