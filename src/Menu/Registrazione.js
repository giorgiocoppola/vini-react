import React from 'react'
import './Registrazione.css'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'



function Registrazione() {

    return (

     <div className="registrazione-pagina">

        <header>

         <h1 className ="tit-pag">Cantina sociale Bordeaux</h1>

         <button className="accedi"><Link to="/">Home</Link></button>



        </header>

        <main>

             <h1 className="titolo-registrazione">Registrazione</h1>

             <form className = "form-registrazione" >

                <div className="elenco-form">

                   <label for="name" className="lab">Nome:</label>
                   <input type="text" name="name" className="input-form" placeholder="Inserisci il nome" required />

                   <label for="surname" className="lab">Cognome:</label>
                   <input type="text" name="surname" id="cognome" className="input-form"  placeholder="Inserisci il cognome" required />

                </div>

                <div className="elenco-form">

                  <label for="date" className="lab">Data di nascita:</label>
                  <input type="date" name="date" className="input-form" id="datadinascita" />

                  <label for="luogo" className="lab" >Luogo di nascita:</label>
                  <input type="text" name="luogo"  className="input-form" id="luogodinascita" required />

                </div>

                <div className="elenco-form">
               
                  <label for="address" className="lab" >Indirizzo:</label>
                  <input type="text" name="address" className="input-form" required />

                  <label for="residenza" className="lab">Residenza:</label>
                  <input type="text" name="residenza" className="input-form" id="residenza" required />

              </div>

           

               <div className="elenco-form" id="sesso">

                  <label for="sesso" className="lab" id="sesso">Sesso:</label>
                  <input type="radio" name="sesso" className="input-form" id="maschio" required />
                  <label for="sesso" className="lab">Maschio</label>
                  <input type="radio" name="sesso" className="input-form" id="femmina" required />
                  <label for="sesso" className="lab">Femmina</label>
              
                </div>
             
                <div className="elenco-form">

                   <label for="tel" className="lab" id="telefono">Telefono:</label>
                   <input type="tel" name="tel" className="input-form" required />

                   <label for="tel" className="lab" id="cellulare">Cellulare:</label>
                   <input type="tel" name="tel" className="input-form" id="input-cell" required />

                </div>

                <div className="elenco-form">
                
                   <label for="email" className="lab" id="email">E-mail:</label>
                   <input type="email" name="email"  className="input-form" required />

                </div>
          
                <div className="elenco-form">

                   <label for="password" className="lab" id="password">Password:</label>
                   <input type="password" name="password" className="input-form" required />

                </div>


                <div className="elenco-form">
         
                   <label for="messaggio" className="lab" id="label-mess">Messaggio:</label> 

                </div>

                 <div className="elenco-form">

                   <textarea name="messaggio" id="messaggio" cols="80" rows="20"></textarea>

                </div>
           
                <div className="elenco-form" id="dati-personali">

                   <input type="checkbox" className="checklist" id="check" required />
                   <label for="autorizzazione" className="checklist"  id="aut">Autorizzo il trattamento dei <span>dati personali</span></label>

                </div>

                 <div className="elenco-form">

              
                    <button className="registrazione">Invia</button>

                 </div>

            

        </form>

      </main>
  
         <Footer />

     </div>
   

    
  )

}

export default Registrazione