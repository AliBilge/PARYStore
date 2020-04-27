import * as React from 'react';
import { Fragment } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from '../../store/users';

export interface ISignupPageProps {
}

export  class SignupPage extends React.Component<ISignupPageProps> {
   public render() {
   
    return (
      <Fragment>
          
        <Form>
              
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

            <Button.Group>
                  <Button type='submit' color ='green'>Sign Up</Button>
                  <Button type='submit' color ='grey'>Reset</Button>
            </Button.Group>

        </Form>
                   
      </Fragment>

    );
  }
}
const mapStateToProps = (state: RootState) => {
      return {
        UserData: state.users.usersdata
      }
    }
    
    export default connect(mapStateToProps)(SignupPage);