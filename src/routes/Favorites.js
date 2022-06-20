import React from 'react';
import FavoritesChild from '../components/FavoritesChild'
import { Link } from "react-router-dom";

function Favorites({favorites, priceFixed }) {
  
  

  return (
    <div className='TotalApp'>
    <header className="App-header"> 
       Crypto app
      <nav>
        <Link to='/'>Home </Link> 
        <Link to='/favorites'>Favorites</Link>
        <Link to='/contact'>Contact</Link>
       </nav>
       </header> 
    <div className="App-favorites">
    <h4 style={{textAlign: 'center'}} >Favorites</h4>
    {/* style={{margin: 'auto'}} */}
    {favorites.map((elem, index) => <FavoritesChild key={index} data={elem} priceFixed={priceFixed}/>)}
    </div>
    </div>
  )
}

export default Favorites