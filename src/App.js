import { Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar/navbar.jsx';
import Home from './views/Home/home.jsx';
import Destination from './views/Destination/destination.jsx';
import Crew from './views/Crew/crew.jsx';
import Tecnology from './views/Tecnology/tecnology.jsx';

import './App.css';


function App() {
  return (
    <div className="App">
    <>
      <Nav />
      <Routes >
        <Route exact path='/' element={<Home />} />
        <Route exact path='/destination' element={<Destination />} />
        <Route exact path='/crew' element={<Crew />} />
        <Route exact path='/tecnology' element={<Tecnology />} />
      </Routes>
    </>
    </div>
  );
}

export default App;
