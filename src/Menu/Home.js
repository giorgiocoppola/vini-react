import React from 'react'
import './Home.css'
import vini from '../minicomponents/vini'
import Header from '../components/Header'
import  Footer from'../components/Footer'
import Vini from '../components/Vini'

function Home() {
  return (
    <div className="App">
      
       <Header /> 
  
         <div className ="coll-vini">
         {
           vini.map((vino) =>{
           return <Vini key={vino.id} {...vino} />
          }) }
         </div>
        <Footer />

         </div>
             
    
  )
}

export default Home


