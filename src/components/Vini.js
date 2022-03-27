import './Vini.css'
import React,{useState} from 'react'


const Vini = (props) => {

    const {nome,img,prezzo,max} = props;

    const [count,setCount] = useState(0);
    const [message,setMessage] = useState("");
    const min = 0;

    const incrementa = () => {

      if(count >= max) {

          setCount(max);
          setMessage("Hai raggiunto il massimo degli ordini disponibili");
          setTimeout(function() { setMessage("")},3000);
         

      } else {

          setCount(count + 1);
      }

    }

    const decrementa = () => {

      if(count <= min) {

          setCount(min);;

      } else {

          setCount(count - 1);
      }

    }

    const resetta = () => {

      setCount(0);
    }

    const acquista = () => {

       if(count === 0) {
           
        setMessage("*Inserimento numero dell' ordine obbligatorio");
        setTimeout(function() { setMessage("")},3000);

       } else {

        setMessage("Prodotto aggiunto");
        setTimeout(function() { setMessage("")},3000);
        setCount(0);
       

       }
    }

  return (
    <div className="vini">
         
         <img src={img} alt={nome} width="400px" /> 
         <h4>{nome}</h4>
         <p>{prezzo} €</p>
         <p>{count}</p>
         <div className="cont">
           <button id="inc" onClick={incrementa}>+</button>
           <button id="dec" onClick={decrementa}>-</button>
           <button id="reset" onClick={resetta}>Reset</button>
         </div>
         <button className="acquista" onClick={acquista}>Acquista</button> 
         <p id="mess2">{message}</p>     
    </div>
  )
}

export default Vini