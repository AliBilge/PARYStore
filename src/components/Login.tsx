import * as React from 'react';
import { Grid, Button,Form } from 'semantic-ui-react';
import { RootState } from '../store/index';
import { connect } from 'react-redux';
import {User} from '../store/session/types';
import { logInUser, logOutUser } from '../store/session/actions';




export interface ILoginProps {
  logInUser: typeof logInUser;
  logOutUser: typeof logOutUser;
  users:User[];
    
}




export class Login extends React.Component<ILoginProps> {


  submitForm = (event: any): void => {
    event.preventDefault();

    this.setState({
        passwordErr: false,
        usernameErr: false
    });
        
    const usernameInput: HTMLInputElement | null = document.querySelector("[name='username']");
    const passwordInput: HTMLInputElement | null = document.querySelector("[name='password']");

    if ((usernameInput !== null) && (passwordInput !== null)) {
        for (let user in users) {
            if (user.username === usernameInput.value) {
                if (user.password === passwordInput.value) {
                    this.setState({
                        username: user,
                        submitted: true,
                        passwordErr: false,
                        usernameErr: false
                    });
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
                    <Form.Input label="UserName"
                      placeholder="username"
                      name="username"
                      type="input"
                      error={this.state.usernameErr ? "User Name doesn't exist!" : null} 
                            
                    />
                  </div>
                  <div>
                  
                    <h3>Password: </h3>
                    <Form.Input label="Password"
                      placeholder="password"
                      name="password"
                      type="input"
                      error={this.state.passwordErr ? "Password incorrect" : null} 
                    />
              
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
  return {user:state.users.users}
}

export default connect(
  mapStateToProps,
  { logInUser,logOutUser }
)(Login);





 




                

   

 
  


      
                
                
              
               

