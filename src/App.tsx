import React from 'react';
import NavButtons from './components/Navigation'
import Product from './components/Product'
//import { Switch, Route } from 'react-router-dom';
//import { Grid } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavButtons />
      <h1>PARY Store</h1>
      <Product />
    </div>
  );
}

export default App;
