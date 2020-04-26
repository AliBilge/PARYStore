import * as React from 'react';
import { Fragment } from 'react'
import NavButtons from './components/Navigation'
import { Switch, Route } from 'react-router-dom';
import Home from './components/HomePage';
import './App.css';
import ListingProducts from './components/ListingProducts';
import Product from './components/Product';

function App() {
  return (
    <Fragment>
      <NavButtons />
      <h1>PARY Store</h1>
      <Switch>
        <Route exact path='/HomePage' component={Home} />
        <Route exact path='/ListingProducts' component={ListingProducts} />
        <Route exact path='/Product/:id' component={Product} />
      </Switch>
    </Fragment>
  );
}

export default App;
