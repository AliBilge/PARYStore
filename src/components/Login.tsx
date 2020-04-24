import React, { Component } from 'react';
import {Button,Label,Form,Header} from 'semantic-ui-react';
 
const userPwd: {[index: string]: string} = {
    Rathi: "paryrathi",
    Ali:   "paryali",
    Poupak: "parypoupak",
    Vincent:"paryvincent"
}

interface IProps
{

}
interface IState{
    username:string,
    password:string,
    submitted:boolean,
    usernameErr:boolean,
    passwordErr:boolean
}

class Login extends Component<IProps,IState>
{
    constructor(props:string |boolean){
                             super( props );
                        
    
                             this.state = {
                                      username:'',
                                      password:'',
                                      submitted:false,
                                      usernameErr:false,
                                      passwordErr:false

                                         };
                                         
           
                        
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


  clearInput = () => this.setState({ username: '', password: '' }) 
    render(){

//const { username,password,submitted} =this.state;
       return(

              
               <div  className="col-md-6 col-md-offset-3">
                
                <Form size="large" onSubmit={this.clearInput}>
                <Header as ="h1">Login Page</Header>
                <Form.Group  >
                <Label htmlFor="username" color='violet' size="large" >Username:</Label>
                <Form.Input   type="text" name="username" placeholder="username"  error={this.state.usernameErr ? "User Name doesn't exist!" : null} width={10} />
                </Form.Group>
                <Form.Group >
                 <Label htmlFor="password"  color='violet' size="large" >Password :</Label>
                 <Form.Input   type="password" name="password" placeholder="password"  error={this.state.passwordErr ? " Password incorrect" : null} width={10} />
            
                 </Form.Group>
              <Button basic color='violet' content='Login' onClick={this.handleSubmit} />
              
              </Form>
        
        </div>
        )}
}


export default Login;