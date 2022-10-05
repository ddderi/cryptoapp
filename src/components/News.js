import React from 'react'


function News({ news }) {

  return (
  <>
    <a href={news.url}>
      <div className='newsenfant'>
        <img src={news.imageurl} style={{height:'90px',width:'80px', borderRight: '0.5px solid white'}}/>
        {news.title}
      </div>
    </a>
  </>
  )
}

export default News