import * as React from 'react';
import { Grid, Button, Input } from 'semantic-ui-react';
import {  Form, Field } from 'formik';
import { RootState } from '../store/session/index';
import { connect } from 'react-redux';
import { logInUser } from '../store/session/actions';


const userPwd: {[index: string]: string} = {
  Rathi: "paryrathi",
  Ali:   "paryali",
  Poupak: "parypoupak",
  Vincent:"paryvincent"
}


export interface ILoginProps {
  logInUser: typeof logInUser;
    
}

export interface ILoginState {
    username:string,
    password:string,
    submitted:boolean,
    usernameErr:boolean,
    passwordErr:boolean
}




export class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    this.state = {
      username:'',
      password:'',
      submitted:false,
      usernameErr:false,
      passwordErr:false

    }
  }

 
  handleSubmit = ( e:any ):void =>
  {
      e.preventDefault();
           this.setState({
          passwordErr: false,
          usernameErr: false
                 });
             
               const usernameInput:HTMLInputElement |null =document.querySelector("[name='username']");
               const passwordInput:HTMLInputElement |null =document.querySelector("[name ='password']");
               if((usernameInput !=null)  && (passwordInput !=null))
              {
                                 
                        for (let user in userPwd)
                        {
                             if(user === usernameInput.value)
                            {
                                if(userPwd[user]===passwordInput.value)
                                {
                                    
                                     this.setState (
                                      { 
                              
                                          username:user,
                                          submitted :true,
                                          usernameErr:false,
                                          passwordErr:false });
                                      return ;       
                                 }
                              
                              else
                              {
                                     this.setState({
                                      passwordErr:true
                                      
                                  });
                                  
                             return;
                              } 
                              
                            }
                            this.setState({
                              usernameErr:true
                         
                       });
                      
                       }
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
               
                <Form>
                  <div>
                    <h3>Username: </h3>
                    <Field
                      placeholder="username"
                      name="username"
                      type="input"
                      content="usernameContent"
                      as={Input}
                    />
                  </div>
                  <div>
                    {this.state.usernameErr &&
                    <h3>Invalid!</h3>
                    }
                    <h3>Password: </h3>
                    <Field
                      placeholder="password"
                      name="password"
                      content="passwordCtrlVCodeContent"
                      type="input"
                      as={Input}
                    />
                     {this.state.passwordErr &&
                    <h3>Invalid!</h3>
                    }
                  </div>
                  <div>
                    <Button type="submit" color="violet" onClick={this.handleSubmit}>Login</Button>
                  </div>
                </Form>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }

}
const mapStateToProps = (state: RootState) => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  { logInUser }
)(Login);





 




                

   

 
  


      
                
                
              
               

