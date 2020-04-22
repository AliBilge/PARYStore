import React from 'react';
// import { Router, Switch } from 'react-router-dom'
import NavButtons from './components/Navigation'
import './App.css';
import ListingProducts from './components/ListingProducts';

function App() {
  return (
    <div className="App">
      <NavButtons />
      <h1>PARY Store</h1>
      <ListingProducts featuredProducts={[{id: '1', header: "", image: "", description: ""}, {id: '1', header: "", image: "", description: ""},{id: '1', header: "", image: "", description: ""}]} products={[]} />
    </div>
  );
}

export default App;
