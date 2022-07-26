import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Header} from './components/Header'

function App() {
  const [name, setName] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [idade, setIdade] = useState('')


  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
    console.log(event.target.name);
    if(event.target.name == 'nome'){
      setName(event.target.value);
    }else if(event.target.name == 'sobrenome'){
      setSobrenome(event.target.value);
    }else{
      setIdade(event.target.value);
    }
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleInput} name='nome' placeholder='Nome'/>
      <input type="text" value={sobrenome} onChange={handleInput} name='sobrenome' placeholder='Sobrenome'/>
      <input type="text" value={idade} onChange={handleInput}  name='idade' placeholder='Idade'/>
      <hr />
      Olá  {name} {sobrenome}
      <hr />
      
      Sua Idade  {idade}
      <hr />
     

    </div>
    
  );
  
}

export default App
