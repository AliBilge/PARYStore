import * as React from 'react';
import { Grid, Button, Form } from 'semantic-ui-react';
import { RootState } from '../store/index';
import { connect } from 'react-redux';
import { UserData } from '../store/users/types';
import { logInUser, logOutUser } from '../store/users/actions';
import { history } from '../index';

export interface ILoginProps {
  logInUser: typeof logInUser;
  logOutUser: typeof logOutUser;
  users: UserData[];
}

export interface ILoginState {
  passwordErr: boolean;
  usernameErr: boolean;
}

export class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: any) {
    super(props)
    this.state = {
      passwordErr: false,
      usernameErr: false
    }
  }

  submitForm = (event: any): void => {
    event.preventDefault();

    this.setState({
      passwordErr: false,
      usernameErr: false
    });

    const usernameInput: HTMLInputElement | null = document.querySelector("[name='username']");
    const passwordInput: HTMLInputElement | null = document.querySelector("[name='password']");

    if ((usernameInput !== null) && (passwordInput !== null)) {
      for (let user of this.props.users) {
        if (user.username === usernameInput.value) {
          if (user.password === passwordInput.value) {
            this.setState({
              passwordErr: false,
              usernameErr: false
            });
            this.props.logInUser({ ...user, isLogin: true });
            history.push('/ListingProducts');
            return;
          } else {
            this.setState({
              passwordErr: true
            });
            return;
          }
        }
      }
      this.setState({
        usernameErr: true
      })
    }
  }

  public render() {
    return (
      <React.Fragment>
        <Grid centered>
          <Grid.Row>
            <h1>Login</h1>
          </Grid.Row>
          <Grid.Row >

            <Form onSubmit={this.submitForm}>
              <div>
                <h3>Username: </h3>
                <Form.Input
                  placeholder="username"
                  name="username"
                  type="input"
                  error={this.state.usernameErr ? "User Name doesn't exist!" : null}
                  autoComplete="true"
                /><br />
              </div>
              <div>

                <h3>Password: </h3>
                <Form.Input
                  placeholder="password"
                  name="password"
                  type="password"
                  error={this.state.passwordErr ? "Password incorrect" : null}
                  autoComplete="true"
                /><br />

              </div>
              <div>
                <Button type="submit" color="violet" >Login</Button>
              </div>
            </Form>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return { users: state.users.usersdata }
}

export default connect(
  mapStateToProps,
  { logInUser, logOutUser }
)(Login);
























