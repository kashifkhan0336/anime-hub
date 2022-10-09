import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar container'>
        <div className="navbar__logo">
            <Link to="/">AnimeHub</Link>
        </div>
        <ul className="navbar__links">
            <li className="navbar__link--active">
                <Link to="/">Home</Link>
            </li>
            <li className="navbar__link">
                <Link to="#animes">Animes</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar