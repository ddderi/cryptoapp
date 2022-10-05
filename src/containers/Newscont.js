import React, { useEffect, useState} from 'react';
import News from '../components/News.js';
import { fetchNews } from '../requests/RequestApi'

function Newscont() {
const [news, setNews] = useState([])


useEffect(() => {
  fetchNews(setNews)
}, [])

  return (
    <div className='containersRight'>
        <h4>News</h4>
        <hr style={{width: '60%'}}></hr>
      <div className='newsparent'>
        {news.slice(0, 14).map((data, index) => <News news={data} key={index} />)}
      </div>
    </div>
  )
}

export default Newscont