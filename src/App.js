import { Routes, Route } from 'react-router-dom';
import Nav from './components/navbar';
import Home from './views/home';
import './App.css';


function App() {
  return (
    <div className="App">
    <>
      <Nav />
      <Routes >
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </>
    </div>
  );
}

export default App;
