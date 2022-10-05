import React, {useState, useEffect} from 'react';
import  Basictable  from '../components/Basictable';
import { fetchCrypto, nextPageCrypto } from '../requests/RequestApi';

function Cryptocont({ setFavorites, favorites }) {
const [crypto, setCrypto] = useState([])
const [page, setPage] = useState(1)
const [search, setSearch] = useState('')
const [filtered, setFiltered] = useState([])

useEffect((page) => {
  fetchCrypto(page, setCrypto)
}, [])


const fetchCryp = async(page) =>{
  try{
    const data = await nextPageCrypto(page)
    setCrypto(data)
    return data
  }catch(error){
    console.log(error)
  }
}


function nextPage(){
  fetchCryp(page+1)
  setPage(page+1)
}

function previousPage(){
  fetchCryp(page-1)
  setPage(page-1)
}

function handleInput(value){
  setSearch(value.toLowerCase())
  console.log(value)
  console.log(search)
  setFiltered(crypto.filter((elem) => (elem.id.includes(search))))
}

function whichHandle(e) {
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
    </div>
  )
}

export default Cryptocont