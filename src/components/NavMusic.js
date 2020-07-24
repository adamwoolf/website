import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/stylesheet.css'


const NavMusic = () => {
    const navStyle = {
        color: 'black',
        textDecoration: 'none',
        background: 'white'
    };

    return <nav className='music-nav'>
        <ul className="music-nav-links">
          
            <Link style={navStyle}  to='/store'>
            <li>Books & CDs - Buy Online</li>
            </Link>
            <Link style={navStyle}  to='/discography'>
            <li>Discography</li>
            </Link>
            <Link style={navStyle} to='/media'>
            <li>Listen</li>
            </Link>
           


        </ul>
    </nav>
}

export default NavMusic