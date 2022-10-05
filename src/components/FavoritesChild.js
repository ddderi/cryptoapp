import React from 'react';


function FavoritesChild({data, priceFixed}) {

function priceFixed(price, float){
    return price.toFixed(float)
}

  return (
    <div className='favoritesChild'> 
        <div className='child'>{data.name}</div>
        <div className='child'>$ {data.current_price}</div>
        <div className='child' 
        style={priceFixed(data.market_cap_change_percentage_24h, 2)>0 ? { color: 'green'} : { color: 'red'}}>
            {priceFixed(data.market_cap_change_percentage_24h, 2)}%</div>
    </div>
  )
}

export default FavoritesChild