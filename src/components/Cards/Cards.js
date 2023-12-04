import React, { useState } from 'react'
import './Cards.css';
function Cards(param) {
  let url = `https://vidsrc.xyz/embed/${param.param.media_type}?tmdb=${param.param.id}`
    let title = param.param.title;
    let rs = param.param.release_date;
    if(title === undefined){
      title = param.param.name;
    }
    if(rs === undefined){
      rs = param.param.first_air_date;
    }
    if(param.param.media_type === undefined){
      url = `https://vidsrc.xyz/embed/movie?tmdb=${param.param.id}`
    }
  return (
    <div className='card'>
      <div className='img'>
        <img src={`https://image.tmdb.org/t/p/original/${param.param.backdrop_path}`} alt={param.title}></img>
      </div>
      <p className='title'>{title}</p>
      <p className='date'>{rs}</p>
      <a href={url}> <button>WATCH</button> </a>
    </div>
  )
}

export default Cards