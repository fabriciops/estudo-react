import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Botao} from './components/Botao'

function App() {
  const [name, setName] = useState('')
  let textButton = 'Clicar no Botão';

  const botaoEventAction = (txt: string) => {
    alert("frase do app");
  }

  return (
    <div>
      <Botao text={textButton} clickFn={botaoEventAction} />
    </div>
    
  );
  
}

export default App
