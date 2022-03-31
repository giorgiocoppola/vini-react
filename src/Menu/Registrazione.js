import React, {useState} from 'react'
import './Registrazione.css'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'



function Registrazione() {

   const [nome,setNome] = useState("");
   const [cognome,setCognome] = useState("");
   const [datadinascita,setDatadinascita] = useState("");
   const [luogodinascita,setLuogodinascita] = useState("");
   const [indirizzo,setIndirizzo] = useState("");
   const [residenza,setResidenza] = useState("");
   const [telefono,setTelefono] = useState("");
   const [cellulare,setCellulare] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [messaggio,setMessaggio] = useState("");

   const handleSubmit = (e) => {

      
      e.preventDefault();
      setNome("");
      setCognome("");
      setDatadinascita("");
      setLuogodinascita("");
      setIndirizzo("");
      setResidenza("");
      setTelefono("");
      setCellulare("");
      setEmail("");
      setPassword("");
      setMessaggio("");
      alert("Accesso avvenuto con successo");
  }




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
                   <input type="text" name="name" className="input-form" value={nome} onChange = { (e) => setNome(e.target.value)} placeholder="Inserisci il nome" required />

                   <label for="surname" className="lab">Cognome:</label>
                   <input type="text" name="surname" id="cognome" className="input-form" value={cognome} onChange = { (e) => setCognome(e.target.value)} placeholder="Inserisci il cognome" required />

                </div>

                <div className="elenco-form">

                  <label for="date" className="lab">Data di nascita:</label>
                  <input type="date" name="date" className="input-form" id="datadinascita" value={datadinascita} onChange={ (e) => setDatadinascita(e.target.value) } />

                  <label for="luogo" className="lab" >Luogo di nascita:</label>
                  <input type="text" name="luogo"  className="input-form" id="luogodinascita" value={luogodinascita} onChange= { (e) => setLuogodinascita(e.target.value)}  required />

                </div>

                <div className="elenco-form">
               
                  <label for="address" className="lab" >Indirizzo:</label>
                  <input type="text" name="address" className="input-form" value={indirizzo} onChange={ (e) => setIndirizzo(e.target.value) } required />

                  <label for="residenza" className="lab">Residenza:</label>
                  <input type="text" name="residenza" className="input-form" id="residenza" value={residenza} onChange={ (e) => setResidenza(e.target.value) }required />

              </div>

           

               <div className="elenco-form" id="sesso">

                  <label for="sesso" className="lab" id="sesso">Sesso:</label>
                  <input type="radio" name="sesso" className="input-form" id="maschio"  required />
                  <label for="sesso" className="lab">Maschio</label>
                  <input type="radio" name="sesso" className="input-form" id="femmina"  required />
                  <label for="sesso" className="lab">Femmina</label>
              
                </div>
             
                <div className="elenco-form">

                   <label for="tel" className="lab" id="telefono">Telefono:</label>
                   <input type="tel" name="tel" className="input-form" value={telefono} onChange={ (e)=> setTelefono(e.target.value)} required />

                   <label for="tel" className="lab" id="cellulare">Cellulare:</label>
                   <input type="tel" name="tel" className="input-form" id="input-cell" value={cellulare} onChange={ (e)=> setCellulare(e.target.value)} required />

                </div>

                <div className="elenco-form">
                
                   <label for="email" className="lab" id="email">E-mail:</label>
                   <input type="email" name="email"  className="input-form" id="inp-email" value={email} onChange={ (e) => setEmail(e.target.value)} required />

                </div>
          
                <div className="elenco-form">

                   <label for="password" className="lab" id="password">Password:</label>
                   <input type="password" name="password" className="input-form" id="inp-pass" value={password} onChange={ (e) => setPassword(e.target.value)} required />

                </div>


                <div className="elenco-form">
         
                   <label for="messaggio" className="lab" id="label-mess">Messaggio:</label> 

                </div>

                 <div className="elenco-form">

                   <textarea name="messaggio" id="messaggio" cols="80" rows="20" value={messaggio} onChange= { (e) => setMessaggio(e.target.value) }></textarea>

                </div>
           
                <div className="elenco-form" id="dati-personali">

                   <input type="checkbox" className="checklist" id="check" required />
                   <label for="autorizzazione" className="checklist"  id="aut">Autorizzo il trattamento dei <span>dati personali</span></label>

                </div>

                 <div className="elenco-form">

              
                    <button className="registrazione" onClick={handleSubmit}>Invia</button>

                 </div>

            

        </form>

      </main>
  
         <Footer />

     </div>
   

    
  )

}

export default Registrazione