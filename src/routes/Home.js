import React from 'react'
import '../styles/style.css';
import Cryptocont from '../containers/Cryptocont';
import Newscont from '../containers/Newscont';
import { Link, useLocation } from "react-router-dom";


function Home({ favorites, setFavorites }) {

  return (
    <>
 <header className="App-header"> 
        Crypto app
       <nav>
            <Link to='/'>Home</Link> 
            <Link to='/favorites' >Favorites</Link>
            <Link to='/contact'>Contact</Link>
       </nav>
       </header> 
    <div className="App">
    <Cryptocont favorites={favorites} setFavorites={setFavorites}/>
    <Newscont /> 
     </div>  
   </>
    
  )
}

export default Home