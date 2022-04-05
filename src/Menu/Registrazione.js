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
   const [sesso,setSesso] = useState("");
   const [telefono,setTelefono] = useState("");
   const [cellulare,setCellulare] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [messaggio,setMessaggio] = useState("");
   const [checkbox,setCheckbox] = useState("");
   const [avviso1,setAvviso1] = useState("");
   const [avviso2,setAvviso2] = useState("");
   const [avviso3,setAvviso3] = useState("");
   const [avviso4,setAvviso4] = useState("");
   const [avviso5,setAvviso5] = useState("");
   const [avviso6,setAvviso6] = useState("");
   const [avviso7,setAvviso7] = useState("");
   const [avviso8,setAvviso8] = useState("");
   const [avviso9,setAvviso9] = useState("");
   const [avviso10,setAvviso10] = useState("");
   const [avviso11,setAvviso11] = useState("");
   const [avviso12,setAvviso12] = useState("");


   const handleSubmit = (e) => {

      if(nome === "" && cognome === "" && datadinascita === "" && luogodinascita === "" && indirizzo === "" && residenza === "" && sesso === "" && email === "" && password === "" && checkbox == "") {

         setAvviso1("*Campo obbligatorio");
         setTimeout(function() { setAvviso1("")},3000);
         setAvviso2("*Campo obbligatorio");
         setTimeout(function() { setAvviso2("")},3000);
         setAvviso3("*Campo obbligatorio");
         setTimeout(function() { setAvviso3("")},3000);
         setAvviso4("*Campo obbligatorio");
         setTimeout(function() { setAvviso4("")},3000);
         setAvviso5("*Campo obbligatorio");
         setTimeout(function() { setAvviso5("")},3000);
         setAvviso6("*Campo obbligatorio");
         setTimeout(function() { setAvviso6("")},3000);
         setAvviso7("*Campo obbligatorio");
         setTimeout(function() { setAvviso7("")},3000);
         setAvviso8("*Campo obbligatorio");
         setTimeout(function() { setAvviso8("")},3000);
         setAvviso9("*Campo obbligatorio");
         setTimeout(function() { setAvviso9("")},3000);
         setAvviso10("*Campo obbligatorio");
         setTimeout(function() { setAvviso10("")},3000);
         setAvviso11("*Campo obbligatorio");
         setTimeout(function() { setAvviso11("")},3000);
         setAvviso12("*Campo obbligatorio");
         setTimeout(function() { setAvviso12("")},3000);
         
     } 

     if(nome === "" ) {

        
      setAvviso1("*Campo obbligatorio");
      setTimeout(function() { setAvviso1("")},3000);
        
    }

    if(cognome === "" ) {

        
      setAvviso2("*Campo obbligatorio");
      setTimeout(function() { setAvviso2("")},3000);
        
    }

    if(datadinascita === "" ) {

        
      setAvviso3("*Campo obbligatorio");
      setTimeout(function() { setAvviso3("")},3000);
        
    }

    if(luogodinascita === "" ) {

        
      setAvviso4("*Campo obbligatorio");
      setTimeout(function() { setAvviso4("")},3000);
        
    }

    if(indirizzo === "" ) {

        
      setAvviso5("*Campo obbligatorio");
      setTimeout(function() { setAvviso5("")},3000);
        
    }

    if(residenza === "" ) {

        
      setAvviso6("*Campo obbligatorio");
      setTimeout(function() { setAvviso6("")},3000);
        
    }

    if(sesso === "" ) {

        
      setAvviso7("*Campo obbligatorio");
      setTimeout(function() { setAvviso7("")},3000);
        
    }

    if(telefono === "" ) {

        
      setAvviso8("*Campo obbligatorio");
      setTimeout(function() { setAvviso8("")},3000);
        
    }

    if(cellulare === "" ) {

        
      setAvviso9("*Campo obbligatorio");
      setTimeout(function() { setAvviso9("")},3000);
        
    }

    if(email === "" ) {

        
      setAvviso10("*Campo obbligatorio");
      setTimeout(function() { setAvviso10("")},3000);
        
    }

    if(password === "" ) {

        
      setAvviso11("*Campo obbligatorio");
      setTimeout(function() { setAvviso11("")},3000);
        
    }

    if(checkbox === "" ) {

        
      setAvviso12("*Campo obbligatorio");
      setTimeout(function() { setAvviso12("")},3000);
        
    }
   

      e.preventDefault();
      setNome("");
      setCognome("");
      setDatadinascita("");
      setLuogodinascita("");
      setIndirizzo("");
      setResidenza("");
      setSesso("");
      setTelefono("");
      setCellulare("");
      setEmail("");
      setPassword("");
      setMessaggio("");
      setCheckbox(""); 
     // alert("Accesso avvenuto con successo");
  }




    return (

     <div className="registrazione-pagina">

        <header>

         <h1 className ="tit-pag">Cantina sociale Bordeaux</h1>

         <button className="accedi"><Link to="/">Home</Link></button>



        </header>

        <main className="registrazione-main">

             <h1 className="titolo-registrazione">Registrazione</h1>

             <form className = "form-registrazione" >

                <div className="elenco-form">

                   <label for="name" className="lab">Nome:</label>
                   <input type="text" name="name" className="input-form" value={nome} onChange = { (e) => setNome(e.target.value)} placeholder="Inserisci il nome" /> 
                  

                   <label for="surname" className="lab">Cognome:</label>
                   <input type="text" name="surname" id="cognome" className="input-form" value={cognome} onChange = { (e) => setCognome(e.target.value)} placeholder="Inserisci il cognome" />
                   
                   

                </div>
               
                <div className="avvisi">

                   <p className="avviso" id="avv1">{avviso1}</p>
                   <p className="avviso" id="avv2">{avviso2}</p>

                </div>
               

                <div className="elenco-form">

                  <label for="date" className="lab">Data di nascita:</label>
                  <input type="date" name="date" className="input-form" id="datadinascita" value={datadinascita} onChange={ (e) => setDatadinascita(e.target.value) } />
                  

                  <label for="luogo" className="lab" >Luogo di nascita:</label>
                  <input type="text" name="luogo"  className="input-form" id="luogodinascita" value={luogodinascita} onChange= { (e) => setLuogodinascita(e.target.value)} />
              

                </div>

                <div className="avvisi">

                     <p className="avviso" id="avv3">{avviso3}</p>
                     <p className="avviso" id="avv4">{avviso4}</p>

                </div>

                <div className="elenco-form">
               
                  <label for="address" className="lab" >Indirizzo:</label>
                  <input type="text" name="address" className="input-form" value={indirizzo} onChange={ (e) => setIndirizzo(e.target.value) } />

                  <label for="residenza" className="lab">Residenza:</label>
                  <input type="text" name="residenza" className="input-form" id="residenza" value={residenza} onChange={ (e) => setResidenza(e.target.value) } />

              </div>
            
              <div className="avvisi">

                 <p className="avviso" id="avv5">{avviso5}</p>
                 <p className="avviso" id="avv6">{avviso6}</p>

              </div>
           

               <div className="elenco-form" id="sesso">

                  <label for="sesso" className="lab" id="sesso">Sesso:</label>
                  <input type="radio" name="sesso" className="input-form" id="maschio" checked={sesso} onChange={ (e) => setSesso(e.target.checked) } />
                  <label for="sesso" className="lab">Maschio</label>
                  <input type="radio" name="sesso" className="input-form" id="femmina" checked={sesso} onChange={ (e) => setSesso(e.target.checked) } />
                  <label for="sesso" className="lab">Femmina</label>
              
                </div>

                <div className="avvisi">

                   <p className="avviso" id="avv7">{avviso7}</p>
                  

                </div>
             
                <div className="elenco-form">

                   <label for="tel" className="lab" id="telefono">Telefono:</label>
                   <input type="tel" name="tel" className="input-form" value={telefono} onChange={ (e)=> setTelefono(e.target.value)} />

                   <label for="tel" className="lab" id="cellulare">Cellulare:</label>
                   <input type="tel" name="tel" className="input-form" id="input-cell" value={cellulare} onChange={ (e)=> setCellulare(e.target.value)} />

                </div>

                <div className="avvisi">

                   <p className="avviso" id="avv8">{avviso8}</p>
                   <p className="avviso" id="avv9">{avviso9}</p>

                </div>

                <div className="elenco-form">
                
                   <label for="email" className="lab" id="email">E-mail:</label>
                   <input type="email" name="email"  className="input-form" id="inp-email" value={email} onChange={ (e) => setEmail(e.target.value)} />

                </div>

                
                <div className="avvisi">

                   <p className="avviso" id="avv10">{avviso10}</p>

                </div>
          
                <div className="elenco-form">

                   <label for="password" className="lab" id="password">Password:</label>
                   <input type="password" name="password" className="input-form" id="inp-pass" value={password} onChange={ (e) => setPassword(e.target.value)} />

                </div>

                <div className="avvisi">

                   <p className="avviso" id="avv11">{avviso11}</p>

                </div>


                <div className="elenco-form">
         
                   <label for="messaggio" className="lab" id="label-mess">Messaggio:</label> 

                </div>

                 <div className="elenco-form">

                   <textarea name="messaggio" id="messaggio" cols="80" rows="20" value={messaggio} onChange= { (e) => setMessaggio(e.target.value) }></textarea>

                </div>
           
                <div className="elenco-form" id="dati-personali">

                   <input type="checkbox" className="checklist" id="check" checked={checkbox} onChange= { (e) => setCheckbox(e.target.checked) } />
                   <label for="autorizzazione" className="checklist"  id="aut">Autorizzo il trattamento dei <span>dati personali</span></label>

                </div>

                <div className="avvisi">

                   <p className="avviso" id="avv12">{avviso12}</p>

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