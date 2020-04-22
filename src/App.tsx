import React from 'react';
// import { Router, Switch } from 'react-router-dom'
import NavButtons from './components/Navigation'
import Product from './components/Product'
import ContainerExample from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavButtons />
      <h1>PARY Store</h1>
      <Product />
      <ContainerExample />
    </div>
  );
}

export default App;
