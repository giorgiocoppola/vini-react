
import './Accedi.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Accedi() {


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [mess,setMess] = useState("");
    const [mess2,setMess2] = useState("")
   
   

    const handleSubmit = (e) => {

      if(email === "" && password === "" ) {

          setMess("*Campo obbligatorio");
          setTimeout(function() { setMess("")},3000);
          setMess2("*Campo obbligatorio");
          setTimeout(function() { setMess2("")},3000);
          
      }  
     
      if(email === "" ) {

        
        setMess("*Campo obbligatorio");
        setTimeout(function() { setMess("")},3000);
          
      }

      if(password === "" ) {


        setMess2("*Campo obbligatorio");
        setTimeout(function() { setMess2("")},3000);
          
      }

     /* e.preventDefault();
      setEmail("");
      setPassword(""); */ 
     
      

 }

 

  return (
    <div className='accedi-pagina'>
  
       <header>

          <h1 className ="tit-pag">Cantina sociale Bordeaux</h1>

          <button className="accedi"><Link to="/">Home</Link></button>

          

       </header>

       <main className="accedi-main">

          <h1 className='titolo-accedi'>Accedi</h1>

           <form className="form-accedi">
  
               <label for="email" className="lab">Email</label>
               <input type="email" name="email" id="email" value={email} onChange = {(e)=>setEmail(e.target.value)  } /> 
               <p className="mess">{mess}</p>
   
               <label for="email" className="lab">Password</label>
               <input type="password" name="email" id="password" value={password} onChange = {(e)=>setPassword(e.target.value)}/> 
               <p className="mess">{mess2}</p>

               <p className="avvertenza">Se non sei registrato <Link to ="/registrazione" id="click">clicca qui</Link></p>

               <button className="bott-accedi" onClick={handleSubmit}>Accedi</button>
    
            </form>

        </main>
        

        <Footer/>
    </div>
  )
}

export default Accedi