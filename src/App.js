import React, { useEffect } from 'react'
import './App.css';
import CurrencyRow from './CurrencyRow';
import axios from 'axios'


const BASE_URL = 'https://api.exchangeratesapi.io/v1/'
const API_KEY = 'f03e227fa292c1250fd75c3cedf6c0d0'


function App() {

  useEffect(() => {
     axios.get(BASE_URL, {}, {
      auth: {
        access_key: API_KEY
      }
     }).then(res => res.json()).then(data => console.log(data))  
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
