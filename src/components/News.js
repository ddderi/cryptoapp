import React from 'react'
import Moment from 'react-moment';
// import moment from 'moment';

// INSTALL MOMENT !!!!

function News({ news}) {

  // function myDate(d) { 
  //   let mydd = moment(d*1000).format("Do MMMM YYYY")
  //    return mydd
  //   } 



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