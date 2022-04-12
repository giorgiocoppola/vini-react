
import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>

       <h1 className ="tit-pag">Cantina sociale Bordeaux</h1>
       
       <Link to="/acquisti" className="acquisti">Acquisti</Link>
    
       <button className="accedi"><Link to="/accedi">Accedi</Link></button>

    </header>
  )
}

export default Header