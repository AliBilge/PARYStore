import React from 'react';
// import { Router, Switch } from 'react-router-dom'
import NavButtons from './components/Navigation'
import './App.css';
import ListingProducts from './components/ListingProducts';

function App() {
  return (
    <div className="App" >
      <NavButtons />
      <h1>PARY Store</h1>
      <ListingProducts />
    </div>
  );
}

export default App;
