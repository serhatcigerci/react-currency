import React, { useEffect, useState } from 'react'
import './App.css';
import CurrencyRow from './CurrencyRow';


const BASE_URL = 'https://api.exchangerate.host/latest'


function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  const [exchangeRate, setExchangeRate] = useState()
  console.log(exchangeRate)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
     fetch(BASE_URL).then(res => res.json()).then(data => {
      const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
      })  
  }, [])
  
  return (
    <>
      <h1>convert</h1>
      <CurrencyRow 
      currencyOptions={currencyOptions}
      selectedCurrency={fromCurrency}
      onChangeCurrency={e => setFromCurrency(e.target.value)}
      amount={fromAmount}     
      />
      <div className='equals'>=</div>
      <CurrencyRow 
      currencyOptions={currencyOptions}
      selectedCurrency={toCurrency}
      onChangeCurrency={e => setToCurrency(e.target.value)}
      amount={toAmount}
      />
    </>
  );
}

export default App;
