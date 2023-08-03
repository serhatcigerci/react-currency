import React, { useEffect } from 'react'
import './App.css';
import CurrencyRow from './CurrencyRow';



const BASE_URL = 'https://api.exchangerate.host/latest'


function App() {

  useEffect(() => {
     fetch(BASE_URL).then(res => res.json()).then(data => console.log(data))  
  }, [])
  
  return (
    <>
      <h1>convert</h1>
      <CurrencyRow />
      <div className='equals'>=</div>
      <CurrencyRow />
    </>
  );
}

export default App;
