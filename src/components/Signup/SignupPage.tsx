import * as React from 'react';
import { Fragment } from 'react';
import { Form, Button} from 'semantic-ui-react';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { UserData } from '../../store/users/types';
import { AddUserToList } from '../../store/users/actions';


export interface ISignupPageProps {
      AddUserToList: typeof  AddUserToList,
      userdata: UserData [],
      id: number
}
export interface ISignupPageState {
      errors : string
}
export class SignupPage extends React.Component< ISignupPageProps, ISignupPageState >
{

      constructor (props: any) {
            super(props);
            this.state = { errors: ''};
       
      }

      generateID = (): number => {
            let newIdForUser = this.props.id +1;
            newIdForUser += this.props.id;
            return newIdForUser;
      }

      newUser = ( event: any ) => {
            event.preventDefault ();
            const formField: HTMLInputElement | null = document.querySelector ('[name="userdata"]');
            let formFieldValue: string| number = '';
            if (formField !=null ) formFieldValue = formField.value;
            
            this.props.AddUserToList ({
 
                  id: this.generateID(),
                  
                  lastName: 'formFieldValue',
                  firstName: 'formFieldValue',
                  dateOfBirth: 'formFieldValue',
                  gender: 'formFieldValue',
                  email: 'formFieldValue',
                  phone:Number(formFieldValue),
                  username: 'formFieldValue',
                  password: 'formFieldValue'
                          
              });
              
      }

            validate = (values: UserData) => {
            let errors: string = '';
        
            if (!values.firstName) {
              errors = 'firstname is required';
            }
        
            if (!values.lastName) {
                errors = 'lastname is required';
            }
        
            if (!values.dateOfBirth) {
              errors = 'Date of Birth is required';
            }
        
            if (!values.gender) {
              errors = 'Gender is required';
            }
        
            if (!values.email) {
              errors = 'Email is required'
            }
        
            if (!values.phone) {
              errors = 'Phone Number is required';
            }
        
            if (!values.username) {
              errors = 'Username is required';
            }
        
            if (!values.password) {
              errors = 'Password is required';
            }
        
              this.setState({errors});
        };
        

      public render() {

            return (
                  <Fragment>

                        <Form onSubmit = { this.newUser }>
                             
                              <Form.Group unstackable widths={2}>
                                    <Form.Input label='First name' placeholder='First name' />
                                    <Form.Input label='Last name' placeholder='Last name' />
                                   
                              </Form.Group>

                              <Form.Group widths={2}>
                                    <Form.Input label='Date of Birth' placeholder='Date of Birth' />
                                    <Form.Input label='Gender' placeholder='Gender' /> */}
                              </Form.Group>

                              <Form.Group widths={2}>
                                    <Form.Input label='Email' placeholder='Email' error= {this.state.errors}/>
                                    <Form.Input label='Phone' placeholder='Phone' />
                              </Form.Group>

                              <Form.Group widths={2}>
                                    <Form.Input label='Username' placeholder='Username' />
                                    <Form.Input label='Password' placeholder='Password' />
                              </Form.Group>

                              <Form.Checkbox label='I agree to the Terms and Conditions' />
                              <Button type='submit' class='float-left submit-button' color='green'> Sign Up </Button>
                                
                                                                
                        </Form>

                  </Fragment>

            );
      }

}

const mapStateToProps = ( state: RootState ) => {
      return {
        userdata: state.users.usersdata
      }
    }
    
      export default connect(
      mapStateToProps,
      { AddUserToList }
    )( SignupPage );
