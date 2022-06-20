import React, {useState, useEffect} from 'react'
import  Basictable  from '../components/Basictable'

function Cryptocont({ setFavorites, favorites }) {
const [crypto, setCrypto] = useState([])
const [page, setPage] = useState(1)
const [search, setSearch] = useState('')
const [filtered, setFiltered] = useState([])

useEffect((page) => {
  fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${page}&sparkline=false`)
  .then(resp => resp.json())
  .then(data => (setCrypto(data)))
}, [])

function fetching(page){
  fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${page}&sparkline=false`)
  .then(resp => resp.json())
  .then(data => (setCrypto(data)))
}

function nextPage(){
  fetching(page+1)
  setPage(page+1)
}

function previousPage(){
  fetching(page-1)
  setPage(page-1)
}

function handleInput(value){
  setSearch(value.toLowerCase())
  console.log(value)
  console.log(search)
  setFiltered(crypto.filter((elem) => (elem.id.includes(search))))
}

function whichHandle(e) {

  console.log(e.name)
  if(!favorites.find(cryp => cryp.name === e.name )){
  setFavorites([...favorites, e])
  }else{
    setFavorites(favorites)
}
}


  return (
    <div className='containersLeft'>
    <h4>Crypto currency</h4>
    <hr style={{width: '60%'}}></hr>
    <div >
      <p>Which coin are you looking for ? </p>
    <input  onChange={e=> handleInput(e.target.value)} />
    </div>
    <Basictable whichHandle={whichHandle} favorites={favorites} setFavorites={setFavorites} filtered={filtered} crypto={crypto} search={search}/>
    <button onClick={e=>previousPage()} className='btn'>Previous</button>
    <button onClick={e=>nextPage()} className='btn'>Next</button>
    {/* <button onClick={e=> (console.log(filtered), console.log(search))}>testttt</button> */}
    </div>
  )
}

export default Cryptocont