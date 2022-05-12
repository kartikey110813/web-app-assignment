import React, { useState } from 'react';
import axios from 'axios';
import Feature from './components/feature/Feature';
import './containers/WhatBlockchain/whatBlockchain.css';

const ExchangeCalc = () => {
  const [currency, setCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [ans, setAns] = useState('');
  const handleChange = (e) => {
    e.preventDefault();

    axios.get(`https://blockchain.info/tobtc?currency=${currency}&value=${amount}`)
      .then((data) => {
        console.log(data.data);
        setAns(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(currency);
  };
  return (
    <div className="gpt3__whatgpt3 section__margin" id="exchange">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="Currency Exchange Calculator"
          text="Choose your currency from below List and I will convert its price in Bitcoin"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <div className="gpt3__header-content__input">
          <select name="currency" id="currency" onChange={(e) => setCurrency(e.target.value)} value={currency}>
            <option value="">--select--</option>
            <option value="USD">USD</option>
            <option value="AUD">AUD</option>
            <option value="BRL">BRL</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CLP">CLP</option>
            <option value="CNY">CNY</option>
            <option value="DKK">DKK</option>
            <option value="EUR">EUR</option>
            <option value="BRL">BRL</option>
            <option value="GBP">GBP</option>
            <option value="HKD">HKD</option>
            <option value="INR">INR</option>
            <option value="ISK">ISK</option>
            <option value="JPY">JPY</option>
          </select>
          <input type="text" placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)} value={amount} />
          <button type="button" onClick={handleChange}>
            Convert
          </button>
        </div>
      </div>
      {ans && (
      <div style={{ fontFamily: 'sans-serif', background: 'skyblue', width: '50%', padding: '2%', borderRadius: '25px' }}>
        <h1>The required Conversion in BTC is : </h1>
        <span>{ans}</span> Bitcoins
      </div>
      )}
    </div>
  );
};

export default ExchangeCalc;
