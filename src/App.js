import { Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar/navbar.jsx';
// import Home from './views/home/home.jsx';
import Home from './views/Home/home.jsx';

import './App.css';


function App() {
  return (
    <div className="App">
    <>
      <Nav />
      <Routes >
        <Route exact path='/' element={<Home />} />
      </Routes>
    </>
    </div>
  );
}

export default App;
