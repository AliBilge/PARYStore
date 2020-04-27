import React from 'react';
import {Fragment } from 'react';
 import { Route, Switch } from 'react-router-dom';
import NavBar from './components/Navigation';
import Product from './components/Product';
import Login from './components/Login';

export interface IAppProps{

}
export default class App extends React.Component<IAppProps> {
 public render() {
  return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/Login'   component={Login}/>
          <Route exact path='/Product' component={Product}/>
        </Switch>
      </Fragment>
  );
  }      
}

