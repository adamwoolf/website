import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/stylesheet.css'


const Nav = () => {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return <nav className='main-nav'>
        <h3>Adam Woolf</h3>
        <ul className="nav-links">
            <Link style={navStyle} to='/'>
            <li>Home</li>
            </Link>
            <Link style={navStyle}  to='/webdev'>
            <li>Web Developer</li>
            </Link>
            <Link style={navStyle}  to='/musician'>
            <li>Musician</li>
            </Link>
            <Link style={navStyle} to='/photos'>
            <li>Photographs</li>
            </Link>
            <Link style={navStyle} to='/posts'>
            <li>Blog</li>
            </Link>
            <Link style={navStyle} to='/contact'>
            <li>Contact</li>
            </Link>


        </ul>
    </nav>
}

export default Nav