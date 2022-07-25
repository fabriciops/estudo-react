import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Header} from './components/Header'

function App() {
  const [n, setN] = useState('0')

  const handleMore = () => {
    setN( n + 1);
  };

  const handleMinus = () => {
    if (n == 0) {
      setN(0);

    }else{
      setN( n - 1);
    }
    
  };

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <div>{n}</div>
      <button onClick={handleMore}>+</button>
    </div>
    
  );
  
}

export default App
