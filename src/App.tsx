import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import './App.css';

const FormExampleUnstackableGroup = () => ( 
  
   
  <Form>
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
      <Form.Input label='Address' placeholder='Address' />
      <Form.Input label='Username' placeholder='Username' />
    </Form.Group>

    <Form.Checkbox label='I agree to the Terms and Conditions' />
    <Button type='submit' color ='green'>Sign Up</Button>
  </Form>
   
    
 );

export default FormExampleUnstackableGroup;
