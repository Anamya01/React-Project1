import React from 'react';
import './NavBar.css';
import Search from '../Search/Search';
import user from '/Users/anamyavats/Downloads/RecPo/vplay/client/src/images/images.jpeg';
function NavBar() {
  return (
    <div className='NavBar'>
        <div className='xplay'>
            <h1>Wac.</h1>
            <p>TOP STREAMING</p>
        </div>
        <div className='user'>
            <Search></Search>
            <div className='profile'>
                <p>Anamya</p>
                <img src={user} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default NavBar;