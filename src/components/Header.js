
import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>

    <h1>Cantina sociale Bordeaux</h1>

    <button className="accedi"><Link to="/accedi">Accedi</Link></button>

    </header>
  )
}

export default Header