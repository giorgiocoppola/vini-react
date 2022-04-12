import React, { useState } from 'react'
import './Acquisti.css'
import vini from '../minicomponents/vini'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'



function Acquisti() {

    const [insvino,setInsvino] = useState(vini);
    

    
    
  return (

    <>

        <header>

            <h1 className ="tit-pag">Cantina sociale Bordeaux</h1>

            <button className="accedi"><Link to="/accedi">Accedi</Link></button>

        </header>

        <main className="main-acquisti">
        
        <h1 className="tit-acquisti">Acquisti</h1>

       

        <form className="form-acquisti">


         

          <button className="button-acquista">Acquista</button>

        </form>
        <div className="coll-vini">

   

        </div>

        </main>

        

        <Footer />

    </>

  )

}

export default Acquisti