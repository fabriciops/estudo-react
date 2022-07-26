import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Botao} from './components/Botao'
import {Pessoa} from './components/Pessoa'


function App() {
 
  let list = [
    {name: 'a', age:10},
    {name: 'b', age:10},
    {name: 'c', age:10},
    {name: 'd', age:10},
    
  ];

  return (
    <div>
      <h2>Lista</h2>
      <ul>
        {
          list.map((item, index)=>(
            <Pessoa key={index} data={item}/>
          ))
        }
      </ul>
      
    </div>
    
  );
  
}

export default App
