import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Botao} from './components/Botao'
import {Pessoa} from './components/Pessoa'


function App() {
 
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    
    // if(show){
    //   setShow(true);

    // }else{
    //   setShow(false);
    // }
  }

  return(
    <div className='bg-black'>...</div>
  );
  
}

export default App
