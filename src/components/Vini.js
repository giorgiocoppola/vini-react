import './Vini.css'
import React from 'react'


const Vini = (props) => {

    const {nome,img,prezzo} = props;

  return (
    <div className="vini">
         
         <img src={img} alt={nome} width="400px" /> 
         <h4>{nome}</h4>
         <p>{prezzo} €</p>
         <button className="acquista">Acquista</button>      
    </div>
  )
}

export default Vini