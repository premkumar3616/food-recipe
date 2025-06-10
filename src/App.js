import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Favorites from './pages/fav/Favorites';
import Details from './pages/details/Details';

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipe-item/:id" element={<Details/>}  />
          <Route path="/favorites" element={<Favorites />}/>
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
