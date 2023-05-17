import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <header>
        <nav className='shadow'>
            <ul>
                <li><Link className='link' to={'/'}>Home</Link></li>
                <li><Link className='link' to={'/cursos'}>Cursos</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Menu