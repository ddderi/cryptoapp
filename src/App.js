import './styles/style.css';
import {useState} from 'react'
import { Routes, Route } from "react-router-dom"
import Contact from './routes/Contact';
import Favorites from './routes/Favorites';
import Home from './routes/Home'

function App() {

const [favorites, setFavorites] = useState([])

function priceFixed(price, float){
  return price.toFixed(float)
}


  return (
     <>
     <Routes>
       <Route path='/' element={ <Home favorites={favorites} setFavorites={setFavorites} />} />
       <Route path='/favorites' element={ <Favorites favorites={favorites} priceFixed={priceFixed}/>}  />
       <Route path='/contact' element={ <Contact /> }/>
    </Routes>
    </>
  );
}

export default App;
