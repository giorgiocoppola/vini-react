
import './Accedi.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Accedi() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = (e) => {


        e.preventDefault();
        setEmail("");
        setPassword("")
        alert("Accesso avvenuto con successo");
    }

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
               <input type="email" name="email" id="email" value={email} onChange = {(e)=>setEmail(e.target.value) } /> 
   
   
               <label for="email" className="lab">Password</label>
               <input type="password" name="email" id="password" value={password} onChange = {(e)=>setPassword(e.target.value)}/> 

               <p className="avvertenza">Se non sei registrato <Link to ="/#" id="click">clicca qui</Link></p>

               <button className="bott-accedi" onClick={handleSubmit}>Accedi</button>
    
            </form>

        </main>
        

        <Footer/>
    </div>
  )
}

export default Accedi