import React from 'react';
// import { Router, Switch } from 'react-router-dom'
import NavButtons from './components/Navigation'
import Product from './components/Product'
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <NavButtons />
      <h1>PARY Store</h1>
      <Product />
      <Login/>
      
    </div>
  );
}

export default App;
