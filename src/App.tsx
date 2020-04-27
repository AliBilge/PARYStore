import * as React from 'react';
import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignupPage from './components/Signup/SignupPage';
import UserProfilePage from './components/UserProfile/UserProfilePage';
import { Grid } from 'semantic-ui-react';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
           <Grid>
               <Grid.Row verticalAlign='middle'>   
                  Welcome to the Sign Up Page
               </Grid.Row> 
            </Grid>
        <Switch>
          <Route exact path = '/Signup' component = { SignupPage } />
          <Route exact path = '/UserProfile/:id' component = { UserProfilePage } />
        </Switch>
      </Fragment>
    );
  }
}

