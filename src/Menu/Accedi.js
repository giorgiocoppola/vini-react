
import './Accedi.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Accedi() {
  return (
    <div className='accedi-pagina'>
  
       <header>

          <h1 className ="tit-pag">Cantina sociale Bordeaux</h1>

          <button className="accedi"><Link to="/">Home</Link></button>

          

       </header>

       <main>

          <h1 className='titolo-accedi'>Accedi</h1>

           <form className="form-accedi">
  
               <label for="email" className="lab">Email</label>
               <input type="email" name="email" id="email" required/> 
   
   
               <label for="email" className="lab">Password</label>
               <input type="password" name="email" id="password" required /> 

               <p className="avvertenza">Se non sei registrato <Link to ="/#" id="click">clicca qui</Link></p>

               <button className="bott-accedi">Accedi</button>
    
            </form>

        </main>
        

        <Footer/>
    </div>
  )
}

export default Accedi