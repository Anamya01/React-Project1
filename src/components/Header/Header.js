import React from 'react'
import './Header.css';
function Header() {
  return (
    <div className='container'>
        <div className='details'>
            <p>BINGE WATCH THE LATEST MOVIES & SERIES</p>
        </div>
        <div className='header_img'>
            <img src={`https://image.tmdb.org/t/p/original/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg`} alt=''></img>
        </div>
    </div>
  )
}

export default Header