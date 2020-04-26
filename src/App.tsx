import * as React from 'react';
import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignupPage } from '. /Signup /SignupPage';
import UserProfilePage from './UserProfile /UserProfilePage';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        Sign Up Page

        <Switch>
          <Route exact path = '/ Signup' component = { SignupPage } />
          <Route exact path = '/ UserProfile/:id' component = { UserProfilePage } />
        </Switch>
      </Fragment>
    );
  }
}

