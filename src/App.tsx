import * as React from 'react';
import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignupPage from './components/Signup/SignupPage';
import UserProfilePage from './components/UserProfile/UserProfilePage';
import Login from './components/Login';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>

        <Switch>
          <Route exact path = '/' component = { SignupPage } />
          <Route exact path = '/UserProfile/:id' component = { UserProfilePage } />
          <Route exact path='/Login'   component={Login} />
        </Switch>
      </Fragment>
    );
  }
}

