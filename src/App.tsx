import * as React from 'react';
import { Fragment } from 'react'
import NavButtons from './components/Navigation'
import { Switch, Route } from 'react-router-dom';
import Home from './components/HomePage';
import './App.css';
import ListingProducts from './components/ListingProducts';
import Product from './components/Product';
import Footer from './components/footer'

function App() {
  return (
    <Fragment>
      <h1 className="App-header">Welcome to PARY Store</h1>

      <NavButtons />

      <h2 className="App-space"> </h2>
     
      <Switch>
        <Route exact path='/HomePage' component={Home} />
        <Route exact path='/ListingProducts' component={ListingProducts} />
        <Route exact path='/Product/:id' component={Product} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
