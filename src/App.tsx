import * as React from 'react';
import { Fragment } from 'react'
import NavButtons from './components/Navigation'
import { Switch, Route } from 'react-router-dom';
import Product from './components/Product'
import Home from './components/HomePage';
import './App.css';

function App() {
  return (
    <Fragment>
      <NavButtons />
      <h1>PARY Store</h1>
      <Switch>
        <Route exact path='/HomePage' component={Home} />
        <Route exact path='/Product' component={Product} />
      </Switch>
     
      </Fragment>
  );
}

export default App;
