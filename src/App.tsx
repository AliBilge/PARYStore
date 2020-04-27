import React from 'react';
import {Fragment } from 'react';
 import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import {Grid} from 'semantic-ui-react';

export interface IAppProps{

}
export default class App extends React.Component<IAppProps> {
 public render() {
  return (
      <Fragment>
         <Grid centered>
               <Grid.Row >   
                   Login Page
               </Grid.Row> 
            </Grid>
        <Switch>
         <Route exact path='/Login'   component={Login} />
        </Switch>
      </Fragment>
  );
  }      
}

