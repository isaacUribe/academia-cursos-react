import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/cursos'}>Cursos</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Menu