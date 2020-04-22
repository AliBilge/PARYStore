import React, { Component } from 'react';
import {Button,Header, Container, Input,Label} from 'semantic-ui-react';
 

interface IProps
{

}
interface IState{
    username:string,
    password:string,
    submitted:boolean
}

class Login extends Component<IProps,IState>
{
    constructor(props:string |boolean){
                             super( props );
                        
    
                             this.state = {
                                      username:'',
                                      password:'',
                                      submitted:false

                                         };
                            this.handleUsername=this.handleUsername.bind(this);
                            this.handlePassword=this.handlePassword.bind(this);             
                            this.handleSubmit=this.handleSubmit.bind(this);
                }


handleUsername =   ( e :any):void =>
    {
       this.setState({
           username:e.target.value
       });
        console.log(this.state);
    }
    handlePassword=   ( e :any):void =>
    {
       this.setState({
           password:e.target.value
       });
        console.log(this.state.username);
        console.log(this.state.password);


    }
    




    handleSubmit = ( e:any ):void =>
    {
        e.preventDefault();

        this.setState (
                         { submitted :true });
                      console.log(this.state.submitted);   
                        
  }



    render(){

            
            

        const { username,password,submitted} =this.state;
        return(
        <div className="col-md-6 col-md-offset-3">
            <Container fluid>
               <form name="form" onSubmit={this.handleSubmit} >
                <Header as='h1'>Login</Header>
                <div className="input-field">
                    <Label htmlFor="username" color='violet'>Username:</Label>
                    <Input type="text" name="username" onChange={this.handleUsername}  value={this.state.username}/>
                        {submitted && !username &&
                        <div className="help-block">Username is required
                        </div>
                        }
                </div><br/>
                <div className="input-field">
                    <Label htmlFor="password"  color='violet' >Password :</Label>
                    <Input type="password" name="password" onChange={this.handlePassword} value={this.state.password}/>
                    {submitted && !password &&
                     <div className="help-block">Password is required
                    </div>
                    }
                </div><br/>
                <div className="input-field">
                <Button basic color='violet' content='Login' />
               </div>
            </form>
            </Container>
        </div>
        )}
}


export default Login;