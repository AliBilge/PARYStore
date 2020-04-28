import * as React from 'react';
import { Fragment } from 'react';
import { Form, Button, Grid } from 'semantic-ui-react';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { UserData } from '../../store/users/types';
import { AddUserToList } from '../../store/users/actions';
import { history } from '../../index';


export interface ISignupPageProps {
      AddUserToList: typeof AddUserToList,
      userdata: UserData[]
}

export class SignupPage extends React.Component<ISignupPageProps>
{

      generateID = (): number => {
            let newIdForUser = this.props.userdata.length + 1;
            return newIdForUser;
      }

      newUser = (event: any) => {
            event.preventDefault();

            // const formField: HTMLInputElement | null = document.querySelector('[name="userdata"]');
            // let formFieldValue: string | number = '';
            // if (formField != null) formFieldValue = formField.value;

            for (let i = 0; i < event.target.length; i++) {
                  // need to find a better way.
                  if (i !== 4 && i !== 5) {
                        if (event.target[i].value === '') {
                              alert("All fileds are required");
                              return;
                        }
                  }
                  if (i === 4) {
                        if (event.target[i].checked === false) {
                              alert("All fileds are required");
                              return;
                        }
                  }

            }

            // so ugly, need to find a better way.
            this.props.AddUserToList({
                  id: this.generateID(),
                  lastName: event.target[6].value,
                  firstName: event.target[0].value,
                  dateOfBirth: event.target[1].value,
                  gender: event.target[7].value,
                  email: event.target[8].value,
                  phone: event.target[9].value,
                  username: event.target[2].value,
                  password: event.target[3].value,
                  isLogin: false
            });

            history.push('/Login');
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

            return errors;
      };

      public render() {
            return (
                  <Fragment>
                        <Form onSubmit={this.newUser}>
                              <Grid container columns={2}>

                                    <Grid.Column>

                                          <Form.Input name="firstName" label='First name' placeholder='First name' />
                                          <Form.Input name="dateOfBirth" type="Date" label='Date of Birth' placeholder='Date of Birth' />
                                          <Form.Input name="username" label='Username' placeholder='Username' />
                                          <Form.Input name="password" type="password" label='Password' placeholder='Password' />
                                          <Form.Checkbox name="agreement" label='I agree to the Terms and Conditions' />
                                          <Button type='submit' class='float-left submit-button' color='green'> Sign Up </Button>
                                    </Grid.Column>

                                    <Grid.Column>

                                          <Form.Input name="lastName" label='Last name' placeholder='Last name' />
                                          <Form.Input name="gender" label='Gender' placeholder='Gender' />
                                          <Form.Input name="phone" label='Phone' placeholder='Phone' />
                                          <Form.Input name="email" type="email" label='Email' placeholder='Email' />

                                    </Grid.Column>


                              </Grid>

                        </Form>
                  </Fragment>
            );
      }
}

const mapStateToProps = (state: RootState) => {
      return {
            userdata: state.users.usersdata
      }
}

export default connect(
      mapStateToProps,
      { AddUserToList }
)(SignupPage);
