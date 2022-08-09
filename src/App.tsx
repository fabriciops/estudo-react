import React, { useState } from 'react'
import styles from './App.module.css'
import powerImge from './assets/logo.png'

const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setweightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      
    }else{
      alert("digite todos os campos.")
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}></div>
        <img src={powerImge} alt="" width={150} height={150} />
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea.</p>
            <input 
              type="number"
              placeholder='Digite a sua altura. EX: 1.5 (em métros)' 
              onChange={e => setHeightField(parseFloat(e.target.value))}
              value={heightField > 0 ? heightField : ''}/>
            <input 
              type="number"
              placeholder='Digite o seu peso EX: 65.5 (em Kg)' 
              onChange={e => setweightField(parseFloat(e.target.value))}
              value={heightField > 0 ? heightField : ''}
            />

            <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          rightSide
        </div>
      </div>
    </div>
  );
}

export default App;