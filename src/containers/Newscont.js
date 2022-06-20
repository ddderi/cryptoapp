import React, { useEffect, useState} from 'react'
import News from '../components/News.js'

function Newscont() {
const [news, setNews] = useState([])


useEffect(() => {
fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&limit=10&')
.then(resp => resp.json())
.then(data => setNews(data.Data))
}, [])

  return (
    <div className='containersRight'>
      <h4>News</h4>
      <hr style={{width: '60%'}}></hr>
    <div className='newsparent'>
      {news.slice(0, 14).map((data, index) => <News news={data} key={index} />)}
    {/* <News news={news} /> */}
    </div>
    </div>
  )
}

export default Newscont