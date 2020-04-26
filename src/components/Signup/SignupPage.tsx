import * as React from 'react';
import { Fragment } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { UserData } from '../../store/users/types';
import { ADD_USER_TO_LIST, REMOVE_USER_FROM_LIST  } from '../../store/users/actions';


export interface ISignupPageProps {
      ADD_USER_TO_LIST: typeof  ADD_USER_TO_LIST,
      userdata: UserData [],
      id: number []
}

export class SignupPage extends React.Component<ISignupPageProps>
{
      generateID = (): number => {
            let newIdForUser = this.props.id.length +1;
            return newIdForUser;
      }

      newUser = ( event: any ) => {
            event.preventDefault ();
            const formField: HTMLInputElement | null = document.querySelector ('[name="username"]');
            let formFieldValue: string | number;
            if (formField !=null ) formFieldValue = formField.value;
            
            this.props.ADD_USER_TO_LIST ({
                  name: formFieldValue,
                  id: this.generateID()
            });
      }

      public render() {

            return (
                  <Fragment>

                        <Form on submit = { this.newUser }>
                              <h1>Sign Up</h1>

                              <Form.Group unstackable widths={2}>
                                    <Form.Input label='First name' placeholder='First name' />
                                    <Form.Input label='Last name' placeholder='Last name' />
                              </Form.Group>

                              <Form.Group widths={2}>
                                    <Form.Input label='Date of Birth' placeholder='Date of Birth' />
                                    <Form.Input label='Gender' placeholder='Gender' />
                              </Form.Group>

                              <Form.Group widths={2}>
                                    <Form.Input label='Email' placeholder='Email' />
                                    <Form.Input label='Phone' placeholder='Phone' />
                              </Form.Group>

                              <Form.Group widths={2}>
                                    <Form.Input label='Username' placeholder='Username' />
                                    <Form.Input label='Password' placeholder='Password' />
                              </Form.Group>

                              <Form.Checkbox label='I agree to the Terms and Conditions' />
                              <Button id= 'myBtn' class='float-left submit-button' color='green'> Sign Up </Button>
                              document.getElementById ('myBtn').onclick = function () {
                                    location.href = "login";
                              }                                    
                              
                        </Form>

                  </Fragment>

            );
      }

}

const mapStateToProps = ( state: RootState ) => {
      return {
        items: state.SignupPage.items
      }
    }
    
      export default connect(
      mapStateToProps,
      { ADD_USER_TO_LIST, REMOVE_USER_FROM_LIST }
    )( SignupPage );











